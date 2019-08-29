const redirect = require('micro-redirect');

import config from '../../../helpers/stripe';

export default (req, res) => {
  let clientId = config.stripe.clientId;
  let state = '';

  const redirect_uri = 'http://localhost:3000/stripe/callback';
  const location = `https://connect.stripe.com/express/oauth/authorize?response_type=code&redirect_uri=${redirect_uri}&client_id=${clientId}&state=${state}&scope=read_write`;

  redirect(res, 302, location);
};