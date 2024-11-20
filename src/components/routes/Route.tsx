import React, { useState, useEffect } from 'react';
import { 
  Lightbulb,
  Home,
  Users,
  Menu,
  X,
  ChevronRight,
  ScrollText,
  Phone,
  Store,
  Lamp,
  LampDesk,
  LampCeiling,
  LampWallUp
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const productCategories = [
  {
    title: "Indoor Lighting",
    description: "Premium residential and commercial indoor solutions",
    icon: <Lamp className="w-4 h-4" />,
    href: "/products/indoor"
  },
  {
    title: "Desk Lamps",
    description: "Functional and stylish desk lighting options",
    icon: <LampDesk className="w-4 h-4" />,
    href: "/products/desk-lamps"
  },
  {
    title: "Ceiling Lights",
    description: "Modern ceiling lights and chandeliers",
    icon: <LampCeiling className="w-4 h-4" />,
    href: "/products/ceiling"
  },
  {
    title: "Wall Lights",
    description: "Decorative and functional wall lighting",
    icon: <LampWallUp className="w-4 h-4" />,
    href: "/products/wall"
  }
];

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle navigation clicks
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  // Desktop Navigation Items Component
  const DesktopNavItems = () => (
    <div className="hidden lg:flex flex-1">
      <div className="flex-1 flex items-stretch">
        <a href="/" onClick={handleNavClick} className="flex-1 flex items-center justify-center space-x-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-r border-gray-200">
          <Home className="w-4 h-4" />
          <span>Home</span>
        </a>
        
        <a href="/about" onClick={handleNavClick} className="flex-1 flex items-center justify-center space-x-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-r border-gray-200">
          <Users className="w-4 h-4" />
          <span>About Us</span>
        </a>

        <NavigationMenu className="flex-1">
          <NavigationMenuList className="h-full w-full border-r border-gray-200">
            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger className="h-full w-full flex items-center justify-center space-x-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Store className="w-4 h-4" />
                <span>Products</span>
              </NavigationMenuTrigger>
              
              <NavigationMenuContent className="min-w-[400px] rounded-xl border bg-white shadow-lg">
                <div className="grid grid-cols-2 p-4 gap-4">
                  {productCategories.map((category) => (
                    <a 
                      key={category.title} 
                      href={category.href}
                      onClick={handleNavClick}
                      className="group p-3 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-2 text-blue-600">
                        {category.icon}
                        <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {category.description}
                      </p>
                    </a>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <a href="/privacy" onClick={handleNavClick} className="flex-1 flex items-center justify-center space-x-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-r border-gray-200">
          <ScrollText className="w-4 h-4" />
          <span>Privacy Policy</span>
        </a>

        <a href="/contact" onClick={handleNavClick} className="flex-1 flex items-center justify-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          <Phone className="w-4 h-4" />
          <span>Contact Us</span>
        </a>
      </div>
    </div>
  );

  // Mobile Navigation Items Component
  const MobileNavItems = () => (
    <div 
      className={`lg:hidden fixed inset-0 bg-white z-50 transform ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out`}
    >
      {/* Mobile Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Lightbulb className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">neelux</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Items */}
      <div className="overflow-y-auto h-[calc(100%-4rem)]">
        <nav className="flex flex-col py-2">
          <a href="/" onClick={handleNavClick} className="flex items-center space-x-4 px-4 py-3 text-gray-700 hover:bg-blue-50">
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </a>
          
          <a href="/about" onClick={handleNavClick} className="flex items-center space-x-4 px-4 py-3 text-gray-700 hover:bg-blue-50">
            <Users className="w-5 h-5" />
            <span className="font-medium">About Us</span>
          </a>

          {/* Mobile Products Section */}
          <button 
            onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
            className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50"
          >
            <div className="flex items-center space-x-4">
              <Store className="w-5 h-5" />
              <span className="font-medium">Products</span>
            </div>
            <ChevronRight className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-90' : ''}`} />
          </button>

          {/* Products Submenu */}
          {isMobileProductsOpen && (
            <div className="bg-gray-50 py-2">
              {productCategories.map((category) => (
                <a 
                  key={category.title}
                  href={category.href}
                  onClick={handleNavClick}
                  className="flex items-center space-x-4 px-8 py-3 text-gray-600 hover:bg-blue-50"
                >
                  {category.icon}
                  <div>
                    <span className="font-medium">{category.title}</span>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          <a href="/privacy" onClick={handleNavClick} className="flex items-center space-x-4 px-4 py-3 text-gray-700 hover:bg-blue-50">
            <ScrollText className="w-5 h-5" />
            <span className="font-medium">Privacy Policy</span>
          </a>

          <div className="px-4 pt-4">
            <a 
              href="/contact" 
              onClick={handleNavClick}
              className="flex items-center justify-center space-x-2 w-full py-3 text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Contact Us</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );

  return (
    <div className="fixed top-0 w-full bg-white border-b shadow-sm z-40">
      {/* Main Navigation Container */}
      <div className="h-16 flex items-stretch">
        {/* Logo Section */}
        <div className="flex items-center justify-between lg:justify-center lg:w-48 lg:border-r border-gray-200 px-4 lg:px-0">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">neelux</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavItems />

        {/* Mobile Navigation */}
        <MobileNavItems />
      </div>
    </div>
  );
};

export default NavigationBar;