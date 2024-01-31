import {CDN_URL} from '../utils/constants.js';

const Restuarantcard = (props) =>{

    return (
        <div className="restuarant-card">
            <img src={CDN_URL}/>
            <p>{props.name}</p>
            <p>{props.cusines}</p>
            <p>{props.Address}</p>
            <p>{props.ratings}</p>
        </div>
    );
}

export default Restuarantcard