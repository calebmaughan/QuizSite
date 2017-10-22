import React from 'react';
import Base from '../components/Base.js';
import Auth from '../modules/Auth.js';

class BasePage extends React.Component {

  constructor(props) {
    super(props)

    this.deauthenticateUser = this.deauthenticateUser.bind(this);
  }

  deauthenticateUser(event) {
    Auth.deauthenticateUser();
  }

  render() {
    return (
      <Base
        onLogout={this.deauthenticateUser}
      />
    );
  }
}

export default BasePage;
