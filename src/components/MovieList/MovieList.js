import Movie from "../Movie/Movie.js";
import ModalMovie from "../ModalMovie/ModalMovie";
import { CardGroup } from 'react-bootstrap';
import { useState } from 'react';

export default function MovieList(props) {
  
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();    
  
  return(
    <div>

    <CardGroup style={{ display: "flex", flexDirection: "row" }} className="cont">
      {
        props.movies.map(item => {
            return <div key={item.id}>  
                      <Movie movie={item} key={item.id} setMovie={setMovie} setShowModal={setShowModal} show={showModal} />  
                   </div>
        })
      }
    </CardGroup>

    {showModal && <ModalMovie 
        show={showModal} 
        movie={movie}
        setShowModal={setShowModal} 
        handleColse={() => { setShowModal(false) }} 
        updater={props.updater} />}
  </div>
 );
}

