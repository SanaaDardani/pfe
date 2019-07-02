import axios from 'axios';

export const FETCH_COTE = 'cote:fetchCote';

export const fetchCote = (mark,model,kilometre,carburant,date,ville) => async (dispatch) => {

    const response = await axios.get(`http://127.0.0.1:8000/api/cote/${mark}/${model}/${kilometre}
    /${carburant}/${date}/${ville}`);

    console.log(response)

    dispatch({
        type: FETCH_COTE,
        payload: {
            cote: response.data
        }
    });
            
}