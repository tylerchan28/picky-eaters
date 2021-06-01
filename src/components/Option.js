import React from "react";
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText} </p>    
        <button 
            className="button button--link"
            onClick={() => props.handleDeleteOption(props.optionText)}
        >
            Remove
        </button>
    </div> //arrow fxn syntax allows you to pass in arguments
)

export default Option;