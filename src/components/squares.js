import React, { Component } from "react";
import { createDispatchHook } from "react-redux";
import Square from "./square";
// this page will layout all the squares on the page as well as handle the color change
export default class Squares extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squareColor: [0,0,0]
        }

        this.changeColor = this.changeColor.bind(this)
        this.makeOneHundredSquares = this.makeOneHundredSquares.bind(this)
    }

    changeColor() {
        this.setState({})
    }

    makeOneHundredSquares() {
        for (let i=0; i<100; i++) {
            return <Square />
        }
        
    }

    render() {
        return (
            <div className="squares-container">
                {makeOneHundredSquares()}
            </div>
        )
    }
}