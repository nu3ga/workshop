import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-3 border-b border-gray-100">
        <Link to="/profile" className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Iestatījumi
        </h1>
      </div>

      <div className="flex-1 p-4 space-y-6">
        {/* Account Section */}
        <section>
          <h2 className="text-xs font-bold uppercase text-slate-400 mb-2 px-1">Konts</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <Link to="/profile" className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">person</span>
                </div>
                <span className="text-sm font-medium text-slate-900">Personīgā informācija</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
            <Link to="/b2b" className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-lg">domain</span>
                </div>
                <span className="text-sm font-medium text-slate-900">Uzņēmuma dati</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined text-lg">lock</span>
                </div>
                <span className="text-sm font-medium text-slate-900">Mainīt paroli</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </button>
          </div>
        </section>

        {/* App Settings */}
        <section>
          <h2 className="text-xs font-bold uppercase text-slate-400 mb-2 px-1">Lietotne</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                  <span className="material-symbols-outlined text-lg">notifications</span>
                </div>
                <span className="text-sm font-medium text-slate-900">Paziņojumi</span>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 right-5" defaultChecked />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
              </div>
            </div>
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined text-lg">language</span>
                </div>
                <span className="text-sm font-medium text-slate-900">Valoda</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500">
                <span className="text-xs">Latviešu</span>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined text-lg">dark_mode</span>
                </div>
                <span className="text-sm font-medium text-slate-900">Tumšais režīms</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500">
                <span className="text-xs">Sistēmas</span>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            </button>
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-xs font-bold uppercase text-slate-400 mb-2 px-1">Atbalsts</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <Link to="/contact" className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined text-lg">help</span>
                </div>
                <span className="text-sm font-medium text-slate-900">Palīdzības centrs</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
            <Link to="/terms" className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined text-lg">description</span>
                </div>
                <span className="text-sm font-medium text-slate-900">Noteikumi un nosacījumi</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
          </div>
        </section>

        <Link to="/login" className="block w-full bg-white border border-red-100 text-red-600 font-bold py-3.5 rounded-xl text-center hover:bg-red-50 transition-colors mt-8">
          Izrakstīties
        </Link>
        
        <p className="text-center text-xs text-slate-400 pt-4 pb-8">
          Versija 1.0.2 (Build 2024)
        </p>
      </div>
    </div>
  );
}
