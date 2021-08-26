import React from "react";
import Square from "./square";

export default function squaresWrapper(props) {
    const makeOneHundredSquares = () => {
        const squaresArray = []
        for (let i=0; i<190; i++) {
            squaresArray.push(
                <Square id={i} />
            )
        }
        return squaresArray
    }

    return (
        <div className="squares-wrapper">
            {makeOneHundredSquares()}
        </div>
    )
}