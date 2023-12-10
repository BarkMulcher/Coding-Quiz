import React from 'react';
import Link from 'next/link'


const Problems = () => {
    return (
        <div>
            {/* Links to Problem/problem_number */}
            <Link href='/problem/1'>Problem 1</Link>
            <Link href='/problem/2'>Problem 2</Link>
            <Link href='/problem/3'>Problem 3</Link>
            <Link href='/problem/4'>Problem 4</Link>
            <Link href='/problem/5'>Problem 5</Link>
            <Link href='/problem/6'>Problem 6</Link>
            <Link href='/problem/7'>Problem 7</Link>
            <Link href='/problem/8'>Problem 8</Link>
            <Link href='/problem/9'>Problem 9</Link>
            <Link href='/problem/10'>Problem 10</Link>
        </div>
    );
}

export default Problems;
