
const LocationSelect = (props) => {

    return (
        <button
            onClick={() => props.click(props.locationId)}
        >
            {props.locationName}
        </button>
    );
}

export default LocationSelect;
