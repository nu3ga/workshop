import React, { useState } from 'react';
import { 
  Save, 
  X, 
  ChevronLeft, 
  Upload, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  MoreHorizontal,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

// --- Components ---

const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden ${className}`}>
    {title && (
      <div className="px-6 py-4 border-b border-slate-100">
        <h3 className="font-bold text-slate-900">{title}</h3>
      </div>
    )}
    <div className="p-6">
      {children}
    </div>
  </div>
);

const FormGroup = ({ label, children, helpText }: { label: string, children: React.ReactNode, helpText?: string }) => (
  <div className="space-y-2 mb-4 last:mb-0">
    <label className="block text-sm font-bold text-slate-700">{label}</label>
    {children}
    {helpText && <p className="text-xs text-slate-500">{helpText}</p>}
  </div>
);

export default function ProductEditor() {
  const [images, setImages] = useState<string[]>(['https://picsum.photos/seed/glove/400/400']);

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto pb-20">
        
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/admin/products" className="p-2 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Add Product</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-100">Active</span>
                <span className="text-sm text-slate-500">Last saved: Just now</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50">
              Discard
            </button>
            <button className="px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center">
              <Save className="w-4 h-4 mr-2" />
              Save Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Basic Info */}
            <Card title="Product Information">
              <FormGroup label="Title">
                <input 
                  type="text" 
                  placeholder="e.g. Premium Leather Work Gloves" 
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                />
              </FormGroup>
              <FormGroup label="Description">
                <div className="w-full rounded-xl border border-slate-200 bg-slate-50 overflow-hidden focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:border-orange-500 transition-all">
                  {/* Fake Toolbar */}
                  <div className="flex items-center gap-1 p-2 border-b border-slate-200 bg-slate-100/50">
                    <button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 font-bold text-xs">B</button>
                    <button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 italic text-xs">I</button>
                    <button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 underline text-xs">U</button>
                    <div className="w-px h-4 bg-slate-300 mx-1"></div>
                    <button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 text-xs">List</button>
                    <button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 text-xs">Link</button>
                  </div>
                  <textarea 
                    rows={6}
                    className="w-full p-4 bg-transparent border-none focus:ring-0 resize-none font-medium text-slate-600"
                    placeholder="Describe your product..."
                  />
                </div>
              </FormGroup>
            </Card>

            {/* Media */}
            <Card title="Media">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                {images.map((img, i) => (
                  <div key={i} className="aspect-square rounded-xl border border-slate-200 overflow-hidden relative group">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button className="p-1.5 bg-white rounded-lg text-rose-600 hover:bg-rose-50">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                <button className="aspect-square rounded-xl border-2 border-dashed border-slate-200 hover:border-orange-400 hover:bg-orange-50 transition-all flex flex-col items-center justify-center text-slate-400 hover:text-orange-600">
                  <Upload className="w-6 h-6 mb-2" />
                  <span className="text-xs font-bold">Add Media</span>
                </button>
              </div>
              <div className="p-8 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex flex-col items-center justify-center text-center hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                  <ImageIcon className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-sm font-bold text-slate-700">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </Card>

            {/* Pricing */}
            <Card title="Pricing">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormGroup label="Price">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">€</span>
                    <input 
                      type="text" 
                      placeholder="0.00" 
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                    />
                  </div>
                </FormGroup>
                <FormGroup label="Compare at price">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">€</span>
                    <input 
                      type="text" 
                      placeholder="0.00" 
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                    />
                  </div>
                </FormGroup>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormGroup label="Cost per item" helpText="Customers won't see this">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">€</span>
                    <input 
                      type="text" 
                      placeholder="0.00" 
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                    />
                  </div>
                </FormGroup>
                <div className="flex items-center justify-between pt-8">
                  <span className="text-sm font-bold text-slate-500">Margin</span>
                  <span className="text-sm font-black text-slate-900">-</span>
                </div>
              </div>
            </Card>

            {/* Inventory */}
            <Card title="Inventory">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormGroup label="SKU (Stock Keeping Unit)">
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                  />
                </FormGroup>
                <FormGroup label="Barcode (ISBN, UPC, GTIN, etc.)">
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                  />
                </FormGroup>
              </div>
              <div className="mt-4">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                  <input type="checkbox" className="w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500" />
                  <span className="text-sm font-bold text-slate-700">Track quantity</span>
                </label>
              </div>
            </Card>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            
            {/* Status */}
            <Card title="Status">
              <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium appearance-none">
                <option>Active</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sales Channels</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded text-orange-600 focus:ring-orange-500 border-slate-300" />
                    <span className="text-sm font-medium text-slate-700">Online Store</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded text-orange-600 focus:ring-orange-500 border-slate-300" />
                    <span className="text-sm font-medium text-slate-700">Facebook Shop</span>
                  </label>
                </div>
              </div>
            </Card>

            {/* Organization */}
            <Card title="Organization">
              <div className="space-y-4">
                <FormGroup label="Category">
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium">
                    <option>Apparel</option>
                    <option>Accessories</option>
                    <option>Footwear</option>
                  </select>
                </FormGroup>
                <FormGroup label="Product Type">
                  <input 
                    type="text" 
                    placeholder="e.g. T-Shirt"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                  />
                </FormGroup>
                <FormGroup label="Vendor">
                  <input 
                    type="text" 
                    placeholder="e.g. Nike"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                  />
                </FormGroup>
                <FormGroup label="Tags">
                  <input 
                    type="text" 
                    placeholder="e.g. Summer, Sale"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                  />
                </FormGroup>
              </div>
            </Card>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
