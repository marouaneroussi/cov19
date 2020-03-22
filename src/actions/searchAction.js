import {SEARCH_MOVIES,FEATCH_MOVIES,FEATCH_MOVIE,SET_LOADING} from './types';
import {ApiKey} from '../ApiKey';
import axios  from 'axios';
export const searchMovie = text =>dispatch=>{
  dispatch({
    type:SEARCH_MOVIES,
    payload : text
  })

}

export const featchMovie = text =>dispatch=>{
  axios.get(`https://www.omdbapi.com/?apikey=${ApiKey}&s=${text}`)
    .then(res => dispatch({
        type:FEATCH_MOVIES,
        payload : res.data,
      })
    )
    .catch(err=>console.log('erreur'))
}

export const featchMovies = id =>dispatch=>{
  axios.get(`https://www.omdbapi.com/?apikey=${ApiKey}&i=${id}`)
    .then(res => dispatch({
        type:FEATCH_MOVIE,
        payload : res.data,
      })
    )
    .catch(err=>console.log('erreur'))
}
export const setLoading = () =>{
  return{
    type : SET_LOADING,
}
}
