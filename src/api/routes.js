import axios from "axios";

export const createUser = async(values) =>{
    return await axios.post('http://44.212.147.59:4000/api/v1/user/signup', values, {withCredentials: true})
}

export const login = async(values) =>{
    return await axios.post('http://localhost:4000/api/v1/user/signin', values, {withCredentials: true})
}