export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://your-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://your-backend-staging.azurewebsites.net'
    : 'https://localhost:7038';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'yourDomian',
  client_id: 'yourClientId',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'yourAudience',
};
