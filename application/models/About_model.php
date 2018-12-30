<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of About_model
 *
 * @author Administrator
 */
class About_model extends Base_model {

    public function __construct() {
        parent::__construct();
        $this->conAPI();
    }

    /**
     * curl查询接口
     * 
     * @param type $condition
     * @return type
     */
    public function getCates() {
        $request = array();
        $request['api_key'] = $this->api_conf['api_key'];
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/about/cate', $request, TRUE);
        $data = json_decode($res, TRUE);
        return $data['data'];
    }

    /**
     * curl查询接口
     * 
     * @param type $condition
     * @return type
     */
    public function getArticle($condition) {
        $request = array();
        $request['catid'] = $condition['catid'];
        $request['api_key'] = $this->api_conf['api_key'];
        $request['api_sign'] = $this->genSign($request);
        
        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/about/detail', $request, TRUE);
        $data = json_decode($res, TRUE);
        return $data['data'];
    }

}
