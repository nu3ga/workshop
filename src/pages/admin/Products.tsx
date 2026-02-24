import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  ArrowUpDown, 
  Download, 
  Trash2, 
  Edit, 
  Copy, 
  Eye,
  Package,
  AlertTriangle,
  TrendingUp,
  Tag
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// --- Mock Data ---

const productStats = [
  { label: 'Total Products', value: '1,248', change: '+12 this week', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Low Stock', value: '15', change: 'Requires attention', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Top Category', value: 'Workwear', change: '45% of revenue', icon: Tag, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Avg. Margin', value: '68%', change: '+2.4% vs last month', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

const products = [
  { 
    id: 1, 
    name: 'Premium Leather Work Gloves', 
    sku: 'GLV-001', 
    category: 'Accessories', 
    price: '€34.99', 
    stock: 45, 
    status: 'Active', 
    image: 'https://picsum.photos/seed/glove/100/100',
    sales: 1240 
  },
  { 
    id: 2, 
    name: 'Heavy Duty Steel Toe Boots', 
    sku: 'BOT-092', 
    category: 'Footwear', 
    price: '€129.50', 
    stock: 12, 
    status: 'Low Stock', 
    image: 'https://picsum.photos/seed/boot/100/100',
    sales: 850 
  },
  { 
    id: 3, 
    name: 'High-Vis Safety Jacket', 
    sku: 'JAC-044', 
    category: 'Workwear', 
    price: '€89.99', 
    stock: 0, 
    status: 'Out of Stock', 
    image: 'https://picsum.photos/seed/jacket/100/100',
    sales: 2100 
  },
  { 
    id: 4, 
    name: 'Industrial Safety Goggles', 
    sku: 'GOG-011', 
    category: 'Protection', 
    price: '€24.99', 
    stock: 156, 
    status: 'Active', 
    image: 'https://picsum.photos/seed/goggles/100/100',
    sales: 3400 
  },
  { 
    id: 5, 
    name: 'Thermal Insulated Socks', 
    sku: 'SOC-005', 
    category: 'Footwear', 
    price: '€14.99', 
    stock: 89, 
    status: 'Active', 
    image: 'https://picsum.photos/seed/socks/100/100',
    sales: 560 
  },
  { 
    id: 6, 
    name: 'Construction Hard Hat', 
    sku: 'HAT-022', 
    category: 'Protection', 
    price: '€45.00', 
    stock: 23, 
    status: 'Active', 
    image: 'https://picsum.photos/seed/hardhat/100/100',
    sales: 110 
  },
];

// --- Components ---

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Active': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    'Draft': 'bg-slate-50 text-slate-700 border-slate-200/60',
    'Low Stock': 'bg-amber-50 text-amber-700 border-amber-200/60',
    'Out of Stock': 'bg-rose-50 text-rose-700 border-rose-200/60',
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${styles[status] || 'bg-slate-50 text-slate-700'}`}>
      {status}
    </span>
  );
};

export default function Products() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleSelect = (id: number) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(pid => pid !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8 pb-12 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Products</h2>
            <p className="text-slate-500 mt-1 font-medium">Manage your product catalog, inventory, and pricing.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-11 py-2 px-4 border border-slate-200 shadow-sm hover:shadow-md">
              <Download className="mr-2 h-4 w-4" />
              Export
            </button>
            <Link to="/admin/products/new" className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-orange-600 text-white hover:bg-orange-500 h-11 py-2 px-5 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5">
              <Plus className="mr-2 h-5 w-5" />
              Add Product
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {productStats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-slate-200/60 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                <div className="text-sm font-bold text-slate-500 mt-1">{stat.label}</div>
                <div className="text-xs font-medium text-slate-400 mt-2">{stat.change}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="rounded-[2rem] border border-slate-200/60 bg-white shadow-sm overflow-hidden">
          
          {/* Toolbar */}
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search products by name, SKU, or category..."
                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-medium"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-600 hover:bg-slate-50 h-10 px-4 border border-slate-200">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </button>
              <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-600 hover:bg-slate-50 h-10 px-4 border border-slate-200">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Sort
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase tracking-widest bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 w-10">
                    <input type="checkbox" className="rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
                  </th>
                  <th className="px-6 py-4 font-bold">Product</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Inventory</th>
                  <th className="px-6 py-4 font-bold">Price</th>
                  <th className="px-6 py-4 font-bold">Category</th>
                  <th className="px-6 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {products.map((product) => (
                  <tr 
                    key={product.id} 
                    onClick={(e) => {
                      // Prevent navigation if clicking checkbox or action buttons
                      if ((e.target as HTMLElement).closest('input') || (e.target as HTMLElement).closest('button')) return;
                      navigate(`/admin/products/${product.id}`);
                    }}
                    className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleSelect(product.id)}
                        className="rounded border-slate-300 text-orange-600 focus:ring-orange-500" 
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{product.name}</div>
                          <div className="text-slate-400 text-xs mt-0.5 font-medium">{product.sku}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={product.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-32">
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="font-bold text-slate-700">{product.stock} in stock</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              product.stock === 0 ? 'bg-slate-200' :
                              product.stock < 20 ? 'bg-amber-500' : 
                              'bg-emerald-500'
                            }`} 
                            style={{ width: `${Math.min(100, (product.stock / 100) * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-black text-slate-900">
                      {product.price}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-600">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="Duplicate">
                          <Copy className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-6 border-t border-slate-100 flex items-center justify-between">
            <div className="text-sm text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900">1-6</span> of <span className="font-bold text-slate-900">1,248</span> products
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">Previous</button>
              <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
