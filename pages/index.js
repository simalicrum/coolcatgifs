import Head from 'next/head'
import { fetchAPI } from '../lib/api'
import React, { useState } from 'react';

export async function getServerSideProps() {
  const initialState = await fetchAPI();
  return {
    props: {
      initialState
    }
  }
}



export default function Home({initialState}) {
  const [catGifURL, setCatGifURL] = useState(initialState);
  const handleClick = async (e) => {
    console.log("Click worked");
    const res = await fetch('/api/refresh');
    const json = await res.json();
    if(json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API');
    }
    setCatGifURL(json);
  }
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>coolcatgifs.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col items-center justify-center">
        <div onClick={handleClick} className="rounded-lg shadow-xl overflow-hidden cursor-pointer" >
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
