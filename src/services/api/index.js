import Axios from 'axios'
const URL_DEFAULT = 'https://localhost:5001';

let api = Axios.create({
    baseURL: URL_DEFAULT,
    headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
    },
    timeout: 20000
});

export default api;