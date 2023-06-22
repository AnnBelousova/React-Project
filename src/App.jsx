import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './App.css'
import Home from './components/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Favorites from './components/favorites/Favorites';
import Basket from './components/basket/Basket';
import Form from './components/Form';
import Footer from './components/Footer';
import Description from './components/Description';

export const AppContext = React.createContext({})


function App() {

  const [tyrs, setTyrs] = useState([])
  const [favorites, setFavorites] = useState([])
  const [overlayItems, setOverlayItems] = useState([])
  useEffect(()=> {
    async function axiosData (){
      const tyrsData = await axios.get('https://647f7be5c246f166da90d2ea.mockapi.io/tyrs')
      const favoritesData = await axios.get('https://647f7be5c246f166da90d2ea.mockapi.io/favorites')
      const cartData = await axios.get('https://647f7be5c246f166da90d2ea.mockapi.io/cart')
      setTyrs(tyrsData.data)
      setTyrs(favoritesData.data)
      setTyrs(cartData.data)
    }
    axiosData();
},[])
const deleteItems = (id) => {
  axios.delete(`https://647f7be5c246f166da90d2ea.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete) => objDelete.filter(item => item.id !== id))
}
const isAdded=(myid) => {
  return overlayItems.some((objectIsAdded) => objectIsAdded.myid === myid)
}

const isFav=(myid) => {
  return favorites.some((objectIsAdded) => objectIsAdded.myid === myid)
} 

  return (
    <AppContext.Provider
    value={
      {
        tyrs,
        setTyrs,
        overlayItems,
        setOverlayItems,
        favorites,
        setFavorites,
        isAdded,
        isFav
      }
    }>
  
      <div>
       
       <Router>
       <Header/> 
        <Routes>
          <Route path='/favorites'
                      element={
                          <Favorites
                          favorites={favorites}
                          setFavorites={setFavorites}
                          item={tyrs}
                          overlayItems={overlayItems}
                          setOverlayItems={setOverlayItems}
                          />
                      }
                  /> 
      
  
      <Route path='/'
                      element={
                          <Home
                          item={tyrs}
                          overlayItems={overlayItems}
                          setOverlayItems={setOverlayItems}
                          favorites={favorites}
                          setFavorites={setFavorites}
                          />
                      }
                  />
  
      <Route path='/form'
                  element={
                          <Form/>
                      }
                  />
  
          <Route path='/cart'
                  element={
                          <Basket
                          totalPrice={
                            overlayItems.reduce((element = overlayItems.length, obj)=>
                            element+obj.price, 0 
                            )
                          }
                          overlayProp={overlayItems}
                          deleteItems={deleteItems}
                          />
                      }
                  />
        <Route path='/description'
                  element={
                          <Description/>
                      }
                  />
  
        </Routes>
        </Router> 
     
      
        <Footer/>
       </div>
  
      </AppContext.Provider>
    );
  }

export default App;
