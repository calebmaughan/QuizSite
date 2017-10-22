import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.js'

class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      quizList: []
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/users/'+Auth.getUserId());
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.name,
          quizList: xhr.response.quizList
        })
      }
    });
    xhr.send();
  }

  render() {
    return (<Dashboard secretData={this.state.secretData} />);
  }
}

export default DashboardPage;
