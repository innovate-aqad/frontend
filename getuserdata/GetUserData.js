import axios from "axios"

export const userData =async()=>{
    try {
        const getData = await axios.get("http://3.29.209.107:2000/api/user/get_by_email?email=rathorejee074@gmail.com");
        return getData;
    } catch (error) {
        return error.response.data.message
    }
}