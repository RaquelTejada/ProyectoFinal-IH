import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import UserMessage from './components/UserMessage/UserMessage'

import { useState } from 'react'



const App = () => {

  return (
    <div className="App">
      <Navigation />
      <Footer />
      <AppRoutes />
      <UserMessage />


    </div>
  )
}

export default App
