import axios from 'axios'

export async function axiosGet(url, params) {
    try {
        const resp = await axios.get(url, { params })
        return resp.data
    } catch (err) {
        throw err
    }
}
