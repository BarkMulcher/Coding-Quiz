import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Haskell</title>
        <meta name="description" content="Generated by " />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
      <Layout>
        <div className="flex items-center justify-between w-full p-56">
            Coding Quiz
        </div>
      </Layout>
      </main>
    </>
  )
}
