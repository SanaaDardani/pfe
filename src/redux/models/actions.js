import axios from 'axios';

export const FETCH_MODELS = 'models:fetchModels';

export const fetchModels = (param) => async (dispatch) => {

    const response = await axios.get('http://127.0.0.1:8000/api/models/'+param);
    dispatch({
        type: FETCH_MODELS,
        payload: {
            models: response.data
        }
    });
            
}