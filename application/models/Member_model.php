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
     * 详情
     * @param type $condition
     * @return type
     */
    public function getDetail($condition) {
        $request = array();
        $request['aid'] = $condition['aid'];
        $request['api_key'] = $this->api_conf['api_key'];
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/article/detail', $request, TRUE);
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
}
