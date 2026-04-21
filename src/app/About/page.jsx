import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google'

export const metadata = {
    title: 'About',
    description: 'Know myself',
}

const inter = Inter({
    subsets: ['latin'],
    weight: '900',
    display: 'swap',
})

const Aboutpage = () => {
    return (
        <div className={inter.className}>
            <h1>this is about pages</h1>
            <div>
                <Image width="500" height="300" src= "https://images.pexels.com/photos/34636070/pexels-photo-34636070.jpeg" alt='picture added' ></Image>
                <Image width="500" height="300" src= "https://i.ibb.co.com/RkTXbDwM/Sakib.webp" alt='picture three' ></Image>
            </div>
        </div>
    );
};

export default Aboutpage;