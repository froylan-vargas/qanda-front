export const server = 'https://localhost:7038';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'yourDomian',
  client_id: 'yourClientId',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'yourAudience',
};
