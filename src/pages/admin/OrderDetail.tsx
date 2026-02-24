import React from 'react';
import { 
  ChevronLeft, 
  Printer, 
  MoreHorizontal, 
  MapPin, 
  Mail, 
  Phone, 
  CreditCard, 
  Truck, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Package,
  ArrowRight,
  Copy
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

// --- Components ---

const Card = ({ title, children, className = "", action }: { title?: string, children: React.ReactNode, className?: string, action?: React.ReactNode }) => (
  <div className={`bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden ${className}`}>
    {title && (
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-slate-900">{title}</h3>
        {action}
      </div>
    )}
    <div className="p-6">
      {children}
    </div>
  </div>
);

const TimelineItem = ({ icon: Icon, title, time, isLast }: { icon: any, title: string, time: string, isLast?: boolean }) => (
  <div className="flex gap-4 relative">
    {!isLast && <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-100"></div>}
    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 z-10">
      <Icon className="w-5 h-5 text-slate-500" />
    </div>
    <div className="pb-8">
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <p className="text-xs text-slate-500 mt-1 font-medium">{time}</p>
    </div>
  </div>
);

export default function OrderDetail() {
  const { id } = useParams();

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto pb-20">
        
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/admin/orders" className="p-2 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Order #ORD-7352</h1>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Paid
                </span>
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider border border-amber-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Unfulfilled
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1 font-medium">October 24, 2023 at 10:24 am</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 flex items-center">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </button>
            <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 flex items-center">
              <MoreHorizontal className="w-4 h-4" />
            </button>
            <button className="px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center">
              Fulfill Order
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Line Items */}
            <Card title="Order Items" action={<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">3 Items</span>}>
              <div className="divide-y divide-slate-50">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shrink-0 relative">
                      <img src={`https://picsum.photos/seed/item${item}/200/200`} alt="" className="w-full h-full object-cover" />
                      <span className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg">x1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 hover:text-orange-600 transition-colors cursor-pointer">Premium Leather Work Gloves</h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">Size: L • Color: Brown</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">€34.99</p>
                      <p className="text-xs text-slate-400 line-through font-medium">€45.00</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Subtotal</span>
                  <span>€104.97</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Shipping</span>
                  <span>€5.00</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Tax (VAT 19%)</span>
                  <span>€20.90</span>
                </div>
                <div className="flex justify-between text-lg font-black text-slate-900 pt-3 border-t border-slate-100">
                  <span>Total</span>
                  <span>€130.87</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex justify-end gap-3">
                <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs hover:bg-slate-50">
                  Refund
                </button>
                <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs hover:bg-slate-50">
                  Edit Order
                </button>
              </div>
            </Card>

            {/* Timeline */}
            <Card title="Timeline">
              <div className="mt-2">
                <TimelineItem 
                  icon={CreditCard} 
                  title="Payment of €130.87 verified" 
                  time="Today, 10:24 am" 
                />
                <TimelineItem 
                  icon={Mail} 
                  title="Order confirmation email sent to Emma Thompson" 
                  time="Today, 10:24 am" 
                />
                <TimelineItem 
                  icon={Package} 
                  title="Order placed from Online Store" 
                  time="Today, 10:23 am" 
                  isLast
                />
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <div className="w-full h-full rounded-full bg-slate-300 animate-pulse"></div>
                  </div>
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      placeholder="Leave a comment..." 
                      className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium text-sm"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-orange-600 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            
            {/* Customer */}
            <Card title="Customer" action={<Link to="/admin/customers/1" className="text-orange-600 hover:text-orange-700 font-bold text-xs">View Profile</Link>}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                  <img src="https://picsum.photos/seed/emma/200/200" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Emma Thompson</h4>
                  <p className="text-xs text-slate-500 font-medium">12 orders</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium truncate">emma.t@example.com</span>
                  <Copy className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">+49 152 12345678</span>
                </div>
              </div>
            </Card>

            {/* Shipping Address */}
            <Card title="Shipping Address" action={<button className="text-orange-600 hover:text-orange-700 font-bold text-xs">Edit</button>}>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                <div className="text-sm font-medium text-slate-600 leading-relaxed">
                  <p className="font-bold text-slate-900">Emma Thompson</p>
                  <p>Musterstraße 123</p>
                  <p>Apartment 4B</p>
                  <p>10115 Berlin</p>
                  <p>Germany</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Billing Address</h4>
                <p className="text-sm text-slate-500 font-medium">Same as shipping address</p>
              </div>
            </Card>

            {/* Fraud Analysis */}
            <Card title="Fraud Analysis">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-slate-900">Low Risk</span>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                This order was processed with a low fraud score. The IP address matches the shipping location.
              </p>
              <button className="mt-4 text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center">
                View Full Analysis <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </Card>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
