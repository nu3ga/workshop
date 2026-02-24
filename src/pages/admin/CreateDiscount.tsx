import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Save, 
  Tag, 
  Percent, 
  DollarSign, 
  Calendar, 
  Users, 
  Package,
  Globe
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

export default function CreateDiscount() {
  const navigate = useNavigate();
  const [discountType, setDiscountType] = useState('percentage');

  return (
    <AdminLayout>
      <div className="max-w-[1000px] mx-auto pb-20">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/admin/discounts" className="p-2 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create Discount</h1>
          </div>
          <button 
            onClick={() => navigate('/admin/discounts')}
            className="px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Discount
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Discount Code & Type */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Discount Code</label>
                  <div className="relative">
                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-black text-lg text-slate-900 placeholder-slate-400 uppercase tracking-wide"
                      placeholder="e.g. SUMMER2024"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-orange-600 hover:text-orange-700">Generate</button>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Customers will enter this code at checkout.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Discount Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setDiscountType('percentage')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        discountType === 'percentage' 
                          ? 'border-orange-500 bg-orange-50 text-orange-700' 
                          : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                      }`}
                    >
                      <Percent className="w-6 h-6 mb-2" />
                      <span className="font-bold text-sm">Percentage</span>
                    </button>
                    <button 
                      onClick={() => setDiscountType('fixed')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        discountType === 'fixed' 
                          ? 'border-orange-500 bg-orange-50 text-orange-700' 
                          : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                      }`}
                    >
                      <DollarSign className="w-6 h-6 mb-2" />
                      <span className="font-bold text-sm">Fixed Amount</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Value</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      className="w-full pl-4 pr-12 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
                      placeholder="0.00"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                      {discountType === 'percentage' ? '%' : '€'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimum Requirements */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6">Minimum Requirements</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input type="radio" name="req" className="text-orange-600 focus:ring-orange-500" defaultChecked />
                  <span className="text-sm font-bold text-slate-700">None</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input type="radio" name="req" className="text-orange-600 focus:ring-orange-500" />
                  <span className="text-sm font-bold text-slate-700">Minimum purchase amount (€)</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input type="radio" name="req" className="text-orange-600 focus:ring-orange-500" />
                  <span className="text-sm font-bold text-slate-700">Minimum quantity of items</span>
                </label>
              </div>
            </div>

            {/* Active Dates */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-slate-400" />
                Active Dates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Start Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Start Time</label>
                  <input 
                    type="time" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900"
                  />
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500 transition-all" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Set end date</span>
                </label>
              </div>
            </div>

          </div>

          {/* Sidebar: Summary & Usage Limits */}
          <div className="space-y-6">
            
            {/* Summary */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-6">
              <h3 className="text-sm font-extrabold text-slate-900 mb-4 uppercase tracking-widest">Summary</h3>
              <div className="space-y-3">
                <p className="text-sm text-slate-600 font-medium flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                  {discountType === 'percentage' ? 'Percentage' : 'Fixed amount'} off entire order
                </p>
                <p className="text-sm text-slate-600 font-medium flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
                  No minimum requirement
                </p>
                <p className="text-sm text-slate-600 font-medium flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
                  Active from today
                </p>
              </div>
            </div>

            {/* Usage Limits */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-6">
              <h3 className="text-sm font-extrabold text-slate-900 mb-4 uppercase tracking-widest">Usage Limits</h3>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500 transition-all mt-0.5" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Limit number of times this discount can be used in total</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500 transition-all mt-0.5" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Limit to one use per customer</span>
                </label>
              </div>
            </div>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
