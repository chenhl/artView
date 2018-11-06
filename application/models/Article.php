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
class Article extends Base_model {

    public function __construct() {
        parent::__construct();
        $this->conAPI();
    }

    /**
     * curl查询接口
     * 
     * @param type $condition
     * @param type $page
     * @param type $pageSize
     * @return type
     */
    public function getList($condition, $page = 1, $pageSize = 20) {
        $request = array();

        $request['channel'] = $condition['channel'];
        if (!empty($condition['q'])) {
            $request['q'] = $condition['q'];
        }
        if (!empty($condition['cate_id'])) {
            $request['cate_id'] = $condition['cate_id'];
        }
        if (!empty($condition['uid'])) {
            $request['uid'] = $condition['uid'];
        }
        if (!empty($condition['aid'])) {
            $request['aid'] = $condition['aid'];
        }
        if (!empty($condition['aids'])) {
            $request['aids'] = $condition['aids'];
        }

        $request['api_key'] = $this->api_conf['api_key'];
        $request['page'] = $page;
        $request['pageSize'] = $pageSize;
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/article/feed', $request, TRUE);
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

    public function like($data) {

        return TRUE;
    }

    public function unlike($data) {
        return TRUE;
    }

}
