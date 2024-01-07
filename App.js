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
root.render(heading);






        