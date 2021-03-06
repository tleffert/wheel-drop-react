import {SELECT_LOCATION, DESELECT_LOCATION, TOGGLE_LOCATION, SET_MAP_LOCATIONS} from './actionTypes';

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

export const toggleLocation = (locationId) => {
    return {
        type: TOGGLE_LOCATION,
        payload: {id: locationId}
    }
}

export const setMapLocations = (locations) => {
    return {
        type: SET_MAP_LOCATIONS,
        payload: {locations: locations}
    }
}
