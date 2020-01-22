import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import classNames from 'classnames';

function BtnDeleteToDo(props) {
    return (
        <button title="delete task" className={classNames('deleteTask', props.idTodo)}>
            <DeleteOutlineIcon className={classNames('deleteTask', props.idTodo)}/>
        </button>
    )
}

export default BtnDeleteToDo;