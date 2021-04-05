import { SELECT_LOCATION, DESELECT_LOCATION} from '../actions/actionTypes';

const initState = {
    'Lipovka':{
        location :{
            name: 'Lipovka',
            id: 'Lipovka'
        },
        selectd: false
    },
    'Severny': {
        location :{
            name: 'Severny',
            id: 'Severny'
        },
        selectd: false
    },
    'Mylta': {
        location :{
            name: 'Mylta',
            id: 'Mylta'
        },
        selectd: false
    },
    'Primorsk': {
        location :{
            name: 'Primorsk',
            id: 'Primorsk'
        },
        selectd: false
    },
    'Zarky': {
        location :{
            name: 'Zarky',
            id: 'Zarky'
        },
        selectd: false
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
        default: {
            return state;
        }
    }
}

export default locationReducer;
