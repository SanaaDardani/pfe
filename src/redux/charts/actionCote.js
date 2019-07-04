import axios from 'axios';

export const FETCH_COTE = 'cote:fetchCote';

export const fetchCote = (mark, model, kilometre, fiscalPower,carburant,date,ville) => async (dispatch) => {

    const response = await axios
        .get(`http://127.0.0.1:8000/api/cote/${ville}/${mark}/${model}/${carburant}/${kilometre}/${kilometre}/${fiscalPower}/${date}`)
       

    dispatch({
        type: FETCH_COTE,
        payload: {
            cote: response.data
        }
    });
            
}