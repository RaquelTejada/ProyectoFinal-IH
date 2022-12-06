import { createContext, useState } from "react";

const ItinerariesContext = createContext()

function ItinerariesProviderWrapper(props) {
    const [showItineraries, setShowItineraries] = useState({
        // show: false,
        // city: '',
        // transport: '',
        // category: '',
        // title: '',
        // duration: '',
        // pets: false,
        // description: '',
        // images: ''

    })
    return (
        < ItinerariesContext.Provider value={{ showItineraries, setShowItineraries }}>
            {props.children}
        </ItinerariesContext.Provider >

    )
}

export { ItinerariesContext, ItinerariesProviderWrapper }