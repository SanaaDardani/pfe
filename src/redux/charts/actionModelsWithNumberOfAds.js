import axios from 'axios';

export const COUNT_ADS_MODEL = 'adsModel:countAdsModel';

export const countAdsModel = (params) => async (dispatch) => {

    const response = await axios.get('http://127.0.0.1:8000/api/models/count-ads/'+params);
    
    dispatch({
        type: COUNT_ADS_MODEL,
        payload: {
            adsModel: response.data
        }
    });
            
}