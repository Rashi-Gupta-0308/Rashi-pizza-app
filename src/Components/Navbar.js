import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../pages/CartPage'

const Navbar = () => {
    const cartStyle = {
      background: '#F59E0D',
      display: 'flex',
      padding: '6px 12px',
      borderRadius: '50px'
    }

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-1">
                    <div className='flex'>
                        <Link to="/">
                            <img style={{ height: 95 }} src="/images/logo.png" alt="logo" />
                        </Link>
                        <p className='mt-8 text-1xl font-bold'>Pizza</p>
                    </div>
                    <ul className="flex items-center">
                        <li className='font-bold'><Link to="/">Home</Link></li>
                        <li className="ml-6 font-bold"><Link to="/products">Products</Link></li>
                        <li className="ml-6 font-bold">
                            <Link to="/cart">
                                <div style={cartStyle}>
                                    <span>0</span>
                                    <p className='ml-2'>Cart</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </>
    )
}


export default Navbar