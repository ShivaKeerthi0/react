import { CDN_URL } from "../utils/constants";
import {useDispatch} from 'react-redux'
import { addItem } from "../utils/appstore/cartSlice.js";


const ItemList = (items) => {



    const dispatch = useDispatch();


    console.log(items.items)

return (
     <div className="">
        {
            items.items.map((item, index) =>(

                <div key = {index} className="p-2 bg-gray-100 rounded-xl m-1 shadow-lg flex-wrap flex justify-between  cursor-pointer border-2 hover:border-gray-200">
                    <div className="p-2 w-8/12  m-auto">
                    <div className="font-bold text-lg">{item?.card?.info?.name}</div>
                    <div className="p-2">{item?.card?.info?.description ? item?.card?.info?.description  : item?.card?.info?.name } - Rs.{ item?.card?.info?.price ? (item?.card?.info?.price)/100 :  (item?.card?.info?.defaultPrice)/100 }</div>
                    </div >
                    <div className="p-2 w-4/12 m-auto">
                    <img  className="rounded-lg shadow-2xl border-2 hover:border-black cursor-pointer" src= {CDN_URL+"/"+item?.card?.info?.imageId}/>
                    <button className= "border-2 hover:border-black rounded-lg font-bold text-lg m-2 px-2 py-1 absolute-y cursor-pointer hover: bg-green-600" 
                    onClick={
                        () =>{
                            dispatch(addItem(item));
                        }
                    }
                    >Add+</button>
                    </div>
                </div>
            ))
        }
     </div>
)

}



export default ItemList;