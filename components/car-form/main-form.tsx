import React from 'react'
import { Form } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { ICar } from '../../models/ICar';

interface IProps {
  control: Control<ICar>
}

const MainForm: React.FC<IProps> = (props) => {
  const addFileName = (e: React.ChangeEvent<HTMLInputElement>, fieldOnChange: (value: any) => void) => {
    if (e.target && e.target.files) {
      const arrNames = [];
      for (let i = 0; i  < e.target.files.length; i += 1) {
        arrNames.push(e.target.files[i].name);
      }
      fieldOnChange(arrNames)
    }
  }
  return (
    <>
      <Form.Group className="mb-3" controlId={'name'} >
        <Form.Label>Название</Form.Label>
        <Controller
          control={props.control}
          name={'name'}
          rules={{ required: true }}
          render={({ field }) => <Form.Control {...field} />}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId='description'>
        <Form.Label>Описание</Form.Label>
        <Controller
          control={props.control}
          name={'description'}
          rules={{ required: true }}
          render={({ field }) => <Form.Control {...field} />}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId='price'>
        <Form.Label>Цена</Form.Label>
        <Controller
          control={props.control}
          name={'price'}
          rules={{ required: true }}
          render={({ field }) => <Form.Control {...field} />}
        />
      </Form.Group>
      <Form.Group controlId='images'>
        <Form.Label className='form-label'>Фото</Form.Label>
        <Controller
          control={props.control}
          name={'images'}
          rules={{ required: true }}
          render={({ field }) => (
            <input className='form-control' type="file" multiple onChange={(e) => addFileName(e, field.onChange)} />
          )}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId='contacts'>
        <Form.Label>Контакты</Form.Label>
        <Controller
          control={props.control}
          name={'contacts'}
          rules={{ required: true }}
          render={({ field }) => <Form.Control {...field} />}
        />
      </Form.Group>
    </>
  )
}

export default MainForm