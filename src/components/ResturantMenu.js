import ShimmerComponent from './ShimmerComponent';
import {useParams} from 'react-router-dom';
import useDataFetcher from '../utils/useDataFetcher';



const ResturantMenu = () =>{

const params = useParams();
const resInfo = useDataFetcher(params.resid);

console.log(resInfo);

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