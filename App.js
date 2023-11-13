       
    const heading= React.createElement(
    "div", 
    { id:'parent'},
    [React.createElement(
        "h1", 
        { id:'child1'},
        "heading 1"
    ),
    React.createElement(
        "h2", 
        { id:'child2'},
        "heading 2"
    )]
    );
      
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
