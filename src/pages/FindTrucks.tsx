
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Filter, List, Grid3X3, Search, X, ChevronDown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import TruckMap from '@/components/TruckMap';
import FoodTruckCard from '@/components/FoodTruckCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

// Mock data for food trucks with Indian names
const foodTrucks = [
  {
    id: '1',
    name: 'Spice Wala',
    image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    cuisine: 'North Indian',
    rating: 4.8,
    reviewCount: 132,
    distance: '0.3 mi',
    status: 'open' as const,
    waitTime: '5 min',
  },
  {
    id: '2',
    name: 'Chaat Express',
    image: 'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    cuisine: 'Street Food',
    rating: 4.5,
    reviewCount: 89,
    distance: '0.5 mi',
    status: 'open' as const,
    waitTime: '10 min',
  },
  {
    id: '3',
    name: 'Desi Dhaba',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    cuisine: 'Punjabi',
    rating: 4.7,
    reviewCount: 76,
    distance: '0.7 mi',
    status: 'open' as const,
    waitTime: '15 min',
  },
  {
    id: '4',
    name: 'Tandoori Nights',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    cuisine: 'Mughlai',
    rating: 4.3,
    reviewCount: 45,
    distance: '1.2 mi',
    status: 'open' as const,
    waitTime: '20 min',
  },
  {
    id: '5',
    name: 'Mumbai Local',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80',
    cuisine: 'Mumbai Street Food',
    rating: 4.9,
    reviewCount: 213,
    distance: '1.5 mi',
    status: 'open' as const,
    waitTime: '8 min',
  },
  {
    id: '6',
    name: 'Thali Junction',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    cuisine: 'South Indian',
    rating: 4.7,
    reviewCount: 156,
    distance: '1.7 mi',
    status: 'closed' as const,
    waitTime: '0 min',
  },
];

const cuisineTypes = [
  'All',
  'North Indian',
  'South Indian',
  'Street Food',
  'Punjabi',
  'Mughlai',
  'Biryani',
  'Vegetarian',
  'Desserts'
];

