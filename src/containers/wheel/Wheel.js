import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

// TODO add wheel here after fixing the source
const Wheel = ({selectedLocations}) => {

    const [winner, setWinner] = useState(null);

    const wheelSpinHandler = () => {
        setWinner(selectedLocations[Math.floor(Math.random() * selectedLocations.length)]);
    }

    return (
        <Fragment>
            <button
                onClick={wheelSpinHandler}
            >
                SPIN
            </button>
            {
                winner ?
                <div>
                    <p>here are win</p>
                    <p>{winner}</p>
                </div>
                : null
            }
        </Fragment>
    );

}

export default Wheel;
