import clsx from 'clsx'
import logo from '../images/logos/mini.jpg';
import fullLogo from '../images/logos/AgoraCanLogo.png';
import Image from 'next/image';
import { Fragment } from 'react'
import Link from 'next/link'
// import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

// function MobileNavLink({ href, children }) {
//   return (
//     <Popover.Button as={Link} href={href} className="block w-full p-2">
//       {children}
//     </Popover.Button>
//   )
// }

// function MobileNavIcon({ open }) {
//   return (
//     <svg
//       aria-hidden="true"
//       className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
//       fill="none"
//       strokeWidth={2}
//       strokeLinecap="round"
//     >
//       <path
//         d="M0 1H14M0 7H14M0 13H14"
//         className={clsx(
//           'origin-center transition',
//           open && 'scale-90 opacity-0'
//         )}
//       />
//       <path
//         d="M2 2L12 12M12 2L2 12"
//         className={clsx(
//           'origin-center transition',
//           !open && 'scale-90 opacity-0'
//         )}
//       />
//     </svg>
//   )
// }

// function MobileNavigation() {
//   return (
//     <Popover>
//       <Popover.Button
//         className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
//         aria-label="Toggle Navigation"
//       >
//         {({ open }) => <MobileNavIcon open={open} />}
//       </Popover.Button>
//       <Transition.Root>
//         <Transition.Child
//           as={Fragment}
//           enter="duration-150 ease-out"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="duration-150 ease-in"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
//         </Transition.Child>
//         <Transition.Child
//           as={Fragment}
//           enter="duration-150 ease-out"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="duration-100 ease-in"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <Popover.Panel
//             as="div"
//             className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
//           >
//             <MobileNavLink href="#features">Features</MobileNavLink>
//             <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
//             <MobileNavLink href="#pricing">Pricing</MobileNavLink>
//             <hr className="m-2 border-slate-300/40" />
//             <MobileNavLink href="/login">Sign in</MobileNavLink>
//           </Popover.Panel>
//         </Transition.Child>
//       </Transition.Root>
//     </Popover>
//   )
// }

// export function Header() {
//   return (
//     <header className="py-10">
//       <Container> 
//         <nav className="relative z-50 flex justify-between">
//           <div className="flex items-center md:gap-x-">
//             <Link href="#" aria-label="Home">
//               <Logo className="" />
//             </Link>
//             <div className="hidden md:flex md:gap-x-6">
//               <NavLink href="#features">Acceuil</NavLink>
//               <NavLink href="#testimonials">Domiciliation d'entreprise</NavLink>
//               <NavLink href="#pricing">Qui sommes-Nous ?</NavLink>
//             </div>
//           </div>
//           <div className="flex items-center gap-x-5 md:gap-x-8">
//             <div className="hidden md:block">
//               <NavLink href="/login">Sign in</NavLink>
//             </div>
//             <Button href="/register" color="slate">
//               <span>
//                 Connexion
//                 {/* <span className="hidden lg:inline">today</span> */}
//               </span>
//             </Button>
//             <div className="-mr-1 md:hidden">
//               <MobileNavigation />
//             </div>
//           </div>
//         </nav>
//       </Container>
//     </header>
//   )
// }


/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { NavBar } from './NavBar';



export function Header() {
  return (
    <div className="bg-white">
      <NavBar/>
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-primary-700 shadow-sm hover:bg-primary-50 sm:px-8"
                      >
                        Get started
                      </a>
                      <a
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

          {/* Logo cloud */}
          {/* <div className="bg-gray-100">
            <div className="py-5">
              {/*<p className="text-center text-base font-semibold text-gray-500">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>  */}
        </div>
      </main>
    </div>
  )
}
