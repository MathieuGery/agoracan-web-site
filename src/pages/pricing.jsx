import { Faqs } from '@/components/Faqs';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { Pricing } from '@/components/Pricing';
import React, { Component } from 'react';

class pricing extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Pricing />
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                            <span className="block">Ready to dive in?</span>
                            <span className="block">Start Enjoy your new workspace.</span>
                        </h2>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white hover:bg-secondary-900"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Faqs/>
                <Footer />
            </div>
        );
    }
}

export default pricing;