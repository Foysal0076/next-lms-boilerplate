import { FETCH_USER_INFO } from "../reduxConstants"

export const getUserInfo = () => {
    try {
        //*Necessary logic to get user information
        const data = 'Fetched User Data' //Replace it with returned data from api call
        //*After fetching data from external api dispatch correspondent action
        dispatch({
            type: FETCH_USER_INFO,
            payload: data
        })
    } catch (error) {
        console.log(error.response?.data?.message || error.message)
    }
}

export const updateUserInfo = () => {
    //*Necessary logic to update user information
}