import { combineReducers } from 'redux';

import vehiculesReducer from "./vehiculesReducer";

const allReducers = combineReducers({
    vehicules: vehiculesReducer,
    models:vehiculesReducer
});

export default allReducers;
