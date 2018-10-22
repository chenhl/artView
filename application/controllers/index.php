<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends Base_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array('article'));
    }
    
    /**
     * 列表
     */
    public function index() {
        $get = $this->input->get();
        
        $condition = array();
        $condition['categoryId']=1;
        $data = $this->article->getList($condition);
        
        $this->display('wap/index.html');
    }

}
