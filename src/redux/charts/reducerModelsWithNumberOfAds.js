import { COUNT_ADS_MODEL} from './actionModelsWithNumberOfAds';

function adsModelReducer(state = [], action) {

    switch (action.type) {

        case COUNT_ADS_MODEL:
            return action.payload.adsModel;
            
        default:
            return state;

    }

}

export default adsModelReducer;
