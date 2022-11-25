import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import CarCard from "../../components/car-card";
import { ICar } from "../../models/ICar";

interface IProps {
  cars: ICar[],
}

const DeletePage: React.FC<IProps> = (props) => {
  return (
    <>
      <Head>
        <title>Delete</title>
      </Head>
      <Container style={{ marginTop: '2rem'}}>
        <h1 className='mb-3'>Машины</h1>
        <Row>
          {props.cars.length && props.cars.map((car) => (
            <Col sm={'4'} className='mb-3'  key={car.id}>
              <CarCard car={car} variant={'delete'} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const cars = await fetch('http://localhost:3001/cars')
    .then((res) => res.json());
  return {
    props: {
      cars: cars,
    }
  }
}

export default DeletePage;