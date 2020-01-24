import React from "react";
import RemoveIcon from '@material-ui/icons/Remove';
import classNames from 'classnames';

function BtnRemoveToDo(props) {
    return (
        <button title="Remove Todo">
            <RemoveIcon />
        </button>
    )
}

export default BtnRemoveToDo;