import React, {Component} from "react";

export default class Square extends Component {
    constructor() {
        super();

        this.state ={
            color: {backgroundColor: "#000000"}
        }

        this.generateRandomColor = this.generateRandomColor.bind(this)
    }

    generateRandomColor() {
        const hex = '0123456789abcdefABCDEF'
        let randomList = '#'
        for (let i=0 ; i<6 ; i++) {
            let random = hex[Math.floor(Math.random() * hex.length)]
            randomList += random
        }
        
        this.setState({
           color: {backgroundColor: randomList}
        })
    }

    render() {
        return (
            <div className="square-container" style={this.state.color} id={this.props.id} onMouseOver={this.generateRandomColor}>
            </div>
        );
    }
}