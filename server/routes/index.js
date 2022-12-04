module.exports = app => {

    const itinerariesRoutes = require("./itineraries.routes")
    app.use("/api/itineraries", itinerariesRoutes)

    const eventsRoutes = require("./events.routes")
    app.use("/api/events", eventsRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

}
