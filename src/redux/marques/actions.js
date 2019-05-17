import axios from 'axios';

export const FETCH_MARQUES = 'marques:fetchMarques';

export const fetchMarques = () => async (dispatch) => {

    const response = await axios.get('http://www.mocky.io/v2/5cdd566f3000000426e2374f');

    dispatch({
        type: FETCH_MARQUES,
        payload: {
            marques: response.data
        }
    });
            
}

