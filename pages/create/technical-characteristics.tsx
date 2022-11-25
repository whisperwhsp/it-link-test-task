import React from 'react';
import { Form } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { ICar } from '../../models/ICar';

interface IProps {
  control: Control<ICar>
  handleBlur: React.FocusEventHandler<HTMLInputElement>
}

const TechnicalCharacteristics: React.FC<IProps> = (props) => {
  return (
    <>
      <Form.Group className="mb-3" controlId={'technical_characteristics.brand'}>
        <Form.Label>Марка</Form.Label>
        <Controller
          control={props.control}
          name={'technical_characteristics.brand'}
          defaultValue={''}
          render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur}/>}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={'technical_characteristics.model'}>
        <Form.Label>Модель</Form.Label>
        <Controller
          control={props.control}
          name={'technical_characteristics.model'}
          defaultValue={''}
          render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur} />}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={'technical_characteristics.productionYear'}>
        <Form.Label>Год выпуска</Form.Label>
        <Controller
          control={props.control}
          name={'technical_characteristics.productionYear'}
          defaultValue={''}
          render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur} />}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={'technical_characteristics.body'}>
        <Form.Label>Кузов</Form.Label>
        <Controller
          control={props.control}
          name={'technical_characteristics.body'}
          defaultValue={''}
          render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur} />}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={'technical_characteristics.mileage'}>
        <Form.Label>Пробег</Form.Label>
        <Controller
          control={props.control}
          name={'technical_characteristics.mileage'}
          defaultValue={''}
          render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur} />}
        />
      </Form.Group>
    </>
  )
}

export default TechnicalCharacteristics