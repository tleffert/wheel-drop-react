import LocationGroup from '../../components/location-group/LocationGroup';
import { useDispatch, useSelector } from 'react-redux';

import { selectLocation } from '../../store/actions'

import styles from './LocationNav.module.css';

const LocationNav = (props) => {

    const dispatch = useDispatch();
    const locations = useSelector((state) => {
        let stateLocations = [];
        for(const [key, value] of Object.entries(state.locations)) {
            stateLocations.push(value);
        }
        return stateLocations;
    });

    const onLocationSelect = (id) => dispatch(selectLocation(id));

    return (
        <div className={styles.LocationNav}>
            <LocationGroup
                locationItems={locations}
                onSelect={onLocationSelect}
            />
        </div>
    );
}

export default LocationNav;
