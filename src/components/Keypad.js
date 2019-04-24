// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  enteringInput = () => {
    console.log('Entering password...');
}

  render() {
    return (
      <input type="password" onKeyUp={this.enteringInput} />
    )
  }
}





// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.


export default Keypad
