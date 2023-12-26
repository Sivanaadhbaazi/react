import { Header } from "./Header"
import { useRouteError } from "react-router-dom";
const ErrorC = () => {
    const err = useRouteError();
    
    return(
        <div className="App-Layout">
            <Header />
            <h1>404 Page</h1>
            {console.log(err)}
        </div>
    )
};

export default ErrorC;