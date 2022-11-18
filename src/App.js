import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  const[personajes,setPersonajes]=useState([])

  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4e4262f5add91c0e7887e0437a7f87c8&hash=bf28c6b8a294cb19965af89efdf86d6a')
    .then(res=>{
      setPersonajes(res.data.data.results)
    }).catch(error=>console.log(error))

  },[])

  console.log(personajes)

  return (
    <div className="App">
      <h1>Marvel</h1>
      <div>
          { personajes.map( per=>(

            <div key={per.id}>
            <div style={{width:"18rem", height:"18rem"}}>
              <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`}  className="pendejo"/>
                <div>
                  <p>{per.name}</p>
                </div>
            </div>
            </div>

          ))
          
          }
      </div>
    </div>
  );
}

export default App;
