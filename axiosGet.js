import axios from 'axios'

export function axiosGet(url, params) {
    return axios
        .get(url, { params })
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        })
}
