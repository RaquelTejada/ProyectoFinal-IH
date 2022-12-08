import axios from 'axios'

class DestinationService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/destinations`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getDestinationsByCity() {
        return this.api.get('/getDestinationsByCity')
    }

}

const destinationService = new DestinationService()

export default destinationService