import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Production from './pages/Production';
import Webdev from './pages/Webdev';
import Services from './pages/Services';

import './styles/global.css';
import './styles/layout.css';
import './styles/typography.css';
import './styles/buttons.css';
import './styles/responsive.css';
import './styles/app.css';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lessons">Music Lessons</Link>
        <Link to="/audio-production">Audio Production</Link>
        <Link to="/services">Services</Link>
        <Link to="/web-development">Web Development</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/audio-production" element={<Production />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web-development" element={<Webdev />} />
        {/* optional catch-all */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
