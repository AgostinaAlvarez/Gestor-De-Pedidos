import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Admin, Analytics, Dashboard, Home, Landing } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AppRoutes from "./routes/AppRoutes";
import LoginScreen from "./screens/LoginScreen";
import Pusher from "pusher-js";
import ChatScreen from "./screens/ChatScreen";
import './App.css'
import Structure from "./screens/Structure";

function App() {
  const [username, setUsername] = useState('username');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [pusherConnected, setPusherConnected] = useState(false);

  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher('ff0f3e88dc64df6abcd4', {
      cluster: 'sa1'
    });

    const channel = pusher.subscribe('pusher-event-chart');
    channel.bind('message', function (data) {
      setMessages(prevMessages => [...prevMessages, data]);
    });

    // Marca el estado para indicar que Pusher ya está conectado
    setPusherConnected(true);

    // Limpia el oyente de eventos y desconecta Pusher cuando el componente se desmonta
    return () => {
      channel.unbind('message');
      pusher.unsubscribe('pusher-event-chart');
      pusher.disconnect();
      // No desconectamos Pusher aquí para evitar reconexiones innecesarias
    };
  }, []);
  
  const submit = async e => {
    e.preventDefault();

    await fetch('https://backend-chat-test-e23pnkcpb-aamgituser.vercel.app/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        message
      })
    });


    setMessage('');
  }

  return (
    <>
      
      <Structure/>
      {
        /*
        <div className="container">
              <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                  <div
                      className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                      <input className="fs-5 fw-semibold" value={username}
                             onChange={e => setUsername(e.target.value)}/>
                  </div>
                  <div className="list-group list-group-flush border-bottom scrollarea">
                      {messages.map(message => {
                          return (
                              <div className="list-group-item list-group-item-action py-3 lh-tight">
                                  <div className="d-flex w-100 align-items-center justify-content-between">
                                      <strong className="mb-1">{message.username}</strong>
                                  </div>
                                  <div className="col-10 mb-1 small">{message.message}</div>
                              </div>
                          )
                      })}
                  </div>
              </div>
              <form onSubmit={e => submit(e)}>
                  <input className="form-control" placeholder="Write a message" value={message}
                         onChange={e => setMessage(e.target.value)}
                  />
              </form>
          </div>


        //////////////////////////////////////////////////
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
        
            <Navigation />

            {user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <button onClick={login}>Login</button>
            )}

            <Routes>
              <Route index element={<Landing />} />
              <Route path="/landing" element={<Landing />} />
              <Route element={<ProtectedRoute isAllowed={!!user} />}>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route
                path="/analytics"
                element={
                  <ProtectedRoute
                    redirectTo="/home"
                    isAllowed={!!user && user.permissions.includes("analize")}
                  >
                    <Analytics />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute
                    redirectTo="/home"
                    isAllowed={!!user && user.roles.includes("admin")}
                  >
                    <Admin />
                  </ProtectedRoute>
                }
              />
            </Routes>
        */
      }
    </>
      
    
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;


