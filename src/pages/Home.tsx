import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Search, 
  Menu, 
  ShoppingCart, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Headphones, 
  HardHat, 
  Hammer, 
  Zap, 
  Factory,
  User 
} from 'lucide-react';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-20 bg-slate-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/menu" className="p-2 -ml-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors md:hidden">
              <Menu className="w-6 h-6" />
            </Link>
            <Link to="/" className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">Industrial</span>
              <span className="text-xl md:text-2xl font-black leading-none tracking-tight text-slate-900">Safety Gear</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 ml-4">
              <Link to="/catalog" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors">Katalogs</Link>
              <Link to="/b2b" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors">B2B Risinājumi</Link>
              <Link to="/advice" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors">Padomi</Link>
              <Link to="/contact" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors">Kontakti</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Desktop Search */}
            <div className="hidden lg:flex relative group w-64 xl:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
              <input 
                className="w-full rounded-full border border-slate-200 bg-slate-100 py-2 pl-10 pr-4 text-xs font-medium text-slate-900 placeholder-slate-500 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 outline-none transition-all" 
                placeholder="Meklēt preces..." 
                type="text" 
              />
            </div>

            <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 bg-slate-100 rounded-full px-3 py-1">
              <button className="text-slate-900">LV</button>
              <span className="text-slate-300">/</span>
              <button className="hover:text-slate-900">EN</button>
            </div>
            
            <div className="flex items-center gap-2">
              <Link to="/profile" className="hidden md:flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors">
                <User className="w-6 h-6" />
              </Link>
              <Link to="/cart" className="relative p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white ring-2 ring-white">2</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Search Bar */}
        <div className="px-4 pb-3 max-w-7xl mx-auto lg:hidden">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
            <input 
              className="w-full rounded-xl border border-slate-200 bg-slate-100 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 placeholder-slate-500 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 outline-none transition-all" 
              placeholder="Meklēt preces (SKU, nosaukums)..." 
              type="text" 
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative mx-4 mt-4 overflow-hidden rounded-2xl bg-slate-900 shadow-2xl shadow-slate-900/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          
          {/* Animated Technical Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute left-[10%] top-0 h-full w-[1px] bg-white/20"></div>
            <div className="absolute right-[10%] top-0 h-full w-[1px] bg-white/20"></div>
            <div className="absolute top-[20%] w-full h-[1px] bg-white/20"></div>
            <div className="absolute bottom-[20%] w-full h-[1px] bg-white/20"></div>
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute right-[20%] top-[30%] h-3 w-3 border border-orange-500"
            />
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute left-[20%] bottom-[30%] h-3 w-3 bg-orange-500"
            />
          </div>

          <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-orange-600/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-orange-500/50">
                  Jaunums 2024
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-slate-300">
                  <ShieldCheck className="w-3 h-3 text-orange-500" />
                  EN 388:2016 Sertificēts
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-black leading-[0.95] tracking-tight text-white md:text-6xl">
                Premium Aizsardzība <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Jūsu Drošībai
                </span>
              </h1>
              <p className="mb-8 text-base text-slate-300 md:text-lg max-w-sm leading-relaxed">
                Profesionāli triecienizturīgi cimdi ar uzlabotu saķeri un elpošanu. Izstrādāti smagiem darba apstākļiem.
              </p>
              <div className="flex gap-3">
                <Link to="/product/1" className="group flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/30 active:scale-95">
                  <span>Skatīt Piedāvājumu</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/catalog" className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">
                  Katalogs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand Marquee */}
        <div className="mt-8 overflow-hidden py-4 bg-white border-y border-slate-100">
          <div className="flex gap-12 animate-marquee whitespace-nowrap px-4">
             {/* Repeat logos for seamless loop */}
             {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i, idx) => (
               <span key={idx} className="text-xl font-black text-slate-300 uppercase tracking-widest">
                 BRAND{i}
               </span>
             ))}
          </div>
        </div>

        {/* Bento Grid Categories */}
        <section className="mt-12 px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Kategorijas</h2>
              <p className="text-sm text-slate-500">Izvēlieties nepieciešamo aprīkojumu</p>
            </div>
            <Link to="/catalog" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1">
              Visas kategorijas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
            {/* Large Item */}
            <Link to="/catalog/gloves" className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Gloves" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-orange-400">Populārākais</span>
                <h3 className="text-2xl font-bold text-white">Darba Cimdi</h3>
                <p className="mt-1 text-sm text-slate-300">Vairāk nekā 120 modeļi dažādiem darbiem</p>
              </div>
            </Link>

            {/* Medium Item */}
            <Link to="/catalog/boots" className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" 
                alt="Boots" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold text-white">Apavi</h3>
                <p className="text-xs text-slate-300">S1P, S3 standarti</p>
              </div>
            </Link>

            {/* Small Item 1 */}
            <Link to="/catalog/helmets" className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                alt="Helmets" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold text-white">Ķiveres</h3>
              </div>
            </Link>

            {/* Small Item 2 */}
            <Link to="/catalog/clothing" className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1617135008569-52f205244f77?q=80&w=2070&auto=format&fit=crop" 
                alt="Clothing" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold text-white">Apģērbs</h3>
              </div>
            </Link>
          </div>
        </section>

        {/* B2B Banner */}
        <section className="mt-12 mx-4 rounded-2xl bg-slate-900 px-6 py-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-orange-600/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-3">
                <Factory className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Uzņēmumiem</span>
              </div>
              <h2 className="text-3xl font-black text-white mb-2">B2B Cenu Politika</h2>
              <p className="text-slate-400">Reģistrējiet uzņēmuma profilu un saņemiet individuālas cenas, pēcapmaksu un personīgo menedžeri.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-white">-15%</span>
                  <span className="text-[10px] text-slate-400 uppercase">no 10 gab.</span>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-white">-25%</span>
                  <span className="text-[10px] text-slate-400 uppercase">no 50 gab.</span>
                </div>
              </div>
              <Link to="/b2b" className="flex items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-colors">
                Kļūt par B2B klientu
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Horizontal Scroll */}
        <section className="mt-12 pb-4">
          <div className="px-4 mb-6 flex items-end justify-between max-w-7xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Populārākās Preces</h2>
              <p className="text-sm text-slate-500">Izvēlētas tieši Jūsu nozarei</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600">
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex snap-x scroll-pl-4 gap-4 overflow-x-auto px-4 pb-8 no-scrollbar max-w-7xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <Link key={item} to={`/product/${item}`} className="group relative flex w-[200px] flex-none snap-start flex-col gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100 hover:shadow-xl hover:ring-orange-500/20 transition-all duration-300">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
                  <img 
                    alt="Product" 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 mix-blend-multiply" 
                    src={`https://picsum.photos/seed/${item + 10}/400/400`} 
                  />
                  <div className="absolute top-2 right-2 rounded-full bg-white/90 p-1.5 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShoppingCart className="w-4 h-4 text-slate-900" />
                  </div>
                  {item === 1 && (
                    <div className="absolute left-2 top-2 rounded bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white">TOP</div>
                  )}
                </div>
                <div className="px-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">MaxiFlex</p>
                  <h3 className="truncate text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Ultimate 42-874 Cimdi</h3>
                  <div className="mt-2 flex items-baseline justify-between">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-slate-900">€4.20</span>
                      <span className="text-[10px] text-slate-400 line-through">€5.50</span>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      <span className="text-[10px] font-medium text-green-700">Noliktavā</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="mt-8 px-4 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Risinājumi nozarēm</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: HardHat, label: "Celtniecība", color: "bg-yellow-500" },
              { icon: Factory, label: "Ražošana", color: "bg-blue-500" },
              { icon: Zap, label: "Enerģētika", color: "bg-orange-500" },
              { icon: Hammer, label: "Montāža", color: "bg-slate-500" },
            ].map((industry, idx) => (
              <div key={idx} className="group cursor-pointer rounded-xl border border-slate-100 bg-white p-4 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all">
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${industry.color} text-white shadow-sm group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900">{industry.label}</h3>
                <p className="text-xs text-slate-500 mt-1">Skatīt 240+ preces</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blog / Advice Section */}
        <section className="mt-16 px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Ekspertu Padomi</h2>
              <p className="text-sm text-slate-500">Uzziniet vairāk par darba drošību</p>
            </div>
            <Link to="/advice" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1">
              Visi raksti <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/advice" className="group relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Blog 1" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-orange-400">Ekspertīze</span>
                <h3 className="text-xl font-bold text-white leading-tight">Kā izvēlēties pareizos aizsargcimdus?</h3>
              </div>
            </Link>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Drošības apavi būvniecībā: S1P vs S3', cat: 'Apavi', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop' },
                { title: 'Dzirdes aizsardzības ABC trokšņainā vidē', cat: 'Veselība', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop' },
              ].map((post, idx) => (
                <Link key={idx} to="/advice" className="flex gap-4 p-3 rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all group">
                  <div className="size-20 rounded-xl overflow-hidden shrink-0">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 mb-1">{post.cat}</span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">{post.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mt-16 px-4 pb-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "EN Standarti", desc: "Sertificēta produkcija" },
              { icon: Truck, title: "24h Piegāde", desc: "Visā Latvijā" },
              { icon: CheckCircle2, title: "Apjoma Atlaides", desc: "Izdevīgi uzņēmumiem" },
              { icon: Headphones, title: "Ekspertu Atbalsts", desc: "Darba dienās 9-17" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-3 rounded-xl bg-slate-50 p-6 text-center hover:bg-white hover:shadow-md transition-all">
                <item.icon className="w-8 h-8 text-orange-600 opacity-80" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-slate-900 px-4 py-12 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2">Saņemiet jaunumus</h2>
            <p className="text-slate-400 text-sm mb-6">Uzziniet par jaunām precēm un īpašajiem piedāvājumiem pirmais.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Jūsu e-pasts" 
                className="flex-1 rounded-xl border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all w-full"
              />
              <button className="w-full sm:w-auto rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20 active:scale-95 whitespace-nowrap">
                Pierakstīties
              </button>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
}
