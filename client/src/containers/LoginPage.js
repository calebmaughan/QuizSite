import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.js';
import Auth from '../modules/Auth.js';
import Auth2 from '../modules/Auth2.js';


class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email:    '',
        name:     '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    var field = event.target.name;
    var user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  processForm(event) {
    event.preventDefault();

    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // This is an AJAX request to our backend
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';

    // This allows for asynchronous acess of data
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        // change the component state

        this.setState({
          errors: {}
        });

        Auth.authenticateUser(xhr.response.token, xhr.response.user.id);
        this.props.history.push('/');
      } else {
        // failure
        console.log(errors);
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;
        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  render() {
    if(Auth2.getRunning() == '1'){
      Auth2.setRunning('0');
      window.location.reload();
    }
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
