<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends Base_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array('article'));
    }

    /**
     * 列表初始化
     * 
     */
    public function index() {
        $get = $this->input->get();
        $condition = array();
        $condition['categoryId'] = 1;
        $data = $this->article->getList($condition);
        $this->assign("next_uri_string", '/index/feed?page=1');
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

        if ($page == 2) {
            echo $this->returnJson(404, 'list is null', array('result_filter' => '', 'result_data' => array(), 'next_page_num' => $next_page_num));
        } else {
            echo $this->returnJson(200, 'success', array('result_filter' => '/index/feed?page=2', 'result_data' => $data['data'], 'next_page_num' => $next_page_num));
        }
    }

}
