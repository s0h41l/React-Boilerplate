import axios from 'axios';

export const registerUser = async (name, email, password) =>{

    const url = process.env.REACT_APP_BASE_API_URL+'/user/register';
    
    const user = {
        name: name,
        email: email,
        password: password
      }
      
    return await axios.post(url,user);
}