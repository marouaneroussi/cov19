import {FEATCH_COUNTRY,RETRIEVE_COUNTRY,GET_DATA_SUCCESS} from './types';
import axios  from 'axios';
const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        data: data
    }
}

export const getData = (url, props) => {
    return (dispatch) => {
        axios.get(url)
        .then(response => {
            dispatch(getDataSuccess(response.data));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}
export const featchCountry = (url, props) => dispatch =>{

    axios.get(url)
      .then(response =>dispatch({
          type:FEATCH_COUNTRY,
          payload : response.data
        })

      )
      .catch(
        err=>console.log(err)
      )



}
export const retrieveCountry = (url,key) => dispatch =>{

    axios.get(url)
      .then(response =>dispatch({
          type:RETRIEVE_COUNTRY,
          payload : response.data[key]
        })

      )
      .catch(
        err=>console.log(err)
      )

}
