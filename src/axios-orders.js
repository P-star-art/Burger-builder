import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-6b778-default-rtdb.firebaseio.com/'
});

export default instance;