import Head from 'next/head'
import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import CarCard from '../../components/car-card'
import ILButton from '../../components/ui/button'
import { ICar } from '../../models/ICar'
import { IFilter } from '../../models/IFilters';

interface IProps {
  cars: ICar[],
}

const SearchPage: React.FC<IProps> = (props) => {
  const [cars, setCars] = React.useState<ICar[]>();
  const { control, handleSubmit, reset } = useForm<IFilter>();

  const onSubmit: SubmitHandler<IFilter> = async (data) => {
    const queryData = new URLSearchParams({
      ['technical_characteristics.brand']: data.brand || '',
      ['technical_characteristics.model']: data.model || '',
      ['technical_characteristics.productionYear']: data.productionYear || '',
      ['technical_characteristics.body']: data.body || '',
      ['technical_characteristics.mileage_gte']: data.mileage.min || '',
      ['technical_characteristics.mileage_lte']: data.mileage.max || '',
      ['technical_characteristics.price_gte']: data.price.min || '',
      ['technical_characteristics.price_lte']: data.price.max || '',
    })
    let queryString = '?';
    for (const [key, value] of queryData) {
      if (value) {
        queryString += `${key}=${value}&`;
      }
    }
    const response = await fetch(`http://localhost:3001/cars${queryString}`)
      .then((res) => {
        reset();
        return res;
      });
    const json = await response.json();
    setCars(json);
  }

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <Container className='mt-3' style={{ maxWidth: '1000px'}}>
        <Form className='shadow-sm rounded p-3 text-bg-light' onSubmit={handleSubmit(onSubmit)}>
          <h4 className='mb-3'>Фильтры</h4>
          <Row className='mb-3'>
            <Col>
              <Form.Group>
                <Form.Label>Марка</Form.Label>
                <Controller
                  control={control}
                  name={'brand'}
                  render={({ field }) => (<Form.Control {...field} />)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Модель</Form.Label>
                <Controller
                  control={control}
                  name={'model'}
                  render={({ field }) => (<Form.Control {...field} />)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Год выпуска</Form.Label>
                <Controller
                  control={control}
                  name={'productionYear'}
                  render={({ field }) => (<Form.Control {...field} />)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Тип кузова</Form.Label>
                <Controller
                  control={control}
                  name={'body'}
                  render={({ field }) => (<Form.Control {...field} />)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col sm={12}>Пробег</Col>
            <Col>
              <Form.Group>
                <Form.Text>От</Form.Text>
                <Controller
                  control={control}
                  name={'mileage.min'}
                  render={({ field }) => (<Form.Control {...field} />)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Text>До</Form.Text>
                <Controller
                  control={control}
                  name={'mileage.max'}
                  render={({ field }) => (<Form.Control {...field} />)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col sm={12}>Цена</Col>
            <Col>
              <Form.Group>
                <Form.Text>От</Form.Text>
                <Controller
                  control={control}
                  name={'price.min'}
                  render={({ field }) => (<Form.Control {...field} />)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Text>До</Form.Text>
                <Controller
                  control={control}
                  name={'price.max'}
                  render={({ field }) => (<Form.Control {...field} />)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-end'>
              <ILButton variant='secondary' className='px-5 py-2' type="submit">Найти</ILButton>
            </Col>
          </Row>
        </Form>
        <div className='mb-5'></div>
        {cars ? (
          <Row>
            {cars.map((car) => (
              <Col sm={'4'} className='mb-3' key={car.id}>
                <CarCard car={car} />
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            {props.cars.length && props.cars.map((car) => (
              <Col sm={'4'} className='mb-3'  key={car.id}>
                <CarCard car={car} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default SearchPage;

export async function getStaticProps() {
  const response = await fetch('http://localhost:3001/cars');
  const json = await response.json();
  return {
    props: {
      cars: json,
    }
  }
}