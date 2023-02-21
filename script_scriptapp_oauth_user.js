function listMobileDevices_CloudIdentity() {
  var url = 'https://cloudidentity.googleapis.com/v1/devices';
  var token = ScriptApp.getOAuthToken();
  console.log(token)

  /*var response = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  var result = JSON.parse(response.getContentText());
  result.siteEntry.forEach(function(siteEntry) {
    Logger.log(siteEntry.siteUrl);
  });
*/
}