import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import User1 from '../../assets/blog/review-author-1.jpg'
import User2 from '../../assets/blog/review-author-2.jpg'
import User3 from '../../assets/blog/review-author-3.jpg'
import User4 from '../../assets/blog/review-author-5.jpg'
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons'
function Testimonials() {
    return (
        <section className='blog_section'>
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User1} alt="user_img" className='img-fluid' />
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                    <div className='item_rating mb-2'>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                    </div>
                                    <h5>
                                    BY AMELIE NEWLOVE
                                    </h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User2} alt="user_img" className='img-fluid' />
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                    <div className='item_rating mb-2'>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                    </div>
                                    <h5>
                                    BY AMELIE NEWLOVE
                                    </h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User3} alt="user_img" className='img-fluid' />
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                    <div className='item_rating mb-2'>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                    </div>
                                    <h5>
                                    BY AMELIE NEWLOVE
                                    </h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User4} alt="user_img" className='img-fluid' />
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                    <div className='item_rating mb-2'>
                                        <Star/>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarFill/>
                                        <StarHalf/>
                                    </div>
                                    <h5>
                                    BY AMELIE NEWLOVE
                                    </h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials
