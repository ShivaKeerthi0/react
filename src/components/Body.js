import { useState, useEffect }from 'react';
import RestuarantCard from './RestuarantCard';
import ShimmerComponent from './ShimmerComponent';
import {RESTURANT_DATA_API_URL, CDN_URL} from '../utils/constants'


const Body = () => {

    const [restuarants, setRestuarants ]= useState([]);
    const [searchValue,setSearchValue] = useState("");
    const [restuarantsDuplicate,setRestuarantsDuplicate] = useState([]); 

    useEffect(() => {
        console.log("Fetching  Data... !!!"); // This executed after the components have been loaded
        fetchData(); 
        console.log("Fetched Data Successfully !!!");

    }, []);

    const fetchData = async () =>{

        let fetched_data = await fetch(RESTURANT_DATA_API_URL);
        json = await fetched_data.json();
        fetched_data = json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(fetched_data);
        setRestuarants(fetched_data);
        setRestuarantsDuplicate(fetched_data);
        
    }

    console.log("Rendered Successfully !!!"); // This executed while the body is rendering
    

    return restuarants.length === 0 ?   
    
    (<ShimmerComponent/>) : 
    
    (
        <div className="body">
            <div className="search-bar">
                <input className="search-input"  value = {searchValue} onChange={
                        (e)=>{

                            setSearchValue(e.target.value);
                        }}></input>
                <button className="search-btn" onClick={
                    ()=>{

                        let searchfilteredRestuarants = restuarants.filter((restuarant) =>  searchValue === '' ||restuarant.info.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) );
                        console.log(searchfilteredRestuarants);
                        setRestuarantsDuplicate(searchfilteredRestuarants);

                    }
                }>Search</button>
                <button className ="filter-btn" 
                onClick = { ()=>{
                   let  filteredResturants = restuarants.filter((restuarant) => restuarant.info.avgRating > 4);
                   console.log(filteredResturants)
                   setRestuarantsDuplicate(filteredResturants);

                } } > Top Rated Restuarants</button>
            </div>
            <div className="restuarnt-container">
                {
                   restuarantsDuplicate.map((restuarant) => (
                         <RestuarantCard key = {restuarant.id}
                            image = {CDN_URL +'/'+restuarant.info.cloudinaryImageId}
                            name = {restuarant.info.name}
                            Address = {restuarant.info.locality}
                            ratings = {restuarant.info.avgRating}
                            cusines = {restuarant.info.cuisines.join(", ")}/>

                    ))

                }
            </div>
        </div>
    );
}

export default Body
