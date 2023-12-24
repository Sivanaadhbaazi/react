import RestroCard from './RestroCard';
import restData from '../utills/demoData';


 const Body = () => (
    <div className="body">
        <div className='search'></div>
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