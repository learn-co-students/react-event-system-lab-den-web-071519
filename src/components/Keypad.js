// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    render(){
        function checkKey() {
            console.log('Entering password...')
        }

        return(
            <input onKeyUp={checkKey} type="password"></input>
        )
    }
}
