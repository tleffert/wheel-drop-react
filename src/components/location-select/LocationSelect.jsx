
import styles from './LocationSelect.module.scss';

const LocationSelect = (props) => {

    return (
        <div className={styles.LocationSelect}>
            <button
                className={`${props.selected ? styles.Active : '' }`}
                onClick={() => props.click(props.location)}
            >
                {props.location.text}
            </button>
        </div>
    );
}

export default LocationSelect;
