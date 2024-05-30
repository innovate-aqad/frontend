import axios from "axios"
import { environmentVariables } from "../config/Config";

export const userData =async()=>{
    try {
        const getData = await axios.get(`${environmentVariables?.apiUrl}/api/user/get_by_email?email=rathorejee074@gmail.com`);
        return getData;
    } catch (error) {
        return error.response.data.message
    }
}