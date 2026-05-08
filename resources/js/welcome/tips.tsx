import { Reveal } from '@/welcome/shared';

const tips = [
    {
        n: '01',
        color: '#65ADFA',
        title: "Maintenez l'application à jour",
        desc: "Vérifiez régulièrement les mises à jour depuis le menu de l'application. Chaque version corrige des bugs et améliore la stabilité.",
    },
    {
        n: '02',
        color: '#5FD4A0',
        title: 'Sauvegardez régulièrement',
        desc: 'Planifiez une sauvegarde quotidienne sur un support externe. Restauration en quelques minutes en cas de panne.',
    },
    {
        n: '03',
        color: '#B8A4FF',
        title: 'Laissez la synchro se terminer',
        desc: "Avant de fermer l'application, patientez que la synchronisation en arrière-plan se finalise correctement.",
    },
    {
        n: '04',
        color: '#FFB88C',
        title: 'Connexion stable = meilleure synchro',
        desc: 'Pharmacare fonctionne hors ligne, mais une connexion stable réduit les conflits lors de la synchronisation.',
    },
    {
        n: '05',
        color: '#FF9B9B',
        title: 'Signalez les anomalies rapidement',
        desc: "En cas d'incohérence de stock ou de comportement inattendu, contactez le support MI-TECH sans attendre.",
    },
];

export function Tips() {
    return (
        <section id="tips" className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <Reveal>
                    <div className="mb-12 text-center">
                        <p className="mb-2 text-xs font-bold tracking-widest text-[#65ADFA] uppercase">
                            Bonnes pratiques
                        </p>
                        <h2 className="text-3xl font-bold text-[#2D3748] lg:text-4xl">
                            5 conseils pour bien utiliser Pharmacare
                        </h2>
                    </div>
                </Reveal>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {tips.slice(0, 3).map((tip, index) => (
                        <Reveal key={tip.n} delay={index * 70}>
                            <div className="bento-card rounded-2xl border border-[#E2E8F0] bg-white p-6">
                                <span
                                    className="mb-3 block text-5xl leading-none font-black"
                                    style={{ color: tip.color, opacity: 0.12 }}
                                >
                                    {tip.n}
                                </span>
                                <div
                                    className="mb-4 h-0.5 w-8 rounded-full"
                                    style={{ background: tip.color }}
                                />
                                <h3 className="mb-2 text-sm font-bold text-[#2D3748]">
                                    {tip.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-[#718096]">
                                    {tip.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {tips.slice(3).map((tip, index) => (
                        <Reveal key={tip.n} delay={index * 70}>
                            <div className="bento-card rounded-2xl border border-[#E2E8F0] bg-white p-6">
                                <span
                                    className="mb-3 block text-5xl leading-none font-black"
                                    style={{ color: tip.color, opacity: 0.12 }}
                                >
                                    {tip.n}
                                </span>
                                <div
                                    className="mb-4 h-0.5 w-8 rounded-full"
                                    style={{ background: tip.color }}
                                />
                                <h3 className="mb-2 text-sm font-bold text-[#2D3748]">
                                    {tip.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-[#718096]">
                                    {tip.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
