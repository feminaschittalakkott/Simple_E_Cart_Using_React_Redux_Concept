import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishList } from '../redux/slices/wishSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wish() {

  const { items } = useSelector((state) => state.wishReducer)
  console.log(items)

  const dispatch = useDispatch()

  const handleAddToCart=(data)=>{
    dispatch(addToCart({...data}))
    dispatch(removeFromWishList(data.id))
  }

  return (
    <>
      <h2 className='my-3 text-center'>WishList</h2>
      <div className="row container-fluid p-3">
        {
          items?.length > 0 ?
            items.map(wish => (

              <div className='col-3'>
                <div className="card h-100">
                  <img className="card-img-top" src={wish.thumbnail} alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{wish.title}</h5>
                      ${wish.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                    <button className='btn' onClick={()=>{dispatch(removeFromWishList(wish.id))}}>
                      <i className="fa-solid fa-heart-circle-xmark" style={{ color: "#de1b7a", }} />
                    </button>
                    <button className='btn' onClick={()=>{handleAddToCart(wish)}}>
                    <i className="fa-solid fa-cart-plus" style={{color: "#f9c406",}} />
                    </button>
                  </div>
                </div>
              </div>

            ))
            :
            <h3 className='text-danger text-center'>No Items Added Yet !!</h3>
        }
      </div>
    </>
  )
}

export default Wish