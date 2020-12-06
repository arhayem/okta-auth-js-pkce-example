// Support storing environment variables in a file named "cred"
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

// Read environment variables from "cred". Override environment vars if they are already set.
const credentials = path.resolve(__dirname, '..', 'cred');
if (fs.existsSync(credentials)) {
  const envConfig = dotenv.parse(fs.readFileSync(credentials));
  Object.keys(envConfig).forEach((k) => {
    process.env[k] = envConfig[k];
  });
}
process.env.CLIENT_ID = process.env.CLIENT_ID || process.env.ISSUER;

const env = {};

console.log('...building...');
console.log('Client ID: ' + process.env.CLIENT_ID);
console.log('Okta Org Url: ' + process.env.ISSUER;);
process.env.VUE_APP_OKTA_OAUTH2_CLIENT_ID_SPA=process.env.CLIENT_ID;
process.env.VUE_APP_OKTA_CLIENT_ORGURL=process.env.ISSUER;
