import LocationGroup from '../../components/location-group/LocationGroup';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { toggleLocation, setMapLocations } from '../../store/actions'
import MapSelect from '../../components/map-select/MapSelect';

import styles from './LocationNav.module.css';

const LocationNav = (props) => {

    const maps = ['Erangel', 'Miramar', 'Vikendi'];
    const [selectedMap, setSelectedMap] = useState('Erangel');

    const dispatch = useDispatch();
    const onLocationSelect = (id) => dispatch(toggleLocation(id));
    const onSetMapLocations = (locations) => dispatch(setMapLocations(locations))

    useEffect(() => {
        axios.get(`https://wheel-drop-react-default-rtdb.firebaseio.com/locations.json?orderBy="map"&equalTo="${selectedMap}"`)
        .then(({data}) => {
            onSetMapLocations(data);
        })
    }, [selectedMap])


    const locationSpice1 = useSelector((state) => {
        let stateLocations = [];
        for(const [key, value] of Object.entries(state.locations)) {
            if (value.location.level === 1) {
                stateLocations.push(value);
            }
        }
        return stateLocations;
    });


    const mapSelectHanlder = (mapName) => {
        //set selected map, and update location selection
        setSelectedMap(mapName);
    }

    const mapSelection = maps.map(map => {
        return (
            <MapSelect
                mapName={map}
                click={mapSelectHanlder}
                key={map}
            />
        );
    })

    return (
        <div className={styles.LocationNav}>
            <div>
                {mapSelection}
            </div>
            {selectedMap}
            <LocationGroup
                locationItems={locationSpice1}
                onSelect={onLocationSelect}
            />
        </div>
    );
}

export default LocationNav;
