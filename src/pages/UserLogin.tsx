
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast';
import { User, Lock, Mail, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Form validation schema
const loginSchema = z.object({
  email: z.string().email({ message: "Hmm, that doesn't look like a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const UserLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  // Initialize the form with validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  // const onSubmit = (data: LoginFormValues) => {
  //   // In a real app, this would call an authentication API
  //   console.log('Login attempt with:', data);
    
  //   // Simulate successful login
  //   if (isLogin) {
  //     // Store in localStorage if remember me is checked
  //     if (data.rememberMe) {
  //       localStorage.setItem('userEmail', data.email);
  //     }
      
  //     toast({
  //       title: "Welcome back!",
  //       description: "You've successfully logged in",
  //     });
      
  //     // Redirect after successful login (delay for toast visibility)
  //     setTimeout(() => navigate('/'), 1500);
  //   } else {
  //     toast({
  //       title: "Account created!",
  //       description: "Your account has been successfully created. Please log in.",
  //     });
  //     setIsLogin(true);
  //   }
  // };

  const onSubmit = async (data: LoginFormValues) => {
    try {
        const formData = new URLSearchParams();
        formData.append("email", data.email);
        formData.append("password", data.password);

        const response = await fetch("http://localhost/your_project/backend/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
        });

        const result = await response.json();

        if (result.status === "success") {
            toast({
                title: "Welcome back!",
                description: result.message,
            });

            if (data.rememberMe) {
                localStorage.setItem("userEmail", data.email);
            }

            setTimeout(() => navigate("/"), 1500);
        } else {
            toast({
                title: "Login failed",
                description: result.message,
                variant: "destructive",
            });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
        });
    }
  };

  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                      {isLogin ? 'Welcome Back!' : 'Join FoodTruck Finder'}
                    </h2>
                    <p className="text-foodtruck-slate/70">
                      {isLogin 
                        ? 'Sign in to discover amazing food trucks' 
                        : 'Create an account to discover amazing food trucks'}
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
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      {!isLogin && (
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-1">
                              <FormLabel className="text-sm font-medium text-foodtruck-slate">
                                Full Name
                              </FormLabel>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <User className="h-5 w-5 text-foodtruck-slate/40" />
                                </div>
                                <Input
                                  placeholder="Your Name"
                                  className="pl-10"
                                  type="text"
                                />
                              </div>
                            </FormItem>
                          )}
                        />
                      )}
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormLabel className="text-sm font-medium text-foodtruck-slate">
                              Email
                            </FormLabel>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-foodtruck-slate/40" />
                              </div>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="email@example.com"
                                  className="pl-10"
                                  type="email"
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <div className="flex items-center justify-between">
                              <FormLabel className="text-sm font-medium text-foodtruck-slate">
                                Password
                              </FormLabel>
                              {isLogin && (
                                <Link to="#" className="text-xs text-foodtruck-teal hover:text-foodtruck-gold transition-colors">
                                  Forgot password?
                                </Link>
                              )}
                            </div>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-foodtruck-slate/40" />
                              </div>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="••••••••"
                                  className="pl-10 pr-10"
                                  type={showPassword ? "text" : "password"}
                                />
                              </FormControl>
                              <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              >
                                {showPassword ? (
                                  <EyeOff className="h-5 w-5 text-foodtruck-slate/40 hover:text-foodtruck-slate/70" />
                                ) : (
                                  <Eye className="h-5 w-5 text-foodtruck-slate/40 hover:text-foodtruck-slate/70" />
                                )}
                              </button>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {isLogin && (
                        <FormField
                          control={form.control}
                          name="rememberMe"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-medium text-foodtruck-slate/80">
                                  Remember me
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      )}
                      
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
                  </Form>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-foodtruck-slate/70">
                      {isLogin ? "Don't have an account yet?" : "Already have an account?"}
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
                    alt="Food Trucks"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-foodtruck-slate/50 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-foodtruck-slate mb-2">
                    Discover Food Adventures
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-foodtruck-gold/20 flex items-center justify-center mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-foodtruck-gold"></span>
                      </span>
                      <span className="ml-2 text-sm text-foodtruck-slate/80">
                        Find and follow your favorite food trucks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-foodtruck-gold/20 flex items-center justify-center mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-foodtruck-gold"></span>
                      </span>
                      <span className="ml-2 text-sm text-foodtruck-slate/80">
                        Get notifications about special offers near you
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-foodtruck-gold/20 flex items-center justify-center mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-foodtruck-gold"></span>
                      </span>
                      <span className="ml-2 text-sm text-foodtruck-slate/80">
                        Save your favorite trucks and create food adventures
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

export default UserLogin;
