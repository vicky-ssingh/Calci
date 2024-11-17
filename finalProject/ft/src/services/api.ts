import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8900',
    headers: {
        'Content-Type': 'application/json',
    }
});

export const calculateExpression = async (imageData: string, dictOfVars: Record<string, any>) => {
    try {
        const response = await api.post('/calculate', {
            image: imageData,
            dict_of_vars: dictOfVars
        });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};