//? axios //
import axios, { AxiosError, AxiosResponse } from 'axios';

const getRequest = async (url: string) => {
    const response = await axios.get(url)
    return response.data
};

export default getRequest;
