import React from "react";

export default const Button = ({onToggle}) => {
    return (
        <div>
            <button onClick={onToggle}>Click</button>
        </div>
    )
}