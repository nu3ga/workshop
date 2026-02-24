import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import B2B from './pages/B2B';
import Checkout from './pages/Checkout';
import Advice from './pages/Advice';
import DesignSystem from './pages/DesignSystem';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderSuccess from './pages/OrderSuccess';
import OrderDetail from './pages/OrderDetail';
import Menu from './pages/Menu';
import Settings from './pages/Settings';
import Filters from './pages/Filters';
import ForgotPassword from './pages/ForgotPassword';
import Contact from './pages/Contact';
import TextPage from './pages/TextPage';
import AdminDashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Orders from './pages/admin/Orders';
import Customers from './pages/admin/Customers';
import Analytics from './pages/admin/Analytics';
import AdminSettings from './pages/admin/Settings';
import ProductEditor from './pages/admin/ProductEditor';
import AdminOrderDetail from './pages/admin/OrderDetail';
import CustomerDetail from './pages/admin/CustomerDetail';
import Discounts from './pages/admin/Discounts';
import Inventory from './pages/admin/Inventory';
import Marketing from './pages/admin/Marketing';

import Wishlist from './pages/Wishlist';
import FAQ from './pages/FAQ';
import StoreLocator from './pages/StoreLocator';

import CreateOrder from './pages/admin/CreateOrder';
import AddCustomer from './pages/admin/AddCustomer';
import CreateDiscount from './pages/admin/CreateDiscount';
import CreateCampaign from './pages/admin/CreateCampaign';
import EditCustomer from './pages/admin/EditCustomer';
import EditOrder from './pages/admin/EditOrder';
import InventoryHistory from './pages/admin/InventoryHistory';

function AppContent() {
  const location = useLocation();
  const hideBottomNavPaths = [
    '/checkout', 
    '/b2b', 
    '/product', 
    '/advice', 
    '/design', 
    '/login', 
    '/register', 
    '/order-success', 
    '/menu', 
    '/settings',
    '/filters',
    '/forgot-password',
    '/contact',
    '/terms',
    '/privacy',
    '/about',
    '/shipping',
    '/returns',
    '/admin'
  ];
  const shouldShowBottomNav = !hideBottomNavPaths.some(path => location.pathname.startsWith(path));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="w-full flex-1 flex flex-col relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/design" element={<DesignSystem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/order/:id" element={<OrderDetail />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TextPage title="Lietošanas noteikumi" type="terms" />} />
          <Route path="/privacy" element={<TextPage title="Privātuma politika" type="privacy" />} />
          <Route path="/about" element={<TextPage title="Par Mums" type="about" />} />
          <Route path="/shipping" element={<TextPage title="Piegāde" type="shipping" />} />
          <Route path="/returns" element={<TextPage title="Atgriešana" type="returns" />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/stores" element={<StoreLocator />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/new" element={<ProductEditor />} />
          <Route path="/admin/products/:id" element={<ProductEditor />} />
          <Route path="/admin/inventory" element={<Inventory />} />
          <Route path="/admin/inventory/history" element={<InventoryHistory />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/orders/new" element={<CreateOrder />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetail />} />
          <Route path="/admin/orders/:id/edit" element={<EditOrder />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/customers/new" element={<AddCustomer />} />
          <Route path="/admin/customers/:id" element={<CustomerDetail />} />
          <Route path="/admin/customers/:id/edit" element={<EditCustomer />} />
          <Route path="/admin/discounts" element={<Discounts />} />
          <Route path="/admin/discounts/new" element={<CreateDiscount />} />
          <Route path="/admin/marketing" element={<Marketing />} />
          <Route path="/admin/marketing/new" element={<CreateCampaign />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Routes>
        {shouldShowBottomNav && (
          <div className="md:hidden">
            <BottomNav />
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
