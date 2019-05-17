import axios from 'axios';

export const FETCH_MODELS = 'models:fetchModels';

export const fetchModels = () => async (dispatch) => {

    const response = await axios.get('http://www.mocky.io/v2/5cd2ec163100007628339b08');
    dispatch({
        type: FETCH_MODELS,
        payload: {
            models: response.data
        }
    });
            
}