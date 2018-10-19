<?php

if (!defined('BASEPATH'))
    EXIT('No direct script asscess allowed');
require_once APPPATH.'libraries/Smarty_3.1.33/Smarty.class.php';

class Artsmarty extends Smarty {

    protected $ci;
 
    public function __construct() {
        parent::__construct();
        $this->ci = & get_instance();
        $this->ci->load->config('smarty'); //加载smarty的配置文件
        //加载smarty的配置文件
        $this -> caching = $this -> ci -> config -> item('caching');
        $this -> template_dir = $this -> ci -> config -> item('template_dir');
        $this -> compile_dir = $this -> ci -> config -> item('compile_dir');
        $this -> use_sub_dirs = $this -> ci -> config -> item('use_sub_dirs');
        $this -> left_delimiter = $this -> ci -> config -> item('left_delimiter');
        $this -> right_delimiter = $this -> ci -> config -> item('right_delimiter');
        
    }

}
