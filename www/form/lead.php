<?php
    include_once("form_config.php");
    include_once("form_processresponse.php");

    $_values = $_POST;

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      $postData = file_get_contents("php://input");
    } else {
      $postData = $_SERVER["QUERY_STRING"];
      $_values = $_GET;
    }

    if (!isset($_SERVER["HTTP_REFERER"])) {
      exit();
    }

    $leadtypeid = 9;
    $requestedAmount = intval($_values['RequestedAmount']);
    $campaignIdPost = $campaignId;
    $campaignKeyPost = $campaignKey;
    if ($requestedAmount > 1000) {
      $leadtypeid = 19;
    }
    if ($requestedAmount > 3500) {
      $leadtypeid = 44;
      $campaignIdPost = $campaignIdPersonal;
      $campaignKeyPost = $campaignKeyPersonal;
    }

    /* adding client IP */
    $clientIP = $_SERVER['REMOTE_ADDR'];
    if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER)) {
        $clientIP = array_pop(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']));
    }
    $postData .= "&ClientIP=" . $clientIP;

    $postData .= "&ClientUserAgent=" . $_SERVER['HTTP_USER_AGENT'];
    $postData .= "&ClientURL=" . $_SERVER["HTTP_REFERER"];
    $postData .= "&CampaignID=" . $campaignIdPost . '&CampaignKey=' . $campaignKeyPost;
    $postData .= '&responsetype=json&ResponseAsync=1';

    $curl = curl_init("https://www.loanmatchingservice.com/post/data.aspx");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HEADER, 0);
    curl_setopt($curl, CURLOPT_USERAGENT, '');
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_POST, count($postData));
    curl_setopt($curl, CURLOPT_POSTFIELDS, $postData);

    $result = curl_exec($curl);
    curl_close($curl);

    echo formProcessResponse($result, $leadtypeid);
