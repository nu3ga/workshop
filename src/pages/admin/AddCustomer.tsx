import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Save, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Building 
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

export default function AddCustomer() {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="max-w-[1000px] mx-auto pb-20">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/admin/customers" className="p-2 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Add Customer</h1>
          </div>
          <button 
            onClick={() => navigate('/admin/customers')}
            className="px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Customer
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Basic Details */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-slate-400" />
                Basic Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold text-slate-900 placeholder-slate-400"
                    placeholder="e.g. John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold text-slate-900 placeholder-slate-400"
                    placeholder="e.g. Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="email" 
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="tel" 
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500 transition-all" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Customer accepts marketing</span>
                </label>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-slate-400" />
                Primary Address
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Address</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
                    placeholder="123 Main St, Apt 4B"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">City</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
                      placeholder="New York"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Country</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 appearance-none">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Postal Code</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar: Notes & Tags */}
          <div className="space-y-6">
            
            {/* Notes */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-6">
              <h3 className="text-sm font-extrabold text-slate-900 mb-4 uppercase tracking-widest">Notes</h3>
              <textarea 
                className="w-full p-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400 resize-none h-32"
                placeholder="Add internal notes about this customer..."
              ></textarea>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-6">
              <h3 className="text-sm font-extrabold text-slate-900 mb-4 uppercase tracking-widest">Tags</h3>
              <input 
                type="text" 
                className="w-full px-4 py-3 mb-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
                placeholder="Add tags..."
              />
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                  VIP <button className="ml-2 hover:text-rose-500">×</button>
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                  Wholesale <button className="ml-2 hover:text-rose-500">×</button>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
