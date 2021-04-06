import LocationSelect from '../location-select/LocationSelect';

import styles from './LocationGroup.module.css';

const LocationGroup = (props) => {

    const locationGroup = props.locations.map(location => {
        return (
            <LocationSelect
                locationName={location.text}
                locationId={location.text}
                selected={location.selected}
                key={location.text}
                click={props.onSelect}
            />
        );
    })

    return (
        <div className={styles.LocationGroup}>
            {locationGroup}
        </div>
    );
}

export default LocationGroup;
