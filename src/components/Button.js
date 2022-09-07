import React from "react";

const Button = ({onToggle}) => {
    return (
        <div>
            <button onClick={onToggle}>Click</button>
        </div>
    )
}

export default Button;
