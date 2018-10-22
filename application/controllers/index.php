<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends Base_Controller {

    public function __construct() {
        parent::__construct();
//        $this->load->model(array('search'));
    }
    
    /**
     * 列表
     */
    public function index() {
        $this->display('wap/index.html');
    }

}
