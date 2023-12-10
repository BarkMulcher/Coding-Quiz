import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const CustomLink = ({href, title, className=''}) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
            className={`h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width]
            ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
           dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const Navbar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light'>
            <nav>
                <CustomLink href='/help' title='Help' className='mr-4' />
                <CustomLink href='/' title='Coding Quiz' className='mx-36' />
                <CustomLink href='/about' title='About' className='mx-4' />
                <CustomLink href='/problems' title='Full List' className='ml-4' />
            </nav>
        </header>
    );
}

export default Navbar;
