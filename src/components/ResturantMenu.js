import {useEffect, useState} from 'react';
import ShimmerComponent from './ShimmerComponent';
import {MENU_URL} from '../utils/constants'
import {useParams} from 'react-router-dom';

const ResturantMenu = () =>{


const [resInfo, setResInfo] = useState(null);
const params = useParams();


useEffect( async ()=>{

    const data = await fetch(MENU_URL+'restaurantId='+params.resid);
    const json = await data.json();
    setResInfo(json);

},[])




if(resInfo === null){
    return <ShimmerComponent length = {6}/>
}

const items = resInfo?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

console.log(items[0]?.card?.info.name);

    return (
        
        <div className="resturant-menu-container">

            {          
            
                    <ul>
                        <li>
                            <h1>{resInfo?.data?.cards[0]?.card?.card?.info.name}</h1></li>
                        <li>Avg. cost for 2 - {resInfo?.data?.cards[0]?.card?.card?.info.costForTwoMessage}</li>
                        <li>Menu Items: </li>
                        <ul>
                            {
                               

                               items.map((card) =>(

                                    <li key={card?.card?.info.id}>{card?.card?.info.name} - {card?.card?.info?.price || card?.card?.info?.defaultPrice}</li>
                                ))
                            }
                           
                        </ul>
                    </ul>
                    
            }
        </div>
    )


}


export default  ResturantMenu;