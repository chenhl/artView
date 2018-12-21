<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Conf_model
 *
 * @author Administrator
 */
class Conf_model extends Base_model {

    public function __construct() {
        parent::__construct();
        $this->conAPI();
    }

    /**
     * curl查询接口 web config，包含站点信息等
     * 
     * @param type $condition
     * @return type
     */
    public function getConf($condition = array()) {
        $request = array();
        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . '/site/getConf', $request, TRUE);
        $return = json_decode($res, TRUE);
        return $return['data'];
    }

}
