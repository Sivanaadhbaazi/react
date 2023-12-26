import RestroCard from './RestroCard';
import { useState,useEffect } from 'react';
import ShimmerUI from './ShimmerUI.JS';


 const Body = () => {

    //state variable
    const [listOfRest,setlistOfRest] = useState([]); 
    const [orglistOfRest,setorglistOfRest] = useState([]); 
    const [searchText, setsearchText]=useState("");
    const [filetrBtnText, setfiletrBtnText]=useState("Top Rated");

    
    useEffect( () => {
        fetchData();
        console.log("use effect called");  
    },[]);

    const fetchData = async () => {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const resfetch= await data.json();
        
        setlistOfRest(resfetch?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setorglistOfRest(resfetch?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    console.log("body rendered");

    //Conditional Rendering 
    if(listOfRest.length ===0)
    {
        return (<ShimmerUI />);
    }

    return (<div className="body">
        <div className='search'>
            <input type="text" name="search" value = {searchText} onChange = { (e) => {setsearchText(e.target.value)}}/> 
            <button className="search-btn" onClick={() => { 
                const filetrData = orglistOfRest.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setlistOfRest(filetrData);
            }}>
                Search
            </button>
        </div>
        
        <div className='filter'>
            <button 
            className="filetr-btn" 
            onClick={ ()=> {

                const restDataFiltered =  orglistOfRest.filter( 
                    (resturant) =>  (resturant.info.avgRating > 4) 
                    );
                console.log(restDataFiltered);
                

                if(filetrBtnText === "Top Rated")
                {
                    console.log("Before Top Render");
                    setlistOfRest(restDataFiltered);
                    console.log("After Top Rated");
                    setfiletrBtnText("All");
                    console.log("After all convert Rated");

                }
                else
                {
                    setlistOfRest(orglistOfRest);
                    setfiletrBtnText("Top Rated");
                }
                
                                  
            }}> {filetrBtnText} </button>
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