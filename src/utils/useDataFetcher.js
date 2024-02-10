import {useEffect, useState} from 'react';
import {MENU_URL} from './constants'


const useDataFetcher = (resId)=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{

       fetchData();

    }, [])


    const fetchData = async () => {

        const data = await fetch(MENU_URL +"restaurantId="+resId);

        const json = await data.json();
        console.log(json);
        setResInfo(json);
    }


    return resInfo;

}



export default useDataFetcher;