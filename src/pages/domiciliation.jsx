import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import Content from '@/components/domiciliation/Content';
import Presentation from '@/components/domiciliation/Presentation';
import Cta from '@/components/domiciliation/Cta';
import { Faqs } from '@/components/Faqs';
import Features from '@/components/domiciliation/Features';

export default function Domiciliation() {
    return (
        <div>
            <NavBar/>
            <Content/>
            <Presentation/>
            <Cta/>
            <Features/>
            <Faqs/>
            <Footer/>
        </div>
    );
}
