import Link from 'next/link';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/typescript-redux';
import { ICar } from '../../models/ICar';
import { removeCar } from '../../store/slices/carSlice';
import styles from './car-card.module.scss';

interface IProps {
  car: ICar,
}

const CarCard: React.FC<IProps> = ({ car }) => {
  const dispatch = useAppDispatch();
  return (
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
      <div className={`mt-5 ${styles['card-button']}`}>
        <Button
          variant='danger'
          onClick={() => dispatch(removeCar(car.id.toString()))}
        >
          Удалить
        </Button>
        <Link href={'/update?carId=' + car.id}>Обновить</Link>
      </div>
      </div>
  )
}

export default CarCard