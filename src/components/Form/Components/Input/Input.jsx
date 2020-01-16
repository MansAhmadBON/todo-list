import React from "react";

function Input(props) {
    const handleChange = e => {
        props.addCurrentToDoName(e.target.value);
    }
    return (
        <input
            onChange={e => handleChange(e)}
        />
    )
}

export default Input;