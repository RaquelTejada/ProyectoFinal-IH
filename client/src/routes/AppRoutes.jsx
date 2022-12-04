import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import EventsListPage from "../pages/EventsListPage/EventsListPage"
import SignupPage from "../pages/SignupPage/SignupPage"
// import LoginPage from "../pages/LoginPage/LoginPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/crear-itinerario" element={<p>CREAR ITINERARIO</p>} /> */}
            <Route path="/detalles/:itinerario_id" element={<p>DETALLES ITINERARIO</p>} />
            <Route path="/lista-eventos" element={<EventsListPage />} />
            {/* <Route path="/crear-evento" element={<p>CREAR EVENTO</p>} /> */}
            <Route path="/detalles/:evento_id" element={<p>DETALLES EVENTO</p>} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<p>INICIAR SESIÓN</p>} />
            <Route path="/perfil" element={<p>PERFIL</p>} />
            <Route path="/cerrar-sesion" element={<p>CERRAR SESIÓN</p>} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes