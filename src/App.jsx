import React, { useState, useMemo } from 'react';
import { PRODUCTS } from './data/products';
import SplashScreen from './components/SplashScreen';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import SizeGuideModal from './components/SizeGuideModal';
import WishlistDrawer from './components/WishlistDrawer';
import CartDrawer from './components/CartDrawer';
import BrandStory from './components/BrandStory';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  // Catalog Filter States
  const [activeGender, setActiveGender] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(40000);
  const [sortBy, setSortBy] = useState('featured');

  // E-Commerce Shopping States
  const [wishlistIds, setWishlistIds] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Modal / Drawer UI Visibility States
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (title, message, type = 'info') => {
    setToast({ title, message, type });
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Gender Filter
      if (activeGender !== 'All') {
        if (product.gender !== activeGender && product.gender !== 'Unisex') return false;
      }
      // Category Filter
      if (activeCategory !== 'All' && product.category !== activeCategory) {
        return false;
      }
      // Max Price Filter
      if (product.price > maxPrice) {
        return false;
      }
      // Search Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesTagline = product.tagline.toLowerCase().includes(query);
        const matchesDescription = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCategory && !matchesTagline && !matchesDescription) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [activeGender, activeCategory, maxPrice, searchQuery, sortBy]);

  // Wishlist Actions
  const handleToggleWishlist = (product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast('Removed from Wishlist', `${product.name} removed from your saved items.`, 'wishlist');
        return prev.filter((id) => id !== product.id);
      } else {
        showToast('Saved to Wishlist', `${product.name} added to your favorites!`, 'wishlist');
        return [...prev, product.id];
      }
    });
  };

  const wishlistItems = useMemo(() => {
    return PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  }, [wishlistIds]);

  // Cart Actions
  const handleAddToCart = (product, size, color, quantity = 1) => {
    const selectedSize = size || product.sizes[0];
    const selectedColor = color || product.colors[0].name;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.id === product.id && item.size === selectedSize && item.color === selectedColor
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { ...product, size: selectedSize, color: selectedColor, quantity }];
      }
    });

    showToast(
      'Added to Shopping Cart',
      `${product.name} (${selectedSize} • ${selectedColor}) added to cart!`,
      'cart'
    );
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // WhatsApp Order Direct Routing
  const handleWhatsAppOrder = (product, size, color, quantity = 1) => {
    const selectedSize = size || product.sizes[0];
    const selectedColor = color || product.colors[0].name;

    const message = `*INQUIRY / ORDER - ATALYA CLOTHING*\n\n*Item:* ${product.name}\n*Price:* LKR ${product.price.toLocaleString()}\n*Size:* ${selectedSize}\n*Color:* ${selectedColor}\n*Quantity:* ${quantity}\n\nPlease confirm availability and delivery details. Thank you!`;

    const targetWhatsAppUrl = `https://wa.me/94717995000?text=${encodeURIComponent(message)}`;
    window.open(targetWhatsAppUrl, '_blank');
  };

  const handleResetFilters = () => {
    setActiveGender('All');
    setActiveCategory('All');
    setSearchQuery('');
    setMaxPrice(40000);
    setSortBy('featured');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      {/* Splash Screen / Initial Loading Overlay */}
      <SplashScreen />

      {/* Top Banner Announcement Ticker */}
      <TopBar />

      {/* Header Navigation */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeGender={activeGender}
        setActiveGender={setActiveGender}
      />

      {/* Hero Banner */}
      <Hero />

      {/* Main Catalog Area */}
      <main style={{ flex: 1 }}>
        <div className="container" style={{ paddingTop: '2rem' }}>
          <CategoryFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeGender={activeGender}
            setActiveGender={setActiveGender}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onResetFilters={handleResetFilters}
          />
        </div>

        <ProductGrid
          products={filteredProducts}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          onWhatsAppOrder={handleWhatsAppOrder}
          onResetFilters={handleResetFilters}
        />

        {/* Brand Philosophy Section */}
        <BrandStory />

        {/* Contact & FAQ Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={(cat) => setActiveCategory(cat)} />

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <ProductModal
          product={quickViewProduct}
          isWishlisted={wishlistIds.includes(quickViewProduct.id)}
          onClose={() => setQuickViewProduct(null)}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onWhatsAppOrder={handleWhatsAppOrder}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />
      )}

      {/* Interactive Size Guide Modal */}
      {isSizeGuideOpen && (
        <SizeGuideModal onClose={() => setIsSizeGuideOpen(false)} />
      )}

      {/* Slide-out Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={(id) => setWishlistIds((prev) => prev.filter((i) => i !== id))}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={() => setCartItems([])}
      />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
