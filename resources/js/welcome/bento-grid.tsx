import { useEffect, useState } from 'react';
import { AppChrome, Reveal } from '@/welcome/shared';

type Module = {
    label: string;
    src: string;
    color: string;
    desc: string;
    tag?: string;
};

const modules: Module[] = [
    {
        label: 'Dashboard',
        src: '/home.png',
        color: '#65ADFA',
        desc: "Vue d'ensemble en temps réel — ventes du jour, ruptures de stock, lots à surveiller et évolution hebdomadaire.",
    },
    {
        label: 'Ventes & caisse',
        src: '/ventes.png',
        color: '#5FD4A0',
        desc: "Scan produit, vente à l'unité ou en boîte, ticket et paiement. Interface rapide pensée pour le comptoir.",
    },
    {
        label: 'Inventaire',
        src: '/Produit.png',
        color: '#B8A4FF',
        desc: "Suivi par lot avec alertes FEFO, filtres avancés, signalement de produits indisponibles et export intégré.",
    },
    {
        label: 'Commandes',
        src: '/commande.png',
        color: '#FFB88C',
        desc: "Créez, suivez et réceptionnez vos commandes fournisseurs. Historique complet et traçabilité des entrées.",
    },
    {
        label: 'Saisie différée',
        src: '/Saisies%20differree.png',
        color: '#FF9B9B',
        desc: "Enregistrez des ventes passées effectuées manuellement (panne, coupure) pour maintenir la traçabilité comptable sans rupture.",
    },
    {
        label: 'Marketplace',
        src: '/marketplace(web).png',
        color: '#FFDB6E',
        tag: 'Web',
        desc: "Rendez un produit disponible sur la vitrine de promotion en un clic. Outil propriétaire pour booster la visibilité en ligne.",
    },
    {
        label: 'Codes-barres',
        src: '/gestion%20de%20code%20barre.png',
        color: '#65ADFA',
        desc: "Gérez les codes-barres de vos produits — scan rapide en caisse et en inventaire, sans erreur de saisie.",
    },
    {
        label: 'Accès & profils',
        src: '/Connexion.png',
        color: '#A0AEC0',
        desc: "PIN à 4 chiffres par profil, droits différenciés, journal complet des opérations par opérateur.",
    },
];

export function BentoGrid() {
    // `active` drives the list highlight immediately
    const [active, setActive] = useState(0);
    // `displayed` drives the screenshot — lags behind to avoid flash
    const [displayed, setDisplayed] = useState(0);
    const [fading, setFading] = useState(false);

    const selectModule = (i: number) => {
        if (i === active) return;
        setActive(i);
        setFading(true);
    };

    useEffect(() => {
        if (!fading) return;
        const t = setTimeout(() => {
            setDisplayed(active);
            setFading(false);
        }, 110);
        return () => clearTimeout(t);
    }, [fading, active]);

    // Preload all images so switching is instant
    useEffect(() => {
        modules.forEach((m) => {
            const img = new Image();
            img.src = m.src;
        });
    }, []);

    return (
        <section id="apercu" className="bg-[#EFF6FF] py-20 lg:py-28">
            {/* Wider container — ~25% more width for screenshots */}
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <Reveal>
                    <div className="mb-12">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#65ADFA]">
                            Aperçu
                        </p>
                        <h2 className="text-3xl font-bold text-[#2D3748] lg:text-4xl">
                            Chaque module, pensé pour l'officine.
                        </h2>
                    </div>
                </Reveal>

                {/* Interactive showcase */}
                <div className="grid items-stretch gap-6 lg:grid-cols-3">
                    {/* Screenshot — 2/3 of max-w-7xl ≈ 25% wider than before */}
                    <Reveal className="flex flex-col gap-3 lg:col-span-2">
                        {/* Smooth opacity cross-fade — no remount, no flash */}
                        <div
                            className="flex-1"
                            style={{
                                opacity: fading ? 0 : 1,
                                transition: 'opacity 0.11s ease',
                            }}
                        >
                            <AppChrome
                                src={modules[displayed].src}
                                alt={modules[displayed].label}
                                className="h-full"
                            />
                        </div>

                        {/* Caption */}
                        <div className="shrink-0 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3">
                            <div className="flex items-center gap-2">
                                <span
                                    className="h-2 w-2 shrink-0 rounded-full transition-colors duration-200"
                                    style={{ background: modules[active].color }}
                                />
                                <p className="text-xs font-semibold text-[#4A5568]">
                                    {modules[active].label}
                                    {modules[active].tag && (
                                        <span className="ml-2 rounded-full bg-[#EFF6FF] px-2 py-0.5 text-[10px] font-bold text-[#65ADFA]">
                                            {modules[active].tag}
                                        </span>
                                    )}
                                </p>
                            </div>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#718096]">
                                {modules[active].desc}
                            </p>
                        </div>
                    </Reveal>

                    {/* Feature selector — 1/3, same height as left */}
                    <Reveal delay={80} className="h-full lg:col-span-1">
                        <div className="flex h-full flex-col rounded-2xl border border-[#BFDBFE] bg-white p-2">
                            {modules.map((mod, i) => (
                                <button
                                    key={mod.label}
                                    onClick={() => selectModule(i)}
                                    className={`flex flex-1 items-center gap-3 rounded-xl px-3 text-left transition-all duration-200 ${
                                        active === i
                                            ? 'bg-white'
                                            : 'hover:bg-white/60'
                                    }`}
                                    style={
                                        active === i
                                            ? {
                                                  boxShadow: `inset 3px 0 0 ${mod.color}, 0 1px 4px rgba(0,0,0,0.05)`,
                                              }
                                            : undefined
                                    }
                                >
                                    <span
                                        className="h-2 w-2 shrink-0 rounded-full transition-all duration-200"
                                        style={{
                                            background:
                                                active === i
                                                    ? mod.color
                                                    : '#D1D5DB',
                                            boxShadow:
                                                active === i
                                                    ? `0 0 0 3px ${mod.color}28`
                                                    : 'none',
                                        }}
                                    />
                                    <span
                                        className={`w-5 shrink-0 text-[10px] font-bold tabular-nums transition-colors duration-200 ${
                                            active === i
                                                ? 'text-[#93C5FD]'
                                                : 'text-[#BFDBFE]'
                                        }`}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span
                                        className={`flex-1 text-[13px] transition-colors duration-200 ${
                                            active === i
                                                ? 'font-semibold text-[#2D3748]'
                                                : 'font-medium text-[#94A3B8] hover:text-[#64748B]'
                                        }`}
                                    >
                                        {mod.label}
                                    </span>
                                    {mod.tag ? (
                                        <span className="ml-auto shrink-0 rounded-full bg-[#EFF6FF] px-1.5 py-0.5 text-[9px] font-bold text-[#65ADFA]">
                                            {mod.tag}
                                        </span>
                                    ) : active === i ? (
                                        <svg
                                            className="ml-auto h-3 w-3 shrink-0"
                                            style={{ color: mod.color }}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    ) : null}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
