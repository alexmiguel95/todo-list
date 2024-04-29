import axios, { AxiosRequestConfig } from 'axios';

const api = () => {
    const config: AxiosRequestConfig = {
        baseURL: 'https://662d58e3a7dda1fa378a6ed6.mockapi.io/api/',
        timeout: 60 * 1000,
    };

    return axios.create(config);
};

export default api();
