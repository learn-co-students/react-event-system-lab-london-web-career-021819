// Code EyesOnMe Component Here
import React, { Component } from 'react';
export default class EyesOnMe extends Component {

  consoleFocus = () => {
    console.log('Good!')
  }

  consoleBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.consoleFocus} onBlur={this.consoleBlur}></button>
    )
  }

}
