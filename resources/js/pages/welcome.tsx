import { Head } from '@inertiajs/react';
import { BentoGrid } from '@/welcome/bento-grid';
import { Downloads } from '@/welcome/downloads';
import { FaqSection } from '@/welcome/faq-section';
import { Footer } from '@/welcome/footer';
import { Hero } from '@/welcome/hero';
import { NavBar } from '@/welcome/navbar';
import { WaveDivider } from '@/welcome/shared';
import { Support } from '@/welcome/support';
import { Tips } from '@/welcome/tips';
import { WhyPharmacare } from '@/welcome/why-pharmacare';

export default function Welcome() {
    return (
        <>
            <Head title="Pharmacare — Logiciel de gestion de pharmacie" />
            <div className="min-h-screen bg-white font-sans antialiased">
                <NavBar />
                <Hero />
                <WaveDivider from="#FAFBFC" to="#ffffff" />
                <WhyPharmacare />
                <WaveDivider from="#ffffff" to="#FAFBFC" />
                <BentoGrid />
                <WaveDivider from="#FAFBFC" to="#ffffff" />
                <Downloads />
                <WaveDivider from="#ffffff" to="#FAFBFC" />
                <Tips />
                <WaveDivider from="#FAFBFC" to="#ffffff" />
                <Support />
                <WaveDivider from="#ffffff" to="#FAFBFC" />
                <FaqSection />
                <WaveDivider from="#FAFBFC" to="#ffffff" />
                <Footer />
            </div>
        </>
    );
}
