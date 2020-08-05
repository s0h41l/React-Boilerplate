import axios from 'axios';

export const registerUser = async (name, email, password) =>{

    const url = process.env.REACT_APP_BASE_API_URL+'/user/register';
    
    const user = {
        name: name,
        email: email,
        password: password
      }
      
    try{
        return await axios.post(url,user);
    }catch(err){
        return {message:'Something went wrong!'}
    }
}

export const loginUser = async (email, password) =>{

    const url = process.env.REACT_APP_BASE_API_URL+'/user/login';
    
    const user = {
        email: email,
        password: password
      }
      
    try{
        return await axios.post(url,user);
    }catch(err){
        return {message:'Something went wrong!'}
    }
}