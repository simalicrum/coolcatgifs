import Head from 'next/head'
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
    <div className="bg-purple-600 h-screen w-screen">
      <Head>
        <title>coolcatgifs.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">Welcome to coolcatgifs.com</h1>
      <div className="">
        <Image src={catGifURL.images.original.url} height={catGifURL.images.original.height} width={catGifURL.images.original.width}></Image>
      </div>
      <footer className="fixed bottom-0">
        <Image src="/Poweredby_100px-White_VertText.png" height="36px" width="100px"></Image>
      </footer>
    </div>
  )
}
