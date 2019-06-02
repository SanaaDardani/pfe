import { COUNT_ADS} from './actionMarksWithNumberOfAds';

function adsReducer(state = [], action) {

    switch (action.type) {

        case COUNT_ADS:
            return action.payload.ads;
            
        default:
            return state;

    }

}

export default adsReducer;
