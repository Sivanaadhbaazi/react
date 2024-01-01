import { useParams } from "react-router-dom";
import userResturantMenu from "../utills/useResturantMenu"

const Resturant = () => {

    const {resId} = useParams();
   
    // custome hook 
    const restMenu = userResturantMenu(resId);
    return(

        <h1> { restMenu } </h1>

    )
}

export default Resturant;