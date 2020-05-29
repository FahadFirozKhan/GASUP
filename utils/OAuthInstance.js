import OAuthManager from 'react-native-oauth';
import { githubClientId, githubClientSecret } from './AppConstants';


const config =  {
  github: {
    client_id: githubClientId,
    client_secret: githubClientSecret
  }
}
// Create the manager
const manager = new OAuthManager('gasup');
// configure the manager
manager.configure(config);

export default manager;