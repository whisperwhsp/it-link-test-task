import React, { HtmlHTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import Form from 'react-bootstrap/Form';
import { Control, Controller } from 'react-hook-form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>
  subtext?: string,
  label: string,
  name: string,
}

const Input: React.FC<IInputProps> = (props) => {
  return (
    <Form.Control />
  )
}

export default Input