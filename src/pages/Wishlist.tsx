import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

// Mock Data
const wishlistItems = [
  {
    id: 1,
    name: 'Premium Leather Work Gloves',
    price: 24.99,
    image: 'https://picsum.photos/seed/gloves/300/300',
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: 'Heavy Duty Steel Toe Boots',
    price: 89.50,
    originalPrice: 110.00,
    image: 'https://picsum.photos/seed/boots/300/300',
    rating: 4.9,
    reviews: 85,
    inStock: true,
  },
  {
    id: 3,
    name: 'High-Vis Safety Jacket',
    price: 45.00,
    image: 'https://picsum.photos/seed/jacket/300/300',
    rating: 4.7,
    reviews: 210,
    inStock: false,
  },
];

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Wishlist</h1>
            <p className="text-slate-500 mt-1">{wishlistItems.length} items saved for later</p>
          </div>
          <Link 
            to="/catalog" 
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm"
          >
            Continue Shopping
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Wishlist Grid */}
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square bg-slate-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-rose-500 hover:bg-rose-50 transition-colors shadow-sm">
                    <Heart className="w-5 h-5 fill-current" />
                  </button>
                  {!item.inStock && (
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      Out of Stock
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <Link to={`/product/${item.id}`} className="font-bold text-slate-900 hover:text-orange-600 transition-colors line-clamp-2">
                      {item.name}
                    </Link>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="font-bold text-slate-900">€{item.price.toFixed(2)}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">€{item.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-sm font-bold text-slate-700">{item.rating}</span>
                    <span className="text-xs text-slate-400">({item.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <button 
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                    <button className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors border border-transparent hover:border-rose-100">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 border-dashed">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Your wishlist is empty</h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Browse our catalog and save items you love to your wishlist to purchase them later.
            </p>
            <Link 
              to="/catalog" 
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg hover:shadow-orange-500/25"
            >
              Start Shopping
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
