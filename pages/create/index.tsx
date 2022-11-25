import Head from 'next/head';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/typescript-redux';
import { ICar, IOption } from '../../models/ICar';
import { add } from '../../store/slices/carSlice';
import MainForm from './main-form';
import Option from './option';
import TechnicalCharacteristics from './technical-characteristics';

type FormNames = 'name' | 'description' | 'price' | 'contacts' | 'technical_characteristics' | 'options'

const FormCar: React.FC = () => {
  const [countOptions, setCountOptions] = React.useState<number>(0);
  const [isTechChar, setIsTechChar] = React.useState<boolean>(false);
  const { control, setValue, getValues, handleSubmit, watch } = useForm<ICar>();

  const dispatch = useAppDispatch();

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.name as FormNames, e.target.value);
  }

  const onSubmit: SubmitHandler<ICar> = (data) => {
    dispatch(add(data));
  }

  const addOption: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setCountOptions((prev) => prev + 1);
    if (getValues('options')) {
      setValue('options', [...getValues('options') as IOption[], { option_name: ''}]);
    } else {
      setValue('options', [{ option_name: ''}])
    }
  }

  return (
    <>
      <Head>
        <title>Create</title>
      </Head>
      <Container style={{ maxWidth: '400px'}}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <MainForm control={control} handleBlur={handleBlur} />

          <Form.Group className='mb-3'>
            <Form.Check
              id={'technical_characteristics'}
              label={'Добавить технические характеристики'}
              onChange={(e) => setIsTechChar(!isTechChar)}
            />
          </Form.Group>

          {isTechChar && <TechnicalCharacteristics control={control} handleBlur={handleBlur} />}

          <div className='mb-3'>
            <Button onClick={addOption}>Добавить опцию</Button>
            {countOptions ? getValues('options')?.map((opt, index) => (
              <Option control={control} handleBlur={handleBlur} index={index} key={opt.option_name} />
            )) : (<></>)}
          </div>

          <Button type="submit" variant='success'>Submit</Button>
        </Form>
      </Container>
    </>
  )
}

export default FormCar