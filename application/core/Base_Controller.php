<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * Description of Base_Controller
 *
 * @author Administrator
 */
class Base_Controller extends CI_Controller {

    protected $_json = array();

    /**
     * 当前域名url
     * http://www.te.com
     * @var type 
     */
    private $app_http_url;

    /**
     * 标识是否一个正确的登录用户（验证cookie及session）
     * @var bool 
     */
    public $is_login = false;

    /**
     * 每个客户端的标识
     * @var string 
     */
    public $sess_id;

    /**
     * 用户id
     * @var type 
     */
    public $user_id = 0;
    //模板对应路径
    public $tpl = array();
    /**
     * cookie中存的用户基本信息
     *
     * @var array
     */
    public $userInfo = array();

    public function __construct() {
        parent::__construct();
        $this->load->library(array("util"));
        $this->initSet();

        if (!IS_AJAX) {
            $this->load->library('Artsmarty');
            $this->assignCommon();
        }

        $this->_json = array('code' => 200, 'msg' => 'success', 'data' => array());
    }

    private function initSet() {
        //域名
        $this->app_http_url = APP_BASE_URL;
        $this->app_server_name = APP_SERVER_NAME;

        $this->is_login = $this->check_login();
        $this->sess_id = $this->_setSessionId();
        $this->user_id = !empty($this->authList['user_id']) ? $this->authList['user_id'] : 0;
    }

    private function assignCommon() {
        //域名
        $this->assign("app_http_url", $this->app_http_url);
        $this->assign('app_server_name', $this->app_server_name); //主要用在smarty取图片域的参数        

        $this->assign('app_name', 'yishujia');

        $this->assign('app_relative_domain', APP_RELATIVE_MAIN);

        //是否登录。

        $this->assign("userInfo", $this->userInfo);
        $this->assign('is_login', $this->is_login);

        //初始化 控制性变量


        $this->channel();
    }

    /**
     * 分类
     */
    private function channel() {
//        $this->load->library(array("lib_category"));
//        $this->assign('head_menu', $this->lib_category->getNavMenu());
    }

    /**
     *
     * 判断用户登录状态
     *
     * @return bool
     */
    protected function check_login() {
        //用户详细信息
        $this->userInfo = $this->getCookie("userInfo");
        //未登录
        if (empty($this->userInfo)) {
            return false;
        }
        //验证用户信息
        $this->load->model('member_model');
        $member_info = $this->member_model->getUserProInfo(array("usr.id" => $this->userInfo["user_id"]));
        if (empty($member_info)) {
            baby_log('check_login 1:' . json_encode(array('userInfo' => $this->userInfo, 'cookie' => $_COOKIE)));
            return FALSE;
        }
        if (!isset($this->userInfo["session_id"])) {
            baby_log('check_login 2:' . json_encode(array('userInfo' => $this->userInfo, 'cookie' => $_COOKIE)));
            return false;
        }
        //更新cookie
        $cookie_user = Handler_tool::passport_encrypt(http_build_query($this->userInfo), CRYPT_CODE_KEY);
        $this->input->set_cookie("userInfo", $cookie_user, COOKIE_EXPIRE_TIME_ONEHOUR, COOKIE_DOMAIN, '/', '', HTTPS, TRUE);
        return TRUE;
    }

    /**
     * 设置session_id信息,$_SESSION
     * 未登录用户通过cookie来传顶sess_id;
     * 注：登录后会把sess_id记录入库，见lib_member->login
     */
    private function _setSessionId() {
//        $this->load->config('dict');
//        //session秘钥+session_id
//        if (!empty($this->authList["session_id"])) {
//            $session_id = $this->authList["session_id"];
//        } else {
//            $this->load->library('session');
//            $session_id = md5($this->session->session_id . $this->config->item('dict_session_key'));
//        }
//        //存储session中
//        Handler_http::setSession(SESSION_ID, $session_id);
//        //生成加密,使用系统秘钥
//        $cookie_session = Handler_tool::passport_encrypt(http_build_query(array("session_id" => $session_id)), CRYPT_CODE_KEY);
//        //BBSTID,设置cookie
//        $this->input->set_cookie($this->config->item('dict_save_session_cookiename'), $cookie_session, COOKIE_EXPIRE_TIME_TENDAY, COOKIE_DOMAIN, '/', '', HTTPS, TRUE);
//        return $session_id;
    }

