import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Save, 
  Megaphone, 
  Mail, 
  MessageSquare, 
  Calendar, 
  Target, 
  Image,
  LayoutTemplate
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [campaignType, setCampaignType] = useState('email');

  return (
    <AdminLayout>
      <div className="max-w-[1000px] mx-auto pb-20">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/admin/marketing" className="p-2 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create Campaign</h1>
          </div>
          <button 
            onClick={() => navigate('/admin/marketing')}
            className="px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Campaign Details */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Campaign Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold text-lg text-slate-900 placeholder-slate-400"
                    placeholder="e.g. Summer Sale Announcement"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Campaign Type</label>
                  <div className="grid grid-cols-3 gap-4">
                    <button 
                      onClick={() => setCampaignType('email')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        campaignType === 'email' 
                          ? 'border-orange-500 bg-orange-50 text-orange-700' 
                          : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                      }`}
                    >
                      <Mail className="w-6 h-6 mb-2" />
                      <span className="font-bold text-sm">Email</span>
                    </button>
                    <button 
                      onClick={() => setCampaignType('social')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        campaignType === 'social' 
                          ? 'border-orange-500 bg-orange-50 text-orange-700' 
                          : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                      }`}
                    >
                      <Megaphone className="w-6 h-6 mb-2" />
                      <span className="font-bold text-sm">Social</span>
                    </button>
                    <button 
                      onClick={() => setCampaignType('sms')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        campaignType === 'sms' 
                          ? 'border-orange-500 bg-orange-50 text-orange-700' 
                          : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                      }`}
                    >
                      <MessageSquare className="w-6 h-6 mb-2" />
                      <span className="font-bold text-sm">SMS</span>
                    </button>
                  </div>
                </div>

                {campaignType === 'email' && (
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Subject Line</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
                        placeholder="Don't miss out on our biggest sale!"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Preview Text</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
                        placeholder="Up to 50% off selected items..."
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content Editor Placeholder */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <LayoutTemplate className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Design Your Content</h3>
              <p className="text-slate-500 max-w-sm mb-6">
                Choose a template or start from scratch to create beautiful emails that convert.
              </p>
              <button className="px-6 py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold hover:border-orange-500 hover:text-orange-600 transition-all">
                Open Visual Editor
              </button>
            </div>

          </div>

          {/* Sidebar: Audience & Schedule */}
          <div className="space-y-6">
            
            {/* Audience */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-6">
              <h3 className="text-sm font-extrabold text-slate-900 mb-4 uppercase tracking-widest flex items-center">
                <Target className="w-4 h-4 mr-2 text-slate-400" />
                Audience
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input type="radio" name="audience" className="text-orange-600 focus:ring-orange-500" defaultChecked />
                  <div>
                    <span className="block text-sm font-bold text-slate-700">All Subscribers</span>
                    <span className="block text-xs text-slate-500">12,450 recipients</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input type="radio" name="audience" className="text-orange-600 focus:ring-orange-500" />
                  <div>
                    <span className="block text-sm font-bold text-slate-700">VIP Customers</span>
                    <span className="block text-xs text-slate-500">450 recipients</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input type="radio" name="audience" className="text-orange-600 focus:ring-orange-500" />
                  <div>
                    <span className="block text-sm font-bold text-slate-700">New Signups (30d)</span>
                    <span className="block text-xs text-slate-500">1,200 recipients</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-6">
              <h3 className="text-sm font-extrabold text-slate-900 mb-4 uppercase tracking-widest flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                Schedule
              </h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="schedule" className="text-orange-600 focus:ring-orange-500" defaultChecked />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Send immediately</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="schedule" className="text-orange-600 focus:ring-orange-500" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Schedule for later</span>
                </label>
                
                <div className="pt-2">
                  <button 
                    onClick={() => navigate('/admin/marketing')}
                    className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg transition-all"
                  >
                    Send Campaign
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
