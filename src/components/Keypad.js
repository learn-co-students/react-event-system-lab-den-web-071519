import React, {Component} from 'react'

class Keypad extends Component{

    displayText(){
        console.log(("Entering password..."))
    }

    render(){
        return(
            <input type="password" onKeyUp={this.displayText}/>
        )
    }
}

export default Keypad