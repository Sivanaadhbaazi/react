    import React from 'react'
    import ReactDOM  from 'react-dom/client'

    const para = 1000; 

    const Heading = () => (
        <h1>heading form child component</h1>
        
    );

    const Parent = () => (
        <div id="parent">
            { Heading() }
            <h2> this is heading form parent</h2>
            { para}
        </div>
    )
     
      
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Parent />);
