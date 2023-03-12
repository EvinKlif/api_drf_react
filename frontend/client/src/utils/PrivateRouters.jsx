
import { Navigate, Outlet} from 'react-router-dom';


const PrivateRouters = () => {
    let auth = localStorage.getItem('token');
  
    if(auth){
        return ( <Outlet/> )
        }
        else{
           return( <Navigate to='/login'/>)
        };
};

export default PrivateRouters;