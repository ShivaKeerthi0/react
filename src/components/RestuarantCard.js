const Restuarantcard = (props) =>{

    return (
        <div className="border-s-black shadow-xl rounded-2xl justify-center h-96 ">
            <img  className="rounded-lg shadow-lg h-56 w-46 mt-5 mx-auto"   src={props.image}/>
            <p className="font-bold m-2 p-1 text-xl">{props.name}</p>
            <p className="font-bold m-2 p-1 text-lg">{props.cusines}</p>
            <p className="font-bold m-2 p-1 text-lg">{props.Address}</p>
            <p className="font-bold m-2 p-1 text-lg">{props.ratings}</p>
        </div>
    );
}

export default Restuarantcard