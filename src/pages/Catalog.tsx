import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  History, 
  ChevronRight, 
  ShoppingCart, 
  Ruler, 
  ShieldCheck,
  Hand,
  Stethoscope,
  Flame,
  TrendingUp,
  Check,
  ArrowUpDown,
  Filter
} from 'lucide-react';
import clsx from 'clsx';
import Footer from '../components/Footer';

export default function Catalog() {
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'popular' | 'price_asc' | 'price_desc' | 'name_asc'>('popular');
  const [priceRange, setPriceRange] = useState<{min: string, max: string}>({min: '', max: ''});
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleAddToCart = (id: number) => {
    setAddedToCart(id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const categories = [
    { name: 'Darba cimdi', desc: 'Vispārējie, montāžas, dārza', icon: Hand, color: 'text-orange-600', bg: 'bg-orange-50' },
    { name: 'Vienreizējie cimdi', desc: 'Nitrila, lateksa, vinila', icon: Stethoscope, color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Ziemas cimdi', desc: 'Siltināti, ūdensizturīgi', icon: ShieldCheck, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { name: 'Metināšanas cimdi', desc: 'Karstumizturīgi, ādas', icon: Flame, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  const allProducts = [
    { id: 1, name: 'MaxiFlex Ultimate 42-874', desc: 'montāžas cimdi', code: 'MX-42-874', price: 3.50, bulkPrice: 3.15, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', badge: 'Ir noliktavā', badgeColor: 'emerald', brand: 'MaxiFlex', category: 'Darba cimdi' },
    { id: 2, name: 'Tegera 9120', desc: 'ziemas cimdi', code: 'TG-9120', price: 14.50, image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop', brand: 'Tegera', category: 'Ziemas cimdi' },
    { id: 3, name: 'Semperguard', desc: 'vienreizējie nitrila cimdi (100gab)', code: 'SG-NITR-M', price: 8.90, bulkPrice: 7.50, image: 'https://images.unsplash.com/photo-1617135008569-52f205244f77?q=80&w=2070&auto=format&fit=crop', badge: 'Zems atlikums', badgeColor: 'orange', brand: 'Semperguard', category: 'Vienreizējie cimdi' },
    { id: 4, name: 'Honeywell Vertigo', desc: 'grieztizturīgi cimdi', code: 'HW-VERT-05', price: 5.40, image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2070&auto=format&fit=crop', brand: 'Honeywell', category: 'Darba cimdi' },
    { id: 5, name: 'Guide 580', desc: 'ūdensizturīgi cimdi', code: 'GD-580', price: 8.50, image: 'https://images.unsplash.com/photo-1605218427368-35b019b8db5c?q=80&w=2070&auto=format&fit=crop', brand: 'Guide', category: 'Darba cimdi' },
    { id: 6, name: '3M Comfort Grip', desc: 'universālie cimdi', code: '3M-COMF', price: 4.20, image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2070&auto=format&fit=crop', brand: '3M', category: 'Darba cimdi' },
  ];

  const filteredProducts = allProducts.filter(product => {
    // Price Filter
    if (priceRange.min && product.price < parseFloat(priceRange.min)) return false;
    if (priceRange.max && product.price > parseFloat(priceRange.max)) return false;
    
    // Brand Filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;

    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price_asc': return a.price - b.price;
      case 'price_desc': return b.price - a.price;
      case 'name_asc': return a.name.localeCompare(b.name);
      default: return 0; // popular (default order)
    }
  });

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-50 pb-24 font-sans">
      {/* Sticky Header with Search */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 pt-4 pb-2 border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-orange-600" />
            </div>
            <input 
              autoFocus 
              className="block w-full py-2.5 pl-10 pr-10 text-sm font-medium text-slate-900 border border-slate-200 rounded-xl bg-slate-50 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all outline-none placeholder-slate-400" 
              placeholder="Meklēt preces..." 
              type="text" 
              defaultValue="cimdi" 
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <Link to="/" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
            Atcelt
          </Link>
        </div>
        
        {/* Quick Suggestions & Filters */}
        <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1 items-center">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center justify-center size-9 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors shrink-0 shadow-sm"
          >
             <SlidersHorizontal className="w-4 h-4" />
          </button>
          <div className="h-6 w-px bg-slate-200 mx-1 shrink-0"></div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-bold whitespace-nowrap border border-orange-100 hover:bg-orange-100 transition-colors shadow-sm">
            <History className="w-3.5 h-3.5" />
            nitrila
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-600 rounded-full text-xs font-bold whitespace-nowrap border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
            grieztizturīgi
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-600 rounded-full text-xs font-bold whitespace-nowrap border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
            ziemas
          </button>
        </div>
      </header>

      {/* Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-80 bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Filtri</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Cena</h3>
                  <div className="flex items-center gap-3">
                    <input 
                      type="number" 
                      placeholder="No" 
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" 
                    />
                    <span className="text-slate-400">-</span>
                    <input 
                      type="number" 
                      placeholder="Līdz" 
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" 
                    />
                  </div>
                </div>
                {/* Brands */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Zīmols</h3>
                  <div className="space-y-2">
                    {['Guide', 'Tegera', 'MaxiFlex', '3M', 'Honeywell'].map(brand => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <div 
                          onClick={() => toggleBrand(brand)}
                          className={clsx(
                            "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                            selectedBrands.includes(brand) ? "bg-orange-600 border-orange-600" : "border-slate-300 group-hover:border-orange-500"
                          )}
                        >
                          {selectedBrands.includes(brand) && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <span className="text-sm text-slate-600 font-medium group-hover:text-slate-900">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50">
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20"
                >
                  Skatīt {filteredProducts.length} preces
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sorting Sheet */}
      <AnimatePresence>
        {isSortOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSortOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white z-[70] rounded-t-3xl shadow-2xl p-6 pb-safe"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">Kārtot pēc</h2>
                <button onClick={() => setIsSortOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
              <div className="space-y-2">
                {[
                  { id: 'popular', label: 'Populārākie' },
                  { id: 'price_asc', label: 'Cena: Zema -> Augsta' },
                  { id: 'price_desc', label: 'Cena: Augsta -> Zema' },
                  { id: 'name_asc', label: 'Nosaukums: A -> Z' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id as any);
                      setIsSortOpen(false);
                    }}
                    className={clsx(
                      "w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between",
                      sortBy === option.id ? "bg-orange-50 text-orange-700" : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    {option.label}
                    {sortBy === option.id && <Check className="w-4 h-4 text-orange-600" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8 sticky top-24 h-fit">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5 text-orange-600" />
                Filtri
              </h2>
              
              <div className="space-y-8">
                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4">Cena</h3>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      placeholder="No" 
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" 
                    />
                    <span className="text-slate-400">-</span>
                    <input 
                      type="number" 
                      placeholder="Līdz" 
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" 
                    />
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4">Zīmols</h3>
                  <div className="space-y-3">
                    {['Guide', 'Tegera', 'MaxiFlex', '3M', 'Honeywell'].map(brand => (
                      <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                        <div 
                          onClick={() => toggleBrand(brand)}
                          className={clsx(
                            "w-5 h-5 rounded-md border flex items-center justify-center transition-all",
                            selectedBrands.includes(brand) ? "bg-orange-600 border-orange-600 shadow-sm" : "border-slate-300 group-hover:border-orange-500"
                          )}
                        >
                          {selectedBrands.includes(brand) && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <span className={clsx(
                          "text-sm font-medium transition-colors",
                          selectedBrands.includes(brand) ? "text-slate-900" : "text-slate-500 group-hover:text-slate-900"
                        )}>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setPriceRange({min: '', max: ''});
                    setSelectedBrands([]);
                  }}
                  className="w-full py-2 text-xs font-bold text-slate-400 hover:text-orange-600 transition-colors border-t border-slate-50 pt-4"
                >
                  Notīrīt visus filtrus
                </button>
              </div>
            </div>

            {/* Promo Card */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
              <div className="absolute -right-4 -bottom-4 size-24 bg-orange-600/20 rounded-full blur-2xl"></div>
              <h4 className="text-lg font-black mb-2 relative z-10">B2B Atlaides</h4>
              <p className="text-xs text-slate-400 mb-4 relative z-10">Reģistrē uzņēmumu un saņem līdz -25% atlaidi visām precēm.</p>
              <Link to="/b2b" className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors relative z-10">
                Uzzināt vairāk <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1 space-y-8">
            {/* Section: Categories Matches (Horizontal on Desktop) */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Kategorijas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat, idx) => (
                  <Link key={idx} to="/catalog" className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                    <div className={clsx("flex size-12 items-center justify-center rounded-2xl transition-all shadow-sm mb-3", cat.bg, cat.color, "group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110")}>
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{cat.name}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">{cat.desc.split(',')[0]}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section: All Products (Filtered) */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-500" /> 
                  Visi Produkti 
                  <span className="text-sm font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full ml-2">
                    {filteredProducts.length}
                  </span>
                </h2>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-400">
                    Kārtot:
                    <button 
                      onClick={() => setIsSortOpen(true)}
                      className="flex items-center gap-2 text-slate-900 bg-white border border-slate-200 px-4 py-2 rounded-xl hover:border-orange-500 transition-all shadow-sm"
                    >
                      {sortBy === 'popular' ? 'Populārākie' : sortBy === 'price_asc' ? 'Cena: Zema -> Augsta' : sortBy === 'price_desc' ? 'Cena: Augsta -> Zema' : 'Nosaukums: A -> Z'}
                      <ArrowUpDown className="w-4 h-4 text-orange-600" />
                    </button>
                  </div>
                  <button 
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-slate-900/20"
                  >
                    <Filter className="w-4 h-4" />
                    Filtri
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="flex flex-col bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all cursor-pointer group relative overflow-hidden">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 border-b border-slate-50">
                      <img className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" alt={product.name} src={product.image} />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.badge && (
                          <div className={clsx(
                            "rounded-lg backdrop-blur-md px-2.5 py-1 text-[10px] font-black uppercase tracking-wider shadow-sm border",
                            product.badgeColor === 'emerald' ? "bg-emerald-100/90 text-emerald-700 border-emerald-200" : "bg-orange-100/90 text-orange-700 border-orange-200"
                          )}>
                            {product.badge}
                          </div>
                        )}
                        <div className="bg-white/90 backdrop-blur-sm text-slate-400 px-2 py-1 rounded-lg text-[10px] font-bold border border-slate-100 shadow-sm">
                          {product.brand}
                        </div>
                      </div>

                      {/* Quick Add Button */}
                      <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product.id);
                        }}
                        className={clsx(
                          "absolute bottom-4 right-4 size-12 flex items-center justify-center rounded-2xl transition-all shadow-xl",
                          addedToCart === product.id ? "bg-emerald-500 text-white" : "bg-white text-slate-900 hover:bg-orange-600 hover:text-white"
                        )}
                      >
                        <AnimatePresence mode='wait'>
                          {addedToCart === product.id ? (
                            <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                              <Check className="w-6 h-6" />
                            </motion.div>
                          ) : (
                            <motion.div key="cart" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                              <ShoppingCart className="w-6 h-6" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-orange-600 transition-colors mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-1">{product.desc}</p>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-slate-50 flex items-end justify-between">
                        <div className="flex flex-col">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-slate-900 tracking-tight">{product.price.toFixed(2)} €</span>
                            <span className="text-xs font-bold text-slate-400">/ pāris</span>
                          </div>
                          {product.bulkPrice && (
                            <span className="text-[10px] font-black text-orange-600 bg-orange-50 px-2 py-1 rounded-lg mt-1 border border-orange-100 uppercase tracking-wider">
                              12+ gb: {product.bulkPrice.toFixed(2)} €
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                          {product.code}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200">
                  <div className="size-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Nekas netika atrasts</h3>
                  <p className="text-slate-500 max-w-xs mx-auto mb-6">Mēģiniet mainīt filtrus vai meklēšanas nosacījumus.</p>
                  <button 
                    onClick={() => {
                      setPriceRange({min: '', max: ''});
                      setSelectedBrands([]);
                    }}
                    className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-500 transition-all shadow-lg shadow-orange-600/20"
                  >
                    Notīrīt visus filtrus
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}