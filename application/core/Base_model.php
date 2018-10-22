<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * Description of Base_model
 *
 * @author Administrator
 */
class Base_model extends CI_Model {
    protected $api_url;
    protected $api_conf;
   
    public function __construct() {
        parent::__construct();
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
        $sign .= $this->api_conf['api_secret'];
        return hash("sha256", $sign);
    }

}
