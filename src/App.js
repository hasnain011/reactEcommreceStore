import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar2 from './components/Navbar2/Navbar2';
import NewsLetter from './components/NewsLetterSection/NewsLetter';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <>
    <Provider store= {store}>
     <Router>
     <Navbar2/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>      
        <Route path="/cart" element={<Cart />}/>      
      </Routes>
      <NewsLetter/>
      <Footer/>
    </Router>
    </Provider>
    </>
  );
}

export default App;
