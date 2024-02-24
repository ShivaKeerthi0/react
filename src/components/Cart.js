import { clearItems } from "../utils/appstore/cartSlice";
import ItemList from "./ItemList"
import {useSelector, useDispatch} from 'react-redux'


const Cart = () =>{


    const items = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    return (
            <div className="w-6/12 m-auto py-5 text-large font-bold  justify-center p-2 bg-gray-100 rounded-2xl shadow-2xl">
            <div className="flex flex-wrap justify-between">
                <p className="text-center m-2 p-2 text-2xl">Cart Items</p>
                <button className="bg-red-500 m-2 p-2 rounded-lg text-lg font-bold shadow-lg opacity-50 hover:opacity-100 border-2 border-black"
                 onClick={
                    ()=>{ 
                        dispatch(clearItems())
                        }
                    }>Clear Cart</button>
            </div>
            <div>
                {items.length == 0 && <p className="text-center m-2 p-2 text-2xl">No Items Added to Cart!!!</p> }
                <ItemList items = {items}/>
            </div>
        </div>
        
    )

}


export default Cart