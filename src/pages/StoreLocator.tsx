import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

// Mock Data
const stores = [
  {
    id: 1,
    name: 'Rīga Central',
    address: 'Brīvības iela 123, LV-1001',
    phone: '+371 20 123 456',
    email: 'riga@safetygear.lv',
    hours: 'Mon-Fri: 9:00 - 18:00, Sat: 10:00 - 15:00',
    image: 'https://picsum.photos/seed/store1/600/400',
    coordinates: { lat: 56.9496, lng: 24.1052 }
  },
  {
    id: 2,
    name: 'Liepāja Branch',
    address: 'Lielā iela 45, LV-3401',
    phone: '+371 20 654 321',
    email: 'liepaja@safetygear.lv',
    hours: 'Mon-Fri: 10:00 - 19:00, Sat: Closed',
    image: 'https://picsum.photos/seed/store2/600/400',
    coordinates: { lat: 56.5047, lng: 21.0108 }
  },
  {
    id: 3,
    name: 'Daugavpils Outlet',
    address: 'Rīgas iela 22, LV-5401',
    phone: '+371 20 987 654',
    email: 'daugavpils@safetygear.lv',
    hours: 'Mon-Fri: 9:00 - 17:00, Sat: 10:00 - 14:00',
    image: 'https://picsum.photos/seed/store3/600/400',
    coordinates: { lat: 55.8747, lng: 26.5362 }
  }
];

export default function StoreLocator() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Find a Store Near You
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Visit one of our locations to try on gear, get expert advice, and pick up your orders.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="relative w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden mb-12 shadow-inner border border-slate-300">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Interactive Map Loading...</p>
            </div>
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/10 pointer-events-none"></div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <motion.div 
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Open Now
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {store.name}
                </h3>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-snug">{store.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-sm font-medium">{store.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-sm font-medium">{store.hours}</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </button>
                  <button className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
