<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 *  
 */
class About extends Base_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array('about_model', 'channel'));
    }
    
    private function init() {
        $segment_array = $this->uri->segment_array();

        //频道列表
        $param = array();
        $param['code'] = 'all';
        $channel = $this->channel->getList($param);
        $this->assign("channels", $channel);

        //分类列表
        $cats = $this->about_model->getCates();
        $this->assign("cats", $cats);
        $this->assign("catdir", $segment_array[1]);
        
        foreach ($cats as $row) {
            if($row['catdir'] == $segment_array[1]){
                return $row['catid'];
            }
        }

    }
    /**
     * 首页
     */
    public function index() {
        $catid = $this->init();
        
        if($catid){
            $condition = array(
                'catid'=>$catid
            );
            $article = $this->about_model->getArticle($condition);
            $this->assign("article", $article);
        }
        
        $this->display('web/about.html');
    }


}
