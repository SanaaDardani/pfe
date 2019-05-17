import { combineReducers } from 'redux';

import marquesReducer from "./marques/reducer";
import modelsReducer from "./models/reducer";

const allReducers = combineReducers({
    marques: marquesReducer,
    models: modelsReducer
});

export default allReducers;


