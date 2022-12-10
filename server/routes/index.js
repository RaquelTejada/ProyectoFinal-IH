
const { isAuthenticated } = require('../middleware/jwt.middleware')

module.exports = app => {

    const itinerariesRoutes = require("./itineraries.routes")
    app.use("/api/itineraries", itinerariesRoutes)

    const eventsRoutes = require("./events.routes")
    app.use("/api/events", isAuthenticated, eventsRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    const uploadRoutes = require("./upload.routes")
    app.use("/api/upload", uploadRoutes)

}
