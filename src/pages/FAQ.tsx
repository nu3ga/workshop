import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  RotateCcw,
  Package,
  User,
  Mail
} from 'lucide-react';
import { motion } from 'motion/react';

// Mock Data
const categories = [
  { name: 'Shipping & Delivery', icon: Truck, count: 12 },
  { name: 'Returns & Refunds', icon: RotateCcw, count: 8 },
  { name: 'Ordering & Payment', icon: CreditCard, count: 15 },
  { name: 'Account & Profile', icon: User, count: 6 },
  { name: 'Product Information', icon: Package, count: 24 },
  { name: 'Security & Privacy', icon: ShieldCheck, count: 5 },
];

const faqs = [
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 3-5 business days within Latvia. Express shipping options are available at checkout for 1-2 day delivery.',
    category: 'Shipping & Delivery'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all unused items in their original packaging. Simply initiate a return from your account dashboard or contact our support team.',
    category: 'Returns & Refunds'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to most countries within the EU. Shipping costs and delivery times vary by location and will be calculated at checkout.',
    category: 'Shipping & Delivery'
  },
  {
    question: 'Can I track my order?',
    answer: 'Absolutely! Once your order ships, you will receive a tracking number via email. You can also track your order status directly from your account page.',
    category: 'Ordering & Payment'
  },
  {
    question: 'Are your products certified?',
    answer: 'Yes, all our safety equipment meets or exceeds EU safety standards (EN ISO). Specific certifications are listed on each product page.',
    category: 'Product Information'
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 text-orange-600 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? We're here to help. Browse our most common questions below or contact our support team for further assistance.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-16 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm text-lg"
            placeholder="Search for answers..."
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {categories.map((category) => (
            <button 
              key={category.name}
              className="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-orange-500 hover:shadow-lg hover:-translate-y-1 transition-all group text-center"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                <category.icon className="w-6 h-6 text-slate-600 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{category.name}</h3>
              <span className="text-xs font-medium text-slate-400">{category.count} articles</span>
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg text-slate-900 group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Can't find the answer you're looking for? Our friendly support team is here to chat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/20 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <a 
                href="tel:+37120123456" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm w-full sm:w-auto"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
