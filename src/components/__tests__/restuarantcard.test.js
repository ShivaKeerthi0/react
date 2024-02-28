import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Restuarantcard from '../RestuarantCard'
import {restuarant} from '../mocks/resturantcardmock'
import { CDN_URL } from "../../utils/constants";



it("Should render restuarant info ", ()=>{

    
    // This requires mock data.So we create a mock data and pass to this


    console.log(restuarant);

    render(
    <Restuarantcard
    
    image = {CDN_URL +'/'+restuarant.info.cloudinaryImageId}
    name = {restuarant.info.name}
    Address = {restuarant.info.locality}
    ratings = {restuarant.info.avgRating}
    cusines = {restuarant.info.cuisines.join(", ")}
    />
    );


    const card = screen.getByText(/Burgers/);

    //Assertion 

    expect(card).toBeInTheDocument();
})