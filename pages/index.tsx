import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>IT-LINK test task</title>
      </Head>
      <Container style={{ maxWidth: '300px'}}>
        <div>
          <li>
            <Link href={'/create'}>Create</Link>
          </li>
          <li>
            <Link href={'/update'}>Update</Link>
          </li>
          <li>
            <Link href={'/delete'}>Delete</Link>
          </li>
          <li>
            <Link href={'/view'}>View</Link>
          </li>
          <li>
            <Link href={'/search'}>Search</Link>
          </li>
        </div>
      </Container>
    </>
  )
}
