import React, { useState } from 'react';
import { 
  Store, 
  CreditCard, 
  Truck, 
  Globe, 
  Users, 
  Bell, 
  Lock, 
  Save,
  ChevronRight
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// --- Components ---

const SettingsSection = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8 mb-8">
    <div className="mb-6 pb-6 border-b border-slate-100">
      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-500 font-medium mt-1">{description}</p>
    </div>
    {children}
  </div>
);

const InputGroup = ({ label, type = "text", placeholder, defaultValue }: { label: string, type?: string, placeholder?: string, defaultValue?: string }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">{label}</label>
    <input 
      type={type} 
      className="block w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 placeholder-slate-400"
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  </div>
);

const SelectGroup = ({ label, options }: { label: string, options: string[] }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">{label}</label>
    <div className="relative">
      <select className="block w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-slate-900 appearance-none">
        {options.map(opt => <option key={opt}>{opt}</option>)}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
        <ChevronRight className="w-4 h-4 rotate-90" />
      </div>
    </div>
  </div>
);

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'Store Details', icon: Store },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'shipping', label: 'Shipping & Delivery', icon: Truck },
    { id: 'taxes', label: 'Taxes', icon: Globe },
    { id: 'users', label: 'Users & Permissions', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1600px] mx-auto pb-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Settings</h2>
            <p className="text-slate-500 mt-1 font-medium">Manage your store configuration and preferences.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-slate-900 text-white hover:bg-slate-800 h-11 py-2 px-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab.id 
                      ? 'bg-white text-orange-600 shadow-md ring-1 ring-slate-200' 
                      : 'text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 mr-3 ${activeTab === tab.id ? 'text-orange-500' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9">
            
            {activeTab === 'general' && (
              <div className="space-y-6">
                <SettingsSection title="Store Profile" description="The name and contact details of your store.">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Store Name" defaultValue="My Premium Store" />
                    <InputGroup label="Store Contact Email" defaultValue="admin@example.com" />
                    <InputGroup label="Store Phone" defaultValue="+1 (555) 123-4567" />
                    <InputGroup label="Industry" defaultValue="Fashion & Apparel" />
                  </div>
                </SettingsSection>

                <SettingsSection title="Store Currency" description="The currency your products are sold in.">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectGroup label="Store Currency" options={['EUR - Euro (€)', 'USD - US Dollar ($)', 'GBP - British Pound (£)']} />
                    <SelectGroup label="Timezone" options={['(GMT+01:00) Berlin', '(GMT+00:00) London', '(GMT-05:00) New York']} />
                  </div>
                </SettingsSection>

                <SettingsSection title="Address" description="The primary physical location of your business.">
                  <div className="space-y-6">
                    <InputGroup label="Legal Name of Company" defaultValue="Premium Store GmbH" />
                    <InputGroup label="Address" defaultValue="Musterstraße 123" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <InputGroup label="City" defaultValue="Berlin" />
                      <InputGroup label="Postal / ZIP Code" defaultValue="10115" />
                      <SelectGroup label="Country/Region" options={['Germany', 'France', 'United Kingdom', 'United States']} />
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}

            {activeTab === 'payments' && (
              <SettingsSection title="Payment Providers" description="Manage how you accept payments.">
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Stripe Payments</h4>
                      <p className="text-sm text-slate-500 font-medium">Accept credit cards, Apple Pay, and Google Pay.</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm">Manage</button>
                </div>
              </SettingsSection>
            )}

            {/* Placeholders for other tabs */}
            {['shipping', 'taxes', 'users', 'notifications'].includes(activeTab) && (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2rem] border border-slate-200/60 border-dashed">
                <div className="p-4 bg-slate-50 rounded-full mb-4">
                  <Lock className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Section Under Construction</h3>
                <p className="text-slate-500 font-medium mt-1">This settings panel is coming soon.</p>
              </div>
            )}

          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
