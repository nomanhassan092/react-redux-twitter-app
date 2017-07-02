import React from 'react';
import {connect} from 'react-redux';
import * as twitterActions from './actions/twitterActions.js';
import {Tweets} from './components/tweets.js';
import io from 'socket.io-client';


var socket=io;
socket=io.connect('http://localhost:4001/',{reconnect:true});
console.log('connection with server established');

class Twitterstream extends React.Component {

  componentWillMount(){
    this.props.dispatch(twitterActions.updateStatus('empty'));
  }

  componentDidMount(){
    
    console.log('status atm is '+this.props.status);
    socket.on('retdata',data=>{
      if(data.length>0){
        this.props.dispatch(twitterActions.updateStatus('available'));
      }else{
        this.props.dispatch(twitterActions.updateStatus('error'));
      }

      console.log('status atm is '+this.props.status);
     // console.log(data);
     // console.log(typeof(data));

      this.props.dispatch(twitterActions.updateTweets(data));
      this.forceUpdate();
    });

   // console.log(this.props.tweets);
   // console.log(this.props.kyword);
  }

  componentWillUnmount(){
    socket.disconnect();
  }
  
  constructor(){
    super();

    this.state={
      keyword:""
    };
  }

  handleClickSearch=()=>{
    this.props.dispatch(twitterActions.updateStatus('loading'));
    console.log('status atm is '+this.props.status);
    const {keyword} = this.state;
    console.log("keyword value is "+keyword);
    this.props.dispatch(twitterActions.updateKeyword(keyword));
    socket.emit('key',this.props.kyword);
  }

  handleChangeKeyword = e => {
    this.setState({
      keyword:e.target.value
    });
  }

  tweetRow(tweet,index){
    return <div key={index}>{tweet}</div>
  }

   render() {
    return (
      <Tweets status={this.props.status} tweets={this.props.tweets} keyword={this.props.kyword} onClickSearch={this.handleClickSearch} onChangeKeyword={this.handleChangeKeyword} />
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    tweets: state.tweets_r,
    kyword: state.keyword_r,
    status: state.status_r
  };
}

export default connect(mapStateToProps)(Twitterstream);