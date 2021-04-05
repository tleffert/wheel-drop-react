import LocationGroup from '../../components/location-group/LocationGroup';

import styles from './LocationNav.module.css';

const LocationNav = (props) => {

    const locations = [{
        location :{
            name: 'Lipovka',
            id: 'Lipovka'
        },
        selectd: false
    }]

    const locationSelectHandler = (id) => {
        console.log("YOU PICKED ME", id);
    }

    return (
        <div className={styles.LocationNav}>
            <LocationGroup
                locationItems={locations}
                onSelect={locationSelectHandler}
            />
        </div>
    );
}

export default LocationNav;
