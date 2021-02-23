import React from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function MovieList(props) {


  const {movieList} = props;
  

  return (
    
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore,  } = props.movie;
let history = useHistory();

  function historyPush (){
      history.push(`/movies/${props.movie.id}`)
  }

  return (
    <Link to={`/movies/${props.movie.id}`}>
    <div onClick={historyPush} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    </Link>
  );
}
