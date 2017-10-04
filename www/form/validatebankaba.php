<?php

include_once("form_config.php");

$postData = file_get_contents("php://input");
$postData .= "&c=" . $campaignId . '&key=' . $campaignKey;
$postData .= "&responsetype=json&action=validatebankaba";

$curl = curl_init("https://www.loanmatchingservice.com/misc/?" . $postData);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_USERAGENT, '');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$result = curl_exec($curl);
curl_close($curl);
echo $result;
