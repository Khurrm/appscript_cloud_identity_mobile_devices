//https://coltoneshaw.com/simple-oauth-in-google-apps-script/
//https://www.labnol.org/code/20375-service-accounts-google-apps-script
//https://www.labnol.org/

var JSON = {
  private_key: "-----BEGIN PRIVATE KEY-----"XXXXXXXXXXXXXXXXXXXXXXXXXXXlcUhg5z8i14p2Jyqt2U8RHI9VJ1Ai4J+FJgjQOkOWJyujwLZc\nbEwYCWHvIwSxqyU4jUn2vaYn4YNlTsIEicJdcX0n99pqS4Z/kJWc/" +
"nL4sMUuBY4CTM5CdqP3Wnx8VWkGLceDtFOczo22JRpnQ\nSH/krf9N+XHJCXLpqtiN9/B2\n"-----END PRIVATE KEY-----\n",
  client_email: 'testXXXXXXXXXXX@febXXXXXXX.iam.gserviceaccount.com',
  client_id: '113869XXXXXXXXXXX',
  user_email: "XXXXXXXX",
  baseURL : "https://cloudidentity.googleapis.com/v1/device"
  
};

function getOAuthService(user) {
  return OAuth2.createService('Service Account')
    .setAuthorizationBaseUrl('https://accounts.google.com/o/oauth2/auth')
    .setTokenUrl('https://accounts.google.com/o/oauth2/token')
    .setClientId(JSON.client_id)
    //.setClientSecret(JSON.client_secret)
    .setIssuer(JSON.client_email)
    .setSubject(JSON.user_email)
    // Set the name of the callback function in the script referenced
      // above that should be invoked to complete the OAuth flow.
    .setCallbackFunction('authCallback')
    .setPropertyStore(PropertiesService.getScriptProperties())
    .setParam('access_type', 'offline')
    .setCallbackFunction('authCallback')
    .setPropertyStore(PropertiesService.getUserProperties())
    .setScope('https://www.googleapis.com/auth/cloud-identity.devices')
    .setGrantType('authorization_code')
    .setParam('access_type', 'offline')
    .setParam('prompt', 'consent');
}

/**
 * Logs the redirect URI to register.
 */
function logRedirectUri() {
  const Authservice = getOAuthService();
const authorizationUrl = Authservice.getAuthorizationUrl();
console.log(authorizationUrl)
  
}

