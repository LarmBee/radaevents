import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import ForgotPassword from './components/Authentication/ForgotPassword';
import EventsPage from './components/Events/EventsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route path ="/Events" element={<EventsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
