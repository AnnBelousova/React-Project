import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Slider = () => {
	return (
			<Carousel>
       <Carousel.Item interval={1000}>
        <img height={600} 
          className="d-block w-100"
          src="./img/ozero_komo_97.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link exact to={'./form'}>
            <Button variant="primary">
              Обратная связь
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={600}
          className="d-block w-100"
          src="./img/ozero_komo_93.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={600}
          className="d-block w-100"
          src="./img/ozero_komo_95.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
	)
}

export default Slider