import React from "react";
import RemoveIcon from '@material-ui/icons/Remove';
import classNames from 'classnames';

function BtnRemoveToDo(props) {
    return (
        <button title="Remove Todo" className={classNames('removeTodo', props.idTodo)}>
            <RemoveIcon className={classNames('removeTodo', props.idTodo)}/>
        </button>
    )
}

export default BtnRemoveToDo;