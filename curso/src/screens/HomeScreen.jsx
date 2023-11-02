import React from 'react'
import { BiSearch } from "react-icons/bi";


const HomeScreen = () => {
  const progreso = 50;
  const progreso2 = 70;

  return (
    <div id='page'>
      <header>
        <nav className='navigator'>
          <div className='logo'>
            <span>IGNITREX</span>
          </div>
          <div className='user'></div>
        </nav>
      </header>
      <aside>
        <div>home</div>
        <div>buscar</div>
      </aside>
      {/*aca va el contenido*/}
      <main>
          <section>
            <h1>Bienvenid@ Juan!</h1>
            <h2>Tus cursos</h2>
          </section>
          <section className='course__grid'>
            
            <div className='course__card'>
              <h2>Introduccion a la programacion</h2>
              <div className='course__card-progressInfo'>
                <div style={{width:"80%",display:"flex",flexDirection:"row",gap:15,alignItems:"center"}}>
                  <div className='course__card-progressBar'>
                    <div style={{width:`${progreso}%`,height:"100%",backgroundColor:"#82CD47"}}></div>
                  </div>
                  <span>50%</span>
                </div>
                
                <div className='course__card-btn'>
                  <span>Ir al curso</span>
                </div>
              </div>
            </div>

            
            <div className='course__card'>
              <h2>Machine Learning</h2>
              <div className='course__card-progressInfo'>
                <div style={{width:"80%",display:"flex",flexDirection:"row",gap:15,alignItems:"center"}}>
                  <div className='course__card-progressBar'>
                    <div style={{width:`${progreso2}%`,height:"100%",backgroundColor:"#82CD47"}}></div>
                  </div>
                  <span>50%</span>
                </div>
                
                <div className='course__card-btn'>
                  <span>Ir al curso</span>
                </div>
              </div>
            </div>
          </section>
      </main>
    </div>
  )
}

export default HomeScreen