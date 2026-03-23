import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown, Plus, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
          <a href="#over-mij" className="hover:text-black transition-colors">Over Mij</a>
          <a href="#portfolio" className="hover:text-black transition-colors">Portfolio</a>
          <a href="#diensten" className="hover:text-black transition-colors">Diensten</a>
          <a href="#blog" className="hover:text-black transition-colors">Blog</a>
        </div>
        <a href="#contact" className="hidden md:flex items-center gap-1 text-sm font-medium border-b border-black pb-0.5 hover:opacity-70 transition-opacity">
          Boek Een Gesprek <ArrowUpRight className="w-4 h-4" />
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-12 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-16 relative z-10">
            {/* Vertical text on the far left */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-gray-400 tracking-widest uppercase hidden xl:block">
              Oprichter & CEO
            </div>
            
            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-light flex items-start">
                  <span className="text-xl mt-1 mr-1">+</span>200B
                </div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Netto waarde</div>
              </div>
              <div>
                <div className="text-3xl font-light flex items-start">
                  <span className="text-xl mt-1 mr-1">+</span>1.5M
                </div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Werknemers</div>
              </div>
            </div>

            {/* Big Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-8xl md:text-[160px] font-light tracking-tighter leading-none"
              >
                Hallo
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 font-light flex items-center gap-4"
              >
                <span className="w-8 h-[1px] bg-gray-400"></span>
                — Ik ben Jeff Bezos, ondernemer
              </motion.p>
            </div>

            {/* Scroll Down */}
            <div className="pt-24">
              <a href="#over-mij" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                Scroll naar beneden <ArrowDown className="w-4 h-4" />
              </a>
            </div>
            
            <div className="absolute -left-16 bottom-0 -rotate-90 text-xs text-gray-400 tracking-widest hidden xl:block">
              2026
            </div>
          </div>

          {/* Right Column (Image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[600px] lg:h-[800px] w-full flex justify-end"
          >
            {/* We need a portrait image that blends well with the background. */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Jeff Bezos Portrait Placeholder" 
              className="h-full object-cover object-top grayscale contrast-125 brightness-110 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </main>

      {/* About Section */}
      <section id="over-mij" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Text */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-4xl font-medium tracking-tight">Over Mij</h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                Ik ben gespecialiseerd in het bouwen van wereldwijde infrastructuren en het oplossen van complexe logistieke problemen. Mijn aanpak combineert meedogenloze klantgerichtheid met langetermijndenken om bedrijven te bouwen die de toekomst vormgeven. Klaar voor de volgende grote sprong?
              </p>
              {/* Decorative arrow SVG */}
              <svg className="w-32 h-32 text-gray-200 mt-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 90 Q 40 10 90 10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M70 10 L 90 10 L 90 30" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Middle Stats Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="bg-[#F8F8F8] p-8 rounded-3xl w-full max-w-sm">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Globe className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-5xl font-light mb-4">1994</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Het jaar waarin Amazon werd opgericht, met de visie om het meest klantgerichte bedrijf ter wereld te worden.
                </p>
              </div>
              
              <div className="mt-8 w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Portrait" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-4 space-y-12">
              <div className="flex justify-start lg:justify-end">
                <div className="w-32 h-32 rounded-2xl overflow-hidden relative group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" 
                    alt="Small portrait" 
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-8">
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Met meer dan 30 jaar ervaring in e-commerce en technologie, ben ik gespecialiseerd in het creëren van schaalbare systemen die echte problemen oplossen en naadloze klantervaringen leveren.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Ik gedij bij het verleggen van grenzen, van het revolutioneren van retail tot het verkennen van de ruimte met Blue Origin, waarbij ik visie combineer met meedogenloze uitvoering.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-[#F5F5F5] py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-medium tracking-tight">Inzichten & Gedachten</h2>
              <p className="text-gray-500 text-sm max-w-md">
                Reflecties over ondernemerschap, langetermijndenken en de toekomst van technologie en ruimtevaart.
              </p>
            </div>
            <a href="#blog" className="inline-flex items-center gap-1 text-sm font-medium border-b border-black pb-0.5 hover:opacity-70 transition-opacity self-start md:self-auto">
              Bekijk alle artikelen <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {/* Article 1 */}
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1969&auto=format&fit=crop" 
                  alt="Kantoor" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 uppercase tracking-wider font-medium">
                <span>Ondernemerschap</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>12 Okt 2025</span>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:underline decoration-1 underline-offset-4 leading-snug">
                Dag 1 Mentaliteit: Waarom het altijd de eerste dag is
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                In de technologie en het bedrijfsleven is stilstand achteruitgang. Ontdek waarom we elke dag benaderen alsof het de allereerste dag van onze startup is.
              </p>
            </motion.article>

            {/* Article 2 */}
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Ruimtevaart" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 uppercase tracking-wider font-medium">
                <span>Technologie</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>28 Aug 2025</span>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:underline decoration-1 underline-offset-4 leading-snug">
                De Ruimte in: De visie achter Blue Origin
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De aarde is eindig. Om onze planeet te redden, moeten we naar de sterren kijken. Mijn gedachten over de toekomst van de mensheid in de ruimte.
              </p>
            </motion.article>

            {/* Article 3 */}
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Logistiek" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 uppercase tracking-wider font-medium">
                <span>Leiderschap</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>05 Mei 2025</span>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:underline decoration-1 underline-offset-4 leading-snug">
                Klantobsessie vs. Concurrentieobsessie
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Veel bedrijven focussen zich op wat hun concurrenten doen. De ware sleutel tot langdurig succes ligt echter in een meedogenloze focus op de klant.
              </p>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  );
}
