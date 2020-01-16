import React from "react";
import {Input} from "./Components";

function Form(props) {
    return (
        <div>
            <Input
                todoName={props.todoName}
                addCurrentToDoName={props.addCurrentToDoName}
            />
        </div>
    )
}

export default Form;