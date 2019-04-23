import React, { Component } from 'react'

export default class EyesOnMe extends Component {

     focused = () => {
        console.log('Good!')
    }

     removed = () => {
        console.log('Hey! Eyes on me!')
    }

     render () {
         return (
            <div>
                <button onFocus={this.focused} onBlur={this.removed}>Eyes on Me</button>
            </div>
        ) }

 }
