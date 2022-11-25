import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import { Container, Spinner } from 'react-bootstrap';
import CarForm from '../../components/car-form';
import { ICar } from '../../models/ICar';

const CarIdPage = () => {
  const [car, setCar] = React.useState<ICar>();

  React.useEffect(() => {
    const getCarData = () => {
      const url = new URL(window.location.href);
      const carId = url.searchParams.get('carId')
      fetch('http://localhost:3001/cars?id=' + carId)
        .then((res) => res.json())
        .then((car) => setCar(car[0]))
    }
    getCarData();
  }, []);
  return (
    <>
      <Head>
        <title>Car {car?.id}</title>
      </Head>
      <Container style={{ maxWidth: '400px' }}>
        <h1 className='my-3'>Update</h1>
        {car ? <CarForm car={car} /> : <Spinner />}
      </Container>
    </>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3001/cars');
//   const cars: ICar[] = await res.json();
//   const arrParams = cars.map((car) => ({ params: { carId: car.id.toString() } }));
//   console.log(arrParams);
//   return {
//     paths: arrParams,
//     fallback: false,
//   }
// }

export default CarIdPage