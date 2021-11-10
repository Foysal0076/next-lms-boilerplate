import axios from 'axios'
import configUrls from './urls.json'

export const AXIOS_API_URL = axios.create({ baseURL: process.env.API_URL || configUrls.API_URL })

AXIOS_API_URL.interceptors.request.use(request => {
    //* Any additional attachments in this instance
    request.headers.MySecret = process.env.MY_SECRET || 'HereGoesYourSecret'
    return request
})