<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of etl
 *
 * @author chl
 */
class CronSitemap extends Base_Controller {

    /**
     * 当前url
     * @var string 
     */
    private $cron_server_name = '';
    private $sitemap_name = 'sitemap';
    private $http = 'https://';
    private $http_url = '';
    private $_deflang = 'en';
    private $_rootdir = FCPATH;
    private $_zipdir = 'sitemapfiles';

    /**
     * 当前天
     * @var date 
     */
    private $today;

    /**
     * sitemap.xml 设置
     * <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd"
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     * @var type 
     */
    private $url_xml = array();
    private $sitemap_xml = array();
    private $header = "xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \n\t xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 \n\t http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd\" xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"";
    private $changefreq = 'weekly';

    public function __construct() {
        parent::__construct();
        $this->load->model(array('categorySale_model', 'search_model', 'attrTrans_model', 'productKeyword_model'));
        $this->load->library(array("url_tool"));
        $this->load->helper('text');
        $this->today = date('Y-m-d');

        $this->url_xml = array(
            'header' => "<\x3Fxml version=\"1.0\" encoding=\"UTF-8\"\x3F>\n\t<urlset " . $this->header . ">",
            'footer' => "\t</urlset>\n",
            'item_pre' => '<url>',
            'item_suff' => '</url>',
        );
        $this->sitemap_xml = array(
            'header' => "<\x3Fxml version=\"1.0\" encoding=\"UTF-8\"\x3F>\n\t<sitemapindex " . $this->header . ">",
            'footer' => "\t</sitemapindex>\n",
            'item_pre' => '<sitemap>',
            'item_suff' => '</sitemap>',
        );

//        print_r($this->_langlist);
    }

    public function index($domain, $sitemap_name = '') {
        ini_set('memory_limit', '1000M');
        echo 'start_time:' . date('Y-m-d H:i:s') . "\n";
        //初始化域和sitemap文件名
        $this->cron_server_name = $domain;
        $this->http_url = $this->http . $this->cron_server_name . '/';

        if ($sitemap_name) {
            $this->sitemap_name = $sitemap_name;
        }
        $this->_zipdir .= '/' . $this->sitemap_name;
        if (!is_dir($this->_rootdir . $this->_zipdir)) {
            mkdir($this->_rootdir . $this->_zipdir, 0755, TRUE);
        }
        $this->lazyConfig('SolrConf');
        $file_full_name = $this->_rootdir . '/' . $this->sitemap_name . '.xml';
        $gz = FALSE;
        $conf = array_merge($this->sitemap_xml, array(
            'today' => $this->today,
        ));

        try {
            $cat_return = $this->cat();
            $goods_return = $this->goods();
            $data = array_merge($cat_return, $goods_return, $tags_return);
            $this->_xml($data, $conf, $file_full_name, $gz);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString() . "\n";
        }

        echo 'end_time:' . date('Y-m-d H:i:s') . "\n\n";
    }

    private function cat() {
        $file_full_dir = $this->_rootdir . $this->_zipdir . '/'; //_en_1.xml
        $file_name_pre = 'sitemap_categories';
        $gz = TRUE;

        $conf = array_merge($this->url_xml, array(
            'priority' => '0.9',
            'changefreq' => $this->changefreq,
        ));

        $return = array();

        //分类数据应不大于5000
        $page = 1;
        $http_url = $this->http_url;
        $url_arr = array();
        $url_arr['cate'] = '';
        $url_arr['order'] = '';
        $url_arr['filter'] = array();
        $url_arr['page'] = 0;

        //文件名
        $file_name = $file_name_pre . '_' . $page . '.xml';
        //本地全路径
        $file_full_name = $file_full_dir . $file_name;
        //可访问url
        $file_url = $this->http_url . $this->_zipdir . '/' . $file_name . '.gz';

        //生成cat xml.gz
        $cats = $this->categorySale_model->getCategoriesTree(array("is_show" => 1, 'domainName' => $this->cron_server_name)); //数量少、变化不大。
        $data = array();
        foreach ($cats as $row) {
            $_tmp = array();
            $_tmp['loc'] = $this->url_tool->build_url('list', array('re_url' => $row['re_url'], "id" => $row['cat_id']), $http_url);
            $data[] = $_tmp;
        }
        $this->_xml($data, $conf, $file_full_name, $gz);

        //返回xml.gz url
        $return[] = array('loc' => $file_url);

        return $return;
    }

