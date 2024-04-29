import { AxiosResponse } from 'axios';
import api from './api';

const taskApi = () => {
    const getTasks = (): Promise<AxiosResponse<[]>> => {
        return api.get<[]>('/task');
    };

    return {
        getTasks,
    };
};

export default taskApi();
