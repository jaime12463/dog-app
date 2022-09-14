import React,{useState,useMemo,useCallback} from 'react'
import LoadingPages from '../src/pages/LoadingPages'

import {  BrowserRouter as Router,
    Routes,
    Route
    } from 'react-router-dom'
import BreedPages from './pages/BreedPages'
import SubBreedPages from './pages/SubBreedPage'
import FavoritesPage from './pages/FavoritesPage'
import Splash from './pages/Splash'

const App=props=> {
    return (
        <Router>
            <Routes>
              <Route  path="/" element={<Splash />} >     
              </Route>
              <Route path="/main" element = {<BreedPages />}>
              </Route>
              <Route path="/favorite" element = {<FavoritesPage  />}>
              </Route>
              <Route path="/breed/:breed"  element={<SubBreedPages  /> }>
              </Route>
              <Route path='*'  element = {<LoadingPages />}>
              </Route>
            </Routes>
        </Router>

)

}

export default App 