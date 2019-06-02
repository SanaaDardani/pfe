import axios from 'axios';

export const COUNT_ADS = 'ads:countAds';

export const countAds = () => async (dispatch) => {

    const response = await axios.get('http://127.0.0.1:8000/api/marks/count-ads');
    // response.data.forEach(ad => ad.key = ad.id );

    dispatch({
        type: COUNT_ADS,
        payload: {
            ads: response.data
        }
    });
            
}