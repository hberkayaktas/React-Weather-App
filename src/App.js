import React from 'react'
import {CountryProvider} from './context/CountryContext';
import FetchComponent from './fetch/FetchComponent';
import ShowComponent  from './show/ShowComponent'
import Footer from './footer/footer';


function App() {
  return (
    <CountryProvider>
      <FetchComponent/>
      <hr/>
      <ShowComponent/>
      <Footer/>
    </CountryProvider>
  )
}

export default App