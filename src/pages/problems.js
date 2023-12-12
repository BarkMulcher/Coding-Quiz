import React, { useState, useEffect } from 'react';
import Link from 'next/link' // link to next problem
import Head from 'next/head';
import Layout from '@/components/Layout';
import Editor from '@/components/Editor';
import Problem1 from './prompts/[id]';

const baseUrl = `http://localhost:8000`

// const ProblemSet = () => {

//     return (
//         <>
//         </>
//     )
// }


const Problems = () => {
    const [problems, setProblems] = useState([])

    useEffect(() => {
        const fetchProblemData = async () => {
            const problemsUrl = `${baseUrl}/api/prompts`
            const response = await fetch(problemsUrl)
            if (response.ok) {
                const data = await response.json()
                setProblems(data)
            }
        }
        fetchProblemData()

    }, []);


    return (
        <>
        <Head>
                <title>Coding Quiz | Problem Page</title>
                <meta name='description' content='projects page' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>

                    <div className='grid grid-cols-12 gap-24 gap-y-32 '>
                        {problems.map((problem, index) => (
                            <div key={index} className='col-span-12 '>
                            <Link href={`/prompts/${problem.id}`}>
                                <h5>{problem.title || 'PROBLEM TITLE'}</h5>
                            </Link>
                        </div>
                        ))}


                    </div>
                </Layout>
            </main>
        </>
    );
}

export default Problems;
