import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const {items} = useSelector((state)=>state.wishReducer)
    const {cart} = useSelector((state)=>state.cartReducer)

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                    <Link to={'/'} style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                        <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#de1b7a",}} />
                        {' '}
                        <b>EKart</b>
                    </Link>
                    </Navbar.Brand>
                <div>
                    <Link className='btn me-3' to={'/wish'}><i className="fa-solid fa-heart" style={{color: "#de1b7a",}} /> WishList
                    {' '}
                    <span className='badge bg-dark'>{items?.length}</span>
                    </Link>
                    <Link className='btn me-3' to={'/cart'}><i className="fa-solid fa-cart-shopping" style={{color: "#f9c406",}} /> Cart
                    {' '}
                    <span className='badge bg-dark'>{cart?.length}</span>
                    </Link>
                </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header