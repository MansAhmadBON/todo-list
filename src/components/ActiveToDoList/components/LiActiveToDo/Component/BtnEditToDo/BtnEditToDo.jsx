import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import classNames from 'classnames';

function BtnEditToDo(props) {
    return (
        <button title="edit task" className={classNames('editTask', props.idTodo)}>
            <EditIcon className={classNames('editTask', props.idTodo)}/>
        </button>
    )
}

export default BtnEditToDo;