const FindTrucks = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>(['All']);
  const [priceFilter, setPriceFilter] = useState<string>('$');
  const [openOnly, setOpenOnly] = useState(true);
  
  const handleCuisineToggle = (cuisine: string) => {
    if (cuisine === 'All') {
      setSelectedCuisines(['All']);
      return;
    }
    
    let newSelected = [...selectedCuisines];
    // Remove 'All' if it's there
    newSelected = newSelected.filter(c => c !== 'All');
    
    if (newSelected.includes(cuisine)) {
      newSelected = newSelected.filter(c => c !== cuisine);
    } else {
      newSelected.push(cuisine);
    }
    
    // If nothing selected, default to 'All'
    if (newSelected.length === 0) {
      newSelected = ['All'];
    }
    
    setSelectedCuisines(newSelected);
  };
  
  const handleSearch = () => {
    toast({
      title: "Searching",
      description: `Found ${foodTrucks.length} food trucks matching your criteria`,
    });
  };
  
  const handleApplyFilters = () => {
    toast({
      title: "Filters Applied",
      description: `Applied filters: ${selectedCuisines.join(', ')}, Price: ${priceFilter}, ${openOnly ? 'Open Only' : 'All Trucks'}`,
    });
  };
  
  const handleResetFilters = () => {
    setSelectedCuisines(['All']);
    setPriceFilter('$');
    setOpenOnly(true);
    setSearchQuery('');
    
    toast({
      title: "Filters Reset",
      description: "All filters have been reset to default values",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="font-serif text-3xl font-bold text-foodtruck-slate mb-2">Find Food Trucks</h1>
              <p className="text-foodtruck-slate/80">
                Discover and filter food trucks in your area
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <button 
                onClick={() => toast({
                  title: "Filters",
                  description: "Opening filters panel for more options",
                })}
                className="inline-flex items-center px-4 py-2 rounded-lg border border-foodtruck-slate/20 text-foodtruck-slate hover:bg-foodtruck-lightgray"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
              <div className="flex items-center bg-white rounded-lg shadow-sm p-1 border border-foodtruck-slate/20">
                <button 
                  onClick={() => setViewMode('list')}
                  className={cn(
                    "p-1.5 rounded transition-colors",
                    viewMode === 'list' ? "text-foodtruck-teal" : "text-foodtruck-slate/70 hover:text-foodtruck-slate"
                  )}
                >
                  <List className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "p-1.5 rounded transition-colors",
                    viewMode === 'grid' ? "text-foodtruck-teal" : "text-foodtruck-slate/70 hover:text-foodtruck-slate"
                  )}
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Search bar */}
          <div className="mb-8">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-foodtruck-slate/50" />
              </div>
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for food trucks, cuisines, or dishes..."
                className="pl-10 pr-16 py-3 border-foodtruck-slate/20 rounded-full shadow-md"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                {searchQuery && (
                  <button 
                    className="mr-2"
                    onClick={() => setSearchQuery('')}
                  >
                    <X className="h-5 w-5 text-foodtruck-slate/50 hover:text-foodtruck-slate" />
                  </button>
                )}
                <button 
                  onClick={handleSearch}
                  className="bg-foodtruck-teal text-white p-1.5 rounded-full hover:bg-foodtruck-teal/90 transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="font-medium text-lg text-foodtruck-slate mb-4">Filters</h2>
                
                {/* Location */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-foodtruck-slate mb-2">Location</h3>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-4 w-4 text-foodtruck-slate/50" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Enter your location"
                      className="pl-10 pr-3 py-2 border-foodtruck-slate/20 rounded-lg"
                    />
                  </div>
                </div>
                
                {/* Distance */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-foodtruck-slate mb-2">Distance</h3>
                  <select className="block w-full px-3 py-2 border border-foodtruck-slate/20 rounded-lg text-foodtruck-slate focus:outline-none focus:ring-2 focus:ring-foodtruck-teal/50">
                    <option value="1">Within 1 mile</option>
                    <option value="3">Within 3 miles</option>
                    <option value="5" selected>Within 5 miles</option>
                    <option value="10">Within 10 miles</option>
                    <option value="25">Within 25 miles</option>
                  </select>
                </div>
                
                {/* Cuisine Type */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-foodtruck-slate mb-2">Cuisine Type</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {cuisineTypes.map((cuisine) => (
                      <label key={cuisine} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-foodtruck-slate/30 text-foodtruck-teal focus:ring-foodtruck-teal/40"
                          checked={selectedCuisines.includes(cuisine)}
                          onChange={() => handleCuisineToggle(cuisine)}
                        />
                        <span className="ml-2 text-sm text-foodtruck-slate/80">{cuisine}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-foodtruck-slate mb-2">Price Range</h3>
                  <div className="flex space-x-2">
                    {['$', '$$', '$$$'].map((price) => (
                      <button
                        key={price}
                        onClick={() => setPriceFilter(price)}
                        className={cn(
                          "flex-1 py-1.5 rounded border text-sm font-medium transition-colors",
                          priceFilter === price 
                            ? "bg-foodtruck-teal/10 border-foodtruck-teal text-foodtruck-teal"
                            : "border-foodtruck-slate/20 text-foodtruck-slate/70 hover:border-foodtruck-teal/50 hover:text-foodtruck-teal"
                        )}
                      >
                        {price}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Open Now */}
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-foodtruck-slate/30 text-foodtruck-teal focus:ring-foodtruck-teal/40"
                      checked={openOnly}
                      onChange={() => setOpenOnly(!openOnly)}
                    />
                    <span className="ml-2 text-sm text-foodtruck-slate/80">Open Now</span>
                  </label>
                </div>
                
                {/* Reset & Apply Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={handleResetFilters}
                    className="flex-1 px-4 py-2 rounded-lg border border-foodtruck-slate/20 text-foodtruck-slate hover:bg-foodtruck-lightgray transition-colors"
                  >
                    Reset
                  </button>
                  <button 
                    onClick={handleApplyFilters}
                    className="flex-1 px-4 py-2 rounded-lg bg-foodtruck-teal text-white hover:bg-foodtruck-slate transition-colors group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-foodtruck-gold group-hover:translate-x-0"></span>
                    <span className="relative">Apply</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Map & List View */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="h-[400px]">
                  <TruckMap />
                </div>
              </div>
              
              <div>
                <h2 className="font-medium text-lg text-foodtruck-slate mb-4">
                  Search Results
                  <span className="ml-2 text-sm font-normal text-foodtruck-slate/70">
                    {foodTrucks.length} trucks found
                  </span>
                </h2>
                
                {/* Food Truck List/Grid */}
                <div className={cn(
                  viewMode === 'grid' 
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                    : "space-y-6"
                )}>
                  {foodTrucks.map((truck) => (
                    <div key={truck.id} className="animate-fade-in">
                      {viewMode === 'grid' ? (
                        <FoodTruckCard
                          id={truck.id}
                          name={truck.name}
                          image={truck.image}
                          cuisine={truck.cuisine}
                          rating={truck.rating}
                          reviewCount={truck.reviewCount}
                          status={truck.status}
                          waitTime={truck.waitTime}
                        />
                      ) : (
                        <div className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="w-1/3 max-w-[180px]">
                            <img
                              src={truck.image}
                              alt={truck.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 p-4">
                            <h3 className="font-serif text-lg font-medium text-foodtruck-slate">
                              {truck.name}
                            </h3>
                            <div className="flex items-center mt-1">
                              <span className="text-xs px-2 py-0.5 bg-foodtruck-lightgray rounded-full text-foodtruck-slate/80">
                                {truck.cuisine}
                              </span>
                              <div className="flex items-center ml-2">
                                <Star className="h-4 w-4 text-foodtruck-gold mr-1" />
                                <span className="text-sm font-medium">{truck.rating}</span>
                                <span className="text-xs ml-1 text-foodtruck-slate/70">({truck.reviewCount})</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center">
                                <span className={cn(
                                  "w-2 h-2 rounded-full mr-1.5",
                                  truck.status === 'open' ? "bg-green-600" : "bg-red-500"
                                )}></span>
                                <span className="text-sm">
                                  {truck.status === 'open' ? 'Open Now' : 'Closed'}
                                </span>
                                {truck.status === 'open' && (
                                  <span className="text-xs text-foodtruck-slate/70 ml-2">
                                    • {truck.waitTime} wait
                                  </span>
                                )}
                              </div>
                              <span className="text-sm text-foodtruck-slate/80">
                                {truck.distance} away
                              </span>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => toast({
                                  title: "View Details",
                                  description: `Viewing details for ${truck.name}`,
                                })}
                                className="text-foodtruck-teal border-foodtruck-teal/30 hover:bg-foodtruck-teal/10"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button className="px-6 py-3 rounded-full bg-foodtruck-teal text-white font-medium hover:bg-foodtruck-slate transition-colors shadow-md">
                    Load More Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FindTrucks;
