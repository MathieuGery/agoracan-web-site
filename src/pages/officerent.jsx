import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import Content from '@/components/officerent/Content';
import Presentation from '@/components/officerent/Presentation';
import Cta from '@/components/officerent/Cta';
import { Faqs } from '@/components/Faqs';
import Features from '@/components/officerent/Features';

export default function OfficeRent() {
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
