 const ShimmerComponent = (props) => {

    return (
        <div className="shimmer-component-container">
           {
            Array.from({ length: props.length }).map((_, index) => (
             <div className="shimmer-component" key={index} ></div>
            ))
           }
        </div>
    );

}




export default ShimmerComponent;