import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home({pizzList}) {
  return (
   <>
    <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList  pizzList={pizzList}/>
      </>
  )
}


export  const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products")
  return {
    props:{
      pizzList : res.data
    }
  }
}