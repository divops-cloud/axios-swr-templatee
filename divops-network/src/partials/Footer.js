import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className='bg-gray-900 max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Top area: Blocks */}
        <div className='flex flex-grow justify-between scrollbar-x-hidden overflow-auto sm:overflow-x-auto sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 bg-gray-900'>
          {/* 2nd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-200 hover:text-red-400 font-medium mb-2'>
              UX/UI Design
            </h6>
          </div>

          {/* 2nd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-200 hover:text-red-400 font-medium mb-2'>
              Integrations
            </h6>
          </div>

          {/* 3rd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-200 hover:text-red-400 font-medium mb-2'>
              React - Javascript
            </h6>
          </div>

          {/* 4th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-200 hover:text-red-400 font-medium mb-2'>
              Serverless Apps
            </h6>
          </div>

          {/* 5th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-200 hover:text-red-400 font-medium mb-2'>
              Linux Systems
            </h6>
          </div>

          {/* 5th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-200 hover:text-red-400 font-medium mb-2'>
              Cloud Automation
            </h6>
          </div>
        </div>

        {/* Bottom area */}
        <div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-700'>
          {/* Social links */}

          <p className='text-md text-gray-200 hover:text-teal-300 mr-4'>
            I am looking for a good developer job.
          </p>

          <p className='text-md text-purple-700 hover:text-gray-600 mr-4'>
            contact@michaelcalendo.com
          </p>

          <div className='text-md text-gray-200 hover:text-teal-300  mr-4'>
            Thanks in advance for your time.
          </div>
        </div>
      </div>
    </footer>
  );
}
