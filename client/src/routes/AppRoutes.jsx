import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ItinerariesFilteredPage from "../pages/ItinerariesFilteredPage/ItinerariesFilteredPage"
import EventsListPage from "../pages/EventsListPage/EventsListPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ItineraryType from "../components/ItinerariesType/ItinerariesType"
import ItineraryEditPage from "../pages/ItineraryEditPage/ItineraryEditPage"
import DestinationsPage from "../pages/DestinationsPage/DestinationsPage"
import ItineraryDetailsPage from "../pages/ItineraryDetailsPage/ItineraryDetailsPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinos" element={<DestinationsPage />} />
            <Route path="/itinerario/:hostcity" element={< ItineraryType />} />
            <Route path="/itinerario/:hostcity/:category" element={<ItinerariesFilteredPage />} />
            <Route path="/detalles/:itinerary_id" element={<ItineraryDetailsPage />} />
            <Route path="/editar/:itinerary_id" element={< ItineraryEditPage />} />
            <Route path="/lista-eventos" element={<EventsListPage />} />
            <Route path="/detalles/:evento_id" element={<p>DETALLES EVENTO</p>} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/perfil" element={<p>PERFIL</p>} />
            <Route path="/cerrar-sesion" element={<p>CERRAR SESIÓN</p>} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes