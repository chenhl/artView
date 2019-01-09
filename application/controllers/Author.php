<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 *  
 */
class Author extends Base_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array('article','channel'));
    }

    /**
     * 首页
     */
    public function index() {
        $get = $this->input->get();
        $segment_array = $this->uri->segment_array();
        $author_id = $segment_array[2];
        //频道列表
        $param = array();
        $param['code'] = 'all';
        $channel = '';
        $channels = $this->channel->getList($param);
        $this->assign("channels", $channels);
        
        //内容列表
        $condition = array();
        $condition['uid'] = $author_id;
        $page = 1;
        $page_size = 10;
        $data = $this->article->getList($condition, $page, $page_size);
//        print_r($data);
        $this->assign("next_page", 2);
        $this->assign("page_size", $page_size);
        $this->assign("article_list", $data['list']);

        $this->assign("uid", $author_id);
        $this->assign("channel", $channel);
        $this->display('index.html');
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
        $condition['uid'] = $get['uid'];
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

}
