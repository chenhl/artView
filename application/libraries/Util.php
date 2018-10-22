<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of util
 *
 * @author Administrator
 */
class Util {

    public static function toJson($data = array()) {
        header('Content-type: application/json');
        echo json_encode($data);
        exit();
    }

    public static function _json_encode($data, $option = null) {
        if (!empty($option)) {
            json_encode($data, $option);
        } else {
            return json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
        }
    }

    public static function _json_decode($json_str, $assoc = true) {
        return json_decode($json_str, $assoc);
    }

    /**
     * 校验邮箱
     * /i 不区分大小写
     * @param type $email
     * @return boolean
     */
    public static function check_email($email) {
        if (empty($email)) {
            return false;
        }
        $pattern = "/^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$/i";
        if (!preg_match($pattern, $email)) {
            return false;
        }
        return true;
    }

    /**
     * 验证一个字符串中的smart变量是否正常
     * 注：本项目中smart变量左侧标识为 '{{'
     * @param string $str
     * @return bool 
     */
    public static function check_smarty_val($str) {
        $smarty_pre = '{{';
        $pattern = "/[\\{]{2}\\$[A-Za-z\\.]+[\\}]{2}/i";
        if (strpos($str, $smarty_pre) !== FALSE) {
//            if (!preg_match($pattern, $str)) {
//                return FALSE;
//            }
            $_count_smarty = substr_count($str, $smarty_pre);
            if (preg_match_all($pattern, $str) != $_count_smarty) {
                return FALSE;
            }
        }
        return TRUE;
    }

    /**
     * 身份证验证
     * @param type $str
     * @return boolean
     */
    public static function checkIdCard($str) {
        $str = strtoupper($str);
        $len = strlen($str);
        //判断长度
        if (($len != 15) && ($len != 18)) {
            return false;
        }
        //正则判断
        $pattern = '/^(\d{6})(18|19|20)?(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X|x)?$/i';
        if (!preg_match($pattern, $str)) {
            return false;
        }

        //校验地区
        $city = array(
            11 => "北京",
            12 => "天津",
            13 => "河北",
            14 => "山西",
            15 => "内蒙古",
            21 => "辽宁",
            22 => "吉林",
            23 => "黑龙江 ",
            31 => "上海",
            32 => "江苏",
            33 => "浙江",
            34 => "安徽",
            35 => "福建",
            36 => "江西",
            37 => "山东",
            41 => "河南",
            42 => "湖北",
            43 => "湖南",
            44 => "广东",
            45 => "广西",
            46 => "海南",
            50 => "重庆",
            51 => "四川",
            52 => "贵州",
            53 => "云南",
            54 => "西藏",
            61 => "陕西",
            62 => "甘肃",
            63 => "青海",
            64 => "宁夏",
            65 => "新疆",
            71 => "台湾",
            81 => "香港",
            82 => "澳门",
            91 => "国外"
        );
        if (!$city[substr($str, 0, 2)]) {
            return false;
        }

        //校验生日
        //如果15位补全4位年份
        if ($len == 15) {
            $str = $len == 15 ? substr($str, 0, 6) . '19' . substr($str, 6) : $str;
            $year = substr($str, 6, 10);
            $month = substr($str, 10, 12);
            $day = substr($str, 12, 14);
            if (!self::checkDate($year . '-' . $month . '-' . $day)) {
                return false;
            }
        }
        //18位加权校验
        if ($len == 18) {
            $Wi = array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            $verify = array(1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2);
            $sum = 0;
            for ($i = 0; $i < 17; $i++) {
                $sum += $str[$i] * $Wi[$i];
            }
            $y = $verify[($sum % 11)];
            if ($y != $str[17]) {
                return false;
            }
        }
        return true;
    }

    /** 将格林威治时间转换成客户端时间,生成客户端时间
     *
     * @param str $time 格林威治时间
     * @param str $timeZone 时差
     * return 明文
     */
    public static function genClientTime($timeZone = 0) {
        return time() + $timeZone * 3600;
    }

    public static function genClientDateTime($timeZone = 0) {
        return date('Y-m-d H:i:s', time() + $timeZone * 3600);
    }

