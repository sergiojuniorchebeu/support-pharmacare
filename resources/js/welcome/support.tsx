import { Ico, Reveal } from '@/welcome/shared';

const supportChannels = [
    {
        icon: <Ico.Mail />,
        color: '#65ADFA',
        bg: '#EFF6FF',
        title: 'Email support',
        value: 'contact@mi-tech.site',
        desc: "Pour toute demande d'installation, de licence ou de support technique. Réponse sous 24h ouvrées.",
        href: 'mailto:contact@mi-tech.site',
        cta: 'Envoyer un email',
    },
    {
        icon: <Ico.Phone />,
        color: '#25D366',
        bg: '#F0FDF9',
        title: 'WhatsApp',
        value: '+237 698 824 439',
        desc: "Assistance rapide pour les urgences et les questions en cours d'utilisation. Réponse dans la journée.",
        href: 'https://wa.me/237698824439',
        cta: 'Ouvrir WhatsApp',
    },
    {
        icon: <Ico.Globe />,
        color: '#B8A4FF',
        bg: '#F5F3FF',
        title: 'Espace web',
        value: 'pharmacare.mi-tech.site',
        desc: 'Gérez votre licence, consultez vos rapports, suivez les performances et contrôlez votre officine à distance.',
        href: 'https://pharmacare.mi-tech.site',
        cta: 'Accéder',
    },
];

export function Support() {
    return (
        <section id="support" className="bg-[#FAFBFC] py-20 lg:py-28">
            <div className="mx-auto max-w-5xl px-6">
                <Reveal>
                    <div className="mb-14 text-center">
                        <p className="mb-2 text-xs font-bold tracking-widest text-[#65ADFA] uppercase">
                            Assistance
                        </p>
                        <h2 className="mb-3 text-3xl font-bold text-[#2D3748] lg:text-4xl">
                            Une équipe disponible pour vous
                        </h2>
                        <p className="mx-auto max-w-md text-base text-[#718096]">
                            MI-TECH Sarlu assure le support, la formation et le
                            suivi des incidents pour tous les utilisateurs
                            Pharmacare.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-5 md:grid-cols-3">
                    {supportChannels.map((channel, index) => (
                        <Reveal key={channel.title} delay={index * 70}>
                            <div className="bento-card flex flex-col rounded-2xl border border-[#E2E8F0] p-6">
                                <div
                                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                                    style={{
                                        background: channel.bg,
                                        color: channel.color,
                                    }}
                                >
                                    {channel.icon}
                                </div>
                                <p className="mb-0.5 text-xs font-bold tracking-widest text-[#718096] uppercase">
                                    {channel.title}
                                </p>
                                <p className="mb-2 font-bold text-[#2D3748]">
                                    {channel.value}
                                </p>
                                <p className="mb-5 flex-1 text-sm leading-relaxed text-[#718096]">
                                    {channel.desc}
                                </p>
                                <a
                                    href={channel.href}
                                    target={
                                        channel.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        channel.href.startsWith('http')
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] px-4 py-2.5 text-sm font-semibold transition-colors hover:border-current"
                                    style={{ color: channel.color }}
                                >
                                    {channel.cta}
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={80}>
                    <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#E2E8F0] bg-[#FAFBFC] px-8 py-6 sm:flex-row">
                        <div>
                            <p className="font-bold text-[#2D3748]">
                                Aide à l&apos;installation et mise en service
                            </p>
                            <p className="mt-0.5 text-sm text-[#718096]">
                                Notre équipe vous accompagne gratuitement lors
                                du premier déploiement de Pharmacare.
                            </p>
                        </div>
                        <a
                            href="mailto:contact@mi-tech.site?subject=Demande aide installation Pharmacare v1.3"
                            className="shrink-0 rounded-xl bg-[#65ADFA] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-px hover:bg-[#4A9EF5]"
                        >
                            Demander une aide
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
