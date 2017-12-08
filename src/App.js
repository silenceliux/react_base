import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './views/welcome/welcome';
import Page from './views/page/page';
class App extends Component {
    handleEmail(event){
        console.log(this);
        console.log(event.target.value);
        this.email = event.target.value;
    }
  render() {
      //this.setState({email:""});
    return (
        <div>
          <Welcome logo = {logo}  handleEmail={this.handleEmail}/>
          <Page  stateValue="1234"/>
        </div>
    );
  }
}

export default App;
