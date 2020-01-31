import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionAddCurrentToDoName, actionAddEditTodoName, actionAddCurrentToDoDescr, actionAddEditTodoDescr, actionSetEditTodo, actionCloseEditForm, actionAddNewTodo, actionClearInputDescr, actionClearInputName, actionOpenModalWindow, actionToCloseModalWindow, actionToDoDone, actionPreparationEditToDo, actionDeleteTodo, actionRemoveTodo, actionRestoreTodo, actionOpenEditForm} from '../../store/actions';
import {Header, Form, ActiveToDoList, ModalWindow, DoneToDoList, DelateToDoList, EditForm, NavBar} from "../../components";
import styles from './App.module.css'

class App extends Component {
    render() {
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
            <div className={styles.app}>
                <Header />
                <Form
                    todoName={this.props.todoName}
                    addCurrentToDoName={this.props.addCurrentToDoName}
                    todoDescr={this.props.todoDescr}
                    addCurrentToDoDescr={this.props.addCurrentToDoDescr}
                    addNewTodo={this.props.addNewTodo}
                    clearInputName={this.props.clearInputName}
                    clearInputDescr={this.props.clearInputDescr}
                />
                <NavBar />
                <ActiveToDoList
                    activeTodos={this.props.activeTodos}
                    openModalWindow={this.props.openModalWindow}
                    toDoDone={this.props.toDoDone}
                    deleteTodo={this.props.deleteTodo}
                    openEditForm={this.props.openEditForm}
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
                {
                    this.props.editFormStatus.status && <EditForm activeTodos={this.props.activeTodos} idTodo={this.props.editFormStatus.id} preparationForEditToDo={this.props.preparationForEditToDo} addEditTodoName={this.props.addEditTodoName} addEditTodoDescr={this.props.addEditTodoDescr} editedTodo={this.props.editedTodo} setEditTodo={this.props.setEditTodo} closeEditForm={this.props.closeEditForm}/>
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
        modalWindow: state.modalWindow,
        editFormStatus: state.editFormStatus,
        editedTodo: state.editedTodo
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
        preparationForEditToDo: id => dispatch(actionPreparationEditToDo(id)),
        deleteTodo: id => dispatch(actionDeleteTodo(id)),
        removeTodo: id => dispatch(actionRemoveTodo(id)),
        restoreTodo: id => dispatch(actionRestoreTodo(id)),
        openEditForm: (id) => dispatch(actionOpenEditForm(id)),
        addEditTodoName: newValue => dispatch(actionAddEditTodoName(newValue)),
        addEditTodoDescr: newValue => dispatch(actionAddEditTodoDescr(newValue)),
        setEditTodo: todo => dispatch(actionSetEditTodo(todo)),
        closeEditForm: () => dispatch(actionCloseEditForm())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);