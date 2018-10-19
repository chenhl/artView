<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends Base_Controller {

    public function __construct() {
        parent::__construct();
//        $this->load->model(array('search'));
    }
    
    /**
     * 文章feed列表
     */
    public function index() {
        echo 'abc';
        print_r($_SERVER);
        $this->display('index.html');
    }

}
