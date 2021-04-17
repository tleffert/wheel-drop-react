import React from 'react';

import LocationSelect from '../location-select/LocationSelect';

import styles from './LocationGroup.module.css';

const LocationGroup = ({locations, onSelect}) => {
    console.log("LocationGroup RENDER")
    const locationGroup = locations.map(location => {
        return (
            <LocationSelect
                locationName={location.text}
                locationId={location.text}
                selected={location.selected}
                key={location.text}
                click={onSelect}
                location={location}
            />
        );
    })

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {locationGroup}
        </div>
    );
}

const eqaul = (prevState, nextState) => {
    let groupIsEqual = true;
    const prevLocs = prevState.locations;
    const nextLocs = nextState.locations;
    if (prevLocs.length !== nextLocs.length) {
        return false;
    }

    prevLocs.forEach((loc, index) => {
        groupIsEqual = groupIsEqual && (loc.text === nextLocs[index].text) && (loc.selected === nextLocs[index].selected);
    });

    return groupIsEqual;
}

const memoizedLocationGroup = React.memo(LocationGroup, eqaul);

export default memoizedLocationGroup;
