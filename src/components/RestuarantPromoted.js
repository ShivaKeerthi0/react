import Restuarantcard from "./RestuarantCard"
const RestuarantPromoted = (RestuarantCard) => {

    return (props) => (            
        <div>
            <h3 className="bg-black m-3">Free Delivery Available</h3>
            <RestuarantCard {...props}/>
        </div>
            
        
    );


}


export default RestuarantPromoted