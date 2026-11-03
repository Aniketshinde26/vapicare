import React, { useState } from 'react';
import { 
  Building2, Pill, Award, ShieldCheck, Mail, Phone, MapPin, 
  Search, ChevronRight, Stethoscope, Factory, Globe, ArrowRight, 
  CheckCircle2, FileText, Send, Menu, X, Sparkles
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'Tablets' | 'Capsules' | 'Syrups & Suspensions' | 'Injectables';
  composition: string;
  therapeuticArea: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'VapiCef-O 200',
    category: 'Tablets',
    composition: 'Cefpodoxime Proxetil 200 mg',
    therapeuticArea: 'Anti-infective / Antibiotic',
    description: 'Broad-spectrum third-generation cephalosporin antibiotic indicated for respiratory and urinary tract infections.'
  },
  {
    id: '2',
    name: 'Pantocid-V 40',
    category: 'Tablets',
    composition: 'Pantoprazole Sodium 40 mg',
    therapeuticArea: 'Gastroenterology',
    description: 'Proton pump inhibitor designed for severe acid reflux, GERD, and peptic ulcer disease management.'
  },
  {
    id: '3',
    name: 'Vapi-Clav 625',
    category: 'Tablets',
    composition: 'Amoxicillin 500 mg + Clavulanate Potassium 125 mg',
    therapeuticArea: 'Anti-infective',
    description: 'Potent beta-lactamase inhibitor combination for resistant bacterial infections and surgical prophylaxis.'
  },
  {
    id: '4',
    name: 'VapiSoft Dry Syrup',
    category: 'Syrups & Suspensions',
    composition: 'Ambroxol + Guaifenesin + Terbutaline',
    therapeuticArea: 'Respiratory Care',
    description: 'Advanced mucolytic and bronchodilator formulation for productive cough and acute bronchial asthma.'
  },
  {
    id: '5',
    name: 'Mecovapi-Plus',
    category: 'Capsules',
    composition: 'Methylcobalamin + Alpha Lipoic Acid + Benfotiamine',
    therapeuticArea: 'Neurology & Vitamins',
    description: 'Neuroprotective multivitamin complex formulated for diabetic neuropathy and cellular energy support.'
  },
  {
    id: '6',
    name: 'Vapi-Diclo AQ',
    category: 'Injectables',
    composition: 'Diclofenac Sodium 75mg/ml',
    therapeuticArea: 'Pain Management',
    description: 'Fast-acting non-steroidal anti-inflammatory injection for acute musculoskeletal pain and renal colic.'
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [inquirySent, setInquirySent] = useState<boolean>(false);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.therapeuticArea.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => setInquirySent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-red-600 selection:text-white">
      
      {/* Top Bar */}
      <div className="bg-red-900 text-red-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-red-400" /> Vapi GIDC, Gujarat, India</span>
            <span className="hidden md:flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-red-400" /> WHO-GMP Certified Manufacturing Facility</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-red-400" /> +91 (260) 2400XXX</span>
            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-red-400" /> info@vapicarepharma.com</span>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/20">
              <Pill className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">VAPI CARE</span>
              <span className="block text-[10px] font-semibold tracking-widest text-red-600 uppercase">Pharma Private Limited</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#about" className="hover:text-red-600 transition-colors">About Us</a>
            <a href="#products" className="hover:text-red-600 transition-colors">Product Portfolio</a>
            <a href="#manufacturing" className="hover:text-red-600 transition-colors">Contract Manufacturing</a>
            <a href="#compliance" className="hover:text-red-600 transition-colors">Quality & Compliance</a>
            <a href="#contact" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm">
              Partner With Us
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-red-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">About Us</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Product Portfolio</a>
            <a href="#manufacturing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Contract Manufacturing</a>
            <a href="#compliance" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Quality & Compliance</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center py-2.5 bg-red-600 text-white rounded-lg font-medium">Partner With Us</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Global Pharmaceutical Formulations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Precision Healthcare & <span className="text-red-500">Contract Manufacturing</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
              Delivering high-efficacy pharmaceutical tablets, capsules, and suspensions manufactured under strict WHO-GMP compliance standards from Vapi, Gujarat.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#products" className="px-6.5 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center gap-2">
                Explore Product Catalog <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-6.5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/10 transition-all">
                Inquire for Export / B2B
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-3xl font-bold text-red-400 mb-1">300+</div>
              <div className="text-sm text-slate-300">Formulations Developed</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-3xl font-bold text-red-400 mb-1">25+</div>
              <div className="text-sm text-slate-300">Global Export Markets</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-3xl font-bold text-red-400 mb-1">100%</div>
              <div className="text-sm text-slate-300">WHO-GMP Compliant</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-3xl font-bold text-red-400 mb-1">28 Yrs</div>
              <div className="text-sm text-slate-300">Industry Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section id="products" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Advanced Portfolio</h2>
          <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Pharmaceutical Product Catalog</h3>
          <p className="text-slate-600 mt-2">Filter through our comprehensive range of high-grade formulations and therapeutic segments.</p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by brand, composition, or use..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['All', 'Tablets', 'Capsules', 'Syrups & Suspensions', 'Injectables'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-red-200 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full border border-red-100">
                    {product.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{product.therapeuticArea}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-1">
                  {product.name}
                </h4>
                <p className="text-sm font-medium text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg mb-3 border border-slate-100">
                  {product.composition}
                </p>
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-red-600">
                <span>View Dossier & Specs</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Pill className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-700">No formulations found</h4>
            <p className="text-sm text-slate-500 mt-1">Try adjusting your search criteria or category filter.</p>
          </div>
        )}
      </section>

      {/* Contract Manufacturing & Capabilities */}
      <section id="manufacturing" className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">End-to-End Solutions</h2>
            <h3 className="text-3xl font-bold tracking-tight">Third-Party & Contract Manufacturing</h3>
            <p className="text-slate-400 mt-2">Partner with Vapi Care Pharma for flawless batch execution, stringent quality control, and global regulatory compliance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">State-of-the-Art Plant</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Advanced automated machinery for solid dosages, oral liquids, and specialized sterile formulations located in Vapi GIDC.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Rigorous QA / QC</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dedicated in-house microbiological and analytical testing laboratories ensuring zero-defect batch delivery every single time.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Global Export Support</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Comprehensive CTD/ACTD dossier preparation, stability testing, and regulatory support for international partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / B2B Inquiry Section */}
      <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-red-900 text-white p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-red-300 uppercase tracking-widest">Get in Touch</span>
              <h3 className="text-3xl font-bold mt-2 mb-4">Partner for Contract Manufacturing & Exports</h3>
              <p className="text-red-100 text-sm leading-relaxed mb-8">
                Ready to scale your pharmaceutical brand or discuss custom contract manufacturing requirements? Connect with our business development team today.
              </p>
            </div>

            <div className="space-y-4 text-sm text-red-100">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-400 shrink-0" />
                <span>Plot No. 124, GIDC Industrial Estate, Vapi, Gujarat 396195</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400 shrink-0" />
                <span>+91 (260) 2400XXX / +91 98250 XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400 shrink-0" />
                <span>inquiries@vapicarepharma.com</span>
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-14">
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Send an Inquiry</h4>
            <p className="text-sm text-slate-600 mb-6">Fill out your requirements and our team will respond within 24 hours.</p>

            {inquirySent ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-lg">Inquiry Submitted Successfully!</h5>
                <p className="text-sm">Thank you for reaching out. Our business development team will get in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name / Company Name</label>
                  <input required type="text" placeholder="e.g. Acme Pharma Distributors" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
                    <input required type="email" placeholder="name@company.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Inquiry Type</label>
                  <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600">
                    <option>Contract Manufacturing (Third-Party)</option>
                    <option>Product Export & Distribution</option>
                    <option>Batch Inquiries & Samples</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Message / Requirements</label>
                  <textarea rows={3} placeholder="Specify formulations, quantities, or regulatory requirements..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute right-6 top-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full border border-red-100 inline-block mb-4">
              {selectedProduct.category}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{selectedProduct.name}</h3>
            <p className="text-sm font-semibold text-slate-700 mb-4">{selectedProduct.composition}</p>
            
            <div className="space-y-4 text-sm text-slate-600 border-t border-b border-slate-100 py-4 my-4">
              <div>
                <span className="font-semibold text-slate-900 block mb-1">Therapeutic Classification:</span>
                <span>{selectedProduct.therapeuticArea}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 block mb-1">Pharmacological Overview:</span>
                <p className="leading-relaxed">{selectedProduct.description}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a 
                href="#contact" 
                onClick={() => setSelectedProduct(null)}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white text-center font-semibold rounded-xl transition-colors shadow-md shadow-red-600/20"
              >
                Request Batch Quote
              </a>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
              <Pill className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">VAPI CARE PHARMA PVT. LTD.</span>
              <span className="block text-[10px] text-slate-500">Excellence in Pharmaceutical Manufacturing</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center">
            &copy; {new Date().getFullYear()} Vapi Care Pharma Private Limited. All rights reserved. Built for high-performance enterprise presentation.
          </p>
        </div>
      </footer>

    </div>
  );
}