    /**
     * 生成 site url的.gz压缩文件，并返回.gz的可访问url
     * @return string
     */
    private function goods() {

        $file_full_dir = $this->_rootdir . $this->_zipdir . '/'; //_en_1.xml
        $file_name_pre = 'sitemap_products';
        $gz = TRUE;
        $conf = array_merge($this->url_xml, array(
            'priority' => '0.5',
            'changefreq' => $this->changefreq,
        ));

        $pagesize = 5000;
        $return = array();

        $http_url = $this->http_url;


        $page = 1;
        do {
            //文件名
            $file_name = $file_name_pre . '_' . $page . '.xml';
            //本地全路径
            $file_full_name = $file_full_dir . $file_name;
            //可访问url
            $file_url = $this->http_url . $this->_zipdir . '/' . $file_name . '.gz';
            //取商品数据
            $goods = $this->search_model->goodsSiteMap(array('lang_short' => $lang), $page, $pagesize); //TODO分步进行，结合协程yield，现在是返回所有，
            $total = $goods['response']['numFound'];
            $data = array();
            if (!empty($goods['response']['docs'])) {
                foreach ($goods['response']['docs'] as $row) {
                    $_tmp = array();
                    $_tmp['loc'] = $this->url_tool->build_url('goods', array('re_url' => $row['re_url'], "id" => $row['goods_id']), $http_url);
                    $data[] = $_tmp;
                }
            }
            //生成xml gz
            $this->_xml($data, $conf, $file_full_name, $gz);

            //下一步循环
            if ($page * $pagesize < $total) {
                $page++;
                $next = TRUE;
            } else {
                $next = FALSE;
            }
            //返回xml.gz url
            $return[] = array('loc' => $file_url);
        } while ($next);


        return $return;
    }

    private function _xml($items, $conf, $file_full_name = '', $gz = true) {
        $map = $conf['header'] . "\n";

        foreach ($items AS $item) {
            $item['loc'] = htmlentities($item['loc'], ENT_QUOTES);
            $map .= "\t\t" . $conf['item_pre'] . "\n\t\t\t<loc>" . $item['loc'] . "</loc>\n";
            // lastmod
            if ($conf['today']) {
                $map .= "\t\t\t<lastmod>" . $conf['today'] . "</lastmod>\n";
            }
            // changefreq
            if ($conf['changefreq']) {
                $map .= "\t\t\t<changefreq>" . $conf['changefreq'] . "</changefreq>\n";
            }
            // priority
            if ($conf['priority']) {
                $map .= "\t\t\t<priority>" . $conf['priority'] . "</priority>\n";
            }
            $map .= "\t\t" . $conf['item_suff'] . "\n";
        }

        $map .= $conf['footer'] . "\n";

        if (!empty($file_full_name)) {
            //check dir
            $pathinfo = pathinfo($file_full_name);
            if (!is_dir($pathinfo['dirname'])) {
                mkdir($pathinfo['dirname'], 0644, TRUE);
            }

            if ($gz) {
                $file_full_name .= '.gz';
                try {
                    $handler = gzopen($file_full_name, 'w9');
                    gzwrite($handler, $map);
                    gzclose($handler);
                    return TRUE;
                } catch (Exception $exc) {
                    echo $exc->getTraceAsString();
                    return FALSE;
                }
            } else {
                return file_put_contents($file_full_name, $map);
            }
        } else {
            return $map;
        }
    }

}
