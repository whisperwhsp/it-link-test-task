import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import CarForm from '../../components/car-form';



const Create: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create</title>
      </Head>
      <Container style={{ maxWidth: '400px'}}>
        <h1 className='my-3'>Create</h1>
        <CarForm />
      </Container>
    </>
  )
}

export default Create