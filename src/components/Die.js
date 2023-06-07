import React from "react";

const Die = (props) => {

    const styles = {
        background: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div className="dice" style={styles}>
            <h2 className="dice-num" >{props.value}</h2>
        </div>
    )
}

export default Die