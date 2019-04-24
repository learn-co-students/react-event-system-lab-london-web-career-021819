// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  funky = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.funky} type="password" />
    );
  }

}

export default Keypad;
