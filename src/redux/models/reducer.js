import { FETCH_MODELS} from './actions';

function modelsReducer(state = [], action) {

    switch (action.type) {

        case FETCH_MODELS:
            return action.payload.models;
        default:
            return state;

    }

}

export default modelsReducer;