    public static function genHttpTime($timeZone = 0) {
        return $_SERVER['REQUEST_TIME'] + $timeZone * 3600;
    }

    /**
     * $_SERVER['REQUEST_TIME'] 发起该请求时刻的时间戳。== baby.php里的time()
     * @param type $timeZone
     * @return type
     */
    public static function genHttpDateTime($timeZone = 0) {
        return date('Y-m-d H:i:s', ($_SERVER['REQUEST_TIME'] + $timeZone * 3600));
    }

    public static function getHttpUserAgent() {
        return $_SERVER['HTTP_USER_AGENT'];
    }

    public static function getHttpAcceptLang() {
        return $_SERVER['HTTP_ACCEPT_LANGUAGE'];
    }

    public static function getHttpTimeZone() {
        $time_zone = intval($_COOKIE['timezone']);
        if ($time_zone >= -12 && $time_zone <= 12) {
            return $time_zone;
        } else {
            return 0;
        }
    }

    public static function formatDateTime($date_time, $time_zone = 0) {
        if (empty($date_time[0])) {
            return $date_time;
        }
        return date('Y-m-d H:i:s', strtotime($date_time) + $time_zone * 3600);
    }

    /**
     * 获取客户端IP地址
     * 在CDN下，$_SERVER ["REMOTE_ADDR"]所取的数据会有误
     * @return string 客户端的IP地址
     */
    public static function getIP() {
        if (!empty($_COOKIE['test_ip'])) {
            return $_COOKIE['test_ip'];
        }
        if (isset($_SERVER["HTTP_CDN_SRC_IP"])) {
            return $_SERVER["HTTP_CDN_SRC_IP"];
        }
        if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && preg_match('/^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$/', $_SERVER['HTTP_X_FORWARDED_FOR'])) {
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        return $_SERVER["REMOTE_ADDR"];
    }

    /**
     * 获取cookie值
     * 
     * @param string $key 
     * @return string /array
     */
    public static function getCookie($key) {
        if (empty($key)) {
            return $_COOKIE;
        } else {
            return isset($_COOKIE[$key]) ? trim($_COOKIE[$key]) : false;
        }
    }

