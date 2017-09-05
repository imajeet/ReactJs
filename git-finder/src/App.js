import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Card from './components/card';

class App extends Component {

  render() {
    return (
      <div className="main">

        <MuiThemeProvider>
          <Card/>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
