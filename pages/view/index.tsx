import Link from 'next/link';
import React from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/typescript-redux';
import styles from './view-page.module.scss';

const ViewPage = () => {
  const cars = useAppSelector((state) => state.cars);
  return (
    <Container style={{ marginTop: '2rem'}}>
      <h1 className='mb-3'>Машины</h1>
      <Row>
        {cars.cars && cars.cars.map((car) => (
          <Col sm={'4'} className='mb-3'  key={car.id}>
            <div className={styles.card}>
              <h5>Основная информация</h5>
              <Row className={styles['card-line']}>
                <Col>Название</Col>
                <Col>{car.name}</Col>
              </Row>
              <Row className={styles['card-line']}>
                <Col>Описание</Col>
                <Col>{car.description}</Col>
              </Row>
              <Row className={styles['card-line']}>
                <Col>Цена</Col>
                <Col>{car.price}</Col>
              </Row>
              <Row className={styles['card-line']}>
                <Col>Контакты</Col>
                <Col>{car.contacts}</Col>
              </Row>
              <h5 className='mt-5'>Техническая характеристика</h5>
              {car.technical_characteristics ? (
                <>
                  <Row className={styles['card-line']}>
                    <Col>Марка</Col>
                    <Col>{car.technical_characteristics?.brand}</Col>
                  </Row>
                  <Row className={styles['card-line']}>
                    <Col>Модель</Col>
                    <Col>{car.technical_characteristics?.model}</Col>
                  </Row>
                  <Row className={styles['card-line']}>
                    <Col>Год выпуска</Col>
                    <Col>{car.technical_characteristics?.productionYear}</Col>
                  </Row>
                  <Row className={styles['card-line']}>
                    <Col>Пробег</Col>
                    <Col>{car.technical_characteristics?.mileage}</Col>
                  </Row>
                </>
              ) : (
                <div>
                  <h6>Нет информации</h6>
                </div>
              )}
              <h5 className='mt-5'>Дополнительные опции</h5>
              {car.options ? car.options.map((opt) => (
                <Row key={opt.option_name}>
                  <Col>{opt.option_name}</Col>
                </Row>
              )) : (
                <div>
                  <h6>Нет дополнительных опций</h6>
                </div>
              )}
              <div className={`mt-5 ${styles['card-links']}`}>
                <Link href={`/update?car_id=${car.id}`}>обновить</Link>
                <Link href={`/delete?car_id=${car.id}`}>удалить</Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ViewPage