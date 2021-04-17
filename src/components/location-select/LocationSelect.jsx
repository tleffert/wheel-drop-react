

import styles from './LocationSelect.module.scss';

const LocationSelect = ({selected, location, click}) => {
    console.log("LocationSelect RENDER");
    return (
        <div className={[styles.LocationSelect, 'm-1'].join(' ')}>
            <button
                className={`btn btn-sm ${selected ? styles.Active : 'btn-secondary' }`}
                onClick={() => click(location)}
            >
                {location.text}
            </button>
        </div>
    );
}

export default LocationSelect;
