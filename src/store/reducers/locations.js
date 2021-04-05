import { SELECT_LOCATION, DESELECT_LOCATION, TOGGLE_LOCATION, SET_MAP_LOCATIONS} from '../actions/actionTypes';

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

        case SET_MAP_LOCATIONS: {
            let locations = {};
            for (const [key, value] of Object.entries(action.payload.locations)) {
                locations[key] = {
                    location: {
                        name: value.text,
                        id: value.text,
                        level: value.level
                    },
                    selected: !!value.selected
                };
            }

            return {
                ...locations
            }
        }
        default: {
            return state;
        }
    }
}

export default locationReducer;
