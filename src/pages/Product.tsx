import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Star, 
  CheckCircle2, 
  Info, 
  Minus, 
  Plus, 
  ChevronDown, 
  Share2, 
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  Loader2,
  Package,
  FileText,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import clsx from 'clsx';
import Footer from '../components/Footer';

export default function Product() {
  const [quantity, setQuantity] = useState(50);
  const [activeImage, setActiveImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (isAdding || isAdded) return;
    setIsAdding(true);
    // Simulate network request
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2500);
    }, 800);
  };

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617135008569-52f205244f77?q=80&w=2070&auto=format&fit=crop"
  ];

  const tiers = [
    { count: 1, price: 10.00, label: "1 pāris" },
    { count: 12, price: 8.00, label: "12+ pāri" },
    { count: 48, price: 3.00, label: "48+ pāri", active: true },
    { count: 120, price: 2.00, label: "120+ pāri", bestValue: true },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-50 pb-32 font-sans overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"
        />
      </div>

      {/* Smart Sticky Header */}
      <motion.div 
        className={clsx(
          "sticky top-0 z-50 flex items-center justify-between px-4 py-3 transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200" : "bg-transparent"
        )}
      >
        <Link to="/" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-sm hover:bg-white transition-colors backdrop-blur-sm">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 10 }}
          className="flex-1 text-center px-4"
        >
          <h1 className="text-sm font-bold text-slate-900 truncate">Premium Nitrile Cimdi</h1>
          <p className="text-[10px] text-slate-500">3.00 € / gab</p>
        </motion.div>

        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-sm hover:bg-white transition-colors backdrop-blur-sm">
            <Share2 className="w-5 h-5" />
          </button>
          <Link to="/cart" className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-sm hover:bg-white transition-colors backdrop-blur-sm">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white ring-2 ring-white">2</span>
          </Link>
        </div>
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:pt-8">
          {/* Image Gallery */}
          <div className="relative aspect-square w-full overflow-hidden bg-white md:rounded-2xl md:shadow-sm md:mt-4 lg:mt-0 lg:sticky lg:top-24">
            <motion.img 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={images[activeImage]} 
              alt="Product" 
              className="h-full w-full object-cover"
            />
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={clsx(
                    "h-1.5 rounded-full transition-all shadow-sm backdrop-blur-sm",
                    idx === activeImage ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                  )}
                />
              ))}
            </div>

            {/* Badges */}
            <div className="absolute left-4 top-4 flex flex-col gap-2">
              <span className="inline-flex items-center rounded-lg bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-900 shadow-sm backdrop-blur-sm">
                <ShieldCheck className="mr-1.5 w-3.5 h-3.5 text-orange-500" />
                EN388
              </span>
              <span className="inline-flex items-center rounded-lg bg-orange-600 px-2.5 py-1 text-xs font-bold text-white shadow-sm shadow-orange-600/20">
                -40%
              </span>
            </div>

            <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-sm backdrop-blur-sm hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Product Info */}
          <div className="pt-8 pb-6 lg:pt-0">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-4">
                Premium Nitrile Grieztizturīgi Cimdi
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex text-orange-400">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className={clsx("w-4 h-4 fill-current", i > 4 && "text-slate-200")} />
                    ))}
                  </div>
                  <span className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 ml-1">24 atsauksmes</span>
                </div>
                <div className="h-4 w-px bg-slate-200"></div>
                <div className="flex items-center text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  Noliktavā
                </div>
              </div>
            </div>

            {/* Tiered Pricing Widget */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-orange-100 text-orange-600">
                    <Info className="w-4 h-4" />
                  </span>
                  Daudzuma atlaides
                </h3>
                <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  Cena par pāri
                </span>
              </div>
              
              <div className="flex gap-3 overflow-x-auto py-4 -mx-6 px-6 snap-x scrollbar-hide">
                {tiers.map((tier, idx) => (
                  <div 
                    key={idx}
                    className={clsx(
                      "snap-start shrink-0 w-32 p-4 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer relative",
                      tier.active 
                        ? "bg-orange-50 border-orange-500 shadow-md shadow-orange-500/10" 
                        : tier.bestValue
                          ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                          : "bg-white border-slate-200 hover:border-orange-200"
                    )}
                  >
                    {tier.active && (
                      <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-white">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    )}
                    {tier.bestValue && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                        Best Value
                      </div>
                    )}
                    <span className={clsx("text-xs font-medium", tier.bestValue ? "text-slate-300" : "text-slate-500")}>
                      {tier.label}
                    </span>
                    <span className={clsx("text-xl font-black", tier.bestValue ? "text-white" : "text-slate-900")}>
                      {tier.price.toFixed(2)} €
                    </span>
                  </div>
                ))}
              </div>

              {/* Calculator */}
              <div className="mt-6 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 h-14 w-40 px-1 relative focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:border-orange-500 transition-all">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-white rounded-lg transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <input 
                      className="flex-1 w-full text-center border-none bg-transparent p-0 text-slate-900 font-bold text-lg focus:ring-0 outline-none" 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-12 w-12 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-white rounded-lg transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex-1 text-right">
                    <span className="text-xs text-slate-500 font-medium block">Kopējā summa</span>
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="text-3xl font-black text-slate-900 tracking-tight">150.00 €</span>
                      <span className="text-xs text-slate-400 font-medium">bez PVN</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900 leading-relaxed">
                    Jūsu cena ir <span className="font-bold">3.00 €/gab</span>. Ietaupiet vēl <span className="font-bold">1.00 €/gab</span>, pērkot vismaz 120 vienības.
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Action Bar Replacement */}
            <div className="hidden lg:flex flex-col gap-4 mb-12">
              <motion.button 
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={isAdding || isAdded}
                className={clsx(
                  "w-full font-bold rounded-2xl h-16 flex items-center justify-center gap-3 shadow-xl transition-all overflow-hidden relative text-lg",
                  isAdded ? "bg-emerald-500 text-white shadow-emerald-500/30" : "bg-orange-600 hover:bg-orange-500 text-white shadow-orange-600/30"
                )}
              >
                <AnimatePresence mode='wait'>
                  {isAdding ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Pievieno...</span>
                    </motion.div>
                  ) : isAdded ? (
                    <motion.div
                      key="added"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          d="M5 13L9 17L19 7" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Pievienots Grozam!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <ShoppingCart className="w-6 h-6" />
                      <span>Pievienot Grozam • {(quantity * 3).toFixed(2)} €</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              <Link to="/b2b" className="text-sm text-center font-bold text-slate-500 hover:text-orange-600 transition-colors">
                Nepieciešams vairāk par 120? <span className="underline decoration-slate-300 underline-offset-4">Pieprasīt vairumtirdzniecības cenu</span>
              </Link>
            </div>

            {/* Premium Product Details Sections */}
            <div className="space-y-8">
              {/* Description Card */}
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-orange-500" />
                  Apraksts
                </h2>
                <div className="text-base text-slate-600 leading-relaxed space-y-6">
                  <p>
                    Augstas kvalitātes <span className="font-bold text-slate-900">nitrila cimdi</span> ar izcilu izturību pret griezumiem un skrāpējumiem. Ideāli piemēroti celtniecības, montāžas un noliktavas darbiem.
                  </p>
                  <ul className="space-y-4 mt-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span><span className="font-bold text-slate-900">EN388 Sertificēts:</span> Augsta aizsardzība pret mehāniskiem riskiem (4131X).</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span><span className="font-bold text-slate-900">Elpojošs materiāls:</span> Nodrošina komfortu visas dienas garumā, samazinot svīšanu.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span><span className="font-bold text-slate-900">Izcila saķere:</span> Speciāls pārklājums drošam satvērienam pat eļļainos apstākļos.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Specs Card */}
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Info className="w-6 h-6 text-blue-500" />
                  Specifikācija
                </h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base">
                  <div className="pb-4 border-b border-slate-50">
                    <span className="block text-xs text-slate-500 mb-1 uppercase font-bold tracking-wider">Materiāls</span>
                    <span className="font-bold text-slate-900">Nitrils, Neilons</span>
                  </div>
                  <div className="pb-4 border-b border-slate-50">
                    <span className="block text-xs text-slate-500 mb-1 uppercase font-bold tracking-wider">Izmēri</span>
                    <span className="font-bold text-slate-900">7 (S) - 11 (XXL)</span>
                  </div>
                  <div className="pb-4 border-b border-slate-50">
                    <span className="block text-xs text-slate-500 mb-1 uppercase font-bold tracking-wider">Krāsa</span>
                    <span className="font-bold text-slate-900">Melna/Pelēka</span>
                  </div>
                  <div className="pb-4 border-b border-slate-50">
                    <span className="block text-xs text-slate-500 mb-1 uppercase font-bold tracking-wider">Standarti</span>
                    <span className="font-bold text-slate-900">EN 388:2016</span>
                  </div>
                </div>
              </section>

              {/* Shipping & Returns Card */}
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Package className="w-6 h-6 text-purple-500" />
                  Piegāde un Atgriešana
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:bg-white hover:shadow-lg hover:border-orange-100 transition-all group">
                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                      <Truck className="w-6 h-6 text-slate-400 group-hover:text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Omniva / DPD</h4>
                      <p className="text-sm text-slate-500 mt-1">1-2 darba dienas • 2.99 €</p>
                      <p className="text-xs text-emerald-600 font-bold mt-2 bg-emerald-50 inline-block px-2 py-0.5 rounded">Bezmaksas virs 50 €</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:bg-white hover:shadow-lg hover:border-orange-100 transition-all group">
                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                      <RotateCcw className="w-6 h-6 text-slate-400 group-hover:text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">30 Dienu Atgriešana</h4>
                      <p className="text-sm text-slate-500 mt-1">Bez jautājumiem. Naudas atgriešana 24h laikā.</p>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Ask Question Button */}
              <button className="w-full group bg-white border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 rounded-2xl p-6 flex items-center justify-between transition-all">
                <div className="flex items-center gap-6">
                  <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-orange-50 transition-colors">
                    <HelpCircle className="w-8 h-8 text-slate-400 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Jautāt par preci</h4>
                    <p className="text-sm text-slate-500">Atbildēsim 15 minūšu laikā</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-orange-400 transition-colors" />
              </button>
            </div>

            {/* Reviews Preview */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Atsauksmes</h3>
                <button className="text-orange-600 text-base font-bold hover:underline">Rakstīt atsauksmi</button>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center text-base font-bold text-slate-600">JB</div>
                      <div>
                        <span className="block text-base font-bold text-slate-900">Jānis Bērziņš</span>
                        <span className="text-xs text-slate-400">Pirms 2 dienām</span>
                      </div>
                    </div>
                    <div className="flex text-orange-400">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Lieliski cimdi, ļoti izturīgi. Izmantojam noliktavā jau otro mēnesi, nekādu sūdzību. Noteikti pasūtīsim vēl.
                  </p>
                </div>
              </div>
              <button className="w-full mt-6 py-4 text-base font-bold text-slate-500 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                Skatīt visas 24 atsauksmes
              </button>
            </div>

            {/* Related Products */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Līdzīgas preces</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { name: 'Tegera 9120', price: '14.50 €', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop' },
                  { name: 'Guide 580', price: '8.50 €', img: 'https://images.unsplash.com/photo-1605218427368-35b019b8db5c?q=80&w=2070&auto=format&fit=crop' },
                  { name: 'MaxiCut Ultra', price: '6.20 €', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2070&auto=format&fit=crop' }
                ].map((item, i) => (
                  <Link key={i} to="/product/2" className="group">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-slate-100 mb-3 relative">
                      <img src={item.img} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 truncate group-hover:text-orange-600 transition-colors">{item.name}</h4>
                    <p className="text-lg font-black text-slate-900">{item.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Sticky Bottom Action Bar - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)] pb-safe lg:hidden">
        <div className="max-w-3xl mx-auto p-4 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="hidden md:flex flex-col justify-center">
              <span className="text-xs text-slate-500">Kopā (bez PVN)</span>
              <span className="text-xl font-black text-slate-900">150.00 €</span>
            </div>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              disabled={isAdding || isAdded}
              className={clsx(
                "flex-1 font-bold rounded-xl h-14 flex items-center justify-center gap-2 shadow-lg transition-all overflow-hidden relative",
                isAdded ? "bg-emerald-500 text-white shadow-emerald-500/30" : "bg-orange-600 hover:bg-orange-500 text-white shadow-orange-600/30"
              )}
            >
              <AnimatePresence mode='wait'>
                {isAdding ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Pievieno...</span>
                  </motion.div>
                ) : isAdded ? (
                  <motion.div
                    key="added"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        d="M5 13L9 17L19 7" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Pievienots!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="add"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span className="md:hidden">Pievienot • {(quantity * 3).toFixed(2)} €</span>
                    <span className="hidden md:inline">Pievienot Grozam</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          <Link to="/b2b" className="text-xs text-center font-medium text-slate-500 hover:text-orange-600 transition-colors">
            Nepieciešams vairāk par 120? <span className="underline decoration-slate-300 underline-offset-2">Pieprasīt vairumtirdzniecības cenu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}