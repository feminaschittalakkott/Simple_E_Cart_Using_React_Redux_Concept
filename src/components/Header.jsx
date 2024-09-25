import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchWithKey } from '../redux/slices/product_slice';

function Header() {

    const { items } = useSelector((state) => state.wishReducer)
    const { cart } = useSelector((state) => state.cartReducer)

    const [key, setKey] = useState("")

    const dispatch = useDispatch()

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                            <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#de1b7a", }} />
                            {' '}
                            <b>EKart</b>
                        </Link>
                    </Navbar.Brand>
                    <div className='d-flex'>
                        <div className='d-flex'>
                            <input type="text" className='form-control' placeholder='Search Products Here...' onChange={(e)=>setKey(e.target.value)} />
                            <button className='btn btn-success me-4' onClick={()=>{dispatch(searchWithKey(key))}}>Search</button>
                        </div>
                        <Link className='btn me-3' to={'/wish'}><i className="fa-solid fa-heart" style={{ color: "#de1b7a", }} /> WishList
                            {' '}
                            <span className='badge bg-dark'>{items?.length}</span>
                        </Link>
                        <Link className='btn me-3' to={'/cart'}><i className="fa-solid fa-cart-shopping" style={{ color: "#f9c406", }} /> Cart
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