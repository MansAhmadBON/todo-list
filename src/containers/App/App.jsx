import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionAddCurrentToDoName, actionAddCurrentToDoDescr, actionAddNewTodo, actionClearInputDescr, actionClearInputName} from '../../store/actions';
import {Form} from "../../components";

class App extends Component {
    render() {
        //console.log('todos:', this.props.todos)
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoName: state.newToDoData.addToDoName,
        todoDescr: state.newToDoData.addToDoDescr,
        todos: state.stateToDos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCurrentToDoName: newValue => dispatch(actionAddCurrentToDoName(newValue)),
        addCurrentToDoDescr: newValue => dispatch(actionAddCurrentToDoDescr(newValue)),
        addNewTodo: newToDo => dispatch(actionAddNewTodo(newToDo)),
        clearInputDescr: () => dispatch(actionClearInputDescr()),
        clearInputName: () => dispatch(actionClearInputName())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);