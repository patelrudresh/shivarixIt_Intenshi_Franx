import './App.css';
import Header from './component/Header';

import Home from './component/pages/Home';
import About from './component/pages/About';
import Item from './component/pages/Item';
import Investors from './component/pages/Investors';
import Blog from './component/pages/Blog';

import AllBlogs from './component/pages/AllBlog';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './component/pages/Quiz';
import Contact from './component/pages/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter>

      <Header />
      <hr />

      <Routes>
        <Route path="/" element={
          <div className="section">
            <Home />
            <About />
            <Item />
            <Investors />
            <Blog />
           <Quiz/>
          </div>
        } />

        
        <Route path="/all-blogs" element={<AllBlogs />} />

      </Routes>
       
            <Contact/>
<Footer/>
    </BrowserRouter>
  );
}

export default App;