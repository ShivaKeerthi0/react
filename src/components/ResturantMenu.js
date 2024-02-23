import ShimmerComponent from './ShimmerComponent';
import {useParams} from 'react-router-dom';
import useDataFetcher from '../utils/useDataFetcher';
import ResturantCategory from './ResturantCategory';
import resInfo from '../utils/data';
import { useState } from 'react';



const ResturantMenu = () =>{

const params = useParams();
// const resInfo = useDataFetcher(params.resid);

// console.log(resInfo);


const [showIndex, setShowIndex] =  useState(0);

if(resInfo === null){
    return <ShimmerComponent length = {6}/>
}

const items = resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;




 console.log(items[0]?.card?.info.name);


 const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  .filter((c) => c?.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');


 console.log(categories);


    return (
        
        <div className="text-center ">

            {          
            
                    <ul>
                        <li>
                            <h1 className="font-bold my-4 text-2xl">{resInfo?.data?.cards[2]?.card?.card?.info.name}</h1></li>
                        <li className = "font-bold text-lg">Avg. cost for 2 - {resInfo?.data?.cards[2]?.card?.card?.info.costForTwoMessage}</li>
                        <li className = "font-bold m-2 p-2 text-lg">Menu Items </li>
                        <ul>
                            {
                               

                               categories.map( ( category , index ) => (

                                <ResturantCategory  title = {category?.card?.card?.title} data={category}  showItems={index === showIndex}  setShowIndex = {() => {  showIndex == index ?  setShowIndex(-1):setShowIndex(index) }} key={index}/>
                               ))
                            }   
                           
                        </ul>
                    </ul>
                    
            }
        </div>
    )


}


export default  ResturantMenu;