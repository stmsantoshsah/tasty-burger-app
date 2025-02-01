import React from 'react'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Heart, Bag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
function Cards({ id, image, title, paragraph, rating, price,renderRatingIcons }) {
    return (
        <Col sm={6} lg={4} xl={3}>
            <Card className='overflow-hidden mb-4'>
                {/* <h2>{id}</h2> */}
                <div className='overflow-hidden'>
                    <Card.Img variant="top" src={image} />
                </div>
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='item_rating'>{renderRatingIcons(rating)}</div>
                        <div className='wishlist'>
                            <Heart />
                        </div>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {paragraph}
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className="menu_price">
                            <h5 className='mb-0'>{price}</h5>
                        </div>
                        <div className="add_to_cart">
                            <Link to="/" className='btn d-flex align-items-center'><Bag />Add To Cart</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Cards
