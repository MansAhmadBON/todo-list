import React from "react";
import RestoreIcon from '@material-ui/icons/Restore';
import classNames from "classnames";

function BtnRestoreToDo(props) {
    return (
        <button title="Restore ToDo" className={classNames('restoreTodo', props.idTodo)}>
            <RestoreIcon className={classNames('restoreTodo', props.idTodo)}/>
        </button>
    )
}

export default BtnRestoreToDo;