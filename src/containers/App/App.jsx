import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionAddCurrentToDoName} from '../../store/actions';
import {Form} from "../../components";

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Form
                    todoName={this.props.todoName}
                    addCurrentToDoName={this.props.addCurrentToDoName}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoName: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCurrentToDoName: newValue => dispatch(actionAddCurrentToDoName(newValue))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);