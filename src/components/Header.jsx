import fullLogo from '../images/logos/AgoraCanLogo.png';
import Image from 'next/image';


/* This example requires Tailwind CSS v2.0+ */
import { NavBar } from './NavBar';

export function Header() {
  return (
    <div className="bg-white">
      <NavBar />
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2" />
            <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">The best for</span>
                    <span className="block text-primary-400">your company</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4">
                      <Image
                        src={fullLogo}
                        alt=""
                        height={150}
                        width={350}
                      />
                      {/* <a
                      href="#"
                      className="flex items-center hover:scale-150 justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-primary-700 shadow-sm hover:bg-primary-50 sm:px-8"
                    >
                      Get started
                    </a>
                    {/* <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-primary-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                    >
                      Live demo
                    </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
