import '../styles/reset.css';
import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import { Navigate } from 'react-router-dom';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="*" element={<Navigate to="/404"/>} />
          <Route path="/404" element={<NotFound />} />
       </Routes>
    </>
 );
};


export default App;
