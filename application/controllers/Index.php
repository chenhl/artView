<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends Base_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array('article', 'channel', 'member_model'));
    }

    /**
     * 列表初始化
     * 
     */
    public function index() {
//        print_r($this->artsmarty);
//        exit;
        //入参
        $get = $this->input->get();
        $segment_array = $this->uri->segment_array();
        //频道列表
        $param = array();
        if (empty($get['code']) && empty($segment_array[1])) {
            $param['code'] = 'all';
            $channel = '';
        } else {
            $param['code'] = $segment_array[1]; //当前频道
            $channel = $param['code'];
        }
        $channels = $this->channel->getList($param);
        $this->assign("channels", $channels);
        //置顶
        $this->assign("article_tops", array());
        //内容列表
        $condition = array();
        $condition['channel'] = $channel;
        $page = 1;
        $page_size = 10;
        $data = $this->article->getList($condition, $page, $page_size);
//        print_r($data);
        $this->assign("next_page", 2);
        $this->assign("page_size", $page_size);
        $this->assign("channel", $channel);

        $this->assign("article_list", $data['list']);
        $this->display('wap/index.html');
    }

    /**
     * ajax feed
     */
    public function feed() {
        $get = $this->input->get();
        $page = isset($get['page']) ? intval($get['page']) : 1;
        $pageSize = isset($get['pageSize']) ? intval($get['pageSize']) : 10;
        $next_page_num = $page + 1;
        $condition = array();
        $condition['channel'] = isset($get['channel']) ? $get['channel'] : '';
        $data = $this->article->getList($condition, $page, $pageSize);
        if (empty($data['list'])) {
            echo $this->returnJson(404, 'list is null', array('result_data' => array(), 'next_page_num' => ''));
        } else {
            if ($data['total'] <= $page * $pageSize) {
                $next_page_num = '';
            }
            echo $this->returnJson(200, 'success', array('result_data' => $data, 'next_page_num' => $next_page_num));
        }
    }

    /**
     * 详情
     */
    public function detail() {
        //入参
        $get = $this->input->get();
        $segment_array = $this->uri->segment_array();
        //频道列表
        $param = array();
        if (empty($get['code']) && empty($segment_array[1])) {
            $param['code'] = 'all';
        } else {
            $param['code'] = $segment_array[1]; //当前频道
        }
        $channel = $this->channel->getList($param);
        $this->assign("channels", $channel);
        //置顶
        $this->assign("article_tops", array());
        //内容
        $condition = array();
        $condition['aid'] = $segment_array[2];
        $data = $this->article->getDetail($condition);
//        print_r($data);
        $this->assign("article", $data);
        //ajax like
        $like = array();
        $like['aid'] = $data['aid'];
        $like['q'] = implode(' ', $data['tags']);
        $this->assign("like", $like);

        $this->display('wap/article.html');
    }

    /**
     * ajax 热门推荐
     * channel 相关手动广告
     * @param type $param
     */
    public function recommend() {
        
    }

    /**
     * ajax 猜你喜欢
     * 相关keywords,tags 
     * @param type $param
     */
    public function like() {
        $get = $this->input->get();
        $page = isset($get['page']) ? intval($get['page']) : 1;
        $pageSize = isset($get['pageSize']) ? intval($get['pageSize']) : 20;
        $next_page_num = $page + 1;
        $condition = array();
//        $condition['channel'] = $get['channel'];
        $condition['q'] = $get['q'];
//        $condition['q.op'] = 'OR';

        $data = $this->article->getList($condition, $page, $pageSize);
        if (empty($data['list'])) {
            echo $this->returnJson(404, 'list is null', array('result_data' => array(), 'next_page_num' => ''));
        } else {
            if ($data['total'] <= $page * $pageSize) {
                $next_page_num = '';
            }
            echo $this->returnJson(200, 'success', array('result_data' => $data, 'next_page_num' => $next_page_num));
        }
    }

    /**
     * 喜欢（次数增加）
     * 功能未开启
     */
    public function dolike() {
        if (!$this->is_login) {
            echo $this->returnJson("403", '请登录', FALSE);
            exit;
        }
        //入参
        $param = $this->input->post();
        if ($this->article->like($param['aid'], $this->userInfo['userid'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->userInfo['userid'], trim($post['goods_id']));
            echo $this->returnJson("200", 'success', TRUE);
            exit;
        } else {
            echo $this->returnJson("500", 'fail', FALSE);
            exit;
        }
    }

    /**
     * 不喜欢（次数减少）
     * 功能未开启
     */
    public function unlike() {
        if (!$this->is_login) {
            echo $this->returnJson("403", '请登录', FALSE);
            exit;
        }
        //入参
        $param = $this->input->post();
        if ($this->article->unlike($param['aid'], $this->userInfo['userid'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->userInfo['userid'], trim($post['goods_id']));
            echo $this->returnJson("200", 'success', TRUE);
            exit;
        } else {
            echo $this->returnJson("500", 'fail', FALSE);
            exit;
        }
    }

    /**
     * 添加收藏
     */
    public function collection() {
        if (!$this->is_login) {
            echo $this->returnJson("403", '请登录', FALSE);
            exit;
        }
        //入参
        $param = $this->input->post();
        if ($this->member_model->addCollection($param['aid'], $this->userInfo['userid'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->userInfo['userid'], trim($post['goods_id']));
            echo $this->returnJson("200", 'success', TRUE);
            exit;
        } else {
            echo $this->returnJson("500", 'fail', FALSE);
            exit;
        }
    }

    /**
     * 取消收藏
     */
    public function cancelCollection() {
        if (!$this->is_login) {
            echo $this->returnJson("403", '请登录', FALSE);
            exit;
        }
        //入参
        $param = $this->input->post();
        if ($this->member_model->cancelCollection($param['aid'], $this->userInfo['userid'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->userInfo['userid'], trim($post['goods_id']));
            echo $this->returnJson("200", 'success', TRUE);
            exit;
        } else {
            echo $this->returnJson("500", 'fail', FALSE);
            exit;
        }
    }

    /**
     * 添加关注（人）
     */
    public function follow() {
        if (!$this->is_login) {
            echo $this->returnJson("403", '请登录', FALSE);
            exit;
        }
        //入参
        $param = $this->input->post();
        if ($this->member_model->addFollow($param['fuid'], $this->userInfo['userid'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->userInfo['userid'], trim($post['goods_id']));
            echo $this->returnJson("200", 'success', TRUE);
            exit;
        } else {
            echo $this->returnJson("500", 'fail', FALSE);
            exit;
        }
    }

    /**
     * 取消关注（人）
     */
    public function cancelFollow() {
        if (!$this->is_login) {
            echo $this->returnJson("403", '请登录', FALSE);
            exit;
        }
        //入参
        $param = $this->input->post();
        if ($this->member_model->cancelFollow($param['fuid'], $this->userInfo['userid'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->userInfo['userid'], trim($post['goods_id']));
            echo $this->returnJson("200", 'success', TRUE);
            exit;
        } else {
            echo $this->returnJson("500", 'fail', FALSE);
            exit;
        }
    }

}
