import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { fetchAPI } from '../lib/api'
import Image from 'next/image'

export async function getServerSideProps() {
  const catGifURL = await fetchAPI();
  return {
    props: {
      catGifURL
    }
  }
}

export default function Home({catGifURL}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>coolcatgifs.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to coolcatgifs.com</h1>
      <Image src={catGifURL.images.original.url} height={catGifURL.images.original.height} width={catGifURL.images.original.width}></Image>
    </div>
  )
}
