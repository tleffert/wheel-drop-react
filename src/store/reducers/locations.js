import { SELECT_LOCATION, DESELECT_LOCATION, TOGGLE_LOCATION} from '../actions/actionTypes';

const initState = {
    'Lipovka':{
        location :{
            name: 'Lipovka',
            id: 'Lipovka'
        },
        selected: false
    },
    'Severny': {
        location :{
            name: 'Severny',
            id: 'Severny'
        },
        selected: false
    },
    'Mylta': {
        location :{
            name: 'Mylta',
            id: 'Mylta'
        },
        selected: false
    },
    'Primorsk': {
        location :{
            name: 'Primorsk',
            id: 'Primorsk'
        },
        selected: false
    },
    'Zarky': {
        location :{
            name: 'Zarky',
            id: 'Zarky'
        },
        selected: false
    }
};

const locationReducer = (state = initState, action) => {
    switch(action.type) {
        case SELECT_LOCATION: {
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    selected: true
                }
            }
        }

        case TOGGLE_LOCATION: {
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    selected: !state[action.payload.id].selected
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default locationReducer;
