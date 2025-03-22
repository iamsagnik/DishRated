
import React from 'react';
import { Calendar, MapPin, Users, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: Date;
  location: string;
  truckCount: number;
  className?: string;
}

const EventCard = ({
  id,
  title,
  image,
  date,
  location,
  truckCount,
  className,
}: EventCardProps) => {
  const navigate = useNavigate();

  // Navigate to event details page
  const handleViewDetails = () => {
    navigate(`/events?event=${id}`);
    // Give user feedback that their action worked
    toast({
      title: "Event Details",
      description: `Viewing details for "${title}"`,
    });
  };

  // Handle notification subscription - just a toast for now
  // TODO: Hook this up to a real notification system later
  const handleNotifyMe = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click from triggering too
    toast({
      title: "Notification Set",
      description: `You'll be notified about updates for "${title}"`,
    });
  };

  return (
    <div 
      onClick={handleViewDetails}
      className={cn(
        "relative group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 cursor-pointer",
        "hover:shadow-xl hover:-translate-y-1 hover:-rotate-1", // Fun little tilt effect on hover
        className
      )}
    >
      {/* Event image with overlay gradient */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Date badge - key info that users need */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-foodtruck-slate rounded-lg px-3 py-1 shadow-lg transform transition-transform duration-300 group-hover:scale-105">
          <div className="flex items-center text-sm font-medium">
            <Calendar className="h-3.5 w-3.5 mr-1.5 text-foodtruck-teal" />
            {format(date, 'MMM d, yyyy')}
          </div>
        </div>
      </div>
      
      {/* Event details */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium text-foodtruck-slate mb-2 group-hover:text-foodtruck-teal transition-colors">
          {title}
        </h3>
        
        {/* Location and truck count - details people care about */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <MapPin className="h-4 w-4 text-foodtruck-slate/70 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-foodtruck-slate/80">{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-foodtruck-slate/70 mr-2 flex-shrink-0" />
            <span className="text-sm text-foodtruck-slate/80">{truckCount} food trucks participating</span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <button 
            onClick={handleViewDetails}
            className="text-sm font-medium text-foodtruck-teal hover:text-foodtruck-slate transition-colors"
          >
            View Details
          </button>
          
          {/* Notification button with nice hover effect */}
          <button 
            onClick={handleNotifyMe}
            className="inline-flex items-center rounded-full border border-foodtruck-teal px-3 py-1 text-xs font-medium text-foodtruck-teal hover:bg-foodtruck-teal hover:text-white transition-colors group"
          >
            <Bell className="mr-1 h-3 w-3 group-hover:text-white" />
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
