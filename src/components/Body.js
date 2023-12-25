import RestroCard from './RestroCard';
import { useState,useEffect } from 'react';
import ShimmerUI from './ShimmerUI.JS';


 const Body = () => {

    //state variable
    const [listOfRest,setlistOfRest] = useState([]); 

    
    useEffect( () => {
        fetchData();
        console.log("use effect called");  
    },[]);

    const fetchData = async () => {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const resfetch= await data.json();
        setlistOfRest(resfetch?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    console.log("body rendered");
    
    //Conditional Rendering 
    if(listOfRest.length ===0)
    {
        return (<ShimmerUI />);
    }

    return (<div className="body">
        <div className='filter'>
            <button 
            className="filetr-btn" 
            onClick={ ()=> {

                const restDataFiltered =  listOfRest.filter( 
                    (resturant) =>  (resturant.info.avgRating > 4) 
                    );
                console.log(restDataFiltered)
                setlistOfRest(restDataFiltered)
                                  
            }}>Top Rated Rest </button>
        </div>
        <div className="resConatainer">
            {
                listOfRest.map((resturant) => (
                    <RestroCard key= { resturant.info.id } resData={ resturant } />
                )) 

            }
                                 
                               
        </div>
    </div>);
 };

export default Body;