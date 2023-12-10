import React, { useState } from 'react';
import Link from 'next/link' // link to next problem
import Head from 'next/head';
import Layout from '@/components/Layout';
import Editor from '@/components/Editor';
import Problem1 from './problem1';

// const Problem = () => {
//     // Ace.js editor object here
//     return (
//         <>
//     <h1>EDITOR HERE</h1>
//     <Editor />
//     </>
//     )
// }


const Problems = () => {
    return (
        <>
        <Head>
                <title>Coding Quiz | Problem Page</title>
                <meta name='description' content='projects page' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>

                    <div className='grid grid-cols-12 gap-24 gap-y-32 '>
                        <div className='col-span-12 '>
                            <Link href='/problem1'>Problem 1
                            <h5>A simple "hello world exercise</h5></Link>
                        </div>
                        <div className='col-span-12 '>
                            <Link href='/problem1'>Problem 2
                            <h5>A simple list problem</h5></Link>
                        </div>
                        <div className='col-span-12 '>
                            <Link href='/problem1'>Problem 3
                            <h5>A simple string problem</h5></Link>
                        </div>
                        <div className='col-span-12 '>
                            <Link href='/problem1'>Problem 4
                            <h5>A for-loop over a list problem</h5></Link>
                        </div>
                        <div className='col-span-12 '>
                            <Link href='/problem1'>Problem 5
                            <h5>A for-loop over a string problem</h5></Link>
                        </div>
                        <div className='col-span-12 '>
                            <Link href='/problem1'>Problem 6
                            <h5>A matrix problem</h5></Link>
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
