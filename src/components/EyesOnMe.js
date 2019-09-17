// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    render(){
        function focusHandler() {
            console.log('Good!')
        }

        function blurHandler(){
            console.log('Hey! Eyes on me!')
        }


        return(
            <button onFocus={focusHandler} onBlur={blurHandler}></button>
        )
    }
}