    /**
     * 生成指定位数的随机码
     * 如果$en_num,$char_num中某个变量为空，则随机码中不包括该类型字符,当该2个变量均为空时,只取指定位数的数字类型
     * @param int $figure 总位数
     * @param int $en_num 字母位数
     * @param int $char_num 字符位数
     * return str
     */
    public static function random_code($figure, $en_num = '', $char_num = '') {
        if ((int) $en_num + (int) $char_num > (int) $figure) {
            return false;
        }
        if (empty($figure)) {
            return false;
        }
        $newstr = "";
        $newcharstr = "";
        if (!empty($en_num)) {
            $zmstr = array("c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
            shuffle($zmstr);
            $newstr = substr(implode("", $zmstr), 0, $en_num);
        }
        if (!empty($char_num)) {
            $charstr = array("@", "#", "-");
            shuffle($charstr);
            $newcharstr = substr(implode("", $charstr), 0, $char_num);
        }
        $digital_num = $figure - $en_num - $char_num;
        $small_str = 2;
        $big_str = 9;
        for ($i = 1; $i < $digital_num; $i++) {
            $small_str .= 0;
            $big_str .= 9;
        }
        $intnum = mt_rand($small_str, $big_str);
        $l_arr = array($newstr, $intnum, $newcharstr);
        return str_shuffle(implode("", $l_arr));
    }

    /**
     * 加密算法
     * @param type $txt
     * @param type $key
     * @return type
     */
    public static function passport_encrypt($txt, $key) {

        // 使用随机数发生器产生 0~32000 的值并 MD5()
        srand((double) microtime() * 1000000);
        $encrypt_key = md5(rand(0, 32000));

        // 变量初始化
        $ctr = 0;
        $tmp = '';

        // for 循环，$i 为从 0 开始，到小于 $txt 字串长度的整数
        for ($i = 0; $i < strlen($txt); $i++) {
            // 如果 $ctr = $encrypt_key 的长度，则 $ctr 清零
            $ctr = $ctr == strlen($encrypt_key) ? 0 : $ctr;
            // $tmp 字串在末尾增加两位，其第一位内容为 $encrypt_key 的第 $ctr 位，
            // 第二位内容为 $txt 的第 $i 位与 $encrypt_key 的 $ctr 位取异或。然后 $ctr = $ctr + 1
            $tmp .= $encrypt_key[$ctr] . ($txt[$i] ^ $encrypt_key[$ctr++]);
        }

        // 返回结果，结果为 passport_key() 函数返回值的 base64 编码结果
        return base64_encode(self::passport_key($tmp, $key));
    }

    /**
     * Passport 解密函数
     *
     * @param                string          加密后的字串
     * @param                string          私有密匙(用于解密和加密)
     *
     * @return       string          字串经过私有密匙解密后的结果
     */
    public static function passport_decrypt($txt, $key) {

        // $txt 的结果为加密后的字串经过 base64 解码，然后与私有密匙一起，
        // 经过 passport_key() 函数处理后的返回值
        $txt = self::passport_key(base64_decode($txt), $key);
        // 变量初始化
        $tmp = '';

        // for 循环，$i 为从 0 开始，到小于 $txt 字串长度的整数
        for ($i = 0; $i < strlen($txt); $i++) {
            // $tmp 字串在末尾增加一位，其内容为 $txt 的第 $i 位，
            // 与 $txt 的第 $i + 1 位取异或。然后 $i = $i + 1
            $tmp .= $txt[$i] ^ $txt[++$i];
        }

        // 返回 $tmp 的值作为结果
        return $tmp;
    }

    /**
     * Passport 密匙处理函数
     *
     * @param                string          待加密或待解密的字串
     * @param                string          私有密匙(用于解密和加密)
     *
     * @return       string          处理后的密匙
     */
    public static function passport_key($txt, $encrypt_key) {

        // 将 $encrypt_key 赋为 $encrypt_key 经 md5() 后的值
        $encrypt_key = md5($encrypt_key);

        // 变量初始化
        $ctr = 0;
        $tmp = '';

        // for 循环，$i 为从 0 开始，到小于 $txt 字串长度的整数
        for ($i = 0; $i < strlen($txt); $i++) {
            // 如果 $ctr = $encrypt_key 的长度，则 $ctr 清零
            $ctr = $ctr == strlen($encrypt_key) ? 0 : $ctr;
            // $tmp 字串在末尾增加一位，其内容为 $txt 的第 $i 位，
            // 与 $encrypt_key 的第 $ctr + 1 位取异或。然后 $ctr = $ctr + 1
            $tmp .= $txt[$i] ^ $encrypt_key[$ctr++];
        }

        // 返回 $tmp 的值作为结果
        return $tmp;
    }

    
     /**
     * _GET,_POST,_COOKIE等的过滤
     * @param str $string
     * @return str
     */
    public static function art_replace($string, $safe_replace = true) {
        $string = preg_replace("/location|script|select|insert|update|delete|union|into|load_file|outfile|\*| and | or /i", " ", $string);
        //过滤html标签
        $new_string = filter_var($string, FILTER_SANITIZE_STRING);
        if (false !== $new_string) {
            $string = $new_string;
        }
        if ($safe_replace) {
            return self::safe_replace($string);
        } else {
            return $string;
        }
    }

    /**
     * 安全过滤
     *
     * @param str $string
     * @return str
     */
    public static function safe_replace($string) {
        $string = str_replace('%20', '', $string);
        $string = str_replace('%27', '', $string);
        $string = str_replace('%2527', '', $string);
        $string = str_replace('*', '', $string);
        $string = str_replace('"', '&quot;', $string);
        $string = str_replace("'", '', $string);
        $string = str_replace('"', '', $string);
//    $string = str_replace(';', '', $string);
        $string = str_replace('<', '&lt;', $string);
        $string = str_replace('>', '&gt;', $string);
        $string = str_replace("{", '', $string);
        $string = str_replace('}', '', $string);
        $string = str_replace('\\', '', $string);


        return $string;
    }
    
}
