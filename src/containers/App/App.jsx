import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionAddCurrentToDoName, actionAddCurrentToDoDescr, actionAddNewTodo, actionClearInputDescr, actionClearInputName, actionOpenModalWindow, actionToCloseModalWindow, actionToDoDone, actionEditToDo, actionDeleteTodo, actionRemoveTodo, actionRestoreTodo} from '../../store/actions';
import {Form, ActiveToDoList, ModalWindow, DoneToDoList, DelateToDoList} from "../../components";

class App extends Component {
    render() {
        // console.log('activeTodos:', this.props.activeTodos);
        // console.log('doneTodos:', this.props.doneTodos);
        // console.log('deleteTodos:', this.props.deleteTodos);

        const idToDo = Number(this.props.modalWindow.id);
        const modalWindowData = [];

        const activeTodoModalWindow = this.props.activeTodos.filter(elem => elem.id === idToDo);
        const doneTodoModalWindow = this.props.doneTodos.filter(elem => elem.id === idToDo);
        const delateTodoModalWindow = this.props.deleteTodos.filter(elem => elem.id === idToDo);

        if(activeTodoModalWindow[0]){
            modalWindowData.push(activeTodoModalWindow[0])
        } else if(doneTodoModalWindow[0]){
            modalWindowData.push(doneTodoModalWindow[0])
        } else if(delateTodoModalWindow[0]){
            modalWindowData.push(delateTodoModalWindow[0])
        }

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
                <DoneToDoList
                    doneTodos={this.props.doneTodos}
                    openModalWindow={this.props.openModalWindow}
                    removeTodo={this.props.removeTodo}
                />
                <DelateToDoList
                    deleteTodos={this.props.deleteTodos}
                    openModalWindow={this.props.openModalWindow}
                    removeTodo={this.props.removeTodo}
                    restoreTodo={this.props.restoreTodo}
                />
                {
                    this.props.modalWindow.status && <ModalWindow data={modalWindowData} toCloseModalWindow={this.props.toCloseModalWindow}/>
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
        deleteTodo: id => dispatch(actionDeleteTodo(id)),
        removeTodo: id => dispatch(actionRemoveTodo(id)),
        restoreTodo: id => dispatch(actionRestoreTodo(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);