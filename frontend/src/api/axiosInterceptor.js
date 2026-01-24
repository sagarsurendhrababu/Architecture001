import axios from 'axios';

const axiosInterseptor = axios.create({
     baseURL: 'http://localhost:4000',
});

export default axiosInterseptor;

