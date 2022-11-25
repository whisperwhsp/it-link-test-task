import React from 'react'
import { Form } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { ICar } from '../../models/ICar';

interface IProps {
  control: Control<ICar>
  handleBlur: React.FocusEventHandler<HTMLInputElement>
}

const MainForm: React.FC<IProps> = (props) => {
  return (
    <>
      <Form.Group className="mb-3" controlId={'name'} >
        <Form.Label>Название</Form.Label>
        <Controller
          control={props.control}
          name={'name'}
          defaultValue={''}
          render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur} />}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId='description'>
        <Form.Label>Описание</Form.Label>
        <Controller
          control={props.control}
          name={'description'}
          defaultValue={''}
          render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur} />}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId='price'>
        <Form.Label>Цена</Form.Label>
        <Controller
          control={props.control}
          name={'price'}
          defaultValue={''}
          render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur} />}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId='contacts'>
        <Form.Label>Контакты</Form.Label>
        <Controller
          control={props.control}
          name={'contacts'}
          defaultValue={''}
          render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur} />}
        />
      </Form.Group>
    </>
  )
}

export default MainForm