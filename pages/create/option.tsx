import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Control, Controller, useForm } from 'react-hook-form';
import { ICar } from '../../models/ICar';

interface IProps {
  control: Control<ICar>,
  index: number,
  handleBlur: React.FocusEventHandler<HTMLInputElement>
}

const Option: React.FC<IProps> = (props) => {
  return (
    <Form.Group controlId={`options-${props.index}`}>
      <Form.Label>Название опции</Form.Label>
      <Controller
        control={props.control}
        name={`options.${props.index}.option_name`}
        render={({ field }) => <Form.Control {...field} onBlur={props.handleBlur} />}
      />
    </Form.Group>
  )
}

export default Option