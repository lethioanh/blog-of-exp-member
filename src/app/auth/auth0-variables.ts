interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'b25gHkopmNFndAZg4pHuxJoUQ9ZKJJLn',
  domain: 'oanhle-blogger.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
