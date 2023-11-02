import React from 'react'

const ChatScreen = () => {
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
        <div>Chat</div>
      </aside>
      {/*aca va el contenido*/}
      <main>
        <section className='header-chat'>
          <h2>Mesa de ayuda</h2>
        </section>
        <div className='test'>
          Aca va el chat
        </div>
      </main>
    </div>
  )
}

export default ChatScreen