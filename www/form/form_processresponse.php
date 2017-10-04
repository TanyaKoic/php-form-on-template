<?php

function formProcessResponse($result, $leadtypeid) {
  $resultObj = json_decode($result);

  $customDeclineRoute = false;

  if (!defined('JSON_UNESCAPED_SLASHES'))
    define('JSON_UNESCAPED_SLASHES', 64);

  if ($resultObj->Result == 0) {
    $resultObj->RedirectURL = NULL;
    return json_encode($resultObj, JSON_UNESCAPED_SLASHES);
  }

  if ($resultObj->Result == 2
        && isset($declineUrl)
        && strlen($declineUrl) > 0) {
    $resultObj->RedirectURL = $declineUrl;
    $result = json_encode($resultObj, JSON_UNESCAPED_SLASHES);
    $customDeclineRoute = true;
  }

  if ($leadtypeid == 44 && !$customDeclineRoute) {
      if (strlen($resultObj->RedirectURL) > 0) {
        $resultObj->RedirectURL = $personalLoanOffersPage . $resultObj->LeadID;
      }
      $result = json_encode($resultObj, JSON_UNESCAPED_SLASHES);
  }

  return $result;
}
