export function CTASection() {
  return (
    <div className="bg-teal-500">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        {/* <p className="mt-4 text-base text-gray-200 text-base text-lg">
          Getting started is easy.
        </p> */}
        <div className="sm:flex sm:justify-center mt-8">
          <a
            href="https://dashboard.clerk.dev/sign-up?utm_source=edge-demo&utm_medium=next-edge-auth&utm_campaign=start-building"
            className="sm:ml-4 mb-4 w-full inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 hover:ring-rose-300 hover:ring-2 sm:w-auto"
          >
            Learn More
          </a>
          <a
            href="https://clerk.dev/solutions/nextjs-authentication?utm_source=edge-demo&utm_medium=next-edge-auth&utm_campaign=more-cta"
            className="sm:ml-4 mb-4 w-full inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-800 hover:ring-rose-300 hover:ring-2 sm:w-auto"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  )
}
