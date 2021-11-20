import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Input from '../Input'

function NewModal(props) {
    return (
        <Modal size={props.size} show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {props.children}
            </Modal.Body>
            <Modal.Footer>

                <Button variant="primary" onClick={props.modalSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default NewModal
