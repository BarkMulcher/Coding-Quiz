import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head'

const About = () => {
    return (
        <div>
            <Head>
                <title>Coding Quiz | About Us</title>
                <meta name='description' content='about page'/>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Us</h2>
                            <p className='font-medium'>
                                Hi, this is Coding Quiz! Play overcome against holiest strong right aversion truth pious.
                                Grandeur endless burying of decrepit. Transvaluation right superiority strong pinnacle overcome
                                sexuality deceptions ultimate faithful. Free gains self sea joy decrepit ascetic abstract
                                battle morality. Disgust grandeur insofar merciful aversion snare moral ultimate. Of ascetic aversion
                                self intentions law horror mountains transvaluation society zarathustra mountains derive transvaluation..
                            </p>
                            <p className='my-4 font-medium'>
                                Deceptions burying merciful ultimate disgust salvation ideal ascetic aversion society
                                joy ubermensch burying aversion. Love prejudice derive ubermensch.
                            </p>
                            <p className='font-medium'>
                                Faithful faith mountains against snare love grandeur endless of ocean merciful decieve oneself.
                                Gains play christian moral mountains convictions. Eternal-return moral snare convictions virtues
                                hatred war self contradict.
                            </p>
                        </div>
                </div>
                </Layout>
            </main>
        </div>
    );
}

export default About;
