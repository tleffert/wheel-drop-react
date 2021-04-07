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
        <div className={styles.LocationGroup}>
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
        // console.log(loc.text, index, nextLocs[index].text);
        groupIsEqual = groupIsEqual && (loc.text === nextLocs[index].text) && (loc.selected === nextLocs[index].selected);
    });
    console.log("ARE THESE EQUAL", groupIsEqual);
    return groupIsEqual;
}

const memoizedLocationGroup = React.memo(LocationGroup, eqaul);

export default memoizedLocationGroup;
