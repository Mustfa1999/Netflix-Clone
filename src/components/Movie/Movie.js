import { Card, Button } from 'react-bootstrap';

export default function Movie(props) {
    return(
      <div>
        <Card key={props.movie.id} id="cardy" >
          <Card.Img id="mine" variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`} />
          <Card.Body id="bodyy">
              <Card.Title className="text"> {props.movie.title}</Card.Title>
              <Card.Text className="text"> {props.movie.overview} </Card.Text>
              <Card.Text className="text"> {props.movie.caption} </Card.Text>
              <Button className="button" variant="primary" onClick={() => { props.setMovie(props.movie); props.setShowModal(true) }} >Show Modal</Button>
          </Card.Body>
        </Card>
      </div>
    );
}