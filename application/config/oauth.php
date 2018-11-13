<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/*
  | -------------------------------------------------------------------------
  | Hooks
  | -------------------------------------------------------------------------
  | This file lets you define "hooks" to extend CI without hacking the core
  | files.  Please see the user guide for info:
  |
  |	https://codeigniter.com/user_guide/general/hooks.html
  |
 */

$config['oauth_qq'] = array(
    'appid' => trim($_SERVER['QQ_APPID']),
    'appkey' => trim($_SERVER['QQ_APPKEY']),
    'callbackUrl' => APP_BASE_URL.'/member/oauth/qq',
);
$config['oauth_weibo'] = array(
    'appid' => trim($_SERVER['WEIBO_APPID']),
    'appkey' => trim($_SERVER['WEIBO_APPKEY']),
    'callbackUrl' => APP_BASE_URL.'/member/oauth/weibo',
);
$config['oauth_weixin'] = array(
    'appid' => trim($_SERVER['WEIXIN_APPID']),
    'appkey' => trim($_SERVER['WEIXIN_APPKEY']),
    'callbackUrl' => APP_BASE_URL.'/member/oauth/weixin',
);
$config['oauth_baidu'] = array(
    'appid' => trim($_SERVER['BAIDU_APPID']),
    'appkey' => trim($_SERVER['BAIDU_APPKEY']),
    'callbackUrl' => APP_BASE_URL.'/member/oauth/baidu',
);

