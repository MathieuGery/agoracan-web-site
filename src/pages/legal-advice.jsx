import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import Content from '@/components/legaladvice/Content';
import Presentation from '@/components/legaladvice/Presentation';
import Cta from '@/components/legaladvice/Cta';
import { Faqs } from '@/components/Faqs';
import Features from '@/components/legaladvice/Features';
import MainInfos from '@/components/MainInfos';

export default function LegalAdvice() {
    return (
        <div>
            <NavBar/>
            <Content/>
            <Presentation/>
            <MainInfos/>
            <Cta/>
            <Features/>
            <Faqs/>
            <Footer/>
        </div>
    );
}
