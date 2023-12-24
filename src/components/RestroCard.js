import { CLOUD_URL } from "../utills/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestroCard = (props) => {
        
    const { id,name,cuisines,avgRatingString,costForTwo,cloudinaryImageId} = props?.resData?.info;
    
    return(
        <div className="restrocard"  style={styleCard}>
            <div className="image">
                <img src={ CLOUD_URL + cloudinaryImageId }/>

            </div>
            <div className="details">
                <h4 className='title'>{name} </h4>
                <h4>{cuisines.join(",")}</h4>
                <h4> {avgRatingString} </h4>
                <h4> {costForTwo} </h4>
            </div>
        </div>
    )
};

export default RestroCard;