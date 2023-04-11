import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects';

import Container from './components/pages/Layout/Container';
import Navbar from './components/pages/Layout/Navbar';
import Footer from './components/pages/Layout/Footer'
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/newprojects' element={<NewProject />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/newproject' element={<NewProject />} />
          <Route  path='/projects' element={<Projects />} />
          <Route  path='/project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
