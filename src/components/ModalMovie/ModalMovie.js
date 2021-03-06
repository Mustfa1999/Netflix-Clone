import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';
import { useRef } from 'react';
import { Alert } from "bootstrap";

export default function ModalMovie(props) {

    const API_LINK = process.env.REACT_APP_API;
    const commentRef = useRef();
    
    function handleCaption(e) {
        e.preventDefault()
        const userCaption = commentRef.current.value;
        const newData = { ...props.movie, userCaption };
        props.updater(newData, props.movie.id);  
        <Alert severity="success">
          Added successfully !! 
        </Alert>  
      }

      async function handleFav(movie) {
        try{
            const response = await fetch(`${API_LINK}/addMovie`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: movie.title,
                    poster_path: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`,
                    overview: movie.caption,
                })
            });
            let data = await response.json();
            <Alert severity="success">
            Added successfully !! 
            </Alert>
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
          <Modal show={props.show} onHide={() => { props.handleColse() }}>
                
                <Modal.Header closeButton> 
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <img width='50%' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`} alt={props.movie.title} />
                    <p>{props.movie.caption}</p>
                </Modal.Body>
                
                <Modal.Footer>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder={props.movie.caption} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}> Add a Caption </Button>
                    <Button variant="secondary" onClick={props.handleColse}> Close </Button>
                    <Button className="button" variant="primary" onClick={()=>handleFav(props.movie)} > Add to favorite </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
}
