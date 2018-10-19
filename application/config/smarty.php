<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
$config['caching'] = false;
$config['template_dir'] = APPPATH . 'views';
$config['compile_dir'] = 'templates_c';
$config['use_sub_dirs'] = false;
//子目录变量(是否在缓存文件夹中生成子目录)
$config['left_delimiter'] = '{{';
$config['right_delimiter'] = '}}';