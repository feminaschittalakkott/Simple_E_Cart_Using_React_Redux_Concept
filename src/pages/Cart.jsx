import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQty, decreaseQty, checkOut } from '../redux/slices/cartSlice'

function Cart() {

  const { cart } = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()

  return (
    <>
      <div className='container-fluid p-4'>
        <h3>Shop Cart</h3>
        <Row>
          <Col sm={12} md={8}>
            {
              cart?.length > 0 ?

                <table className='table table-bordered border shadow border-1 border-dark text-center'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((i =>

                        <tr>
                          <td>{i.id}</td>
                          <td>I{i.title}</td>
                          <td><img src={i.thumbnail} height={'220px'} width={'200px'} alt="Iphone" /></td>
                          <td>{i.price}</td>
                          <td>
                            <div className='d-flex justify-content-center'>
                              <button className='btn' onClick={()=>{dispatch(decreaseQty(i.id))}}>-</button>
                              <input type="text" className='form-control text-center' value={i.quantity} style={{ width: '100px' }} />
                              <button className='btn' onClick={()=>{dispatch(increaseQty(i.id))}}>+</button>
                            </div>
                          </td>
                          <td>
                            <button className='btn' onClick={() => { dispatch(removeFromCart(i.id)) }}><i className="fa-solid fa-trash" style={{ color: "#ff0000", }} /></button>
                          </td>
                        </tr>

                      ))
                    }
                  </tbody>
                </table>
                :
                <h3 className='text-center text-danger'>No Items Added in Cart !!</h3>
            }
          </Col>
          <Col sm={12} md={4}>
            <div className='border shadow p-5 border-3'>
              <h4>Total Items : {cart?.length}</h4>
              <h4>Total Amount : {cart?.reduce((prev, item)=>prev+(item.price*item.quantity), 0)}</h4>
              <div className='mt-2 d-grid'><button className='btn btn-primary' onClick={()=>dispatch(checkOut())}>Checkout</button></div>
            </div>
            <Link to={'/'} className="btn btn-outline-info mt-4">Shop More</Link>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Cart