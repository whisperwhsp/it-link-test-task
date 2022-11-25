import Head from 'next/head';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CarCard from '../../components/car-card';
import { ICar } from '../../models/ICar';
import { addCar } from '../../store/slices/carSlice';

interface IProps {
  cars: ICar[],
}

const ViewPage: React.FC<IProps> = (props) => {
  return (
    <>
      <Head>
        <title>View</title>
      </Head>
      <Container style={{ marginTop: '2rem'}}>
        <h1 className='mb-3'>Машины</h1>
        <Row>
          {props.cars.length && props.cars.map((car) => (
            <Col sm={'4'} className='mb-3'  key={car.id}>
              <CarCard car={car} />
            </Col>
          ))} 
        </Row>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/cars')
  const cars = await res.json();
  console.log(cars);
  return {
    props: {
      cars: cars,
    }
  }
}

export default ViewPage