import { useState }from 'react';
import RestuarantCard from './Restuarantcard';
import data from '../utils/data';


const Body = () => {

    const [restuarants, setRestuarants ]= useState(data);

    return(
        <div className="body">
            <div className="search-bar">
                <button className ="filter-btn" 
                onClick = { ()=>{
                   let  filteredResturants = restuarants.filter((restuarant) => restuarant.ratings > 4);
                   setRestuarants(filteredResturants);

                } } > Top Rated Restuarants</button>
            </div>
            <div className="restuarnt-container">
                {
                   restuarants.map((restuarant) => (
                         <RestuarantCard key = {restuarant.id}
                            name ={restuarant.name}
                            Address = {restuarant.Address}
                            ratings = {restuarant.ratings}
                            cusines = {restuarant.cusines}/>
                    ))

                }
            </div>
        </div>
    );
}

export default Body
