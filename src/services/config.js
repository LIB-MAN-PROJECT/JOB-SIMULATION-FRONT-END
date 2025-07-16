import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

export const apiClient = axios.create({
    baseUrl: baseURL
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
        config.headers.Authorization =`Bearer ${token}`
    }
    return config;
},
(error) => Promise.reject(error)
)
