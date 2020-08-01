import React, { Component } from 'react';
import './App.css';

class SubscriberCounter extends Component {
  render() {
    const {numSubscribers}= this.props;

    return (
    <h3>
      You have {numSubscribers} {numSubscribers === 1 ? ' subscriber' : 'subscribers'}!
    </h3>
    );
  }

}

class App extends Component{
  render () {
    return (
      <div className="App">
        <h1>Welcome to YooTube.</h1>
        <SubscriberCounter numSubscribers={0}/>
      </div>
    );
  }

}

export default App;
