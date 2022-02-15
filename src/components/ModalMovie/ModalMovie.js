import "./ModalMovie.css";
import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';
import { useRef } from 'react';

export default function ModalMovie(props) {

    const commentRef = useRef();
    
    function handleCaption(e) {
        e.preventDefault()
        const userCaption = commentRef.current.value;
        ;
        const newData = { ...props.movie, userCaption };
        props.updater(newData, props.movie.id);    
      }

    return (
        <div>
          <Modal show={props.show} onHide={() => { props.handleColse() }}>
                
                <Modal.Header closeButton> 
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <img width='50%' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`} alt={props.movie.title} />
                    {/* <p>{props.movie.overview}</p> */}
                    <p>{props.movie.caption}</p>
                </Modal.Body>
                
                <Modal.Footer>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder={props.movie.caption} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}> Add a Caption </Button>
                    <Button variant="secondary" onClick={props.handleColse}> Close </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
}
