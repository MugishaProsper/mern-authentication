import React from 'react';
import { GoogleLogin } from 'react-google-login';

const client_secret = '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'
const clientId = ''; // Replace with your client ID

const Oauth = () => {
  const onSuccess = (response) => {
    console.log('Login Success: current user:', response.profileObj);
    // You can save the user data to your state or context here
  };

  const onFailure = (response) => {
    console.error('Login Failed: res:', response);
  };

  return (
    <div>
      <h2>Google Login Example</h2>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Oauth;
