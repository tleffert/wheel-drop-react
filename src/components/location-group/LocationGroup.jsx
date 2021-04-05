import LocationSelect from '../location-select/LocationSelect';

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
        <div>
            {locationGroup}
        </div>
    );
}

export default LocationGroup;
