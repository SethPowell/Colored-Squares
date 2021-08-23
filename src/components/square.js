import React, {Component} from "react";
import colorFunc from "./colorFunc";
// this page will just hold the layout for the actual square object
export default class Square extends Component {
    constructor(props) {
        super(props);

        this.state ={
            style: {backgroundColor: "#000000"}
        }

        this.changeColor = this.changeColor.bind(this)
    }

    changeColor() {
        colorFunc()
        this.setState({
            style: {backgroundColor: `${randomList}`}
        })
    }

    render() {
        return (
            <div className="square-container" style={this.state.style} onMouseEnter={() => this.changeColor()}>
            </div>
        );
    }
}