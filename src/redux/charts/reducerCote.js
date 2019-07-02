import { FETCH_COTE} from './actionCote';

function coteReducer(state = [], action) {

    switch (action.type) {

        case FETCH_COTE:
            return action.payload.cote;
        default:
            return state;

    }

}

export default coteReducer;
