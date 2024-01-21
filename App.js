import React from 'react';
import ReactDOM from 'react-dom/client'


// Creating Plain elements

const heading = React.createElement("h1",
{id: "heading", className: "root"},
"Hello World using React-CDN !!!");

// Creating  Nested elements

const parent = React.createElement("div",
    {id : "parent", },
    React.createElement("div", 
        {id : "child"},
        React.createElement("h1",{},"Hi!!!")));


// Creating Sibling elements    

const parent_with_siblings =  React.createElement("div",
    { id : "parent" },
    [
        React.createElement("h1", { key : "child- h1"},"Hi!,This message is from h1 tag"),
        React.createElement("h2", {key : "child- h2"},"Hi!,This message is from h2 tag"),
    ]);

// Render elements inside DOM root 

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX heading
const jsxHeading = <h1 id = "heading">This is JSX Heading!!!</h1>


// React Component

const HeadingComponent = () => {
    return <h1 id = "heading"> This is a functional Component</h1>
}

// Component Composition  ---- Rendering Component inside Component 

const ComponentOne = () =>{

    return (
        <div id= "component-1">
            <h1>This is Component One - 1</h1>
        </div>
    );

}


const ComponentTwo = () =>{
    return (
        <div id= "component-2">
            <ComponentOne/>
            <h1>I have a component and a heading!!!</h1>
        </div>
    );
}


// Injecting JS ins JSX 

const ComponentThree = () =>{
    return (
        <div>
            <h1>I am injecting JS in JSX using {100 + 200 }</h1>
        </div>
    );
}

// Injecting JSX element in JSX Component


const jsxelement = (
    <h1>I am a JSX element</h1>
)


const JsxComponent = () =>{
    return (
        <div>
            <h1>I am JSX Component and </h1>
            <div>
                {jsxelement}
            </div>
        </div>
        
    );
    
}

root.render(<JsxComponent/>);






        