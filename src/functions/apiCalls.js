import axios from "axios"

const baseUrl = 'http://localhost:3000' //'https://live.fapshi.com'
const headers={
    apiuser:import.meta.env.apiuser,
    apikey:import.meta.env.apikey
}
export async function Get(endpoint){
    try {
        const config = {
            method: 'get',
            url: baseUrl+`/${endpoint}`,
        }
        console.log(config)
        const response = await axios(config)
        if(response.status===200) return response
        // response.data.statusCode = response.status
        // resolve(response.data)
    }catch(e){
        console.log(e)
        throw new Error(e);
    }
}
export async function Post(endpoint,data){
    try {
        const config = {
            method: 'post',
            url: baseUrl+`/${endpoint}`,
            headers: headers,
            data: data
        }
        console.log(config)
        const response = await axios(config)
        if(response.status===200) return response
        // response.data.statusCode = response.status
        // resolve(response.data)
    }catch(e){
        console.log(e)
        throw new Error(e);
    }
}
// export default function initiatePay(data){
//     return new Promise(async function(resolve){
//         try {

//             if(!data?.amount)
//                 resolve(error('amount required', 400))
//             if(!Number.isInteger(data.amount))
//                 resolve(error('amount must be of type integer', 400))
//             if(data.amount<100)
//                 resolve(error('amount cannot be less than 100 XAF', 400))

//             const config = {
//                 method: 'post',
//                 url: baseUrl+'/initiate-pay',
//                 headers: headers,
//                 data: data
//             }
//             // const config2 = {
//             //     method: 'post',
//             //     url: baseUrl+'/test',
//             //     data: data
//             // }
//             const response = await axios(config)
//             response.data.statusCode = response.status
//             resolve(response.data)
//         }catch(e){
//             console.log(e)
//             e.response.data.statusCode = e?.response?.status
//             resolve(e.response.data)
//         }
//     })
// }