import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import appStore from '../../utils/appstore/appStore'


it("Should load login button on screen", ()=>{

    render(

        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>

        
    
    );


    const button = screen.getByRole("button", {name : "Login"});

    //Assertion
    
    expect(button).toBeInTheDocument();

   
})


it("Should load cart with 0 items", ()=>{

    render(

        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>

        
    
    );


    const cartText = screen.getByText("Cart ( 0 Items )")
    //Assertion
    
    expect(cartText).toBeInTheDocument();

   
})

// testing using regex



it("Should load cart", ()=>{

    render(

        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>

        
    
    );


    const cartText = screen.getByText(/Cart/)
    //Assertion
    
    expect(cartText).toBeInTheDocument();

   
    
})




it("Should change from  login to logout button on screen", ()=>{

    render(

        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>

        
    
    );


    const loginbutton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginbutton);

    //Assertion


    const logoutButton = screen.getByRole("button", {name : "Logout"});
    
    expect(logoutButton).toBeInTheDocument();

   
})


