import React from "react";

function TextArea(props) {
    const handleChange = e => {
        props.addCurrentToDoDescr(e.target.value);
    }
    return (
        <textarea
            onChange={e => handleChange(e)}
            value={props.todoDescr}
        />
    )
}

export default TextArea;