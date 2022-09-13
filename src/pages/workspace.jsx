import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import React, { Component } from 'react';

class workspace extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Footer/>
            </div>
        );
    }
}

export default workspace;