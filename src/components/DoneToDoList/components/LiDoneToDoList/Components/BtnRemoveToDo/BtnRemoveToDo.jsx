import React from "react";
import RemoveIcon from '@material-ui/icons/Remove';

function BtnRemoveToDo(props) {
    const removeToDo = e => props.removeTodo(props.idTodo);

    return (
        <button title="Remove ToDo" onClick={removeToDo}>
            <RemoveIcon />
        </button>
    )
}

export default BtnRemoveToDo;