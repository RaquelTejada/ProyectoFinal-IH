import './ItinerariesFilteredPage.css'
import { useParams } from 'react-router-dom'
import ItinerariesList from '../../components/ItinerariesList/ItinerariesList'
import { ItinerariesContext } from '../../contexts/itinerary.context'
import { useContext } from 'react'

const ItinerariesFilteredPage = () => {

    const { itineraries } = useContext(ItinerariesContext)


    // const { city } = useParams()

    // const [itineraries, setItineraries] = useState([])

    // useEffect(() => {

    //     itinerariesService
    //         .getFilteredItineraries(city)
    //         .then((response) => {
    //             console.log(response)
    //             setItineraries(response.data)
    //         })
    //         .catch(err => console.log(err))

    // }, [city])

    return (
        <div>
            <h1>Events List</h1>
            <ItinerariesList />
        </div>
    )
}

export default ItinerariesFilteredPage