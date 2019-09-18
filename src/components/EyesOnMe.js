import React, { Component } from 'react';

export class EyesOnMe extends Component {

    handleFocus = () => {
        console.log('Good!')
    }
    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button onBlur={this.handleBlur} onFocus={this.handleFocus}>Focus or Blur?</button>
            </div>
        )
    }
}

export default EyesOnMe
