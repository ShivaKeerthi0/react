const Restuarantcard = (props) =>{

    return (
        <div className="restuarant-card">
            <img src={props.image}/>
            <p>{props.name}</p>
            <p>{props.cusines}</p>
            <p>{props.Address}</p>
            <p>{props.ratings}</p>
        </div>
    );
}

export default Restuarantcard