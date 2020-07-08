import { AuthConfig } from 'src/app/core/security/auth.service';

export const environment = {
  production: false,
  music: {
    search_url: 'https://api.spotify.com/v1/search'
  },
  auth: {
    auth_url: 'https://accounts.spotify.com/authorize',
    client_id: '712b9b77b62e412fa3a193b0f2b1bc56',
    redirect_uri: 'http://localhost:4200/',
    response_type: 'token',
    scope: [
      'playlist-modify-private',
      'playlist-read-private'
    ],
    show_dialog: 'true',
    state: 'placki'
  } as AuthConfig
};
