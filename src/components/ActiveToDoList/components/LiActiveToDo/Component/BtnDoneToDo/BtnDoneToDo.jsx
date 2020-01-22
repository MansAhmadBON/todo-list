import React from "react";
import DoneIcon from '@material-ui/icons/Done';
import classNames from 'classnames'

function BtnDoneToDo(props) {
    return (
        <button title="task completed!" className={classNames('taskDone', props.idTodo)}>
            <DoneIcon className={classNames('taskDone', props.idTodo)}/>
        </button>
    )
}

export default BtnDoneToDo;