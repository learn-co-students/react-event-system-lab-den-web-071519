import React, {Component} from 'react'

export default class Keypad extends Component {
    
    renderMessage(){
        console.log('Entering password...')
    }

    render(){
        return <input type="password" onKeyUp={this.renderMessage}/>
    }
}