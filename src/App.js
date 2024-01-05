import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Products';
import CartPage from './pages/CartPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
    return(
        <>
           <Router>
            <Navbar />
            <Footer />
                <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/products' element={<Product/>} />
                        <Route path='/cart' element={<CartPage/>} />
                </Routes> 
            </Router>   
        </>
    )
}

export default App;