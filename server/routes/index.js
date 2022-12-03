module.exports = app => {

    const itinerariesRoutes = require("./itineraries.routes")
    app.use("/api/itineraries", itinerariesRoutes)

}
