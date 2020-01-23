import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionAddCurrentToDoName, actionAddCurrentToDoDescr, actionAddNewTodo, actionClearInputDescr, actionClearInputName, actionOpenModalWindow, actionToCloseModalWindow, actionToDoDone, actionEditToDo, actionDeleteTodo} from '../../store/actions';
import {Form, ActiveToDoList, ModalWindow} from "../../components";

class App extends Component {
    render() {
        console.log('activeTodos:', this.props.activeTodos);
        console.log('doneTodos:', this.props.doneTodos);
        console.log('deleteTodos:', this.props.deleteTodos);

        const idToDo = Number(this.props.modalWindow.id);
        const modalWindowData = this.props.activeTodos.filter(elem => elem.id === idToDo);
        return (
            <div>
                <Form
                    todoName={this.props.todoName}
                    addCurrentToDoName={this.props.addCurrentToDoName}
                    todoDescr={this.props.todoDescr}
                    addCurrentToDoDescr={this.props.addCurrentToDoDescr}
                    addNewTodo={this.props.addNewTodo}
                    clearInputName={this.props.clearInputName}
                    clearInputDescr={this.props.clearInputDescr}
                />
                <ActiveToDoList
                    activeTodos={this.props.activeTodos}
                    openModalWindow={this.props.openModalWindow}
                    toDoDone={this.props.toDoDone}
                    editToDo={this.props.editToDo}
                    deleteTodo={this.props.deleteTodo}
                />
                {
                    this.props.modalWindow.status && <ModalWindow text={modalWindowData} toCloseModalWindow={this.props.toCloseModalWindow}/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoName: state.newToDoData.addToDoName,
        todoDescr: state.newToDoData.addToDoDescr,
        todos: state.stateToDos,
        activeTodos: state.stateToDos.activeToDo,
        doneTodos: state.stateToDos.doneToDo,
        deleteTodos: state.stateToDos.deletedToDo,
        modalWindow: state.modalWindow
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCurrentToDoName: newValue => dispatch(actionAddCurrentToDoName(newValue)),
        addCurrentToDoDescr: newValue => dispatch(actionAddCurrentToDoDescr(newValue)),
        addNewTodo: newToDo => dispatch(actionAddNewTodo(newToDo)),
        clearInputDescr: () => dispatch(actionClearInputDescr()),
        clearInputName: () => dispatch(actionClearInputName()),
        openModalWindow: id => dispatch(actionOpenModalWindow(id)),
        toCloseModalWindow: () => dispatch(actionToCloseModalWindow()),
        toDoDone: id => dispatch(actionToDoDone(id)),
        editToDo: id => dispatch(actionEditToDo(id)),
        deleteTodo: id => dispatch(actionDeleteTodo(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);