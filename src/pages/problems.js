import React from 'react';
import Link from 'next/link' // link to next problem
import Head from 'next/head';
import Layout from '@/components/Layout';

const Problem = () => {
    // put Ace.js object here
    return (
    <h1>ACE OBJECT HERE</h1>
    )
}


const Problems = () => {
    return (
        <>
        <Head>
                <title>Luke Haskell | Projects Page</title>
                <meta name='description' content='projects page' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>

                    <div className='grid grid-cols-12 gap-24 gap-y-32 '>
                        <div className='col-span-12 '>
                            <Problem />
                        </div>
                        <div className='col-span-12'>
                            <Problem />
                        </div>
                        <div className='col-span-12'>
                            <Problem />
                        </div>
                        <div className='col-span-12'>
                            <Problem />
                        </div>
                        <div className='col-span-12'>
                            <Problem />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
        // <div className='grid grid-cols-12 gap-24 gap-y-32'>
        //     <div className='col-span-12'>
        //         <Link href='/problem/1'>Problem 1</Link>
        //         <Link href='/problem/2'>Problem 2</Link>
        //         <Link href='/problem/3'>Problem 3</Link>
        //         <Link href='/problem/4'>Problem 4</Link>
        //         <Link href='/problem/5'>Problem 5</Link>
        //         <Link href='/problem/6'>Problem 6</Link>
        //         <Link href='/problem/7'>Problem 7</Link>
        //         <Link href='/problem/8'>Problem 8</Link>
        //         <Link href='/problem/9'>Problem 9</Link>
        //         <Link href='/problem/10'>Problem 10</Link>
        //     </div>
        // </div>
    );
}

export default Problems;
