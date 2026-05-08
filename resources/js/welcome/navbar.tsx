import { useEffect, useState } from 'react';
import { Ico } from '@/welcome/shared';

const navLinks = [
    { label: 'Aperçu', href: '#apercu' },
    { label: 'Téléchargement', href: '#telechargement' },
    { label: 'Support', href: '#support' },
    { label: 'FAQ', href: '#faq' },
];

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4 sm:top-5">
            <header
                className={`flex w-full max-w-3xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
                    scrolled
                        ? 'border-[#E2E8F0] bg-white/95 shadow-lg shadow-black/[0.07] backdrop-blur-md'
                        : 'border-transparent bg-white/80 shadow-md shadow-black/[0.04] backdrop-blur-sm'
                }`}
            >
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Pharmacare"
                        className="h-6 w-6 rounded-lg object-cover sm:h-7 sm:w-7"
                    />
                    <span className="text-sm font-bold text-[#2D3748] sm:text-[15px]">
                        Pharmacare
                    </span>
                </div>

                <nav className="hidden items-center gap-6 text-sm font-medium text-[#4A5568] md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="transition-colors hover:text-[#2D3748]"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#telechargement"
                    className="hidden rounded-xl bg-[#65ADFA] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#4A9EF5] md:block"
                >
                    Télécharger
                </a>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={
                        mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'
                    }
                    className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-xl border border-[#E2E8F0] bg-white/80 md:hidden"
                >
                    <span
                        className={`h-[2px] w-5 rounded-full bg-[#2D3748] transition-all duration-300 ${mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
                    />
                    <span
                        className={`h-[2px] rounded-full bg-[#2D3748] transition-all duration-300 ${mobileMenuOpen ? 'w-0 opacity-0' : 'w-[14px]'}`}
                    />
                    <span
                        className={`h-[2px] w-5 rounded-full bg-[#2D3748] transition-all duration-300 ${mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
                    />
                </button>
            </header>

            {mobileMenuOpen && (
                <div className="pc-slide-down mt-2 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white/97 shadow-xl shadow-black/[0.08] backdrop-blur-md md:hidden">
                    <nav className="divide-y divide-[#F7FAFC]">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center px-5 py-4 text-sm font-medium text-[#4A5568] transition-colors hover:bg-[#FAFBFC] hover:text-[#2D3748]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="border-t border-[#F7FAFC] p-3">
                        <a
                            href="#telechargement"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#65ADFA] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#4A9EF5]"
                        >
                            <Ico.Download />
                            Télécharger Pharmacare
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
