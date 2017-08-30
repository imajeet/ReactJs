import React, {Component} from 'react';
import marked from 'marked';
// import Textarea from './components/textarea';

const rawMarkup = (value) => {
  var rawMarkup = marked(value, {sanitize: true});
  return {__html: rawMarkup};
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'Simple __markdown__ editor by. *[Emmanuel Ndukwe](https://twitter.com/emasys_nd)' +
          '* built with __ReactJS__'
    };

    this.inputChanged = this
      .inputChanged
      .bind(this);
  }

  inputChanged(event) {
    this.setState({input: event.target.value});
    console.log(event.target.value);
  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="bg-light form-group">
              <h4 className="text-center">Input</h4>
              <hr/>
              <textarea
                className="form-control"
                value={this.state.input}
                rows="10"
                onChange={this.inputChanged}></textarea>
              <hr/>
              <p className="text-center">edit this part to see the magic</p>
            </div>
          </div>
          <div className="col-6 bg-light">
            <h4>Output</h4>
            <hr/>
            <div dangerouslySetInnerHTML={rawMarkup(this.state.input)}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
