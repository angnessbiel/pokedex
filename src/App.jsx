import './App.css'
import Pokedex from './components/Pokedex'
import React, {useState, useEffect} from 'react'
import style from 'styled-components'
import{motion} from "framer-motion"

const Spinner = style (motion.div)`
 width: 50px;
 height:50px;
 border: 4px solid black;
 border-top: 4px solid red;
 border-radius: 50%;
 display:incline-block;
`;

const Conteiner = style.div`
display: flex;
width:100vw;
align-items: center;
justify-content: center;
height:100vw;
`

function App() {
  const[carregando, setCarregando] = useState(true);

  useEffect(() => {
    const tempo = setTimeout(()=>{
      setCarregando(false);
    }, 5000)
    return ()=> clearTimeout(tempo);
  }, [])

  return (
    <>
      <Conteiner>
        {carregando ? (
           <Spinner
           animate={{rotate: 360}}
           transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
           ></Spinner>
        ):(
          <Pokedex></Pokedex>
        )}

      </Conteiner>
      
    </>
  )
}

export default App