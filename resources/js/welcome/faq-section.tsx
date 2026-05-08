import { Ico, Reveal } from '@/welcome/shared';

const faqs = [
    {
        q: 'Comment installer Pharmacare ?',
        a: "Téléchargez l'installateur (.exe Windows ou .dmg macOS), lancez-le et suivez les étapes. L'installation prend moins de 5 minutes. Créez ensuite votre compte sur pharmacare.mi-tech.site pour activer votre licence.",
    },
    {
        q: 'Comment obtenir une licence ?',
        a: "Rendez-vous sur pharmacare.mi-tech.site et créez votre compte. C'est depuis cette plateforme que vous gérez votre licence, vos équipes et accédez à la version web complète de Pharmacare.",
    },
    {
        q: 'Windows et macOS sont-ils tous les deux supportés ?',
        a: "Oui. Pharmacare v1.3 est disponible pour Windows 10/11 (64-bit) et macOS 12 Monterey et supérieur. Les deux versions sont maintenues à parité fonctionnelle.",
    },
    {
        q: 'Faut-il Internet en permanence ?',
        a: "Non. Pharmacare fonctionne entièrement en local. Internet est utile pour la synchronisation web, les mises à jour et le support — mais pas requis pour la gestion quotidienne.",
    },
    {
        q: 'Comment se passe la synchronisation avec le web ?',
        a: "La synchronisation s'effectue automatiquement en arrière-plan dès qu'une connexion est disponible. Elle est incrémentale — seules les modifications récentes sont transmises. Rien à déclencher manuellement.",
    },
    {
        q: 'Quelle est la configuration minimum ?',
        a: "Minimum : Intel Core i3 (ou AMD équivalent), 4 Go RAM, 5 Go d'espace disque (HDD), Windows 10 64-bit. Recommandé : Core i5 / Ryzen 3, 8 Go RAM, SSD, Windows 11.",
    },
    {
        q: 'Comment contacter le support MI-TECH ?',
        a: "Par email à contact@mi-tech.site ou via WhatsApp au +237 698 824 439. Vous pouvez aussi passer par pharmacare.mi-tech.site. Chaque demande est suivie jusqu'à résolution complète.",
    },
];

export function FaqSection() {
    return (
        <section id="faq" className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-3xl px-6">
                {/* Header — large, left-aligned */}
                <Reveal>
                    <div className="mb-14">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#65ADFA]">
                            FAQ
                        </p>
                        <h2 className="text-4xl font-bold leading-tight text-[#2D3748] lg:text-5xl">
                            Questions
                            <br />
                            fréquentes
                        </h2>
                    </div>
                </Reveal>

                {/* Numbered accordion — borderless */}
                <Reveal delay={60}>
                    <div className="divide-y divide-[#E2E8F0]">
                        {faqs.map((faq, i) => (
                            <details key={faq.q} className="group py-6">
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 select-none">
                                    <div className="flex items-start gap-5">
                                        <span className="mt-1 shrink-0 text-xs font-bold tabular-nums text-[#CBD5E0]">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-[17px] font-semibold leading-snug text-[#2D3748]">
                                            {faq.q}
                                        </span>
                                    </div>
                                    <span className="mt-1 shrink-0">
                                        <Ico.Chevron />
                                    </span>
                                </summary>
                                <div className="mt-4 pl-10 text-[15px] leading-relaxed text-[#718096]">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </Reveal>

                {/* Bottom contact */}
                <Reveal delay={80}>
                    <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#E2E8F0] pt-10 sm:flex-row sm:items-center">
                        <div>
                            <p className="font-semibold text-[#2D3748]">
                                Vous ne trouvez pas votre réponse ?
                            </p>
                            <p className="mt-0.5 text-sm text-[#718096]">
                                Notre équipe répond sous 24h ouvrées.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href="mailto:contact@mi-tech.site"
                                className="text-sm font-semibold text-[#65ADFA] hover:underline"
                            >
                                contact@mi-tech.site
                            </a>
                            <span className="text-[#CBD5E0]">·</span>
                            <a
                                href="https://wa.me/237698824439"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-[#25D366] hover:underline"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
