<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Search
 *
 * @author Administrator
 */
class Member_model extends Base_model {

    public function __construct() {
        parent::__construct();
        $this->conAPI();
    }

    /**
     * curl查询接口 系统消息，
     * 
     * @param type $condition
     * @param type $page
     * @param type $pageSize
     * @return type
     */
    public function getMessageList($condition, $page = 1, $pageSize = 20) {
        $request = array();
        //当前用户id
        $request['uid'] = $condition['uid'];
        $request['api_key'] = $this->api_conf['api_key'];
        $request['page'] = $page;
        $request['pageSize'] = $pageSize;
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/message/getList', $request, TRUE);
        $return = json_decode($res, TRUE);
        return $return['data'];
    }

    /**
     * curl查询接口 我的关注，
     * 
     * @param type $condition
     * @param type $page
     * @param type $pageSize
     * @return type
     */
    public function getFollowList($condition, $page = 1, $pageSize = 20) {
        $request = array();
        //当前用户id
        $request['uid'] = $condition['uid'];
        $request['api_key'] = $this->api_conf['api_key'];
        $request['page'] = $page;
        $request['pageSize'] = $pageSize;
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/author/getList', $request, TRUE);
        $return = json_decode($res, TRUE);
        return $return['data'];
    }

    /**
     * 收藏
     * @param type $param
     * @return type
     */
    public function addFollow($param) {
        $request = array();
        $request['fuid'] = $param['fuid'];
        $request['uid'] = $param['uid'];
        $request['api_key'] = $this->api_conf['api_key'];
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/author/add', $request, TRUE);
        $return = json_decode($res, TRUE);
        return $return['data'];
    }

    /**
     * 收藏
     * @param type $param
     * @return type
     */
    public function cancelFollow($param) {
        $request = array();
        $request['fuid'] = $param['fuid'];
        $request['uid'] = $param['uid'];
        $request['api_key'] = $this->api_conf['api_key'];
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/author/cancel', $request, TRUE);
        $return = json_decode($res, TRUE);
        return $return['data'];
    }

    /**
     * curl查询接口 我的收藏，
     * 
     * @param type $condition
     * @param type $page
     * @param type $pageSize
     * @return type
     */
    public function getCollectList($condition, $page = 1, $pageSize = 20) {
        $request = array();
        //当前用户id
        $request['uid'] = $condition['uid'];
        $request['api_key'] = $this->api_conf['api_key'];
        $request['page'] = $page;
        $request['pageSize'] = $pageSize;
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/collection/getList', $request, TRUE);
        $return = json_decode($res, TRUE);
        return $return['data'];
    }

    /**
     * 收藏
     * @param type $param
     * @return type
     */
    public function addCollection($param) {
        $request = array();
        $request['aid'] = $param['aid'];
        $request['uid'] = $param['uid'];
        $request['api_key'] = $this->api_conf['api_key'];
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/collection/add', $request, TRUE);
        $return = json_decode($res, TRUE);
        return $return['data'];
    }

    /**
     * 收藏
     * @param type $param
     * @return type
     */
    public function cancelCollection($param) {
        $request = array();
        $request['aid'] = $param['aid'];
        $request['uid'] = $param['uid'];
        $request['api_key'] = $this->api_conf['api_key'];
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/collection/cancel', $request, TRUE);
        $return = json_decode($res, TRUE);
        return $return['data'];
    }

    /**
     * 第三方登录
     * 
     * @param type $userInfo
     */
    public function authIn($userInfo, $openid, $auth) {
        if (empty($userInfo)) {
            return;
        }
        //
        $request = $userInfo;
        $request['openid'] = $openid;
        $request['auth'] = $auth;
        $request['api_key'] = $this->api_conf['api_key'];
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/member/auth', $request, TRUE);
        $return = json_decode($res, TRUE);
        return $return['data'];
    }

}
