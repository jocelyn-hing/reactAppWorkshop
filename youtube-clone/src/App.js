import React, { Component } from 'react';
import './App.css';
import DogPhoto from './kahvi.png';

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



class AddRemoveSubscriber extends Component {
  render() {
    const {numSubscribers, onSubscriberUpdate}= this.props;
    return (
      <div>
        <button 
          onClick={() => onSubscriberUpdate(numSubscribers + 1)}
        >
          Subscribe!
        </button>
        <button 
          onClick={() => onSubscriberUpdate(numSubscribers - 1)}
        >
          Unsubscribe
        </button>
    </div>
    );
  }
}

class VideoThumbnail extends Component {
  render() {
    return (    
    <div>
      <h2> {this.props.title} {this.props.views} </h2>
      <img src={this.props.thumbnail}/>
    </div>);
  }
}

class App extends Component{

  constructor() {
    super();
    this.handleSubscriberUpdate = this.handleSubscriberUpdate.bind(this);
    this.state = { numSubscribers: 0 };
  }

  handleSubscriberUpdate(numSubscribers) {
    this.setState({
      numSubscribers
    });
  }

  render () {
    const { numSubscribers} = this.state;
    return (
      <div className="App">
        <h1>Welcome to YooTube.</h1>
        <SubscriberCounter numSubscribers={numSubscribers}/>
        <AddRemoveSubscriber 
          numSubscribers={numSubscribers}
          onSubscriberUpdate={this.handleSubscriberUpdate}
        />
        <VideoThumbnail 
          title={"Doggo Video"}
          views={1000} 
          thumbnail={DogPhoto} 
        />
      </div>
    );
  }

}

export default App;
