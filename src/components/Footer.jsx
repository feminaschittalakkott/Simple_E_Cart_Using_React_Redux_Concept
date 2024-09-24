import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='container-fluid bg-primary text-light p-4'>
            <Row>
                <Col  xs={12} md={4}>
                    <h4>About Us</h4>
                    <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod ipsum? Voluptatum quibusdam tempore aliquid vitae molestiae sapiente, impedit similique ab amet quae optio saepe quam blanditiis quo eum dolor?</p>
                </Col>
                <Col  xs={12} md={4}>
                    <h4>Links</h4>
                    <div className='d-flex flex-column justify-content-between'>
                        <Link to={'/home'}>Home</Link>
                        <Link to={'/Wisht'}>WishList</Link>
                        <Link to={'/cart'}>Cart</Link>
                    </div>
                </Col>
                <Col  xs={12} md={4}>
                    <h4>Feedback</h4>
                    <textarea className='form-control'></textarea>
                    <button className='btn btn-success mt-3'>Send</button>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Footer