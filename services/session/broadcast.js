import React from 'react';

const broadcast =  function broadcast(params){
    
    //first listen for any communication received 

    //when state changes, broadcast the changes 
    const channel = new BroadcastChannel('state-info');
    let stateData = this.state;

    if(!stateData){
      return; 
    }
    else if(stateData){
      channel.postMessage(stateData);

    }

    channel.onmessage = function(e){

      //update state data received
      let bc_items = e.data;
      this.setState({bc_items});
    }

    channel.close();
  }

export default broadcast;