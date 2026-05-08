import { Ico, Reveal } from '@/welcome/shared';

const windowsSpecs = [
    { icon: <Ico.Cpu />, label: 'Intel Core i3 / AMD', note: 'i5 ou Ryzen 3 recommandé' },
    { icon: <Ico.Memory />, label: '4 Go RAM', note: '8 Go recommandé' },
    { icon: <Ico.HardDrive />, label: '5 Go HDD', note: 'SSD recommandé' },
    { icon: <Ico.Windows size={14} />, label: 'Windows 10 (64-bit)', note: 'Windows 11 recommandé' },
];

const macSpecs = [
    { icon: <Ico.Apple size={14} />, label: 'macOS 12 Monterey+', note: 'macOS 14 Sonoma recommandé' },
    { icon: <Ico.Cpu />, label: 'Apple Silicon M1/M2', note: 'Intel Core i5+ aussi supporté' },
    { icon: <Ico.Memory />, label: '4 Go RAM', note: '8 Go recommandé' },
    { icon: <Ico.HardDrive />, label: '5 Go disponibles', note: 'SSD conseillé' },
];

function SpecRow({ specs }: { specs: typeof windowsSpecs }) {
    return (
        <ul className="space-y-2">
            {specs.map((s) => (
                <li key={s.label} className="flex items-start gap-2 text-xs">
                    <span className="mt-0.5 shrink-0 text-[#CBD5E0]">{s.icon}</span>
                    <span className="text-[#4A5568]">
                        {s.label}
                        <span className="ml-1 text-[#A0AEC0]">— {s.note}</span>
                    </span>
                </li>
            ))}
        </ul>
    );
}

export function Downloads() {
    return (
        <section id="telechargement" className="bg-[#FAFBFC] py-20 lg:py-28">
            <div className="mx-auto max-w-4xl px-6">
                {/* Header */}
                <Reveal>
                    <div className="mb-10">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#65ADFA]">
                            Téléchargement
                        </p>
                        <h2 className="text-4xl font-bold text-[#2D3748] lg:text-5xl">
                            Pharmacare v1.3
                        </h2>
                        <p className="mt-3 text-lg text-[#718096]">
                            Disponible sur Windows et macOS.
                        </p>
                    </div>
                </Reveal>

                {/* Two equal platform cards */}
                <div className="grid gap-4 md:grid-cols-2">
                    {/* Windows */}
                    <Reveal delay={0}>
                        <div className="flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-black/[0.05]">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#65ADFA]">
                                    <Ico.Windows size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-[#2D3748]">
                                        Windows
                                    </p>
                                    <p className="text-xs text-[#A0AEC0]">
                                        .exe · v1.3 · ~85 Mo
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6 flex-1">
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#CBD5E0]">
                                    Configuration
                                </p>
                                <SpecRow specs={windowsSpecs} />
                            </div>

                            <a
                                href="#download-windows"
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#65ADFA] py-3 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-[#4A9EF5]"
                            >
                                <Ico.Download />
                                Télécharger pour Windows
                            </a>
                        </div>
                    </Reveal>

                    {/* macOS */}
                    <Reveal delay={60}>
                        <div className="flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-black/[0.05]">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7FAFC] text-[#374151]">
                                    <Ico.Apple size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-[#2D3748]">
                                        macOS
                                    </p>
                                    <p className="text-xs text-[#A0AEC0]">
                                        .dmg · v1.3 · ~90 Mo
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6 flex-1">
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#CBD5E0]">
                                    Configuration
                                </p>
                                <SpecRow specs={macSpecs} />
                            </div>

                            <a
                                href="#download-macos"
                                className="flex items-center justify-center gap-2 rounded-xl border border-[#374151] py-3 text-sm font-bold text-[#374151] transition-all hover:-translate-y-px hover:bg-[#374151] hover:text-white"
                            >
                                <Ico.Download />
                                Télécharger pour macOS
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* Licence note */}
                <Reveal delay={80}>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E2E8F0] bg-white px-5 py-4">
                        <p className="text-sm text-[#718096]">
                            Licence requise — créez votre compte sur{' '}
                            <a
                                href="https://pharmacare.mi-tech.site"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-[#65ADFA] hover:underline"
                            >
                                pharmacare.mi-tech.site
                            </a>
                        </p>
                        <div className="flex items-center gap-3 text-sm">
                            <a
                                href="mailto:contact@mi-tech.site"
                                className="font-medium text-[#65ADFA] hover:underline"
                            >
                                contact@mi-tech.site
                            </a>
                            <span className="text-[#E2E8F0]">·</span>
                            <a
                                href="https://wa.me/237698824439"
                                className="font-medium text-[#65ADFA] hover:underline"
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
