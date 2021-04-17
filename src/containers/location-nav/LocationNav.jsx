import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { toggleLocation, setMapLocations } from '../../store/actions'
import MapSelect from '../../components/map-select/MapSelect';
import LocationGroup from '../../components/location-group/LocationGroup';

import styles from './LocationNav.module.css';

const LocationNav = (props) => {

    const maps = ['Erangel', 'Miramar', 'Vikendi'];
    const [selectedMap, setSelectedMap] = useState('Erangel');
    const [groups, setGroupLocations] = useState(Array(3).fill({}));

    const dispatch = useDispatch();
    const onLocationSelect = (id) => dispatch(toggleLocation(id));
    const onSetMapLocations = (locations) => dispatch(setMapLocations(locations))

    // Fetches locations for the selected map
    useEffect(() => {
        axios.get(`https://wheel-drop-react-default-rtdb.firebaseio.com/locations.json?orderBy="map"&equalTo="${selectedMap}"`)
        .then(({data}) => {
            mapLocationsToGroups(data);
        })
    }, [selectedMap]);

    useEffect(() => {
        let selectedLocations = [];
        // Filtering down to flat array containing the selected locations
        groups.forEach(group => {
            for(let [key, value] of Object.entries(group)) {
                if (value.selected) {
                    selectedLocations.push(value);
                }
            }
        });
        props.onSelectedUpdate(selectedLocations);
    }, [groups]);

    const mapLocationsToGroups = (locations) => {
        // Takes the locations and organizes by 'level' of the location
        const locationGroups = [{},{},{}];
        for(const [key, value] of Object.entries(locations)) {
            locationGroups[value.level - 1][key] = value;
        }
        setGroupLocations(locationGroups);
    }

    const locationSelectHander = useCallback((location) => {
        setGroupLocations(currentGroups => {
            let selectedLocation = currentGroups[location.level - 1][location.text];
            let updateGroup = {...currentGroups[location.level - 1]};
            updateGroup[location.text] = {
                ...selectedLocation,
                selected: !selectedLocation.selected
            };
            let updatedGroups = [...currentGroups];
            updatedGroups[location.level - 1] = {...updateGroup};
            return updatedGroups;
        });
    });

    const mapSelection = maps.map(map => {
        return (
            <MapSelect
                mapName={map}
                click={setSelectedMap}
                key={map}
            />
        );
    });

    const locationGroups = groups.map((group, index) => {
        return (
            <div className="col-4">
                <LocationGroup
                    locations={Object.values(group)}
                    key={`group${index}`}
                    onSelect={(selectedLocation) => locationSelectHander(selectedLocation)}
                />
            </div>
        );
    })

    return (
        <div className={styles.LocationNav}>
            <div>
                {mapSelection}
            </div>
            {selectedMap}
            <div className="container">
                <div className="row">
                    {locationGroups}
                </div>
            </div>
        </div>
    );
}

export default LocationNav;
