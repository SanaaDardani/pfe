import { FETCH_VEHICULES, FETCH_MODELS} from '../actions/vehiculesAction';

function vehiculesReducer(state = [], action) {

    switch (action.type) {

        case FETCH_VEHICULES:
            return action.payload.vehicules;
        case FETCH_MODELS:
            return action.payload.models;
        default:
            return state;

    }

}

export default vehiculesReducer;
