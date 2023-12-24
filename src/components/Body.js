import RestroCard from './RestroCard';
import restData from '../utills/demoData';


 const Body = () => (
    <div className="body">
        <div className='filter'>
            <button className="filetr-btn" onClick={ ()=> { console.log("butnon clicked") } }>Top Rated Rest </button>
        </div>
        <div className="resConatainer">
            {
                restData.map((resturant) => (
                    <RestroCard key= { resturant.info.id } resData={ resturant } />
                )) 

            }
                                 
                               
        </div>
    </div>
);

export default Body;