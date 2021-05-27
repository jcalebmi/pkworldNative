import React from 'react';
import Auth from '../../Auth.jsx';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id='signIn'>
        <Auth/>
      </div>
    )
  }
}

export default SignIn;