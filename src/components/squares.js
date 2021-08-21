import React, { Component } from "react";
import Square from "./square";
// this page will layout all the squares on the page as well as handle the color change
export default class Squares extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     squareColor: [0,0,0]
        // }

        // this.changeColor = this.changeColor.bind(this)
    }

    // changeColor() {
    //     this.setState({})
    // }

    render() {
        return (
            <Square />   
        )
    }
}