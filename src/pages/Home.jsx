import React, { useEffect } from 'react'
import banner1 from '../images/banner-1.jpg'
import banner2 from '../images/banner-2.jpg'
import banner3 from '../images/banner-3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk } from '../redux/slices/product_slice';
import Spinner from 'react-bootstrap/Spinner';
import { nextPage, prevPage } from '../redux/slices/product_slice';

function Home() {

    const { products, error, loading, productsPerPage, currentPage } = useSelector((state) => state.productReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductThunk())
        console.log(products)
    }, [])

    const totalPages = Math.ceil(products?.length/productsPerPage)
    const lastProdIndex = currentPage * productsPerPage
    const firstProdIndex = lastProdIndex - productsPerPage
    const visibleProducts = products?.slice(firstProdIndex, lastProdIndex)

    const handleNext=()=>{
        if(currentPage < totalPages){
            dispatch(nextPage())
        }
    }
    const handlePrev=()=>{
        if(currentPage > 1){
            dispatch(prevPage())
        }
    }

    return (
        <>
            {/* <header className="bg-dark"> */}
            <div className="container-fluid px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <Carousel>
                        <Carousel.Item>
                            <img src={banner1} width={'80%'} className='img-fluid' alt="Image1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={banner2} width={'80%'} className='img-fluid' alt="Image1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={banner3} width={'80%'} className='img-fluid' alt="Image1" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            {/* </header> */}

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-4">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            loading ?
                                <h4>
                                    <Spinner animation="border" role="status">
                                    </Spinner>
                                    <span>Loading...</span>
                                </h4>
                                :
                                (
                                    error ?
                                        <h3>{error}</h3>
                                        :
                                        <>
                                            {
                                                products.length > 0 &&
                                                visibleProducts?.map(
                                                    i => (
                                                        <div className="col mb-5">
                                                            <div className="card h-100">
                                                                <img className="card-img-top" src={i.thumbnail} alt="Img" />
                                                                <div className="card-body p-4">
                                                                    <div className="text-center">
                                                                        <h5 className="fw-bolder">{i.title}</h5>
                                                                        ${i.price}
                                                                    </div>
                                                                </div>
                                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                                                                    <Link to={`/view/${i?.id}`} className='btn btn-outline-primary'>View More</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </>
                                )
                        }

                    </div>
                </div>
            </section>
            <div className='mt-2 mb-5 d-flex justify-content-center'>
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" aria-label="Previous" onClick={handlePrev}>
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    {
                        
                    }
                    <li className="page-item"><a className="page-link" href="#">{currentPage}/{totalPages}</a></li>
                    <li className="page-item">
                        <button className="page-link" aria-label="Next" onClick={handleNext}>
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Home