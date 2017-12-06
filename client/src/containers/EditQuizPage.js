import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import BrowserHistory from 'history';
import Auth from '../modules/Auth.js';
import Auth2 from '../modules/Auth2.js';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

class QuestionEdit extends React.Component {
    render() {
      const question = this.props.question;
      const answers = this.props.answers;
      const changeQuestion = this.props.changeQuestion;
      const changeAnswer = this.props.changeAnswer;
      return(
        <div>
          <Card className='container' style={{borderRadius: '25px'}}>

            <div className="field-line">
              <TextField
                floatingLabelText="Question"
                name={question}
                errorStyle={{color: '#A10559'}}
                onChange={changeQuestion}
                value={question}
              />
          </div>

            <div className="field-line">
              <TextField
                floatingLabelText="Answer 1"
                name={answers[0]}
                errorStyle={{color: '#A10559'}}
                onChange={(event) => this.props.changeAnswer(event, question)}
                value={answers[0]}
              />
            </div>

            <div className="field-line">
              <TextField
                floatingLabelText="Answer 2"
                name={answers[1]}
                errorStyle={{color: '#A10559'}}
                onChange={(event) => this.props.changeAnswer(event, question)}
                value={answers[1]}
              />
            </div>

            <div className="field-line">
              <TextField
                floatingLabelText="Answer 3"
                name={answers[2]}
                errorStyle={{color: '#A10559'}}
                onChange={(event) => this.props.changeAnswer(event, question)}
                value={answers[2]}
              />
            </div>

            <div className="field-line">
              <TextField
                floatingLabelText="Answer 4"
                name={answers[3]}
                errorStyle={{color: '#A10559'}}
                onChange={(event) => this.props.changeAnswer(event, question)}
                value={answers[3]}
              />
            </div>

            <FlatButton label='Close' onClick={this.props.onClick}/>

          </Card>
        </div>
      );
    };
}

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayEdit: false
    };

    this.sayhi = this.sayhi.bind(this);
  }

  sayhi(temp) {
    if(this.state.displayEdit == false){
      this.setState({displayEdit : true});
    } else {
      this.setState({displayEdit : false})
    }
  }

  render() {
    const question = this.props.question;
    const answers = this.props.answers;
    // console.log(answers);
    return(
      <div>
        { this.state.displayEdit ? (
          <QuestionEdit
            question={question}
            answers={answers}
            onClick={this.sayhi}
            changeQuestion={this.props.changeQuestion}
            changeAnswer={this.props.changeAnswer}
          />
        ) : (
          <a onClick={this.sayhi}>{question}</a>
        )}
      </div>
    )
  }
}

function makeAPIRequest(type, path, form) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(type, path);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';

    xhr.addEventListener('load', ()=> {
      resolve({status: xhr.status, response: xhr.response});
    });
    xhr.send(form);
  });
};

function makeAPIRequestAuth(type, path, form) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(type, path);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);

    xhr.responseType = 'json';

    xhr.addEventListener('load', ()=> {
      resolve({status: xhr.status, response: xhr.response});
    });
    xhr.send(form);
  });
}

class EditQuizPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      answers: [[]],
      isLoading: true
    }

    this.addQuestion = this.addQuestion.bind(this);
    this.saveQuiz = this.saveQuiz.bind(this);
    this.deleteQuiz = this.deleteQuiz.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  componentDidMount() {
    if (Auth2.getquizID() != null) {
      const xhr = new XMLHttpRequest();
      xhr.open('get', '/quizzes/'+Auth2.getquizID());
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';

      xhr.addEventListener('load', ()=> {
        // resolve({status: xhr.status, response: xhr.response});
        console.log(xhr.response);
        this.setState({
          questions : xhr.response.questions,
          answers : xhr.response.answers,
          title: xhr.response.title,
          isLoading : false
        })
      });
      xhr.send();
    } else {
      this.setState({
        questions: [],
        answers: [],
        title: '',
        isLoading: false
      })
    }
  }

  changeTitle(event) {
    this.setState({
      title: event.target.value
    })
  }

  changeQuestion(event) {
    var questionName = event.target.name;
    var questions = this.state.questions;
    questions[questions.indexOf(questionName)] = event.target.value;

    this.setState({
      questions
    });
  }

  changeAnswer(event, question) {
    var index = this.state.questions.indexOf(question);

    var answerName = event.target.name;
    var answers = this.state.answers;
    answers[index][answers[index].indexOf(answerName)] = event.target.value;

    this.setState({
      answers
    });
  }

  addQuestion(id) {
    var joinedQuestions = this.state.questions.concat('New Question');

    var newAnswers = [["", "","",""]];
    var joinedAnswers = this.state.answers.concat(newAnswers);

    this.setState({
      questions : joinedQuestions,
      answers : joinedAnswers
    });
  }

  saveQuiz(event) {
    event.preventDefault();

    this.setState({
      isLoading: true
    })

    const questions = encodeURIComponent(JSON.stringify(this.state.questions));
    const answers = encodeURIComponent(JSON.stringify(this.state.answers));
    const title = encodeURIComponent(this.state.title);
    var form = `questions=${questions}&answers=${answers}&title=${title}`;

    if (Auth2.getquizID() == null) {
      makeAPIRequest('post', '/quizzes', form).then(function(quizResponse) {
        if (quizResponse.status === 200) {
          let quiz_id = quizResponse.response.quiz_id
          quiz_id = encodeURIComponent(quiz_id);
          form = `quiz_id=${quiz_id}&title=${title}`;
          makeAPIRequestAuth('put', '/users/'+Auth.getUserId()+'/addQuiz', form)
            .then(function(userResponse) {
              console.log(userResponse);
            });
        }
      });
    } else {
      makeAPIRequest('put', '/quizzes/'+Auth2.getquizID(), form).then(function(quizResponse) {
        if (quizResponse.status === 200) {
          let quiz_id = quizResponse.response.quiz_id
          quiz_id = encodeURIComponent(quiz_id);
          form = `quiz_id=${quiz_id}&title=${title}`;
          makeAPIRequestAuth('put', '/users/'+Auth.getUserId()+'/addQuiz', form)
            .then(function(userResponse) {
              console.log(userResponse);
            });
          }
        });
      }

      window.location = '/';
}

  deleteQuiz(event) {

    this.setState({
      isLoading: true
    })

    makeAPIRequest('delete', '/quizzes/'+Auth2.getquizID(), null)
      .then(function(response) {
        window.location = '/';
        makeAPIRequestAuth('delete', '/users/'+Auth.getUserId()+'/deleteQuiz/'+Auth2.getquizID(), null)
      });
  }


  render() {
    Auth2.setOneReload('0');
    return(
      <div>
        { this.state.isLoading ? (
          <Card className="container" style={{borderRadius: '25px'}}>
            <CircularProgress/>
          </Card>
        ) : (
          <Card className="container" style={{borderRadius: '25px'}}>

              <div className="field-line">
                <TextField
                  floatingLabelText="Title"
                  name={this.state.title}
                  errorStyle={{color: '#A10559'}}
                  onChange={this.changeTitle}
                  value={this.state.title}
                />
            </div>

            {this.state.questions.map((question,i) => (
              <div key={i}>
                <QuestionCard
                  question={question}
                  answers={this.state.answers[i]}
                  changeQuestion={this.changeQuestion}
                  changeAnswer={this.changeAnswer}
                />
              </div>
            ))}


            <FlatButton
              label={"Add Question"}
              onClick={this.addQuestion}
            />
<<<<<<< HEAD

          <Link to='/'>
            <FlatButton
              label={"Save"}
              onClick={this.saveQuiz}
            />
          </Link>

          <FlatButton
            label={"Delete"}
            onClick={this.deleteQuiz}
          />
          </Card>
        )}
      </div>
=======
          </div>
        ))}
        <FlatButton
          label={"Add Question"}
          onClick={this.addQuestion}
        />

      <Link to='/'>
        <FlatButton
          label={"Save"}
          onClick={this.saveQuiz}
        />
      </Link>

      <FlatButton
        label={"Delete"}
        onClick={this.deleteQuiz}
      />
      <div><Link to='/take'>Take Quiz</Link></div>
      </Card>

>>>>>>> 002ae5cf2954feaa3f6ec5c63759794bfbacadd4
    )
  }
}

export default EditQuizPage;
