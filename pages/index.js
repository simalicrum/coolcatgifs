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
    <div className="h-screen w-screen">
      <Head>
        <title>coolcatgifs.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col items-center justify-center m-4">
        <div className="rounded-lg shadow-xl overflow-hidden" >
        <img className="" src={catGifURL.images.original.url}></img>
        </div>
      </div>
      <footer className="fixed w-screen bottom-0 flex justify-between">
        <img className="h-8 m-4" src="/Poweredby_100px-White_VertText.png"></img>
        <a href="https://www.github.com/simalicrum/coolcatgifs">
          <img className="h-8 m-4 w-8 opacity-50" src="/Octicons-mark-github.svg"></img>
        </a>
      </footer>
    </div>
  )
}
