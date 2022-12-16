import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use(async(config) => {
    config.headers = {
        ...config.headers,
        'x-token': await AsyncStorage.getItem('@appointments:token')
    };

    return config;
}); 

export default api;