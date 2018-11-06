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
        $channel = $this->channel->getList($param);
        $this->assign("channels", $channel);
        //置顶
        $this->assign("article_tops", array());
        //内容列表
        $condition = array();
        $condition['channel'] = $channel;
        $data = $this->article->getList($condition);
//        print_r($data);
        $this->assign("next_uri_string", '/index/feed?page=2');
        $this->assign("article_list", $data);
        $this->display('wap/index.html');
    }

    /**
     * ajax feed
     */
    public function feed() {
        $get = $this->input->get();
        $page = isset($get['page']) ? intval($get['page']) : 1;
        $pageSize = isset($get['pageSize']) ? intval($get['pageSize']) : 20;
        $next_page_num = $page + 1;
        $condition = array();
        $condition['categoryId'] = 1;
        $data = $this->article->getList($condition, $page, $pageSize);
//        print_r($data);
        if ($page == 3) {
            echo $this->returnJson(404, 'list is null', array('result_filter' => '', 'result_data' => array(), 'next_page_num' => $next_page_num));
        } else {
            echo $this->returnJson(200, 'success', array('result_filter' => '/index/feed?page=3', 'result_data' => $data, 'next_page_num' => $next_page_num));
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
        //内容列表
        $condition = array();
        $condition['aid'] = $segment_array[2];
//        print_r($condition);
        $data = $this->article->getDetail($condition);
//        print_r($data);
        $this->assign("article", $data);
        $this->display('wap/article.html');
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
        if ($this->member_model->addCollection($param['aid'], $this->authList['user_id'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->authList['user_id'], trim($post['goods_id']));
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
        if ($this->member_model->cancelCollection($param['aid'], $this->authList['user_id'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->authList['user_id'], trim($post['goods_id']));
            echo $this->returnJson("200", 'success', TRUE);
            exit;
        } else {
            echo $this->returnJson("500", 'fail', FALSE);
            exit;
        }
    }

    /**
     * 添加关注
     */
    public function follow() {
        if (!$this->is_login) {
            echo $this->returnJson("403", '请登录', FALSE);
            exit;
        }
        //入参
        $param = $this->input->post();
        if ($this->member_model->addFollow($param['fuid'], $this->authList['user_id'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->authList['user_id'], trim($post['goods_id']));
            echo $this->returnJson("200", 'success', TRUE);
            exit;
        } else {
            echo $this->returnJson("500", 'fail', FALSE);
            exit;
        }
    }

    /**
     * 取消关注
     */
    public function cancelFollow() {
        if (!$this->is_login) {
            echo $this->returnJson("403", '请登录', FALSE);
            exit;
        }
        //入参
        $param = $this->input->post();
        if ($this->member_model->cancelFollow($param['fuid'], $this->authList['user_id'])) {
            //添加至redis集合中
//            $this->lib_redis->sAdd($this->authList['user_id'], trim($post['goods_id']));
            echo $this->returnJson("200", 'success', TRUE);
            exit;
        } else {
            echo $this->returnJson("500", 'fail', FALSE);
            exit;
        }
    }

}
