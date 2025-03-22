
import React, { useRef } from 'react';
import EventCard from './EventCard';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for upcoming events
const upcomingEvents = [
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
];

const UpcomingEvents = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-16 bg-foodtruck-lightgray relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-foodtruck-gold/5 rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-foodtruck-teal/5 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foodtruck-slate mb-4">Upcoming Festivals & Events</h2>
            <p className="text-foodtruck-slate/80 max-w-2xl">
              Join these exciting food truck gatherings and taste a world of flavors.
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full border border-foodtruck-slate/20 hover:bg-white hover:border-foodtruck-teal transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-foodtruck-slate" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full border border-foodtruck-slate/20 hover:bg-white hover:border-foodtruck-teal transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-foodtruck-slate" />
            </button>
          </div>
        </div>
        
        {/* Scrollable container for event cards */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-6 no-scrollbar"
        >
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-[300px]">
              <EventCard
                id={event.id}
                title={event.title}
                image={event.image}
                date={event.date}
                location={event.location}
                truckCount={event.truckCount}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/events" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foodtruck-teal text-white font-medium shadow-lg hover:bg-foodtruck-slate transition-colors group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-foodtruck-gold group-hover:translate-x-0"></span>
            <span className="relative">View All Events</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
