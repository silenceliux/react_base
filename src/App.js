import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './views/welcome/welcome';
import Page from './views/page/page';
class App extends Component {
    handleEmail(event){
        //console.log(this);
        //console.log(event.target.value);
        this.setState({email: event.target.value});
    }
  render() {
    return (
        <div>
          <Welcome logo = {logo}  handleEmail={this.handleEmail.bind(this)}/>
          <Page  stateValue = {this.state ? this.state.email:""}/>
        </div>
    );
  }
}

export default App;
