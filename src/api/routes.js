import axios from "axios";

export const registerUser = async(values) =>{
    return await axios.post('http://44.212.147.59:4000/api/v1/user/signup', values)
}

export const loginUser = async(values) =>{
    return await axios.post('http://44.212.147.59:4000/api/v1/user/signin', values)
}