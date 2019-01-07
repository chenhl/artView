<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Member extends Base_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array('member_model'));
    }

    /**
     * 首页
     */
    public function index() {
        $this->assign('position', '个人中心');
        $this->display('wap/usercenter_new.html');
    }

    /**
     * 系统消息 列表
     * @param type $param
     */
    public function message() {
        $this->assign('position', '系统消息');
        //入参
        $get = $this->input->get();
//        $segment_array = $this->uri->segment_array();
        $page = isset($get['page']) ? intval($get['page']) : 1;
        $pageSize = isset($get['pageSize']) ? intval($get['pageSize']) : 20;
        $condition = array();
        $condition['uid'] = $this->user_id;
        $data = $this->member_model->getMessageList($condition, $page, $pageSize);
        $this->assign("collects", $data);
        $this->display('wap/uc_message.html');
    }

    /**
     * 我的关注（人）
     * @param type $param
     */
    public function follow() {
        $this->assign('position', '我的关注');
        //入参
        $get = $this->input->get();
        //频道列表
        $cur_channel = 'all';
        $this->_channel($cur_channel);
        
//        $segment_array = $this->uri->segment_array();
        $page = isset($get['page']) ? intval($get['page']) : 1;
        $pageSize = isset($get['pageSize']) ? intval($get['pageSize']) : 20;
        $condition = array();
        $condition['uid'] = $this->user_id;
        $data = $this->member_model->getFollowList($condition, $page, $pageSize);
        $this->assign("follows", $data);
        
        //seo
        $this->seo($this->siteConf);
        $this->display('web/uc_follow.html');
    }

    /**
     * 我的收藏（新闻）列表
     * @param type $param
     */
    public function collect() {
        $this->assign('position', '我的收藏');
        //入参
        $get = $this->input->get();
        //频道列表
        $cur_channel = 'all';
        $this->_channel($cur_channel);
        
//        $segment_array = $this->uri->segment_array();
        //内容列表
        $page = isset($get['page']) ? intval($get['page']) : 1;
        $pageSize = isset($get['pageSize']) ? intval($get['pageSize']) : 20;
        $condition = array();
        $condition['uid'] = $this->user_id;
        $data = $this->member_model->getCollectList($condition, $page, $pageSize);
        $this->assign("collects", $data);
        
        //seo
        $this->seo($this->siteConf);
        
        $this->display('web/uc_collect.html');
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
//        require dirname(__DIR__) . '/../vendor/autoload.php';
//        $qqOAuth = new \Yurun\OAuthLogin\QQ\OAuth2;
//        $qqOAuth->displayLoginAgent();
//        exit;
        //入参
//        $get = $this->input->get();
//        $segment_array = $this->uri->segment_array();
        //频道列表
//        $param = array();
//        if (empty($get['code']) && empty($segment_array[1])) {
//            $param['code'] = 'all';
//        } else {
//            $param['code'] = $segment_array[1]; //当前频道
//        }
//        $channels = $this->channel->getList($param);
//        $this->assign("channels", $channels);
//        $this->assign("article_list", $data);
        $this->load->config('oauth');
        require dirname(__DIR__) . '/../vendor/autoload.php';
        
        $login_auths = array();

        $qqOAuth = new \Yurun\OAuthLogin\QQ\OAuth2($this->config->item('appid','oauth_qq'), $this->config->item('appkey','oauth_qq'), $this->config->item('callbackUrl','oauth_qq'));
        $login_auths['qq']['url'] = $qqOAuth->getAuthUrl();

        $weiboOAuth = new \Yurun\OAuthLogin\Weibo\OAuth2($this->config->item('appid','oauth_weibo'), $this->config->item('appkey','oauth_weibo'), $this->config->item('callbackUrl','oauth_weibo'));
        $login_auths['weibo']['url'] = $weiboOAuth->getAuthUrl();

        $wxOAuth = new \Yurun\OAuthLogin\Weixin\OAuth2($this->config->item('appid','oauth_weixin'), $this->config->item('appkey','oauth_weixin'));
        $login_auths['weixin']['url'] = $wxOAuth->getAuthUrl();

        $baiduOAuth = new \Yurun\OAuthLogin\Baidu\OAuth2($this->config->item('appid','oauth_baidu'), $this->config->item('appkey','oauth_baidu'), $this->config->item('callbackUrl','oauth_baidu'));
        $login_auths['baidu']['url'] = $baiduOAuth->getAuthUrl();


        $this->assign('login_auths', $login_auths);


        $this->display('wap/login.html');
    }

    /**
     * 第三方登录回调
     * 
     */
    public function oauth($auth) {
        $this->load->config('oauth');
        require dirname(__DIR__) . '/../vendor/autoload.php';
        $auth = strtoupper($auth);
        switch ($auth) {
            case 'QQ':
                $qqOAuth = new \Yurun\OAuthLogin\QQ\OAuth2($this->config->item('appid','oauth_qq'), $this->config->item('appkey','oauth_qq'), $this->config->item('callbackUrl','oauth_weibo'));
                $userInfo = $qqOAuth->getUserInfo();
                $openid = $qqOAuth->openid;
                break;
            case 'WEIBO':
                $weiboOAuth = new \Yurun\OAuthLogin\Weibo\OAuth2($this->config->item('appid','oauth_weibo'), $this->config->item('appkey','oauth_weibo'), $this->config->item('callbackUrl','oauth_weibo'));
                $userInfo = $weiboOAuth->getUserInfo();
                $openid = $weiboOAuth->openid;
                break;
            case 'WEIXIN':
                $wxOAuth = new \Yurun\OAuthLogin\Weixin\OAuth2($this->config->item('appid','oauth_weixin'), $this->config->item('appkey','oauth_weixin'));
                $userInfo = $wxOAuth->getUserInfo();
                $openid = $wxOAuth->openid;
                break;
            case 'BAIDU':
                $baiduOAuth = new \Yurun\OAuthLogin\Baidu\OAuth2($this->config->item('appid','oauth_baidu'), $this->config->item('appkey','oauth_baidu'), $this->config->item('callbackUrl','oauth_baidu'));
                $userInfo = $baiduOAuth->getUserInfo();
                $openid = $baiduOAuth->openid;
                break;
        }

        $memInfo = $this->member_model->authIn($userInfo, $openid, $auth);

        if (!empty($memInfo)) {
            //禁止登录
            if (!empty($memInfo['islock'])) {
                echo 'forbidden';
                exit;
            }
            //登录 cookie 跳转。
            $this->input->set_cookie("m_uid", $memInfo['m_uid'], COOKIE_EXPIRE_TIME, COOKIE_DOMAIN, '/', '', HTTPS, TRUE);
            //js cookie
            $this->input->set_cookie("is_login", 1, COOKIE_EXPIRE_TIME, COOKIE_DOMAIN, '/', '', NULL, NULL);
            
            $this->is_login = 1;
            $this->m_uid = $memInfo['m_uid'];
            
//            header('location:');
            
        } else {
            echo 'sys error';
            exit;
        }
    }

}
