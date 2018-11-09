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
        $condition['uid'] = $this->userInfo['userid'];
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
//        $segment_array = $this->uri->segment_array();
        $page = isset($get['page']) ? intval($get['page']) : 1;
        $pageSize = isset($get['pageSize']) ? intval($get['pageSize']) : 20;
        $condition = array();
        $condition['uid'] = $this->userInfo['userid'];
        $data = $this->member_model->getFollowList($condition, $page, $pageSize);
        $this->assign("follows", $data);
        $this->display('wap/uc_follow.html');
    }

    /**
     * 我的收藏（新闻）列表
     * @param type $param
     */
    public function collect() {
        $this->assign('position', '我的收藏');
        //入参
        $get = $this->input->get();
//        $segment_array = $this->uri->segment_array();
        $page = isset($get['page']) ? intval($get['page']) : 1;
        $pageSize = isset($get['pageSize']) ? intval($get['pageSize']) : 20;
        $condition = array();
        $condition['uid'] = $this->userInfo['userid'];
        $data = $this->member_model->getCollectList($condition, $page, $pageSize);
        $this->assign("collects", $data);
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
        require dirname(__DIR__) . '/../vendor/autoload.php';

        $login_auths = array();

        $qqOAuth = new \Yurun\OAuthLogin\QQ\OAuth2($GLOBALS['oauth_qq']['appid'], $GLOBALS['oauth_qq']['appkey'], $GLOBALS['oauth_qq']['callbackUrl']);
        $login_auths['qq']['url'] = $qqOAuth->getAuthUrl();

        $weiboOAuth = new \Yurun\OAuthLogin\Weibo\OAuth2($GLOBALS['oauth_weibo']['appid'], $GLOBALS['oauth_weibo']['appkey'], $GLOBALS['oauth_weibo']['callbackUrl']);
        $login_auths['weibo']['url'] = $weiboOAuth->getAuthUrl();

        $wxOAuth = new \Yurun\OAuthLogin\Weixin\OAuth2($GLOBALS['oauth_weixin']['appid'], $GLOBALS['oauth_weixin']['appkey']);
        $login_auths['weixin']['url'] = $wxOAuth->getAuthUrl();

        $baiduOAuth = new \Yurun\OAuthLogin\Baidu\OAuth2($GLOBALS['oauth_baidu']['appid'], $GLOBALS['oauth_baidu']['appkey'], $GLOBALS['oauth_baidu']['callbackUrl']);
        $login_auths['baidu']['url'] = $baiduOAuth->getAuthUrl();


        $this->assign('login_auths', $login_auths);


        $this->display('wap/login.html');
    }

    /**
     * 第三方登录回调
     * 
     */
    public function oauth($auth) {

        require dirname(__DIR__) . '/../vendor/autoload.php';
        $auth = strtoupper($auth);
        switch ($auth) {
            case 'QQ':
                $qqOAuth = new \Yurun\OAuthLogin\QQ\OAuth2($GLOBALS['oauth_qq']['appid'], $GLOBALS['oauth_qq']['appkey'], $GLOBALS['oauth_qq']['callbackUrl']);
                $userInfo = $qqOAuth->getUserInfo();
                $openid = $qqOAuth->openid;
                break;
            case 'WEIBO':
                $weiboOAuth = new \Yurun\OAuthLogin\Weibo\OAuth2($GLOBALS['oauth_weibo']['appid'], $GLOBALS['oauth_weibo']['appkey'], $GLOBALS['oauth_weibo']['callbackUrl']);
                $userInfo = $weiboOAuth->getUserInfo();
                $openid = $weiboOAuth->openid;
                break;
            case 'WEIXIN':
                $wxOAuth = new \Yurun\OAuthLogin\Weixin\OAuth2($GLOBALS['oauth_weixin']['appid'], $GLOBALS['oauth_weixin']['appkey']);
                $userInfo = $wxOAuth->getUserInfo();
                $openid = $wxOAuth->openid;
                break;
            case 'BAIDU':
                $baiduOAuth = new \Yurun\OAuthLogin\Baidu\OAuth2($GLOBALS['oauth_baidu']['appid'], $GLOBALS['oauth_baidu']['appkey'], $GLOBALS['oauth_baidu']['callbackUrl']);
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
            $user_info = array();
            $user_info['userid'] = $memInfo['userid']; //userid
            $user_info["m_uid"] = md5($memInfo['id']); //名称
            $user_info['nickname'] = $memInfo['nickname']; //名称
            $user_info['username'] = $memInfo['username']; //名称
            $user_info['user_code'] = $memInfo['user_code']; //我的对外推荐code
            $user_info['email'] = $memInfo['email']; //邮箱
            $user_info['mobile'] = $memInfo['mobile']; //手机号
            $user_info['sex'] = $memInfo['sex']; //性别
            $user_info['birthday'] = $memInfo['birthday']; //生日
            $cookie_user = Util::passport_encrypt(http_build_query($user_info), CRYPT_CODE_KEY);
            $this->input->set_cookie("userInfo", $cookie_user, COOKIE_EXPIRE_TIME_ONEHOUR, COOKIE_DOMAIN, '/', '', HTTPS, TRUE);
            //js cookie
            $this->input->set_cookie("m_uid", $user_info['m_uid'], COOKIE_EXPIRE_TIME_ONEHOUR, COOKIE_DOMAIN, '/', '', NULL, NULL);
            
            $this->userInfo = $user_info;
            $this->user_id = $user_info['userid'];
            
//            header('location:');
            
        } else {
            echo 'sys error';
            exit;
        }
    }

}
