

import React, { useEffect, useRef, useState } from 'react'
import { VscSend } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Structure = () => {
  const chatContainerRef = useRef(null);
  useEffect(() => {
    // Ajustar automáticamente la posición del scroll para mostrar el último mensaje al abrir el chat
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, []);

  const [openHeaderMenu,setOpenHeaderMenu] = useState(false)
  
  return (
    <div className='page'>
      <header className='header'>
        <div>
          Seccion
        </div>
        <div className='img' onClick={()=>{setOpenHeaderMenu(!openHeaderMenu)}}></div>
        
        <div className={openHeaderMenu === false ?'header-menu' : 'header-menu-CTA'}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
            <FaRegUser style={{fontSize:20}}/>
            <span>Ir perfil</span>
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
            <FiLogOut style={{fontSize:20}}/>
            <span>Cerrar sesion</span>
          </div>
        </div>

      </header>
      <aside className='aside'>
        <div>
          Aca van las opciones
        </div>
      </aside>
      <main className='main'>
        <div className='chat-bg'>
          <div className='chat-input-container'>
            <div className='chat-input-card'>
              <input className='chat-input'/>
              <div className='chat-input-btn'>
                <VscSend style={{fontSize:30}}/>
              </div>
            </div>
          </div>
          <div className='chat-messages-container' ref={chatContainerRef}>
            {/*Mensaje*/}
            <div className='chat-message-item'>
              <div className='chat-message-img-container'>
                <div className='chat-message-img'></div>
              </div>
              <div className='chat-message-name-container'>
                <h4>Nombre de la persona</h4>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
              </div>
            </div>

            <div className='chat-message-item'>
              <div className='chat-message-img-container'>
                <div className='chat-message-img'></div>
              </div>
              <div className='chat-message-name-container'>
                <h4>Nombre de la persona 2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default Structure

