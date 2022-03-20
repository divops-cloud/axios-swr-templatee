import Image from 'next/image';
import CustomLink from '../components/CustomLink';
import { Section } from '../layout/Section';

function Preview() {
  return (
    <div>
      <Section yPadding="flex-grow bg-transparent">
        <div className='flex justify-center py-10 items-start'>    
          <div className='flex flex-col justify-center items-start'>
            <CustomLink
              className='text-gray-200 bg-transparent outline-white hover:bg-gray-800 ml-3'
              href='/dashboard'
            >
              <Image
                className='rounded shadow-2xl mxy-auto opacity-60'
                src='/assets/images/white-light-cd.png'
                alt='Hero Screenshot'
                width='800'
                height='500'
              />
            </CustomLink>
            <br />
            <CustomLink
              className='text-gray-200 bg-transparent outline-white hover:bg-gray-800 ml-3'
              href='/dashboard'
            >
            </CustomLink>

          </div>
        </div>
      </Section>
    </div>
  )
}

export default Preview
