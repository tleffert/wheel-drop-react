
import styles from './LocationSelect.module.scss';

const LocationSelect = (props) => {

    return (
        <div className={styles.LocationSelect}>
            <button
                className={`${props.selected ? styles.Active : '' }`}
                onClick={() => props.click(props.locationId)}
            >
                {props.locationName}
            </button>
        </div>
    );
}

export default LocationSelect;
