import { WebAuth } from 'auth0-js';
const auth0 =  new WebAuth({
  domain: 'dev-umg-gh6h.auth0.com',
  clientID: 'JMUoJNev2rLBljfbjUT15AcTt0paLmw4',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid'
});

// if user isn't logged in send them to auth0 for login/signup
export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not get user profile');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('Could not log in');
      }
    });
  });
};
