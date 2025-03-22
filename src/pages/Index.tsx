
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NearbyTrucks from '@/components/NearbyTrucks';
import TrendingTrucks from '@/components/TrendingTrucks';
import UpcomingEvents from '@/components/UpcomingEvents';
import HowItWorks from '@/components/HowItWorks';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll helper - feels nicer than the abrupt jump
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Adding behavior:smooth for that nice scrolling effect
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Handle deep linking - check if URL has a hash and scroll to section
    // Added a small delay to ensure DOM is fully loaded
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      // Small timeout to let everything render first
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section at the top */}
        <Hero />
        
        {/* Main content sections with id anchors for navigation */}
        <div id="nearby-trucks">
          <NearbyTrucks />
        </div>
        
        <div id="trending-trucks">
          <TrendingTrucks />
        </div>
        
        <div id="upcoming-events">
          <UpcomingEvents />
        </div>
        
        <div id="how-it-works">
          <HowItWorks />
        </div>
        
        <div id="newsletter">
          <Newsletter />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
