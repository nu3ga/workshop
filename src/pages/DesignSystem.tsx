import { Link } from 'react-router-dom';

export default function DesignSystem() {
  return (
    <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative overflow-hidden flex flex-col mx-auto">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-charcoal transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <h1 className="text-lg font-bold text-charcoal tracking-tight">Design System v1.0</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 text-charcoal transition-colors">
          <span className="material-symbols-outlined text-[24px]">more_horiz</span>
        </button>
      </header>

      {/* Content Scroll Area */}
      <main className="flex-1 overflow-y-auto pb-8">
        {/* Section: Colors */}
        <section className="px-5 pt-6 pb-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-[20px]">palette</span>
            <h2 className="text-sm font-bold uppercase tracking-wider text-charcoal/60">Color Tokens</h2>
          </div>
          <div className="space-y-3">
            {/* Primary Color */}
            <div className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="w-16 h-16 rounded-lg bg-primary shadow-sm ring-1 ring-black/5"></div>
              <div className="flex flex-col">
                <span className="font-bold text-charcoal">Safety Orange</span>
                <span className="text-xs font-mono text-charcoal/60 mt-1">#FF6B00</span>
                <span className="text-xs text-charcoal/40">Primary Action, Highlights</span>
              </div>
            </div>
            {/* Secondary Color */}
            <div className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="w-16 h-16 rounded-lg bg-charcoal shadow-sm ring-1 ring-black/5"></div>
              <div className="flex flex-col">
                <span className="font-bold text-charcoal">Industrial Charcoal</span>
                <span className="text-xs font-mono text-charcoal/60 mt-1">#212121</span>
                <span className="text-xs text-charcoal/40">Text, Secondary Buttons</span>
              </div>
            </div>
            {/* Base Color */}
            <div className="flex items-center gap-4 p-3 bg-charcoal border border-charcoal rounded-xl shadow-sm">
              <div className="w-16 h-16 rounded-lg bg-white shadow-sm border border-gray-200"></div>
              <div className="flex flex-col">
                <span className="font-bold text-white">Snow White</span>
                <span className="text-xs font-mono text-white/60 mt-1">#FFFFFF</span>
                <span className="text-xs text-white/40">Backgrounds, Cards</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-t border-gray-200 my-6 mx-5" />

        {/* Section: Typography */}
        <section className="px-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-[20px]">text_fields</span>
            <h2 className="text-sm font-bold uppercase tracking-wider text-charcoal/60">Typography</h2>
          </div>
          <div className="space-y-6 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-charcoal">H1 Headline</h1>
              <p className="text-xs text-charcoal/50 mt-1 font-mono">30px / Bold / Tight</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-tight text-charcoal">H2 Headline</h2>
              <p className="text-xs text-charcoal/50 mt-1 font-mono">24px / Bold / Tight</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-snug text-charcoal">H3 Subheadline</h3>
              <p className="text-xs text-charcoal/50 mt-1 font-mono">20px / Semibold / Snug</p>
            </div>
            <div>
              <p className="text-base text-charcoal leading-relaxed">Body Text Regular. Used for product descriptions and general content blocks. Designed for high readability on small screens.</p>
              <p className="text-xs text-charcoal/50 mt-1 font-mono">16px / Regular / Relaxed</p>
            </div>
            <div>
              <p className="text-xs font-medium text-charcoal/70 uppercase tracking-wide">Caption / Label</p>
              <p className="text-xs text-charcoal/50 mt-1 font-mono">12px / Medium / Wide</p>
            </div>
          </div>
        </section>
        <hr className="border-t border-gray-200 my-6 mx-5" />

        {/* Section: Buttons */}
        <section className="px-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-[20px]">touch_app</span>
            <h2 className="text-sm font-bold uppercase tracking-wider text-charcoal/60">Buttons</h2>
          </div>
          <div className="flex flex-col gap-4">
            {/* Primary */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-charcoal/50 ml-1">Primary (Default & Hover)</span>
              <button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 px-6 rounded-lg shadow-sm transition-all active:scale-[0.98] flex justify-center items-center">
                Pievienot Grozam
              </button>
            </div>
            {/* Secondary */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-charcoal/50 ml-1">Secondary (Outline)</span>
              <button className="w-full bg-transparent border-2 border-charcoal text-charcoal font-semibold py-3 px-6 rounded-lg hover:bg-charcoal/5 transition-all active:scale-[0.98] flex justify-center items-center">
                Skatīt Detaļas
              </button>
            </div>
            {/* Ghost */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-charcoal/50 ml-1">Ghost (Text Link)</span>
              <button className="w-full bg-transparent text-charcoal hover:text-primary font-medium py-2 px-6 rounded-lg transition-colors flex justify-center items-center">
                Atcelt darbību
              </button>
            </div>
            {/* Loading State */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-charcoal/50 ml-1">State: Loading</span>
              <button className="w-full bg-primary/80 text-white font-semibold py-3.5 px-6 rounded-lg cursor-wait flex justify-center items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                </svg>
                Apstrādā...
              </button>
            </div>
            {/* Disabled State */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-charcoal/50 ml-1">State: Disabled</span>
              <button className="w-full bg-gray-200 text-gray-400 font-semibold py-3.5 px-6 rounded-lg cursor-not-allowed flex justify-center items-center" disabled>
                Nav pieejams
              </button>
            </div>
          </div>
        </section>
        <hr className="border-t border-gray-200 my-6 mx-5" />

        {/* Section: Forms */}
        <section className="px-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-[20px]">input</span>
            <h2 className="text-sm font-bold uppercase tracking-wider text-charcoal/60">Input Fields</h2>
          </div>
          <div className="space-y-5">
            {/* Default Input */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">E-pasta adrese</label>
              <div className="relative">
                <input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="vards.uzvards@piemers.lv" type="email" />
              </div>
            </div>
            {/* Active/Focused Input */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Uzņēmums (Aktīvs)</label>
              <div className="relative">
                <input className="w-full bg-white border border-primary rounded-lg px-4 py-3 text-charcoal focus:outline-none ring-4 ring-primary/10" type="text" defaultValue="SIA Drošība" />
                <span className="material-symbols-outlined absolute right-3 top-3.5 text-primary text-[20px]">edit</span>
              </div>
            </div>
            {/* Error Input */}
            <div>
              <label className="block text-sm font-medium text-red-600 mb-1.5">Parole</label>
              <div className="relative">
                <input className="w-full bg-red-50 border border-red-500 rounded-lg px-4 py-3 text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500/20" type="password" defaultValue="12345" />
                <span className="material-symbols-outlined absolute right-3 top-3.5 text-red-500 text-[20px]">error</span>
              </div>
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Parolei jābūt vismaz 8 simbolus garai
              </p>
            </div>
            {/* Success Input */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1.5">Tālrunis</label>
              <div className="relative">
                <input className="w-full bg-green-50 border border-green-600 rounded-lg px-4 py-3 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600/20" type="tel" defaultValue="+371 29292929" />
                <span className="material-symbols-outlined absolute right-3 top-3.5 text-green-600 text-[20px]">check_circle</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-t border-gray-200 my-6 mx-5" />

        {/* Section: Components */}
        <section className="px-5 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-[20px]">widgets</span>
            <h2 className="text-sm font-bold uppercase tracking-wider text-charcoal/60">Tier Chip Component</h2>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            {/* Explanation */}
            <p className="text-sm text-charcoal/70">Used to categorize product safety ratings or user membership levels.</p>
            {/* Chip Variants */}
            <div className="flex flex-wrap gap-3 items-center">
              {/* Premium */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal text-white text-xs font-bold uppercase tracking-wide rounded-full border border-charcoal shadow-sm">
                <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                Premium
              </div>
              {/* Professional */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary-hover text-xs font-bold uppercase tracking-wide rounded-full border border-primary/20">
                <span className="material-symbols-outlined text-[14px]">engineering</span>
                Pro
              </div>
              {/* Standard */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-charcoal/70 text-xs font-bold uppercase tracking-wide rounded-full border border-gray-200">
                Standarts
              </div>
            </div>
            {/* Usage Example */}
            <div className="pt-4 border-t border-dashed border-gray-200">
              <span className="text-xs text-charcoal/40 block mb-3">Context Usage Example</span>
              <div className="flex items-start gap-4">
                {/* Product Thumb */}
                <div className="w-20 h-24 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 border border-gray-200 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></div>
                  <span className="material-symbols-outlined text-charcoal/20 text-[32px]">chef_hat</span>
                </div>
                {/* Product Info */}
                <div className="flex-1 min-w-0 py-1">
                  <div className="flex justify-between items-start mb-1">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-charcoal text-white text-[10px] font-bold uppercase tracking-wide rounded-full">
                      <span className="material-symbols-outlined text-[10px] text-primary">verified</span>
                      Premium
                    </div>
                    <span className="text-primary font-bold text-sm">€45.00</span>
                  </div>
                  <h4 className="font-bold text-charcoal text-sm leading-tight mb-1 truncate">3M SecureFit Ķivere</h4>
                  <p className="text-xs text-charcoal/60 truncate">Aizsardzība pret triecieniem, EN397</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Bottom Safe Area */}
      <div className="h-6 w-full bg-white"></div>
    </div>
  );
}
