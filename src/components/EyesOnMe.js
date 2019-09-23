import React, { Component } from 'react'

class EyesOnMe extends Component {

    focusFriend = () => {
        console.log('Good!')
    }

    payAttention = () => {
        console.log('Hey! Eyes on me!')
    }


    render(){
        return(
            <div>
                <button onFocus={this.focusFriend} onBlur={this.payAttention}>
                    Eyes on me!
                </button>
            </div>
        )
    }
}

export default EyesOnMe;