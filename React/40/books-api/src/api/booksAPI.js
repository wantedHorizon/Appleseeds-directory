import axios from 'axios';

const BASE_ID='5f634054363f0000162d8658';
export default axios.create({
    baseURL: `https://${BASE_ID}.mockapi.io/api/eliran/`
})