import { GridPattern } from '@/components/ui/grid-pattern';
import { AppChrome, Ico, Reveal } from '@/welcome/shared';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#FAFBFC] pt-32 pb-0">
            {/* GridPattern positionné directement — absolute inset-0 intégré au composant */}
            <GridPattern
                width={40}
                height={40}
                className="-z-10 opacity-80"
                style={{
                    stroke: '#94A3B8',
                    maskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, white 0%, white 55%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, white 0%, white 55%, transparent 90%)',
                }}
            />

            <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#65ADFA]/10 blur-3xl" />

            <div className="mx-auto max-w-5xl px-6 text-center">
                <div className="pc-fade-up mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-sm">
                    <span className="pc-pulse-dot h-2 w-2 rounded-full bg-[#5FD4A0]" />
                    <span className="text-xs font-semibold text-[#4A5568]">
                        Version 1.3 · MI-TECH Sarlu
                    </span>
                </div>

                <h1 className="pc-fade-up pc-delay-1 mb-5 text-[2.75rem] leading-[1.1] font-extrabold tracking-tight text-[#2D3748] lg:text-6xl">
                    Ventes, stock, commandes.
                    <br />
                    <span className="text-[#65ADFA]">Tout sous contrôle.</span>
                </h1>

                <p className="pc-fade-up pc-delay-2 mx-auto mb-8 max-w-lg text-[17px] leading-relaxed text-[#718096]">
                    Pharmacare centralise la gestion de votre officine depuis
                    votre poste — stock par lot, péremptions, ventes, commandes.
                    Fonctionne sans Internet. Se synchronise en arrière-plan.
                </p>

                <div className="pc-fade-up pc-delay-3 mb-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="#telechargement"
                        className="inline-flex items-center gap-2.5 rounded-xl bg-[#65ADFA] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#65ADFA]/20 transition-all hover:-translate-y-px hover:bg-[#4A9EF5]"
                    >
                        <Ico.Windows size={16} />
                        Windows
                    </a>
                    <a
                        href="#telechargement"
                        className="inline-flex items-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-bold text-[#2D3748] shadow-sm transition-all hover:-translate-y-px hover:border-[#CBD5E1]"
                    >
                        <Ico.Apple size={16} />
                        macOS
                    </a>
                </div>

                <div className="pc-fade-up pc-delay-4 mb-12 flex flex-wrap items-center justify-center gap-5 text-xs text-[#718096]">
                    {[
                        'Fonctionne hors ligne',
                        'Synchronisation sécurisée',
                        'Accès multi-profils par PIN',
                        'Support MI-TECH inclus',
                    ].map((item) => (
                        <span key={item} className="flex items-center gap-1.5">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5FD4A0] text-white">
                                <Ico.Check />
                            </span>
                            {item}
                        </span>
                    ))}
                </div>

                <Reveal>
                    <div className="relative -mx-[5%]">
                        {/* Halo principal bleu centré */}
                        <div className="pointer-events-none absolute inset-x-8 -top-6 bottom-10 -z-10 rounded-3xl bg-[#65ADFA]/14 blur-3xl" />
                        {/* Accent violet gauche */}
                        <div className="pointer-events-none absolute -left-6 top-1/3 -z-10 h-56 w-56 rounded-full bg-[#B8A4FF]/10 blur-3xl" />
                        {/* Accent vert droit */}
                        <div className="pointer-events-none absolute -right-6 bottom-1/4 -z-10 h-44 w-44 rounded-full bg-[#5FD4A0]/12 blur-3xl" />
                        <AppChrome
                            src="/home.png"
                            alt="Pharmacare Dashboard"
                            className="mx-auto"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FAFBFC] to-transparent" />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
