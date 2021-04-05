import styles from './MapSelect.module.scss';

const MapSelect = (props) => {
    return (
        <div className={styles.MapSelect}>
            <button
                onClick={() => props.click(props.mapName)}
            >
                {props.mapName}
            </button>
        </div>
    );
}

export default MapSelect;
