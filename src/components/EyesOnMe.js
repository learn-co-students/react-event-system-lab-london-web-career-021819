// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  focusFunk = () => {
    console.log('Good!')
  }

  blurFunk = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focusFunk} onBlur={this.blurFunk}></button>
    );
  }

}

export default EyesOnMe;
