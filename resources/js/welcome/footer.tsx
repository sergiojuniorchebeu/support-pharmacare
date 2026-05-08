import { Ico } from '@/welcome/shared';

export function Footer() {
    return (
        <footer className="bg-[#0F172A]">
            <div className="mx-auto max-w-6xl px-6 py-14">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="mb-4 flex items-center gap-2.5">
                            <img
                                src="/logo.png"
                                alt="Pharmacare"
                                className="h-8 w-8 rounded-xl object-cover"
                            />
                            <span className="text-base font-bold text-white">
                                Pharmacare
                            </span>
                        </div>
                        <p className="mb-1 text-sm leading-relaxed text-[#94A3B8]">
                            Logiciel de gestion de pharmacie — ventes, stock,
                            commandes, synchronisation cloud.
                        </p>
                        <p className="mb-5 text-xs text-[#475569]">
                            par MI-TECH Sarlu · Cameroun
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {[
                                {
                                    label: 'Windows',
                                    icon: <Ico.Windows size={11} />,
                                    bg: '#1E3A5F',
                                    color: '#93C5FD',
                                },
                                {
                                    label: 'macOS',
                                    icon: <Ico.Apple size={11} />,
                                    bg: '#1E293B',
                                    color: '#CBD5E0',
                                },
                                {
                                    label: 'Web',
                                    icon: <Ico.Globe />,
                                    bg: '#0D3321',
                                    color: '#6EE7B7',
                                },
                            ].map((p) => (
                                <span
                                    key={p.label}
                                    className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-semibold"
                                    style={{
                                        background: p.bg,
                                        color: p.color,
                                    }}
                                >
                                    {p.icon}
                                    {p.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-[#334155]">
                            Navigation
                        </h4>
                        <ul className="space-y-3.5">
                            {[
                                ['Aperçu du logiciel', '#apercu'],
                                ['Téléchargement', '#telechargement'],
                                ['Bonnes pratiques', '#tips'],
                                ['Support', '#support'],
                                ['FAQ', '#faq'],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-sm text-[#64748B] transition-colors hover:text-white"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + CTA */}
                    <div>
                        <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-[#334155]">
                            Contact & support
                        </h4>
                        <ul className="space-y-3.5">
                            <li>
                                <a
                                    href="mailto:contact@mi-tech.site"
                                    className="flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-white"
                                >
                                    <span className="text-[#334155]">
                                        <Ico.Mail />
                                    </span>
                                    contact@mi-tech.site
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/237698824439"
                                    className="flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#25D366]"
                                >
                                    <span className="text-[#334155]">
                                        <Ico.Phone />
                                    </span>
                                    +237 698 824 439
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://pharmacare.mi-tech.site"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#65ADFA]"
                                >
                                    <span className="text-[#334155]">
                                        <Ico.Globe />
                                    </span>
                                    pharmacare.mi-tech.site
                                </a>
                            </li>
                        </ul>

                        {/* Download CTA */}
                        <a
                            href="#telechargement"
                            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#65ADFA] px-4 py-3 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-[#4A9EF5]"
                        >
                            <Ico.Download />
                            Télécharger Pharmacare v1.3
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[#1E293B] pt-8">
                    <p className="text-xs text-[#334155]">
                        &copy; {new Date().getFullYear()} MI-TECH Sarlu. Tous
                        droits réservés.
                    </p>
                    <p className="text-xs text-[#1E293B]">Pharmacare v1.3</p>
                </div>
            </div>
        </footer>
    );
}
