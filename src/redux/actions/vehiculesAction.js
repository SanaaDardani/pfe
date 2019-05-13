import axios from 'axios';

export const FETCH_VEHICULES = 'vehicules:fetchVehicules';
export const FETCH_MODELS = 'models:fetchModels';

export const fetchVehicules = () => async (dispatch) => {

    const response = await axios.get('http://www.mocky.io/v2/5cd599ff2e000046675277b2');

    dispatch({
        type: FETCH_VEHICULES,
        payload: {
            vehicules: response.data
        }
    });
            
}

export const fetchModels = () => async (dispatch) => {

    const response = await axios.get('http://www.mocky.io/v2/5cd2ec163100007628339b08');
    dispatch({
        type: FETCH_MODELS,
        payload: {
            models: response.data
        }
    });
            
}