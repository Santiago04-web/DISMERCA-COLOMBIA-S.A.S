import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandBar } from './components/BrandBar';
import { Catalog } from './components/Catalog';
import { Financing } from './components/Financing';
import { ServiceWorkshop } from './components/ServiceWorkshop';
import { SpareParts } from './components/SpareParts';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';

type CurrentView = 'home' | 'privacy' | 'terms';

export function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('home');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('Todas');

  // Handle browser routing / history popstate
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('politica-privacidad') || hash.includes('politica-privacidad')) {
        setCurrentView('privacy');
        window.scrollTo(0, 0);
      } else if (path.includes('terminos-y-condiciones') || hash.includes('terminos-y-condiciones')) {
        setCurrentView('terms');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  const navigateTo = (view: CurrentView) => {
    setCurrentView(view);
    if (view === 'privacy') {
      window.history.pushState(null, '', '/politica-privacidad');
    } else if (view === 'terms') {
      window.history.pushState(null, '', '/terminos-y-condiciones');
    } else {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBrandSelect = (brand: string) => {
    setSelectedBrandFilter(brand);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#E30620] selection:text-white">
      {/* Sticky & Glass Navbar */}
      <Navbar
        currentView={currentView}
        onNavigateHome={() => navigateTo('home')}
        onNavigateLegal={(view) => navigateTo(view)}
      />

      {/* Main View Display */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <BrandBar onSelectBrand={handleBrandSelect} />
            <Catalog
              selectedBrandFilter={selectedBrandFilter}
              onBrandFilterChange={setSelectedBrandFilter}
            />
            <Financing />
            <ServiceWorkshop />
            <SpareParts />
            <AboutUs />
            <Contact />
          </>
        )}

        {currentView === 'privacy' && (
          <PrivacyPolicy onBack={() => navigateTo('home')} />
        )}

        {currentView === 'terms' && (
          <TermsAndConditions onBack={() => navigateTo('home')} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateHome={() => navigateTo('home')}
        onNavigateLegal={(view) => navigateTo(view)}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
