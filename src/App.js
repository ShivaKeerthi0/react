import React, { Suspense,lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContanctUs from './components/ContactUs';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';
import userContext from './utils/UserContext';
import {Provider} from 'react-redux';
import appStore from './utils/appstore/appStore';
import Cart from './components/Cart';

// this is lazy loading or dynamic loading where the build can be split into chuncks

const Grocery = lazy(()=> import('./components/Grocery.js'));  

const App = () =>{

    return (
        <div className="app">
            <Provider store={appStore}>
                <userContext.Provider value={{loggedUser: "Azad"}}>
                    <Header/>
                </userContext.Provider>
                <Outlet/>
            </Provider>
        </div>
    );

}


const appRouter = createBrowserRouter([
    { 
        path : '/', 
        element : <App/>,
        children : [
            {
                path : '/',
                element : <Body/>,
            },
            {
                path : '/about',
                element : <AboutUs/>,
            },
            {
                path : '/contact',
                element : <ContanctUs/>,
            },
            {
                path : '/resturant/:resid',
                element : <ResturantMenu/>

            },
            {
                path : '/grocery',
                element : <Suspense fallback={<h2>Loading...</h2>}><Grocery/></Suspense>
            },
            {
                path : '/cart',
                element : <Cart/>
            }

        ],
        errorElement : <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);





        