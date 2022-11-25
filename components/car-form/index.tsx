import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/typescript-redux';
import { ICar, IOption } from '../../models/ICar';
import MainForm from './main-form';
import TechnicalCharacteristics from './technical-characteristics';
import carSlice, { addCar, updateCar } from '../../store/slices/carSlice';
import Option from './option';
import ILButton from '../ui/button';
import { useRouter } from 'next/router';

type FormNames = 'name' | 'description' | 'price' | 'contacts' | 'technical_characteristics' | 'options';

interface IProps {
  car?: ICar; 
}

const CarForm: React.FC<IProps> = (props) => {
  const [countOptions, setCountOptions] = React.useState<number[]>(() => {
    if (props.car && props.car.options) {
      const arr: number[] = [];
      for (let i = 0; i < props.car?.options.length; i += 1) {
        arr.push(i);
      }
    return arr;
    } else return [];
  });
  const [isTechChar, setIsTechChar] = React.useState<boolean>(!!props.car?.technical_characteristics);
  const { control, handleSubmit, reset } = useForm<ICar>({
    mode: 'onSubmit',
    defaultValues: {
      id: props.car?.id || '',
      name: props.car?.name || '',
      description: props.car?.description || '',
      price: props.car?.price || '',
      contacts: props.car?.contacts || '',
      technical_characteristics: props.car?.technical_characteristics || {},
      options: props.car?.options || []
    }
  });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const addOption = () => {
    setCountOptions((prev) => [...prev, prev.length]);
  }

  const onSubmit: SubmitHandler<ICar> = (data) => {
    if (router.pathname.includes('update')) {
      dispatch(updateCar({...data, id: props.car!.id }))
        .then(() => reset());
    } else {
      dispatch(addCar({...data }))
        .then(() => reset());
    }
    
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={'border rounded p-3 shadow-sm'}>
      <h3>Форма</h3>
      <MainForm control={control} />
      <hr />
      <h5>Технические характеристики</h5>
      <Form.Group className='mb-3'>
        <Form.Check
          id={'technical_characteristics'}
          label={'Добавить технические характеристики'}
          checked={isTechChar}
          onChange={(e) => setIsTechChar(!isTechChar)}
        />
      </Form.Group>
      {isTechChar && (
        <TechnicalCharacteristics control={control} />
      )}
      <hr />
      <div className='mb-3'>
        <h5>Дополнительные опции</h5>
        {countOptions ? (
          <>
            {countOptions.map((int) => (
              <Option
                name={`options.${int}.option_name`}
                control={control}
                key={int}
              />
              )
            )}
          </>
        ) : <></>}
        <Button onClick={addOption}>Добавить опцию</Button>
      </div>

      <ILButton variant='success' type='submit'>Submit</ILButton>
    </Form>
  )
}

export default CarForm;