import React, { useEffect, useState } from 'react' ; 
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen' ; 

const App = () => {
 
 

  
  return (
      <Router>
              <Routes >
                 
                <Route path ='/profile' element={<ProfileScreen /> }/>
                <Route path ='/' element = { <HomeScreen />} />
              


              </Routes>

        </Router>
    )
}

export default App ; 

