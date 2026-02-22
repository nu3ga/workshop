import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

export default function Filters() {
  const [priceRange, setPriceRange] = useState(50);
  
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-3 border-b border-gray-100">
        <Link to="/catalog" className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined">close</span>
        </Link>
        <h1 className="text-slate-900 text-lg font-bold">Filtri</h1>
        <button className="text-primary text-sm font-medium hover:underline">
          Notīrīt
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-8 pb-24">
        {/* Categories */}
        <section>
          <h3 className="text-sm font-bold text-slate-900 mb-3">Kategorija</h3>
          <div className="flex flex-wrap gap-2">
            {['Visi', 'Darba cimdi', 'Vienreizējie', 'Ziemas', 'Metināšanas', 'Dārza'].map((cat, i) => (
              <button 
                key={cat}
                className={clsx(
                  "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                  i === 1 ? "bg-primary/10 border-primary text-primary" : "bg-white border-gray-200 text-slate-600 hover:border-gray-300"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Price Range */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-slate-900">Cena</h3>
            <span className="text-sm font-bold text-primary">0 € - {priceRange} €</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="200" 
            value={priceRange} 
            onChange={(e) => setPriceRange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>0 €</span>
            <span>200 €+</span>
          </div>
        </section>

        {/* Size */}
        <section>
          <h3 className="text-sm font-bold text-slate-900 mb-3">Izmērs</h3>
          <div className="grid grid-cols-5 gap-2">
            {['6/XS', '7/S', '8/M', '9/L', '10/XL', '11/XXL'].map((size, i) => (
              <button 
                key={size}
                className={clsx(
                  "h-10 rounded-lg text-sm font-medium border flex items-center justify-center transition-colors",
                  i === 3 ? "bg-primary text-white border-primary" : "bg-white border-gray-200 text-slate-600 hover:border-gray-300"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </section>

        {/* Standards */}
        <section>
          <h3 className="text-sm font-bold text-slate-900 mb-3">Standarti</h3>
          <div className="space-y-3">
            {[
              { id: 'en388', label: 'EN 388 (Mehāniskā izturība)' },
              { id: 'en374', label: 'EN 374 (Ķīmiskā izturība)' },
              { id: 'en407', label: 'EN 407 (Karstumizturība)' },
              { id: 'en511', label: 'EN 511 (Aukstumizturība)' }
            ].map((std) => (
              <label key={std.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:border-primary checked:bg-primary transition-all" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 material-symbols-outlined text-[16px]">check</span>
                </div>
                <span className="text-sm text-slate-600 group-hover:text-slate-900">{std.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Brands */}
        <section>
          <h3 className="text-sm font-bold text-slate-900 mb-3">Zīmols</h3>
          <div className="space-y-3">
            {['Tegera', 'Guide', 'MaxiFlex', 'Honeywell', '3M', 'Portwest'].map((brand) => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:border-primary checked:bg-primary transition-all" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 material-symbols-outlined text-[16px]">check</span>
                </div>
                <span className="text-sm text-slate-600 group-hover:text-slate-900">{brand}</span>
              </label>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 max-w-md mx-auto z-40">
        <Link 
          to="/catalog" 
          className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          Rādīt 42 preces
        </Link>
      </div>
    </div>
  );
}
