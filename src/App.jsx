import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Production from './pages/Production';
import Webdev from './pages/Webdev';
import Services from './pages/Services'; // ✅ Import the new page
import './styles/global.css';
import './styles/layout.css';
import './styles/typography.css';
import './styles/buttons.css';
import './styles/responsive.css';
import './styles/app.css';

function App() {
  return (
    <Router basename="/portfolio-static-webapp">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lessons">Music Lessons</Link>
        <Link to="/audio-production">Audio Production</Link>
        <Link to="/services">Services</Link> {/* ✅ Add Services link */}
        <Link to="/web-development">Web Development</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/audio-production" element={<Production />} />
        <Route path="/services" element={<Services />} /> {/* ✅ Add Services route */}
        <Route path="/web-development" element={<Webdev />} />
      </Routes>
    </Router>
  );
}

export default App;
