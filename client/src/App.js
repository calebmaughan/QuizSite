import React    from 'react';
import Request  from 'superagent';
import _        from 'lodash';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    var url = "http://localhost:3001/users";
    Request.get(url).then((response) => {
      this.setState({
        names: response.body,
        total: response.length
      });
    });
  }

  render() {
    var names = _.map(this.state.names, (name) => {
      return <li key="">{name.name}</li>;
    });
    return (
      <div className="App">
        <ul>{names}</ul>
      </div>
    );
  }
}

export default App;
