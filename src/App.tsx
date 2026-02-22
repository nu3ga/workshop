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
    '/returns'
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
