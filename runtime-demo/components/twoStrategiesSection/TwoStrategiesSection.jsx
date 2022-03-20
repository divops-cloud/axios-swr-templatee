import React from 'react'
import { LeftPattern } from '../../utils/patterns'

import { Requester } from './Requester'

export function TwoStrategiesSection() {
  // On mobile, stateful will start as hidden
  const [visible, setVisible] = React.useState('stateless')
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <LeftPattern />

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1 mb-4 sm:mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Divops Utilities Demo
            </h2>
            <p className="mt-3 mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Divops Demo: Try provisioning a Google Cloud Server with the &apos;$INSTALL_SERVER.sh&apos; script. Notice the Divops script compiles quicker than the cloud provider&apos;s runtime itself. This is because the Divops network caches the scripts to it&apos;s filesystem in advance, making them token-accessible artifacts. This means that other applications who are also operating within that same respective VPC layer can download the source code from the cache and almost always save an expensive trip to an external database.
             
            </p>
          </div>
          <div className="border-b border-gray-200 mb-6 sm:hidden">
            <nav className="w-full flex bg-gray-50 z-50">
              <button
                className={`${
                  visible === 'stateless'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } flex-1 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base`}
                onClick={() => setVisible('stateless')}
              >
                Divops Cache
              </button>
              <button
                className={`${
                  visible === 'stateful'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } flex-1 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base`}
                onClick={() => setVisible('stateful')}
              >
                Cloud provider
              </button>
            </nav>
          </div>

          <div className="lg:col-span-2">
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 md-gap-x-8">
              <Requester
                hidden={visible !== 'stateless'}
                order={['order-1', 'order-3']}
                path="/api/stateless"
                description={
                  <>
                    Before a request, the script is cached to the Divops Network and made readily available for users to access. Instead of provisioning a for users to access at the application layer. the script to its generates a short-lived JWT (JSON
                    Web Token) for authentication. Verifying the JWT takes less
                    than 1 ms!
                  </>
                }
                label="Stateless"
                badge={
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
                    Recommended
                  </span>
                }
                labelColor="text-indigo-600"
                button="Try stateless auth"
                buttonId="stateless_request"
                buttonColor="text-white"
                buttonShadow="shadow-lg"
                buttonBgColor="bg-indigo-600"
                buttonBgColorHover="bg-indigo-700"
                buttonBgColorFocus="ring-indigo-500"
              />
              <Requester
                hidden={visible !== 'stateful'}
                order={['order-2', 'order-4']}
                path="/api/stateful"
                label="Stateful"
                description={
                  <>
                    Clerks API is used to authenticate the user. This adds
                    network latency, but enables sessions to be revoked
                    immediately.
                  </>
                }
                labelColor="text-gray-900"
                buttonId="stateful_request"
                button="Try stateful auth"
                buttonColor="text-indigo-700"
                buttonShadow="shadow-sm"
                buttonBgColor="bg-indigo-100"
                buttonBgColorHover="bg-indigo-200"
                buttonBgColorFocus="ring-indigo-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
