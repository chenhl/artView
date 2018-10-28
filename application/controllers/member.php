<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Member extends Base_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array('article', 'channel'));
    }

    /**
     * 登录显示页
     * 
     */
    public function login() {
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
        $condition['categoryId'] = 1;
        $data = $this->article->getList($condition);
//        print_r($data);
        $this->assign("next_uri_string", '/index/feed?page=2');
        $this->assign("article_list", $data);

        $this->display('wap/login.html');
    }

    
}
