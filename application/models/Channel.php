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
class Channel extends Base_model {

    private $api_uri = '/channel/index';

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
    public function getList($get) {
        $request = array();
        $request['api_key'] = $this->api_conf['api_key'];
        $request['api_sign'] = $this->genSign($request);

        $this->load->library(array("lib_curl"));
        $res = Lib_curl::httpRequest($this->api_url . $this->api_uri, $request, TRUE);
        $data = json_decode($res, TRUE);
        $return = array();
        if ($data['data']) {
            foreach ($data['data'] as $row) {
                $row['url'] = $row['code'];
                if ($get['code'] == $row['code']) {
                    $row['cur'] = ' cur';
                } else {
                    $row['cur'] = '';
                }
                $return[] = $row;
            }
        }
        return $return;
    }

    private function _connect() {

        $this->solr_url;
    }

}
