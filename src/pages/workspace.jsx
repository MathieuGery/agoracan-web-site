import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import React, { Component } from 'react';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Invite team members',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'Keyboard shortcuts',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

class workspace extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div class="container mx-auto">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-xl mx-5">Our workspace in image</h2>
                        <p className="mt-3 text-xl text-secondary-500 sm:mt-4 mx-5">
                            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                            arcu.
                        </p>
                    </div>
                    <div className="relative my-5 mb-8 mx-2">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-secondary-400" />
                        </div>
                    </div>
                    <div class="grid-cols-3 mb-4 p-2 space-y-2 bg-white lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                                alt="image"
                                height={"500%"}
                                width={"500%"} />
                        </div>
                        <div class="w-full col-span-2 row-span-2 rounded cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                                alt="image"
                                layout="fill" />
                        </div>
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                alt="image"
                                height={"500%"}
                                width={"500%"} />
                        </div>
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                alt="image"
                                height={"500%"}
                                width={"500%"} />
                        </div>
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                alt="image"
                                height={"500%"}
                                width={"500%"} />
                        </div>
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                alt="image"
                                height={"500%"}
                                width={"500%"} />
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
                        <div>
                            <h2 className="text-lg font-semibold text-primary-600">Everything you need</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900">All-in-one platform</p>
                            <p className="mt-4 text-lg text-secondary-500">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                            </p>
                        </div>
                        <div className="mt-12 lg:col-span-2 lg:mt-0">
                            <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt>
                                            <CheckIcon className="absolute h-6 w-6 text-primary-600" aria-hidden="true" />
                                            <p className="ml-9 text-lg font-medium leading-6 text-secondary-900">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-9 text-base text-secondary-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default workspace;