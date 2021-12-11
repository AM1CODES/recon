import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ClipCard from '../components/explore/ClipCard'
import { GiWallet } from 'react-icons/gi'
import { BsCollectionPlayFill } from 'react-icons/bs'
import { MdManageSearch } from 'react-icons/md'

import logo from '../public/recon.png'

export default function Home({ NFTs }) {

  const randomNFT = NFTs[Math.floor(Math.random() * NFTs.length)]

  return (
    <>
      <Navbar />
      <div className='text-center'>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='flex flex-row h-96'>
          <section className='h-full w-1/2 flex flex-col items-center justify-center'>
            <h1 className='my-1 text-4xl text-primary font-bold'>Welcome to Recon.</h1>
            <h6 className='my-1 text-lg text-white font-semibold'>Treating gameplay like the art it is.</h6>
            <button className='my-2 bg-primary text-black text-xl px-8 py-1 font-semibold rounded-lg'>Explore</button>
          </section>
          <section className='h-full w-1/2 bg-primary flex flex-col items-center justify-center'>
            {randomNFT && <ClipCard NFT={randomNFT} isOnLandingPage={true} />}
          </section>
        </main>
        <div className='py-8'>
          <h1 className='text-2xl text-primary text-center font-semibold'>Collect and Sell NFTs</h1>
          <div className='flex flex-row w-3/4 h-56 mx-auto my-4
          '>
            <div className='h-full w-1/3 flex flex-col items-center justify-evenly bg-gray-light text-white'>
              <GiWallet className='block text-7xl' />
              <h6 className=''>Transfer funds to your wallet.</h6>
            </div>
            <div className='h-full w-1/3 flex flex-col items-center justify-evenly bg-primary text-black'>
              <MdManageSearch className='block text-7xl' />
              <h6 className=''>Explore the wide range of NFTs available on the platform.</h6>
            </div>
            <div className='h-full w-1/3 flex flex-col items-center justify-evenly bg-gray-light text-white'>
              <BsCollectionPlayFill className='block text-7xl' />
              <h6 className=''>Collect and share your favourite clips.</h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

