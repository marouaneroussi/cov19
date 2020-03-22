import {SEARCH_MOVIES,FEATCH_MOVIES,FEATCH_MOVIE,SET_LOADING} from '../actions/types';

const initialState = {
  text : '',
  movies : [],
  loading : false,
  movie : []
}

export default function(state=initialState,action){
  switch (action.type) {
    case SEARCH_MOVIES:
      return{
        ...state,
        text:action.payload,
        loading:false
      }
      case FEATCH_MOVIES:
      return{
        ...state,
        movies:action.payload,
        loading:false

      }
      case FEATCH_MOVIE:
      return{
        ...state,
        movie:action.payload,
        loading:false

      }
      case SET_LOADING:
      return{
        ...state,
        loading:true
      }
    default:
      return state
  }
}
