import './App.css';
import Registration from './pages/registration/Registration';
import LogIn from './pages/login/LogIn';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Main from './pages/main/Main';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Auth />}>
          <Route index element={<LogIn />} />
          <Route path='/Login' element={<LogIn />} />
          <Route path='/reg' element={<Registration />} />
          <Route path='/main' element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
