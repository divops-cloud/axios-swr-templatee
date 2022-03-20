import React from "react";
import Image from 'next/image';
import Header from "./Header";
import CustomLink from "../components/CustomLink";

export default function PortalContent() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <div className='bg-gray-900 flex-grow hover:scale-105 transform transition duration-150 ease-out'>
        <CustomLink
          to='/'
          className='flex flex-col btn-sm text-gray-200 bg-transparent hover:bg-gray-900 my-40 hover:outline-teal-200 items-bounce'
        >
          <div className='flex flex-grow items-bottom outline-white'>
            <Image
              className='flex rounded shadow-2xl'
              src="/assets/images/michaelcalendo-portal.svg"
              alt='Portal'
              layout='fill'
            />
          </div>
        </CustomLink>
      </div>
    </div>
  );
}
