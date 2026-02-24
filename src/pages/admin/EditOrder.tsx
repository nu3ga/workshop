import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { 
  ChevronLeft, 
  Search, 
  Plus, 
  Trash2, 
  User, 
  MapPin, 
  CreditCard, 
  Truck,
  Save,
  Printer,
  MoreHorizontal
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// Mock Product Data for Search
const products = [
  { id: 1, name: 'Premium Leather Work Gloves', sku: 'GLV-001', price: 24.99, stock: 45, image: 'https://picsum.photos/seed/glove/100/100' },
  { id: 2, name: 'Heavy Duty Steel Toe Boots', sku: 'BOT-092', price: 89.50, stock: 12, image: 'https://picsum.photos/seed/boot/100/100' },
  { id: 3, name: 'High-Vis Safety Jacket', sku: 'JAC-044', price: 45.00, stock: 0, image: 'https://picsum.photos/seed/jacket/100/100' },
  { id: 4, name: 'Industrial Safety Goggles', sku: 'GOG-011', price: 15.00, stock: 156, image: 'https://picsum.photos/seed/goggles/100/100' },
];

export default function EditOrder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  // Pre-filled with some data
  const [orderItems, setOrderItems] = useState<any[]>([
    { id: 1, name: 'Premium Leather Work Gloves', sku: 'GLV-001', price: 24.99, quantity: 2, image: 'https://picsum.photos/seed/glove/100/100' },
    { id: 4, name: 'Industrial Safety Goggles', sku: 'GOG-011', price: 15.00, quantity: 5, image: 'https://picsum.photos/seed/goggles/100/100' }
  ]);
  const [customer, setCustomer] = useState<any>({ name: 'Emma Thompson', email: 'emma.t@example.com' });

  const addToOrder = (product: any) => {
    const existing = orderItems.find(item => item.id === product.id);
    if (existing) {
      setOrderItems(orderItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setOrderItems([...orderItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromOrder = (id: number) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setOrderItems(orderItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.21; // 21% VAT
  const total = subtotal + tax;

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto pb-20">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to={`/admin/orders/${id}`} className="p-2 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Edit Order #{id || 'ORD-7352'}</h1>
              <p className="text-sm text-slate-500 font-medium">Created on Oct 24, 2023</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 flex items-center">
              <Printer className="w-4 h-4 mr-2" />
              Print Invoice
            </button>
            <button 
              onClick={() => navigate(`/admin/orders/${id}`)}
              className="px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center"
            >
              <Save className="w-4 h-4 mr-2" />
              Update Order
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Products & Cart */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Product Search */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Add Products</h3>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search products by name or SKU..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {products
                  .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map(product => (
                  <div key={product.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover bg-slate-100" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{product.name}</p>
                        <p className="text-xs text-slate-500 font-medium">SKU: {product.sku} • {product.stock} in stock</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-slate-900 text-sm">€{product.price.toFixed(2)}</span>
                      <button 
                        onClick={() => addToOrder(product)}
                        className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Order Items</h3>
              {orderItems.length > 0 ? (
                <div className="space-y-4">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-400 uppercase tracking-widest border-b border-slate-100">
                      <tr>
                        <th className="pb-3 font-bold">Product</th>
                        <th className="pb-3 font-bold text-center">Quantity</th>
                        <th className="pb-3 font-bold text-right">Total</th>
                        <th className="pb-3 w-10"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {orderItems.map((item) => (
                        <tr key={item.id}>
                          <td className="py-3">
                            <div className="font-bold text-slate-900">{item.name}</div>
                            <div className="text-xs text-slate-500">€{item.price.toFixed(2)}</div>
                          </td>
                          <td className="py-3">
                            <div className="flex items-center justify-center gap-2">
                              <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-600">-</button>
                              <span className="font-bold text-slate-900 w-4 text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-600">+</button>
                            </div>
                          </td>
                          <td className="py-3 text-right font-bold text-slate-900">
                            €{(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td className="py-3 text-right">
                            <button onClick={() => removeFromOrder(item.id)} className="text-slate-400 hover:text-rose-500 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>Subtotal</span>
                      <span className="font-medium">€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>Tax (21%)</span>
                      <span className="font-medium">€{tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-black text-slate-900 pt-2 border-t border-slate-100">
                      <span>Total</span>
                      <span>€{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 border-2 border-dashed border-slate-100 rounded-xl">
                  <p className="text-slate-400 font-medium">No items added yet.</p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Customer & Details */}
          <div className="space-y-6">
            
            {/* Customer Select */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">Customer</h3>
                {!customer ? (
                  <button className="text-xs font-bold text-orange-600 hover:text-orange-700">Create New</button>
                ) : (
                  <button onClick={() => setCustomer(null)} className="text-xs font-bold text-rose-600 hover:text-rose-700">Change</button>
                )}
              </div>
              
              {!customer ? (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search customers..." 
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-medium"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold shrink-0">
                    ET
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{customer.name}</p>
                    <p className="text-xs text-slate-500 font-medium">{customer.email}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Status */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Payment</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input type="radio" name="payment" className="text-orange-600 focus:ring-orange-500" />
                  <span className="text-sm font-bold text-slate-700">Pending</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input type="radio" name="payment" className="text-orange-600 focus:ring-orange-500" defaultChecked />
                  <span className="text-sm font-bold text-slate-700">Paid</span>
                </label>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Notes</h3>
              <textarea 
                className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-medium resize-none"
                rows={3}
                placeholder="Add a note..."
                defaultValue="Customer called to confirm shipping address."
              />
            </div>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
