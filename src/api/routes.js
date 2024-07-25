import axios from "axios";

export const registerUser = async(values) =>{
   return await axios.post('http://44.212.147.59:4000/api/v1/user/signup', values)
 
}

export const loginUser = async(values) =>{
    return await axios.post('http://44.212.147.59:4000/api/v1/user/signin', values)
}

export const registerInteresting = async(values) =>{
    return await axios.post('http://44.212.147.59:4000/api/v1/curiousFact/', values)
}

export const getUser = async(userId) =>{
    return await axios.get(`http://44.212.147.59:4000/api/v1/user/${userId}`)
}

export const updateUser = async(userId, values) =>{
    return await axios.put(`http://44.212.147.59:4000/api/v1/user/${userId}`,values);
}

export const deleteUser = async(userId) =>{
    return await axios.delete(`http://44.212.147.59:4000/api/v1/user/${userId}`);
}

export const getInteresting = async() =>{
    return await axios.get('http://44.212.147.59:4000/api/v1/curiousFact/')
}

export const registerWorkshop = async(values) =>{
    return await axios.post('http://44.212.147.59:4000/api/v1/mechanicWorkshop', values)
}

export const getWorkshop = async (userId) => {
    return await axios.get(`http://44.212.147.59:4000/api/v1/mechanicWorkshop?id_user=${userId}`);
  }
  