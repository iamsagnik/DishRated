
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { Calendar, ChevronDown, Filter, ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// More mock data for events
const mockEvents = [
  {
    id: '1',
    title: 'Downtown Food Festival',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: new Date('2023-10-15'),
    location: 'Central Park, Downtown',
    truckCount: 18,
  },
  {
    id: '2',
    title: 'Waterfront Eats & Beats',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: new Date('2023-10-22'),
    location: 'Harbor View Park',
    truckCount: 12,
  },
  {
    id: '3',
    title: 'International Street Food Fair',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: new Date('2023-11-05'),
    location: 'Convention Center Plaza',
    truckCount: 25,
  },
  {
    id: '4',
    title: 'Taste of Fall Market',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    date: new Date('2023-11-12'),
    location: 'Riverside Gardens',
    truckCount: 15,
  },
  {
    id: '5',
    title: 'Winter Food Truck Rally',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80',
    date: new Date('2023-12-03'),
    location: 'City Square',
    truckCount: 20,
  },
  {
    id: '6',
    title: 'Holiday Food Extravaganza',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
    date: new Date('2023-12-17'),
    location: 'Main Street Plaza',
    truckCount: 30,
  },
  {
    id: '7',
    title: 'Spring Culinary Festival',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    date: new Date('2024-04-05'),
    location: 'Botanical Gardens',
    truckCount: 22,
  },
  {
    id: '8',
    title: 'Beachside Food Truck Fiesta',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: new Date('2024-06-18'),
    location: 'Oceanview Beach',
    truckCount: 16,
  },
  {
    id: '9',
    title: 'Summer Night Market',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: new Date('2024-07-22'),
    location: 'Downtown Plaza',
    truckCount: 28,
  },
];

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFilter, setDateFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const eventsPerPage = 6;
  const totalPages = Math.ceil(mockEvents.length / eventsPerPage);
  
  // Filter events based on search query
  const filteredEvents = mockEvents.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Paginate events
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleDateFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDateFilter(e.target.value);
    toast({
      title: "Filter Applied",
      description: `Events filtered by: ${e.target.options[e.target.selectedIndex].text}`,
    });
  };
  
  const handleFilterClick = () => {
    toast({
      title: "Filters",
      description: "Additional filter options will be available soon!",
    });
  };
  
  const handleNotifyMe = (eventTitle: string) => {
    toast({
      title: "Notification Set",
      description: `You'll be notified about updates for "${eventTitle}"`,
    });
  };
  
  const handleViewDetails = (eventId: string) => {
    toast({
      title: "Event Details",
      description: "Full event details page coming soon!",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with gold and coral styling */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl font-bold text-foodtruck-teal mb-4">
              Food Truck Events & Festivals
            </h1>
            <p className="max-w-2xl mx-auto text-foodtruck-slate/80 relative inline-block">
              <span className="relative z-10">Discover upcoming food truck gatherings, festivals, and special events in your area.</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-foodtruck-gold opacity-50"></span>
            </p>
          </div>
          
          {/* Filter Bar */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-10 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-foodtruck-slate/50" />
                </div>
                <select 
                  className="pl-10 pr-10 py-2 border border-foodtruck-slate/20 rounded-lg text-foodtruck-slate focus:outline-none focus:ring-2 focus:ring-foodtruck-teal/50 appearance-none bg-transparent"
                  value={dateFilter}
                  onChange={handleDateFilterChange}
                >
                  <option value="all">All Dates</option>
                  <option value="this-week">This Week</option>
                  <option value="this-month">This Month</option>
                  <option value="next-month">Next Month</option>
                  <option value="custom">Custom Range</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-foodtruck-slate/50" />
                </div>
              </div>
              
              <Button 
                onClick={handleFilterClick}
                variant="outline" 
                className="flex items-center px-4 py-2 border border-foodtruck-slate/20 rounded-lg text-foodtruck-slate hover:bg-foodtruck-lightgray/50"
              >
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
            
            <div className="flex justify-end">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-foodtruck-slate/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 px-4 py-2 border border-foodtruck-slate/20 rounded-lg text-foodtruck-slate placeholder:text-foodtruck-slate/50 focus:outline-none focus:ring-2 focus:ring-foodtruck-teal/50 w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedEvents.length > 0 ? (
              paginatedEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  <EventCard
                    id={event.id}
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    location={event.location}
                    truckCount={event.truckCount}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-foodtruck-slate/70 text-lg">No events found matching your search. Try different keywords.</p>
              </div>
            )}
          </div>
          
          {/* Pagination */}
          {filteredEvents.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-l-md border border-foodtruck-slate/20 bg-white text-foodtruck-slate hover:bg-foodtruck-lightgray/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                
                {Array.from({ length: Math.min(totalPages, 3) }).map((_, i) => {
                  let pageNum = i + 1;
                  
                  // Logic for showing correct page numbers when we have more than 3 pages
                  if (totalPages > 3) {
                    if (currentPage > 2) {
                      if (i === 0) pageNum = currentPage - 1;
                      if (i === 1) pageNum = currentPage;
                      if (i === 2) pageNum = Math.min(currentPage + 1, totalPages);
                    }
                  }
                  
                  return (
                    <button
                      key={i}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-4 py-2 border-t border-b border-foodtruck-slate/20 ${
                        currentPage === pageNum 
                          ? "bg-foodtruck-gold text-foodtruck-slate" 
                          : "bg-white text-foodtruck-slate hover:bg-foodtruck-lightgray/50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-r-md border border-foodtruck-slate/20 bg-white text-foodtruck-slate hover:bg-foodtruck-lightgray/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
