import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
