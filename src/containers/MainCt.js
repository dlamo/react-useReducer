import React from 'react'
import Main from '../view/Main/Main'
import {useTodos} from '../hooks/useTodos'

const MainCt = () => {
    const {state, handleSubmit, handleChange} = useTodos
    return <Main handleSubmit={handleSubmit} handleChange={handleChange} state={state} />
}

export default MainCt