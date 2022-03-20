import React from 'react'
import Image from 'next/image'

function AuthorTag() {
    return (
        <div>
            <div className="flex" data-aos="fade-down" data-aos-delay="300">
                <Image className="hover:outline-none ring-1 ring-gray-500 hover:ring-gray-400 dark:hover;ring-gray-400 hover:ring-2 dark:hover:ring-2 dark:ring-gray-500 hover:border-transparent flex-shrink-0 hover:animate-float cursor-pointer" src={'/images/jc-transparent.png'} width="100" height="100" alt="Author J.C." />
                <div>
                    <span className="p-4 text-2xl text-gray-400 dark:text-gray-400">A{" "}<span className="text-teal-500 dark:text-gold-200 text-md">blog</span> by</span>
                    <h1 className="p-4 font-medium dark:text-white text-gray-50 hover:underline">Johnny Joe</h1>
                </div>
            </div>
        </div>
    )
}

export default AuthorTag
