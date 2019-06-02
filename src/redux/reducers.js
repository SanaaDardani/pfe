import { combineReducers } from 'redux';

import marquesReducer from "./marques/reducer";
import modelsReducer from "./models/reducer";
import adsReducer from "./charts/reducerMarksWithNumberOfAds";
import adsModelReducer from "./charts/reducerModelsWithNumberOfAds";

const allReducers = combineReducers({
    marques: marquesReducer,
    models: modelsReducer,
    ads: adsReducer,
    adsModel: adsModelReducer
});

export default allReducers;


