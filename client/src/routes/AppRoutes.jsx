import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
// import CoasterDetailsPage from "../pages/CoasterDetailsPage/CoasterDetailsPage"
// import CoastersListPage from "../pages/CoastersListPage/CoastersListPage"
import SignupPage from "../pages/SignupPage/SignupPage"
// import LoginPage from "../pages/LoginPage/LoginPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/galeria" element={<CoastersListPage />} />
            <Route path="/detalles/:coaster_id" element={<CoasterDetailsPage />} /> */}
            <Route path="/registro" element={<SignupPage />} />
            {/* <Route path="/acceder" element={<LoginPage />} /> */}
            {/* <Route path="/perfil" element={<p>perfil</p>} /> */}
            {/* <Route path="/*" element={<h1>404</h1>} /> */}
        </Routes>
    )
}

export default AppRoutes