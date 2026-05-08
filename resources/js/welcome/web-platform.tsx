import { Ico, Reveal } from '@/welcome/shared';

const capabilities = [
    { label: 'Licences', desc: 'Activation & gestion des postes' },
    { label: 'Équipes', desc: 'Performances & activité par profil' },
    { label: 'Fiscal', desc: 'Fiches fiscales & rapports officiels' },
    { label: 'Contrôle', desc: 'Actions à distance, hors du poste local' },
];

export function WebPlatform() {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-6xl px-6">
                <Reveal>
                    <div className="overflow-hidden rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF]">
                        <div className="grid items-center gap-0 lg:grid-cols-2">
                            {/* Illustration */}
                            <div className="flex items-center justify-center p-8 lg:p-12">
                                <img
                                    src="/oversight-pana.png"
                                    alt=""
                                    className="w-full max-w-sm drop-shadow-sm"
                                />
                            </div>

                            {/* Content */}
                            <div className="border-t border-[#BFDBFE] p-8 lg:border-t-0 lg:border-l lg:p-12">
                                <span className="mb-5 inline-block rounded-full border border-[#BFDBFE] bg-white px-3 py-1 text-xs font-semibold text-[#2563EB]">
                                    Version web incluse
                                </span>
                                <h2 className="text-3xl font-bold leading-snug text-[#2D3748] lg:text-4xl">
                                    Pilotez votre
                                    <br />
                                    pharmacie depuis
                                    <br />
                                    n'importe où.
                                </h2>
                                <p className="mt-4 text-[15px] leading-relaxed text-[#4A5568]">
                                    <a
                                        href="https://pharmacare.mi-tech.site"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-[#2563EB] hover:underline"
                                    >
                                        pharmacare.mi-tech.site
                                    </a>{' '}
                                    est la version web complète de Pharmacare.
                                    Gérez vos licences, suivez vos équipes,
                                    générez vos fiches fiscales et gardez le
                                    contrôle total depuis n'importe quel
                                    appareil.
                                </p>

                                {/* Capabilities */}
                                <div className="mt-5 grid grid-cols-2 gap-2">
                                    {capabilities.map((cap) => (
                                        <div
                                            key={cap.label}
                                            className="rounded-xl border border-[#BFDBFE] bg-white/70 px-3 py-2.5"
                                        >
                                            <p className="text-xs font-bold text-[#2D3748]">
                                                {cap.label}
                                            </p>
                                            <p className="mt-0.5 text-[11px] leading-snug text-[#718096]">
                                                {cap.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://pharmacare.mi-tech.site"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#65ADFA] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#65ADFA]/20 transition-all hover:-translate-y-px hover:bg-[#4A9EF5]"
                                >
                                    <Ico.ExternalLink />
                                    Accéder à la plateforme
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
