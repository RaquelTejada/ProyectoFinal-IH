import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useCallback } from 'react'
import '../ItineraryMap/ItineraryMap.css'
import { useState } from 'react'

const containerStyle = {
    width: '100%',
    height: '400px'
}

function MyMap({ locations }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    })

    const position = {
        lat: locations[0].coordinates[0],
        lng: locations[0].coordinates[1]
    }

    const [map, setMap] = useState(null)

    const MarkeronLoad = (marker) => {
        console.log('marker', marker)
    }

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(position)
        const zoom = 8
        map.fitBounds(bounds)
        map.setZoom(zoom)
        setMap(map)
    }, [])

    const OPTIONS = {
        minZoom: 4,
        maxZoom: 15
    }

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            position={position}
            options={OPTIONS}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <>
            </>
            {locations.map((elm) => {
                return (<Marker onLoad={MarkeronLoad} position={{ lat: elm.coordinates[0], lng: elm.coordinates[1] }} />)
            })
            }

        </GoogleMap>
    ) : <></>
}

export default MyMap


