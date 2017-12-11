import React, { Component } from 'react';
class Welcome extends Component {

    constructor(props,sate){
        super(props);
        //this.handleEmail = this.props.handleEmail;
        //this.handleEmail = this.props.handleEmail.bind(sate);
        //this.state = {email: ''};
    }

    render() {
        //let value = this.state.email;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={this.props.logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>北京时间</p>
                <div>
                    请输入邮箱：<input  onChange={this.props.handleEmail}/>
                </div>
            </div>
        );
    }
}

export default Welcome;

