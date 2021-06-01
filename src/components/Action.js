import React from "react";

const Action = (props) => (
    <div>
        <button 
            className="big-button"
            onClick={props.onHandlePick}
            disabled = {!props.hasOptions}
        >
            What should I eat?
        </button>
    </div>
)

export default Action;