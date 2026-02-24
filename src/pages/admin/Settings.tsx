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

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <SettingsSection title="Shipping Zones" description="Manage where you ship and how much it costs.">
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-500">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Domestic (EU)</h4>
                          <p className="text-sm text-slate-500 font-medium">Germany, France, Italy, Spain...</p>
                        </div>
                      </div>
                      <button className="text-sm font-bold text-orange-600 hover:text-orange-700">Edit Zone</button>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-500">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">International (Rest of World)</h4>
                          <p className="text-sm text-slate-500 font-medium">United States, Canada, Australia...</p>
                        </div>
                      </div>
                      <button className="text-sm font-bold text-orange-600 hover:text-orange-700">Edit Zone</button>
                    </div>
                    <button className="w-full py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-500 font-bold hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-all flex items-center justify-center">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Shipping Zone
                    </button>
                  </div>
                </SettingsSection>

                <SettingsSection title="Delivery Methods" description="Enable local pickup or local delivery.">
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-500">
                          <Store className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Local Pickup</h4>
                          <p className="text-sm text-slate-500 font-medium">Allow customers to pick up orders from your store.</p>
                        </div>
                      </div>
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
                    </label>
                  </div>
                </SettingsSection>
              </div>
            )}

            {activeTab === 'taxes' && (
              <div className="space-y-6">
                <SettingsSection title="Tax Calculation" description="Manage how taxes are charged.">
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500" defaultChecked />
                      <div>
                        <h4 className="font-bold text-slate-900">All prices include tax</h4>
                        <p className="text-sm text-slate-500 font-medium">Taxes are calculated using this formula: (Price / (1 + Tax Rate)) * Tax Rate</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
                      <div>
                        <h4 className="font-bold text-slate-900">Charge tax on shipping rates</h4>
                        <p className="text-sm text-slate-500 font-medium">Apply local tax rates to shipping costs.</p>
                      </div>
                    </label>
                  </div>
                </SettingsSection>

                <SettingsSection title="Tax Regions" description="Set tax rates for specific countries or regions.">
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-500">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">European Union</h4>
                          <p className="text-sm text-slate-500 font-medium">One Stop Shop (OSS) rates apply</p>
                        </div>
                      </div>
                      <span className="font-bold text-slate-900">Varies</span>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-500">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">United Kingdom</h4>
                          <p className="text-sm text-slate-500 font-medium">20% VAT</p>
                        </div>
                      </div>
                      <span className="font-bold text-slate-900">20%</span>
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <SettingsSection title="Staff Accounts" description="Manage who has access to your admin dashboard.">
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold">
                          JD
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">John Doe (You)</h4>
                          <p className="text-sm text-slate-500 font-medium">Owner • john@example.com</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">Active</span>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                          AS
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Alice Smith</h4>
                          <p className="text-sm text-slate-500 font-medium">Editor • alice@example.com</p>
                        </div>
                      </div>
                      <button className="text-sm font-bold text-slate-500 hover:text-slate-900">Manage</button>
                    </div>
                    <button className="w-full py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-500 font-bold hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-all flex items-center justify-center">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Staff Account
                    </button>
                  </div>
                </SettingsSection>

                <SettingsSection title="Permissions" description="Control what staff can see and do.">
                  <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <p className="text-slate-500 font-medium mb-4">Upgrade to the Pro plan to create custom roles and permissions.</p>
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800">View Plans</button>
                  </div>
                </SettingsSection>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <SettingsSection title="Customer Notifications" description="Manage emails sent to customers.">
                  <div className="space-y-2">
                    {['Order Confirmation', 'Shipping Update', 'Order Delivered', 'Refund Processed'].map((item) => (
                      <div key={item} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-slate-400" />
                          <span className="font-bold text-slate-900">{item}</span>
                        </div>
                        <button className="text-sm font-bold text-orange-600 hover:text-orange-700">Edit Template</button>
                      </div>
                    ))}
                  </div>
                </SettingsSection>

                <SettingsSection title="Admin Notifications" description="Get alerted when important events happen.">
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <span className="font-bold text-slate-700">New Order Alert</span>
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="font-bold text-slate-700">Low Stock Warning</span>
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="font-bold text-slate-700">Daily Summary</span>
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
                    </label>
                  </div>
                </SettingsSection>
              </div>
            )}

          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
