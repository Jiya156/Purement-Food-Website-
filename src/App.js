import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './pages/Layout';
import Menu from './pages/Menu';
import BookTable from './pages/BookTable';
import OurProducts from './pages/OurProducts';
import Cart from './pages/Cart';

function App() {
  return (

    <>
      <BrowserRouter>
        {<Layout/>}
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/BookTable' element={<BookTable/>}/>
          <Route path='/OurProducts' element={<OurProducts/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
