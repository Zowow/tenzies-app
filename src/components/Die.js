import React from "react";

const Die = (props) => {

    const diceStyles = {
        background: props.dice.isHeld ? "#59E391" : "white",
    }

    const dotStyles = {
        backgroundColor: props.dice.isHeld ? "white" : "black"
    }

    // Dice Face
    const diceOne = (value) => {
        if(value === 1){
            return (
                <div class="dice first-face" >
                    <span class="dot" style={dotStyles}></span>
                </div>
            )
        }else if (value === 2){
            return (
                <div class="dice second-face">
                    <span class="dot" style={dotStyles}> </span>
                    <span class="dot" style={dotStyles}> </span>
                </div>
            )
        }else if (value === 3){
            return(
            <div class="dice third-face">
                <span class="dot" style={dotStyles}></span>
                <span class="dot" style={dotStyles}></span>
                <span class="dot" style={dotStyles}></span>
            </div>
            )
        }else if (value === 4) {
            return (
            <div class="dice fourth-face">
                <div class="column">
                    <span class="dot" style={dotStyles}></span>
                    <span class="dot" style={dotStyles}></span>
                </div>
                <div class="column">
                    <span class="dot" style={dotStyles}></span>
                    <span class="dot" style={dotStyles}></span>
                </div>
            </div>
            )
        }else if (value === 5) {
            return (
                <div class="fifth-face dice">
                    <div class="column">
                        <span class="dot" style={dotStyles}></span>
                        <span class="dot" style={dotStyles}></span>
                    </div>
                    
                    <div class="column">
                        <span class="dot" style={dotStyles}></span>
                    </div>
                    
                    <div class="column">
                        <span class="dot" style={dotStyles}></span>
                        <span class="dot" style={dotStyles}></span>
                    </div>
                </div>
            )
        }else{
            return(
                <div class="fourth-face dice">
                    <div class="column">
                        <span class="dot" style={dotStyles}></span>
                        <span class="dot" style={dotStyles}></span>
                        <span class="dot" style={dotStyles}></span>
                    </div>
                    <div class="column">
                        <span class="dot" style={dotStyles}></span>
                        <span class="dot" style={dotStyles}></span>
                        <span class="dot" style={dotStyles}></span>
                    </div>
                </div>
            )
        }

        
    }

    // end of Dice Face

    return (
        
        <div 
            onClick={props.holdDice} 
            className="dices" 
            style={diceStyles}
        >
            {diceOne(props.dice.value)}
        </div>
    )
}

export default Die