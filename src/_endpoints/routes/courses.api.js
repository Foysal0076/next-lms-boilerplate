import { AXIOS_API_URL } from "../config/config.axios"

export const fetchCourses = ({ page = 1, count = 12, sortBy = 'date', order = 'desc' }) => AXIOS_API_URL.get(`/courses?page=${page}&count=${count}&sort_by=${sortBy}&sort=${order}`)

export const fetchACourse = (courseSlug) => AXIOS_API_URL.get(`/courses/${courseSlug}`)