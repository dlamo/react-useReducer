import React from 'react'
import {CustomForm, Input, Button} from './styles'

const Form = ({text, title, handleChange, handleSubmit}) => (
    <CustomForm onSubmit={handleSubmit} >
        <Input 
            required 
            type='text' 
            name='title' 
            value={title} 
            onChange={handleChange} 
            placeholder='title'
        />
        <Input 
            required 
            type='text' 
            name='text' 
            value={text} 
            onChange={handleChange} 
            placeholder='text'
        />
        <Button type='submit'>Add</Button>
    </CustomForm>
)

Form.defaultProps = {
    handleSubmit: () => {},
    handleChange: () => {},
}

export default Form