import React from 'react'
import {Container, Text, Title} from './styles'

const Todo = ({title, text}) => (
    <Container>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </Container>
)

export default Todo