import React from 'react';
import Auth from '../modules/Auth';
import QuizList from '../components/QuizList.js';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


class QuizListPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quizList: []
    };
    this.onView=this.onView.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }


  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/users/'+Auth.getUserId());
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log(xhr.response.quizList);
        this.setState({
          quizList: xhr.response.quizList
        });
      }
    });
    xhr.send();
  }
  onView(id){
    console.log('Bout to view ' + id);
  }
  onEdit(id) {

    console.log('You gon edit dis here quiz ' + id);
  }

  onStart(event) {
    console.log('Start la quiz');
  }

  render() {
    return (
      <QuizList
        quizList = {this.state.quizList}
        onView={this.onView}
        onStart = {this.onStart}
        onEdit = {this.onEdit}
      />
    );
  }
};

export default QuizListPage;