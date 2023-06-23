// useState() => Crear estados locales
// useEffect() => Manejar efectos secundarios (reemplaza el montaje, desmontaje y actualización de las clases)

//Va a recibir dos parámetros, la primera una callback que dice que es lo que queremos que haga el componente cuando se monta o se actualiza y el segundo es una array al que vamos a llamar array de dependencias. Es un array al que le voy a poder dar variables que cuando se modifiquen, el useEffect va a hacer lo que tiene que hacer. Es decir, el useEffect va a tener una función que se va a ejecutar cuando el componente se monta o se actualiza y/o cuando detecta un cambio en una de las variables del array.
useEffect(()=>{

}, [variable])

//useDispatch => disparador de dispatch
//useSelector => mapStateToProps

//Example de componente funcional

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail, cleanDetail } from "../../actions/index";

const Movie = (props) => {

    const movieID = props.match.params.id;
    const dispatch = useDispatch(); //Esto ya me da el poder de usar dispatch donde quiera.
    const movieDetail = useSelector((state) => state.movieDetail) //Me permite guardar una parte del estado global en una variable. Reemplaza a mapStateToProps.

    useEffect(()=>{
        dispatch(getMovieDetail(movieID));
        //useEffect puede retornar una función que se va a ejecutar cuando se desmonte el componente.
        return function(){
            dispatch(cleanDetail());
        }
    }, [dispatch, movieID]); //=> cambia dispatch o cambia el movieID de la película, se va a ejecutar useEffect. React te recomienda que las variables que utilices dentro de useEffect de las cuales no tiene control, las pases en el array de dependencias.

    return(
        <div className="movie-detail">
            <h4>{movieDetail.Title}</h4>
            <p>{movieDetail.Year}</p>
            <img src={movieDetail.Poster} alt="icon"></img>
            <p>{movieDetail.Plot}</p>
        </div>
    );
};

export default Movie;

//actions.js

export const CLEAN_DETAIL = "CLEAN_DETEAIL";

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

//reducer.js

case CLEAN_DETAIL:
    return{
        ...state,
        movieDetail: {},
    };