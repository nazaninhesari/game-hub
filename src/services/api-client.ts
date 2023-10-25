import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'593f56a9ce8f4d89b6e880c0df67470c'
    }
})