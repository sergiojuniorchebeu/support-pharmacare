import { Ico, Reveal } from '@/welcome/shared';

const highlights = [
    {
        icon: <Ico.Box />,
        color: '#65ADFA',
        title: 'Stock par lot, péremptions en temps réel',
        desc: "Chaque produit est suivi par lot avec sa date FEFO. Les alertes remontent automatiquement avant l'expiration.",
    },
    {
        icon: <Ico.Globe />,
        color: '#5FD4A0',
        title: 'Contrôle à distance via le web',
        desc: "Consultez vos ventes, votre stock et vos rapports depuis n'importe où sur pharmacare.mi-tech.site — même si le poste local est éteint.",
    },
    {
        icon: <Ico.Shield />,
        color: '#B8A4FF',
        title: 'Sécurisé, multi-utilisateurs, traçable',
        desc: 'Connexion PIN rapide par profil, droits différenciés, journal complet des opérations par opérateur.',
    },
];

export function WhyPharmacare() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    <Reveal>
                        <img
                            src="/Pharmacist-amico.png"
                            alt=""
                            className="mx-auto w-full max-w-sm lg:mx-0"
                        />
                    </Reveal>
                    <div>
                        <Reveal>
                            <p className="mb-2 text-xs font-bold tracking-widest text-[#65ADFA] uppercase">
                                Pourquoi Pharmacare
                            </p>
                            <h2 className="mb-4 text-3xl leading-snug font-bold text-[#2D3748] lg:text-4xl">
                                Pas un tableur. Pas un ERP à configurer pendant
                                3 mois.
                            </h2>
                            <p className="mb-8 text-base leading-relaxed text-[#4A5568]">
                                Pharmacare s&apos;installe en 5 minutes et
                                répond aux vrais problèmes du terrain :
                                connexions instables, plusieurs utilisateurs sur
                                le même poste, stock à surveiller par lot et
                                péremption.
                            </p>
                        </Reveal>
                        <div className="space-y-4">
                            {highlights.map((item, index) => (
                                <Reveal key={item.title} delay={index * 80}>
                                    <div className="flex gap-4 rounded-xl border border-[#E2E8F0] bg-[#FAFBFC] p-4 transition-shadow hover:shadow-sm">
                                        <div
                                            className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                                            style={{ background: item.color }}
                                        >
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="mb-0.5 text-sm font-bold text-[#2D3748]">
                                                {item.title}
                                            </p>
                                            <p className="text-sm leading-relaxed text-[#718096]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
