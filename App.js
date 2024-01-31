import React from 'react';
import ReactDOM from 'react-dom/client'



const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <img src = "https://img.freepik.com/premium-vector/geometric-vintage-creative-crown-abstract-logo-design-vector-template-vintage-crown-logo-royal-king-queen-concept-symbol-logotype-concept-icon_412311-3665.jpg?w=1060"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}




const RestuarantCard = (props) =>{

    return (
        <div className="restuarant-card">
            <img src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png"/>
            <p>{props.name}</p>
            <p>{props.cusines}</p>
            <p>{props.Address}</p>
            <p>{props.ratings}</p>
        </div>
    );
}

const data = [
    {   "id" : "3efvby7-t654esz-34thn",
        "name": "KFC",
        "cusines" : "Biryani,Fastfood,Chicken",
        "ratings" : 4.3,
        "Address" : "Hitech city road, Madhapur"
    },
    {   "id" : "3efvby7-t654esz-34thi",
        "name": "Burger King",
        "cusines" : "Burger,Chicken",
        "ratings" : 4.5,
        "Address" : "Hitech city road, Madhapur"
    },
    {   "id" : "3efvby7-t654esz-34thj",
        "name": "Mc-D",
        "cusines" : "Pizza,Cool drinks",
        "ratings" : 3.3,
        "Address" : "Hitech city road, Madhapur"
    },
    {   "id" : "3efvby7-t654esz-34thk",
        "name": "Chinese WOK",
        "cusines" : "Noodles,Cakes,Buns",
        "ratings" : 3.8,
        "Address" : "Hitech city road, Madhapur"
    },
    {   "id" : "3efvby7-t654esz-34thl",
        "name": "California Boruto",
        "cusines" : "Bowls,Salads",
        "ratings" : 4.2,
        "Address" : "Hitech city road, Madhapur"
    },
    {   "id" : "3efvby7-t654esz-34thm",
        "name": "Humming Bird",
        "cusines" : "Pizza,Burger,Chicken",
        "ratings" : 4.1,
        "Address" : "Hitech city road, Madhapur"
    },
    {   "id" : "3efvby7-t654esz-34tho",
        "name": "Concu",
        "cusines" : "Bakery,Sweets,Pastery",
        "ratings" : 4.9,
        "Address" : "Hitech city road, Madhapur"
    },
    {   "id" : "3efvby7-t654esz-34thp",
        "name": "Mehfil",
        "cusines" : "Biryani,Fastfood",
        "ratings" : 4.0,
        "Address" : "Hitech city road, Madhapur"
    },
    {   "id" : "3efvby7-t654esz-34thq",
        "name": "Shag house",
        "cusines" : "Biryani,Chicken",
        "ratings" : 4.8,
        "Address" : "Hitech city road, Madhapur"
    }
];
const Body = () => {
        return(
            <div className="body">
                <div className="search-bar">
                    <p>Search</p>
                </div>
                <div className="restuarnt-container">
                    {
                        data.map((restuarant) => (
                             <RestuarantCard key = {restuarant.id}
                                name ={restuarant.name}
                                Address = {restuarant.Address}
                                ratings = {restuarant.ratings}
                                cusines = {restuarant.cusines}/>
                        ))

                    }
                </div>
            </div>
        );
}

const App = () =>{

    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);





        