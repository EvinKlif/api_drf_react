import axios from "axios";
import mainUrl from './host';

export  async function userToken(token){
    const  response = await axios.get(
        `http://${mainUrl}/auth/users/me/`,
        {headers: {'Authorization': `Token ${token}`}
}).then((res) =>{
    localStorage.setItem('user_id', res.data.id);
})
}


    