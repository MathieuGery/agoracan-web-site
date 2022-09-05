/* This example requires Tailwind CSS v2.0+ */
import { EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline'

const metrics = [
    { id: 1, icon: MapPinIcon, emphasis: '12 Rue de Cannes, ', rest: '5900 Lille' },
    { id: 2, icon: PhoneIcon, emphasis: '+33 8 89 76 54 32', rest: '' },
    { id: 3, icon: EnvelopeIcon, emphasis: 'mailtest@agoracan.com', rest: '' }
  ]
  
  export default function MainInfos() {
    return (
      <div className="relative bg-secondary-900 rounded-xl mx-10 mt-8">
        <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-secondary-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <p className="mt-3 text-3xl font-bold tracking-tight text-white">
              Get actionable data that will help grow your business
            </p>
            {/* <p className="mt-5 text-lg text-secondary-300">
              Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
              feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
              nibh integer quis. Eu vulputate diam sit tellus quis at.
            </p> */}
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {metrics.map((item) => (
                <p key={item.id}>
                    <item.icon className="h-10 w-10 text-primary-600"/>
                  {/* <span className="block text-2xl font-bold text-primary-600">{item.stat}</span> */}
                  <span className="mt-1 block text-base text-secondary-300">
                    <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  