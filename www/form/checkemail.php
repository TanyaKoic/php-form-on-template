<?php

include_once("form_config.php");

$postData = file_get_contents("php://input");
$postData .= "&cid=" . $campaignId . '&key=' . $campaignKey;
$postData .= "&responsetype=json&action=qrymail";

$clientIP = $_SERVER['REMOTE_ADDR'];
if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER)) {
    $clientIP = array_pop(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']));
}

$postData .= "&ClientIP=" . $clientIP;

$curl = curl_init("https://www.loanmatchingservice.com/misc/?" . $postData);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_USERAGENT, '');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$result = curl_exec($curl);
curl_close($curl);
echo $result;
