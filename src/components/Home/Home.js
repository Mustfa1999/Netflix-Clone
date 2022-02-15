import "./Home.css";
import MovieList from "../MovieList/MovieList";
import { Row, Container } from "react-bootstrap";

export default function Home(props) {
    return(
        <div className="cont">
        <h1>Home Page</h1>
        <div className="cont">
            {props.movies && (
                <Container fluid className="main-container">
                    <Row className="flex-row">
                        <MovieList movies={props.movies} updater={props.updater}/>
                    </Row>
                </Container>
            )}
        </div>
        </div>
    );
}
