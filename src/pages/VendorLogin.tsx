
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { User, Lock, Mail, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const VendorLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simulate login
      toast({
        title: "Login Successful",
        description: `Welcome back, ${email}!`,
      });
    } else {
      // Simulate registration
      toast({
        title: "Registration Successful",
        description: `Welcome to FoodTruck Finder, ${name}! Your vendor account for "${businessName}" has been created.`,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 bg-foodtruck-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left Column - Form */}
            <div className="w-full lg:w-1/2 max-w-md">
              <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-foodtruck-teal/5 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-foodtruck-gold/10 rounded-full"></div>
                
                <div className="relative">
                  <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl font-bold text-foodtruck-slate mb-2">
                      {isLogin ? 'Vendor Login' : 'Register as Vendor'}
                    </h2>
                    <p className="text-foodtruck-slate/70">
                      {isLogin 
                        ? 'Sign in to manage your food truck business' 
                        : 'Create an account to get started with your food truck business'}
                    </p>
                  </div>
                  
                  <div className="flex rounded-lg bg-foodtruck-lightgray p-1 mb-8">
                    <button
                      className={cn(
                        "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                        isLogin
                          ? "bg-white shadow-sm text-foodtruck-slate"
                          : "text-foodtruck-slate/70 hover:text-foodtruck-slate"
                      )}
                      onClick={() => setIsLogin(true)}
                    >
                      Login
                    </button>
                    <button
                      className={cn(
                        "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                        !isLogin
                          ? "bg-white shadow-sm text-foodtruck-slate"
                          : "text-foodtruck-slate/70 hover:text-foodtruck-slate"
                      )}
                      onClick={() => setIsLogin(false)}
                    >
                      Register
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {!isLogin && (
                      <>
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foodtruck-slate" htmlFor="name">
                            Full Name
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-foodtruck-slate/40" />
                            </div>
                            <Input
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              placeholder="Your Name"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foodtruck-slate" htmlFor="businessName">
                            Business Name
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-foodtruck-slate/40" />
                            </div>
                            <Input
                              id="businessName"
                              value={businessName}
                              onChange={(e) => setBusinessName(e.target.value)}
                              type="text"
                              placeholder="Your Food Truck Name"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}
                    
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-foodtruck-slate" htmlFor="email">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-foodtruck-slate/40" />
                        </div>
                        <Input
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="email@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foodtruck-slate" htmlFor="password">
                          Password
                        </label>
                        {isLogin && (
                          <a href="#" className="text-xs text-foodtruck-teal hover:text-foodtruck-gold transition-colors">
                            Forgot password?
                          </a>
                        )}
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-foodtruck-slate/40" />
                        </div>
                        <Input
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-foodtruck-teal text-white hover:bg-foodtruck-teal/90 group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-foodtruck-gold group-hover:translate-x-0"></span>
                      <span className="relative flex items-center justify-center">
                        {isLogin ? 'Login' : 'Create Account'}
                        <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </form>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-foodtruck-slate/70">
                      {isLogin ? "Don't have a vendor account?" : "Already have an account?"}
                      <button
                        type="button"
                        className="ml-1 text-foodtruck-teal hover:text-foodtruck-gold transition-colors"
                        onClick={() => setIsLogin(!isLogin)}
                      >
                        {isLogin ? 'Register now' : 'Login now'}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image/Info */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    alt="Food Truck"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-foodtruck-slate/50 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-foodtruck-slate mb-2">
                    Grow Your Food Truck Business
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-foodtruck-gold/20 flex items-center justify-center mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-foodtruck-gold"></span>
                      </span>
                      <span className="ml-2 text-sm text-foodtruck-slate/80">
                        Reach thousands of hungry customers in your area
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-foodtruck-gold/20 flex items-center justify-center mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-foodtruck-gold"></span>
                      </span>
                      <span className="ml-2 text-sm text-foodtruck-slate/80">
                        Manage your schedule and locations with our easy tools
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-foodtruck-gold/20 flex items-center justify-center mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-foodtruck-gold"></span>
                      </span>
                      <span className="ml-2 text-sm text-foodtruck-slate/80">
                        Participate in popular events and increase your visibility
                      </span>
                    </li>
                  </ul>
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

export default VendorLogin;
