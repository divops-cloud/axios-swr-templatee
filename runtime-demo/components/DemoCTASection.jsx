export function DemoCTASection() {
  return (
    <div className="bg-teal-500">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        {/* <p className="mt-4 text-base text-gray-200 text-base text-lg">
          Getting started is easy.
        </p> */}
        <div className="sm:flex sm:justify-center mt-8">
          <a
            href="https://dashboard.clerk.dev/sign-up?utm_source=edge-demo&utm_medium=next-edge-auth&utm_campaign=start-building"
            className="mb-4 w-full inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-gray-200 bg-gray-700 hover:bg-rose-400 focus:ring-2 focus:ring-offset-2 focus:ring-white-500 sm:w-auto"
          >
            Get started
          </a>
          <a
            href="https://clerk.dev/solutions/nextjs-authentication?utm_source=edge-demo&utm_medium=next-edge-auth&utm_campaign=more-cta"
            className="sm:ml-4 mb-4 w-full inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white bg-teal-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 sm:w-auto"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  )
}
