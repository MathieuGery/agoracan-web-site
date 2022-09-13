import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import React, { Component } from 'react';
import Image from 'next/image';

class workspace extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div class="container mx-auto">
                    <div class="grid-cols-3 mb-4 p-2 space-y-2 bg-white lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                                alt="image"
                                height={"500%"}
                                width={"500%"}/>
                        </div>
                        <div class="w-full col-span-2 row-span-2 rounded cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                                alt="image"
                                layout="fill"/>
                        </div>
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                alt="image"
                               height={"500%"}
                                width={"500%"}/>
                        </div>
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                alt="image"
                               height={"500%"}
                                width={"500%"}/>
                        </div>
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                alt="image"
                               height={"500%"}
                                width={"500%"}/>
                        </div>
                        <div class="w-full cursor-pointer transition duration-200 transform hover:scale-105">
                            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                alt="image"
                               height={"500%"}
                                width={"500%"}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default workspace;