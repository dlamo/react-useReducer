import React from "react";
import { Container } from "./styles";
import Form from "../../components/Form/Form";
import Todo from "../../components/Todo/Todo";

const Main = ({handleChange, handleSubmit, state}) => {
    const displayTodos = state.todos.map(todo => <Todo key={todo.title} {...todo} />)
    return (
        <Container>
            {displayTodos}
            <Form handleSubmit={handleSubmit} handleChange={handleChange} title={state.newTodo.title} text={state.newTodo.text} />
        </Container>
    )
}

Main.defaultProps = {
    handleChange: () => {},
    handleSubmit: () => {},
    state: {}
}

export default Main