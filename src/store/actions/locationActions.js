import {SELECT_LOCATION, DESELECT_LOCATION} from './actionTypes';

export const selectLocation = (locationId) => {
    return {
        type: SELECT_LOCATION,
        payload: {id: locationId}
    }
}

export const deselectLocation = (locationId) => {
    return {
        type: DESELECT_LOCATION,
        payload: {id: locationId}
    }
}
