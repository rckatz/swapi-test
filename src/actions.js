import {CHANGE_SEARCH_FIELD, REQUEST_PEOPLE_PENDING, 
    REQUEST_PEOPLE_SUCCESS, REQUEST_PEOPLE_FAILED} from './constants'

export const setSearchField  = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestPeople = () => (dispatch) => {
    dispatch({type: REQUEST_PEOPLE_PENDING});
    fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(results => dispatch({type: REQUEST_PEOPLE_SUCCESS,
                payload: results}))
            .catch(error => dispatch({type: REQUEST_PEOPLE_FAILED, payload: error}));
}