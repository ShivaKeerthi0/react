import ItemList from './ItemList';
import { useState } from 'react';

const ResturantCategory = (props) =>{

    

    console.log("props are" , props)

    return (
        <div className="w-full">
            <div className="m-auto flex flex-wrap w-6/12 bg-gray-100  shadow-2xl rounded-lg justify-between  cursor-pointer" onClick={
                    () =>{
                        props.setShowIndex();
                    }
                }>
                <h1 className="font-bold align-middle text-lg m-2 p-2" >{props.title}</h1>
                <p className="my-3 mx-2 p-2">👇🏽</p>
            </div>

            {

                
                props.showItems  && 
                
                <div className="m-auto w-6/12">
                    <ItemList items = {props?.data?.card?.card?.itemCards}/>
                </div>  
            }

        </div>
    )
}


export default ResturantCategory