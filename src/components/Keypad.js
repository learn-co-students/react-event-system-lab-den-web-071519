import React, { Component } from 'react'

class Keypad extends Component {

    listenForPassword = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <div>
                <input type="password" onKeyUp={this.listenForPassword}/>
            </div>
        )
    }
}

export default Keypad;