import axios from "axios";

export const loginUser = async(credentials)=>{
    const response= await axios.post("http://localhost:5173/login", 
        credentials,
        {headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)})
        if (!response.ok) {
            throw new Error('Login failed');
        }
    
        return await response.json();
}
export const logoutUser = async()=>{
    const response = await axios.post('/api/test')
    if (!response.ok) {
        throw new Error('Logout failed');
    }
    return
}
