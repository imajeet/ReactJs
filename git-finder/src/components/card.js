import React, {Component} from 'react';
import {Card, CardHeader, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

// const URL_PERSONAL = 'https://api.github.com/users/';
class CardBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      user: '',
      personal: {
        still: "working on this"
      },
      city: 'lagos',
      language: 'html',
      open: false
    };

  }

  handleOnChange = (event) => {
    this.setState({city: event.target.value});
    console.log(this.state.city);
  }

  handleLang = (event) => {

    this.setState({language: event.target.value});
    console.log(this.state.language);

  }
  componentDidMount = async() => {
    let URL_USERS = `https://api.github.com/search/users?q=location:${this.state.city}+language:${this.state.language}`;
    const res = await fetch(URL_USERS, {method: 'GET'})
    const json = await
    res.json();
    this.setState({user: json})
  }

  generateCards = () => {
    let cards = this.state.user.items;
    let rank = 1;

    if (cards) {
      return (cards.map((items) => {
        return (
          <div key={items.id}>
            <Card>
              <CardHeader
                title={items.login}
                subtitle={"Rank: " + rank++}
                avatar={items.avatar_url}/>
              <CardActions className="text-center">
                <RaisedButton
                  href={items.html_url}
                  target="_blank"
                  label="Github Page"
                  secondary={false}
                  style={styles.button}
                  icon={< FontIcon className = "muidocs-icon-custom-github" />}/>
              </CardActions>
            </Card>
          </div>
        )
      }))
    }

  }
  handleTouchTap = () => {
    this.setState({open: true});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <AppBar
          title="Top Developers"
          style={{
          "cursor": "pointer"
        }}
          onTitleTouchTap={this.handleTouchTap}
          iconElementLeft={< IconButton > </IconButton>}/>

        <div style={{
          "padding": "20px 0 50px 0"
        }}>
          <div className="header">
            Find worldclass developers around you
          </div>
          <Snackbar
            open={this.state.open}
            message="made by eMASYS, twitter: @emasys_nd"
            autoHideDuration={6000}
            onRequestClose={this.handleRequestClose}/>
          <TextField
            hintText="lagos"
            fullWidth={true}
            floatingLabelText="city or country"
            onChange={this.handleOnChange}/>
          <br/>
          <TextField
            hintText="php"
            fullWidth={true}
            floatingLabelText="language eg: kotlin"
            onChange={this.handleLang}/><br/>
          <RaisedButton label="search" onClick={this.componentDidMount}/>

        </div>
        {this.generateCards()}
      </div>

    );
  }
}

export default CardBlock;
