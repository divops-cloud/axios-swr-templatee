import React from 'react';
import Image from 'next/image';
import CustomLink from "./CustomLink";

import AuthorTag from './AuthorTag';

function HeroBlog() {
  return (
    <section className="relative">

      <div aria-hidden="true" className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image className="flex flex-grow object-cover opacity-25" src={'/images/notre-dame-network.jpg'} layout="fill" alt="About" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">

          {/* Featured article */}
          <div className="max-w-3xl" data-aos="fade-down">
            <article>
              <div>
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <CustomLink to="/blog">
                    <h1 className="h1 font-red-hat-display mb-4"></h1>
                  </CustomLink>
                  <h1 className="h2 font-red-hat-display mb-4">Notre Dame Live</h1>

                </div>

                <div>
                  <AuthorTag align="left" />
                </div>

              </div>
            </article>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HeroBlog;