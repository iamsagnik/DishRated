
import React, { useState } from 'react';
import FoodTruckCard from './FoodTruckCard';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

// Mock data for trending food trucks with Indian names
const trendingTrucks = [
  {
    id: 'masala-magic',
    name: 'Masala Magic',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80',
    cuisine: 'North Indian',
    rating: 4.9,
    reviewCount: 213,
    featured: true,
  },
  {
    id: 'chaat-chowk',
    name: 'Chaat Chowk',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    cuisine: 'Street Food',
    rating: 4.7,
    reviewCount: 156,
    featured: true,
  },
  {
    id: 'mithai-junction',
    name: 'Mithai Junction',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2014&q=80',
    cuisine: 'Dessert',
    rating: 4.8,
    reviewCount: 178,
    featured: false,
  },
  {
    id: 'dosa-darbar',
    name: 'Dosa Darbar',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    cuisine: 'South Indian',
    rating: 4.6,
    reviewCount: 124,
    featured: false,
  },
  {
    id: 'paratha-paradise',
    name: 'Paratha Paradise',
    image: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    cuisine: 'North Indian',
    rating: 4.5,
    reviewCount: 97,
    featured: false,
  },
  {
    id: 'lassi-lovers',
    name: 'Lassi Lovers',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    cuisine: 'Beverages',
    rating: 4.4,
    reviewCount: 85,
    featured: false,
  },
];

// Filter categories
const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'topRated', label: 'Top Rated' },
  { id: 'new', label: 'New Arrivals' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'dessert', label: 'Dessert' },
];

const TrendingTrucks = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  
  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    
    toast({
      title: "Filter Applied",
      description: `Showing ${filterId === 'all' ? 'all food trucks' : filterId + ' food trucks'}`,
    });
  };
  
  const handleExploreAll = () => {
    navigate('/find-trucks');
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foodtruck-slate mb-4">Trending Food Trucks</h2>
          <p className="max-w-2xl mx-auto text-foodtruck-slate/80">
            Discover the most popular and highly-rated food trucks in your area.
          </p>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === category.id
                    ? "bg-foodtruck-teal text-white shadow-md scale-105"
                    : "bg-gray-100 text-foodtruck-slate hover:bg-gray-200"
                )}
                onClick={() => handleFilterClick(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Grid of food truck cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trendingTrucks.map((truck, index) => (
            <div 
              key={truck.id} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <FoodTruckCard
                id={truck.id}
                name={truck.name}
                image={truck.image}
                cuisine={truck.cuisine}
                rating={truck.rating}
                reviewCount={truck.reviewCount}
                featured={truck.featured}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={handleExploreAll}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-foodtruck-teal text-foodtruck-teal font-medium hover:bg-foodtruck-teal hover:text-white transition-colors group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-foodtruck-gold group-hover:translate-x-0"></span>
            <span className="relative">Explore All Trending Trucks</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingTrucks;
