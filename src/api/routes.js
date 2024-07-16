import axios from "axios";

export const createUser = async(valores) =>{
    return await axios.post('http://localhost:4000/api/v1/user/singup', valores)
}

export const login = async(valores) =>{
    return await axios.post('http://localhost:4000/api/v1/user/singin', valores)
}