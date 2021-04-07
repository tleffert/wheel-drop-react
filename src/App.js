import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import LocationNav from './containers/location-nav/LocationNav';
import Wheel from './containers/wheel/Wheel';

function App() {

    const [selectedLocations, setSelectedLocations] = useState([]);

    const selectedLocationsHandler = (locations) => {
        setSelectedLocations(locations.map(location => location.text));
    }

  return (
    <div className="App">
        <LocationNav
            onSelectedUpdate={selectedLocationsHandler}
        />
        <Wheel
            selectedLocations={selectedLocations}
        />
    </div>
  );
}

export default App;
