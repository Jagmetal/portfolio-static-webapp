import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './styles/app.css';
import './styles/home.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}