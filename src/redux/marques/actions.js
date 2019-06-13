import axios from 'axios';

export const FETCH_MARQUES = 'marques:fetchMarques';

export const fetchMarques = () => async (dispatch) => {

    const response = await axios.get('http://127.0.0.1:8000/api/marks');

    dispatch({
        type: FETCH_MARQUES,
        payload: {
            marques: response.data
        }
    });
}
