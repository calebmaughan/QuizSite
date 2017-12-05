import React from 'react';
import Auth from '../modules/Auth';
import Auth2 from '../modules/Auth2';
import QuizList from '../components/QuizList.js';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ResultAuth from '../modules/ResultAuth.js';
import ResultsPage from '../containers/ResultsPage.js';

class QuizListPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quizList: []
    };

    Auth2.removeQuizId();

    this.onView = this.onView.bind(this);
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
    ResultAuth.setquizID(id);
  //this.props.history.push('/result');
  }
  onEdit(id) {
    console.log('You gon edit dis here quiz ' + id);
    Auth2.setquizID(id);
  }

  onStart(id) {
    var id1 = Math.floor(Math.random()*(99999 - 11111 + 1)) + 1;
    var id2 = id1.toString();
    //console.log('Start la quiz ' + id);
    Auth2.setQuizQuestion(0);
    Auth2.setquizID(id);
    const changeAccess = encodeURIComponent(id2);
    // const published = encodeURIComponent(true);
    // var form = `isPublished=${published}`;
    // const xhr = new XMLHttpRequest();
    // xhr.open('put', '/quizzes/' + Auth2.getquizID() + '/publish');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     console.log("200 status");
    //   }
    // });
    // xhr.send(form);
    //change access id
    var form1 = `quizAccessID=${changeAccess}`;
    const xhr1 = new XMLHttpRequest();
    xhr1.open('put', '/quizzes/' + Auth2.getquizID() + '/newAccess');
    xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr1.responseType = 'json';
    xhr1.addEventListener('load', () => {
      if (xhr1.status === 200) {
        console.log("200 status");
      }
    });
    xhr1.send(form1);
  }

  render() {
    Auth2.setOneReload('0');
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
