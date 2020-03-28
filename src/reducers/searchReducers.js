import {FEATCH_COUNTRY,RETRIEVE_COUNTRY,GET_DATA_SUCCESS} from '../actions/types';

const initialState = {
  countryName : [],
  country : [],
  data:null
}

export default function(state=initialState,action){
  switch (action.type) {
    case FEATCH_COUNTRY:
      return{
        ...state,
        countryName:action.payload,
      }
      case RETRIEVE_COUNTRY:
        return{
          ...state,
          country:action.payload,
        }
        case GET_DATA_SUCCESS:
          return{
            ...state,
            data:action.data,
          }
    default:
      return state
  }
}
