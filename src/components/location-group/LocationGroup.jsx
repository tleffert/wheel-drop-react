import LocationSelect from '../location-select/LocationSelect';

import styles from './LocationGroup.module.css';

const LocationGroup = (props) => {

    const locationGroup = props.locationItems.map(item => {
        return (
            <LocationSelect
                locationName={item.location.name}
                locationId={item.location.id}
                select={item.selected}
                key={item.location.id}
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
