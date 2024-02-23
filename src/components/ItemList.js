import { CDN_URL } from "../utils/constants";


const ItemList = (items) => {


    console.log(items.items)

return (
     <div className="">
        {
            items.items.map((item, index) =>(

                <div key = {index} className="p-2 bg-gray-100 rounded-xl m-1 shadow-lg flex-wrap flex justify-between">
                    <div className="p-2 w-8/12">
                    <div className="font-bold text-lg">{item?.card?.info?.name}</div>
                    <div className="p-2">{item?.card?.info?.description ? item?.card?.info?.description  : item?.card?.info?.name } - Rs.{ item?.card?.info?.price ? (item?.card?.info?.price)/100 :  (item?.card?.info?.defaultPrice)/100 }</div>
                    </div>
                    <div><img src = {CDN_URL+item?.card?.info?.imageId}/></div>
                </div>
            ))
        }
     </div>
)

}



export default ItemList;