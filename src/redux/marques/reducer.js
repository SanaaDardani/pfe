import { FETCH_MARQUES } from './actions';

function marquesReducer(state = [], action) {

    switch (action.type) {

        case FETCH_MARQUES:
            return action.payload.marques;
            
        default:
            return state;

    }

}

export default marquesReducer;
