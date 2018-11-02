<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Member extends Base_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array('article', 'channel'));
    }

    /**
     * 首页
     */
    public function index() {
        $this->display('wap/usercenter_new.html');
    }

    /**
     * 系统消息 列表
     * @param type $param
     */
    public function message() {
        $this->display('wap/uc_message.html');
    }

    /**
     * 我的关注（人）
     * @param type $param
     */
    public function follow() {

        $this->display('wap/uc_follow.html');
    }

    /**
     * 我的收藏（新闻）列表
     * @param type $param
     */
    public function collect() {

        $this->display('wap/uc_collect.html');
    }

    /**
     * 我的反馈（列表）
     * @param type $param
     */
    public function feedback() {
        
    }

    /**
     * 我的反馈（添加）
     * @param type $param
     */
    public function addback() {
        
    }

    /**
     * 登录显示页，全部依赖第三方qq、wechat
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
//        $this->assign("article_list", $data);
        $this->display('wap/login.html');
    }

}
