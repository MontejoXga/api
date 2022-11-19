import React from 'react';
import './Componentes/Style.css'
import {Main} from './Componentes/Main';
import {Routes,Route} from 'react-router-dom'
import {Marvel} from './Componentes/Marvel';



function App() {
  return(
    <>
      <Routes>
        <Route path='/'element={<Main/>}/>
        <Route path='/:id' element={<Marvel/>}/>
      </Routes>
    </>
  )
}

export default App;
