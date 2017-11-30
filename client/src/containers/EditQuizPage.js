import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Auth2 from '../modules/Auth2.js';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

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

var QUIZ = {
  questions: ["Question1", "Question2", "Question3", "Question4"],
  answers:[
    ["answer1", "answer2", "answer3", "answer4"],
    ["answer5", "answer6", "answer7", "answer8"],
    ["answer9", "answer10", "answer11", "answer12"],
    ["answer13", "answer14", "answer15", "answer16"]
  ]
}

class EditQuizPage extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   questions: [],
    //   answers: [[]]
    // }

    this.state = {
      questions: QUIZ.questions,
      answers: QUIZ.answers
    }

    if (Auth2.getquizID()) {
      console.log(Auth2.getquizID());
    }

    this.addQuestion = this.addQuestion.bind(this);
    this.saveQuiz = this.saveQuiz.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  componentDidMount() {
    // Put db call here
  }

  changeQuestion(event) {
    var questionName = event.target.name;
    var questions = this.state.questions;
    questions[questions.indexOf(questionName)] = event.target.value;

    this.setState({
      questions
    });
  }

  saveQuiz(event) {
    event.preventDefault();

    console.log(this.state.questions);
    console.log(this.state.answers);

    const questions = encodeURIComponent(this.state.questions);
    const answers = encodeURIComponent(JSON.stringify(this.state.answers));
    const form = `questions=${questions}&answers=${answers}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/quizzes');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log(xhr.response.quiz_id);
      }
    });
    xhr.send(form);
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


  render() {
    return(
      <Card className="container" style={{borderRadius: '25px'}}>
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
      <FlatButton
        label={"Save"}
        onClick={this.saveQuiz}
      />
      </Card>
    )
  }
}

export default EditQuizPage;
