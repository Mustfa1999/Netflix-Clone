import { CardGroup, Card, Button } from "react-bootstrap";
import React from "react";

export default function FavList(props) {

  const API_LINK = process.env.REACT_APP_API;

  async function deleteMovie(movie) {
    try{
        const deleteMethod = {
          method: 'DELETE',
          headers: { 'Content-type': 'application/json; charset=UTF-8'},
        }
        fetch(`${API_LINK}/DELETE/${movie.id}`, deleteMethod) 
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err)) 
        window.location.reload();
    } catch(err) {
        console.log(err);
    }
  }

  return(
      <div className="cont">
        {props.favMovies && (
              <CardGroup style={{ display: "flex", flexDirection: "row" }} className="cont">
                {
                  props.favMovies.map(movie => {
                      return <div key={movie.id}>  
                          <Card key={movie.id} id="cardyfav" >
                              <Card.Img variant="top" src={`${movie.poster_path}`} />
                              <Card.Body>
                                  <Card.Title> {movie.title}</Card.Title>
                                  <Card.Text className="text"> {movie.overview} </Card.Text>
                                  <Card.Text className="text"> {movie.caption} </Card.Text>
                                  <Button className="button" variant="primary" 
                                      onClick={() => {deleteMovie(movie)}} >Delete movie</Button>
                              </Card.Body>
                          </Card>
                      </div>
                  })
                }
              </CardGroup>
        )}
      </div>
    );
}