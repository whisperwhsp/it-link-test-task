import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Control, Controller, useForm } from 'react-hook-form';
import { ICar, IOption } from '../../models/ICar';

interface IProps {
  control: Control<ICar>,
  name: `options.${number}.option_name`,
}

const Option: React.FC<IProps> = (props) => {
  return (
    <Form.Group className='mb-3' controlId={props.name}>
      <Form.Label>Название опции</Form.Label>
      <Controller
        control={props.control}
        name={props.name}
        render={({ field }) => <Form.Control {...field} />}
      />
    </Form.Group>
  )
}

export default Option