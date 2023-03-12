import axios from "axios";


export  async function userToken(token){
    const  response = await axios.get(
        "http://127.0.0.1:8000/auth/users/me/",
        {headers: {'Authorization': `Token ${token}`}
}).then((res) =>{
    localStorage.setItem('user', res.data.id);
})
}


    