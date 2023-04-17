import '../styles/reset.css';
import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} /> */}
       </Routes>
    </>
 );
};

export default App;
