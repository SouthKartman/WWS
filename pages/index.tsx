import type { NextPage } from 'next';
import Header from "../components/Header";
import Feed from "../components/Feed";
import Head from 'next/head';
import hello from "../components/Hello";
import Image from 'next/image'
import Hello from '../components/Hello';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>WorlWorkSocial by Social</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      {/* header */}
      <Header/>
     
      {/* Feed */}
      <Feed/>
      {/* Model */}
      <Hello></Hello>

    </div>
  )
}

export default Home