    /**
     * 判断用户是否更改cookie
     * @return  bolean
     */
    private function checkAuthHash() {
//        $this->load->config('dict');
//        $key = $this->config->item('dict_cookie_key') . $this->authList['user_id'];
//        $authHash = strtolower(md5($key));
//        return (strtolower(trim($this->authList['auth_hash'])) == $authHash);
    }

    /**
     * 获取认证cookie
     * @param string $valueKey	需要获取的内容键值
     * @return array|string		如$valueKey为空则返回整个数组，反之返回$valueKey数据
     */
    private function getCookie($key, $valueKey = "") {
        $user_info = array();
        $authValue = Util::getCookie($key);
        $cookieValue = Util::passport_decrypt($authValue, CRYPT_CODE_KEY);
        parse_str($cookieValue, $user_info);
        if (empty($user_info)) {
            return array();
        } elseif (empty($valueKey)) {
            return $user_info;
        } else {
            if (in_array($valueKey, $user_info)) {
                return $user_info[$valueKey];
            } else {
                return "";
            }
        }
    }

    /**
     * 获取并跳转上一页
     * @param type $method
     * @param type $backurl
     * @return type
     */
    protected function getBackUrl($method, $backurl = '') {

        if ($method == 'get') {
            $backurl = empty($backurl) ? (isset($_SERVER['HTTP_REFERER']) ? Util::art_replace($_SERVER['HTTP_REFERER']) : $this->app_http_url ) : $backurl;
            $self_url = $this->app_http_url . Util::art_replace($_SERVER['REQUEST_URI']);
            return ($backurl == $self_url) ? $this->app_http_url : $backurl;
        } elseif ($method == 'post') {
            $backurl = trim(htmlspecialchars_decode($backurl));
            return empty($backurl) ? $this->app_http_url : $backurl;
        }
    }

    /**
     * 取当前 uri
     * @return type
     */
    private function getCurrentUri() {
        return Util::art_replace($_SERVER['REQUEST_URI']);
    }

    /**
     * 生成签名
     * @param type $request
     * @return type
     */
    protected function genSign($request) {
        ksort($request);
        $sign = '';
        foreach ($request as $key => $value) {
            if ($value == '' || $key == 'api_sign') {
                continue;
            }
            $sign .= $key . $value;
        }
        $sign .= 'secret';
        return hash("sha256", $sign);
    }

    /**
     * 验证签名
     * @param type $request
     * @return type
     */
    protected function chkSign($request) {
        return !empty($request['api_sign']) ? ($request['api_sign'] == $this->genSign($request) ? TRUE : FALSE) : FALSE;
    }

    /**
     * ajax公用返回信息
     * @param type $code
     * @param type $msg
     * @param type $data
     */
    protected function returnJson($code, $msg, $data = array()) {
        $return['code'] = $code;
        $return['msg'] = $msg;
        $return['data'] = $data;
        return json_encode($return);
    }

    /**
     * smarty用到方法
     * @param type $key
     * @param type $val
     */
    protected function assign($key, $val) {
        $this->artsmarty->assign($key, $val);
    }

    /**
     * 模板名
     * @param type $html
     */
    protected function display($html) {
        $this->artsmarty->display($html);
    }

}

/**
 * seaslog
 * @param string $msg
 * @param string $type SEASLOG_INFO
 */
function art_log($msg, $type = SEASLOG_INFO) {
//    SeasLog::log($type, $msg);
}
