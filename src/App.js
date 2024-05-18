import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './componenets/Layout';
import Home from './componenets/Home';
import About from './componenets/About';
import Contact from './componenets/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
