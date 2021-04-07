

import styles from './LocationSelect.module.scss';

const LocationSelect = ({selected, location, click}) => {
    console.log("LocationSelect RENDER");
    return (
        <div className={styles.LocationSelect}>
            <button
                className={`${selected ? styles.Active : '' }`}
                onClick={() => click(location)}
            >
                {location.text}
            </button>
        </div>
    );
}

export default LocationSelect;
