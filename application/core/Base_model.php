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
     * 数据库连接
     * @param type $base
     * @param type $return
     */
    protected function conDB($base = 'default', $return = FALSE) {
        $this->load->database($base, $return);
        //不使用CI框架自带的连接方式时，设置编码格式
        $this->db->query("SET NAMES 'UTF8'");
    }
    /**
     * 取接口配置
     */
    protected function conAPI() {
        $this->load->config('api');
        $this->api_conf = $this->config->item('api_conf');
        $this->api_url = $this->api_conf['api_url'];
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
