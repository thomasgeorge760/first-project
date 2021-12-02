import React from 'react'
import {Form} from 'react-bootstrap'

function Input(props) {
    return (
        <Form.Group className="mb-3">
            <Form.Label style={{color:'black'}}>{props.label}</Form.Label>
            <Form.Control 
                name={props.name}
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.onChange}
            />
            <Form.Text className="text-muted">
                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    )
}

export default Input
