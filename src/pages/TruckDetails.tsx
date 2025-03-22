
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  Instagram, 
  Twitter, 
  Heart, 
  Share2,
  Calendar,
  DollarSign,
  Truck
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock food truck data map with different trucks
const mockTruckDataMap = {
  // Taco Haven (from nearby trucks)
  'taco-haven': {
    id: 'taco-haven',
    name: 'Taco Haven',
    description: 'Authentic Mexican street food with a modern twist. Our chef uses traditional family recipes with locally-sourced ingredients to create unforgettable tacos, burritos, and quesadillas.',
    images: [
      'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      'https://images.unsplash.com/photo-1511689660979-10d2b1aada68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    ],
    cuisine: 'Mexican',
    rating: 4.8,
    reviewCount: 132,
    phone: '(555) 123-4567',
    website: 'www.tacohaven.com',
    socials: {
      instagram: '@tacohaven',
      twitter: '@tacohaven',
    },
    schedule: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', location: 'Downtown Park' },
      { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', location: 'Harbor View' },
      { day: 'Thursday', hours: '11:00 AM - 8:00 PM', location: 'Tech Campus' },
      { day: 'Friday', hours: '11:00 AM - 10:00 PM', location: 'Arts District' },
      { day: 'Saturday', hours: '12:00 PM - 10:00 PM', location: 'Farmers Market' },
      { day: 'Sunday', hours: '12:00 PM - 6:00 PM', location: 'Riverside Park' },
    ],
    menu: [
      {
        category: 'Tacos',
        items: [
          { name: 'Carne Asada Taco', description: 'Grilled marinated steak with onions, cilantro, and salsa verde', price: 350 },
          { name: 'Pollo Taco', description: 'Seasoned chicken with pico de gallo and avocado crema', price: 300 },
          { name: 'Pescado Taco', description: 'Beer-battered fish with cabbage slaw and chipotle aioli', price: 370 },
          { name: 'Vegetariano Taco', description: 'Roasted vegetables, black beans, and queso fresco', price: 280 },
        ]
      },
      {
        category: 'Burritos',
        items: [
          { name: 'Super Burrito', description: 'Your choice of protein with rice, beans, cheese, sour cream, and guacamole', price: 720 },
          { name: 'California Burrito', description: 'Carne asada, french fries, cheese, pico de gallo, and guacamole', price: 800 },
        ]
      },
      {
        category: 'Sides',
        items: [
          { name: 'Chips & Salsa', description: 'House-made tortilla chips with fresh salsa', price: 270 },
          { name: 'Guacamole', description: 'Fresh avocado with lime, cilantro, and spices', price: 350 },
          { name: 'Elote', description: 'Mexican street corn with mayo, cotija cheese, and chile powder', price: 300 },
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Agua Fresca', description: 'Daily selection of fresh fruit water', price: 220 },
          { name: 'Mexican Coca-Cola', description: 'Made with real cane sugar', price: 180 },
          { name: 'Horchata', description: 'Sweet rice milk with cinnamon', price: 270 },
        ]
      },
    ],
  },
  
  // Seoul Food (from nearby trucks)
  'seoul-food': {
    id: 'seoul-food',
    name: 'Seoul Food',
    description: 'Authentic Korean street food with modern fusion flavors. We bring the vibrant tastes of Seoul to your neighborhood with fresh, locally-sourced ingredients.',
    images: [
      'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80',
      'https://images.unsplash.com/photo-1533007716222-4b465613a984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    ],
    cuisine: 'Korean',
    rating: 4.5,
    reviewCount: 89,
    phone: '(555) 234-5678',
    website: 'www.seoulfoodtruck.com',
    socials: {
      instagram: '@seoulfoodtruck',
      twitter: '@seoulfoodtruck',
    },
    schedule: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '11:00 AM - 7:00 PM', location: 'Business District' },
      { day: 'Wednesday', hours: '11:00 AM - 7:00 PM', location: 'Tech Park' },
      { day: 'Thursday', hours: '11:00 AM - 7:00 PM', location: 'University Campus' },
      { day: 'Friday', hours: '11:00 AM - 9:00 PM', location: 'Food Truck Alley' },
      { day: 'Saturday', hours: '12:00 PM - 9:00 PM', location: 'Weekend Market' },
      { day: 'Sunday', hours: '12:00 PM - 6:00 PM', location: 'City Park' },
    ],
    menu: [
      {
        category: 'Bowls',
        items: [
          { name: 'Bibimbap', description: 'Mixed rice bowl with vegetables, beef, egg, and gochujang sauce', price: 420 },
          { name: 'Bulgogi Bowl', description: 'Marinated beef with rice, kimchi, and vegetables', price: 480 },
          { name: 'Tofu Bowl', description: 'Crispy tofu with rice, vegetables, and spicy sauce', price: 380 },
        ]
      },
      {
        category: 'Street Food',
        items: [
          { name: 'Tteokbokki', description: 'Spicy rice cakes with fish cakes and vegetables', price: 320 },
          { name: 'Mandu', description: 'Korean dumplings filled with pork and vegetables', price: 350 },
          { name: 'Korean Fried Chicken', description: 'Crispy fried chicken with sweet and spicy glaze', price: 420 },
        ]
      },
      {
        category: 'Sides',
        items: [
          { name: 'Kimchi', description: 'Traditional fermented cabbage', price: 180 },
          { name: 'Japchae', description: 'Sweet potato noodles with vegetables', price: 290 },
          { name: 'Kimbap', description: 'Korean rice rolls with vegetables and beef', price: 320 },
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Sikhye', description: 'Sweet rice punch', price: 220 },
          { name: 'Soju Cocktail', description: 'Korean soju with fruit flavors', price: 350 },
          { name: 'Milkis', description: 'Korean yogurt soda', price: 190 },
        ]
      },
    ],
  },
  
  // Curry Cruiser (from nearby trucks)
  'curry-cruiser': {
    id: 'curry-cruiser',
    name: 'Curry Cruiser',
    description: 'Experience the rich flavors of India with our authentic curries, biryanis, and appetizers. Our chef brings generations of family recipes to create a taste of Indian cuisine that combines tradition with modern flair.',
    images: [
      'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2036&q=80',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    ],
    cuisine: 'Indian',
    rating: 4.7,
    reviewCount: 76,
    phone: '(555) 345-6789',
    website: 'www.currycruiser.com',
    socials: {
      instagram: '@currycruiser',
      twitter: '@currycruiser',
    },
    schedule: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '11:30 AM - 8:00 PM', location: 'Central Square' },
      { day: 'Wednesday', hours: '11:30 AM - 8:00 PM', location: 'Innovation Hub' },
      { day: 'Thursday', hours: '11:30 AM - 8:00 PM', location: 'Office Park' },
      { day: 'Friday', hours: '11:30 AM - 9:00 PM', location: 'Waterfront' },
      { day: 'Saturday', hours: '12:00 PM - 9:00 PM', location: 'Community Market' },
      { day: 'Sunday', hours: '12:00 PM - 7:00 PM', location: 'Cultural Festival Grounds' },
    ],
    menu: [
      {
        category: 'Curries',
        items: [
          { name: 'Butter Chicken', description: 'Tender chicken in a creamy tomato sauce', price: 420 },
          { name: 'Chana Masala', description: 'Chickpeas cooked with aromatic spices', price: 370 },
          { name: 'Lamb Rogan Josh', description: 'Tender lamb in a rich Kashmiri spice gravy', price: 480 },
          { name: 'Paneer Tikka Masala', description: 'Cottage cheese in a spiced tomato gravy', price: 390 },
        ]
      },
      {
        category: 'Rice & Breads',
        items: [
          { name: 'Vegetable Biryani', description: 'Fragrant rice with mixed vegetables and spices', price: 340 },
          { name: 'Chicken Biryani', description: 'Fragrant rice with chicken and spices', price: 420 },
          { name: 'Garlic Naan', description: 'Bread with garlic and butter', price: 120 },
          { name: 'Plain Naan', description: 'Freshly baked bread', price: 90 },
        ]
      },
      {
        category: 'Starters',
        items: [
          { name: 'Samosas', description: 'Crispy pastry with spiced potato filling', price: 220 },
          { name: 'Onion Bhaji', description: 'Crispy onion fritters', price: 190 },
          { name: 'Vegetable Pakoras', description: 'Assorted vegetables in chickpea batter', price: 210 },
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mango Lassi', description: 'Yogurt drink with mango', price: 180 },
          { name: 'Masala Chai', description: 'Spiced Indian tea', price: 150 },
          { name: 'Sweet Lassi', description: 'Sweetened yogurt drink', price: 160 },
        ]
      },
    ],
  },

  // Pizza Wheels (from nearby trucks)
  'pizza-wheels': {
    id: 'pizza-wheels',
    name: 'Pizza Wheels',
    description: 'Artisanal pizzas baked to perfection in our mobile wood-fired oven. We create authentic Italian-style pizzas with a modern twist using fresh, locally-sourced ingredients.',
    images: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    ],
    cuisine: 'Italian',
    rating: 4.3,
    reviewCount: 45,
    phone: '(555) 456-7890',
    website: 'www.pizzawheels.com',
    socials: {
      instagram: '@pizzawheelstruck',
      twitter: '@pizzawheelstruck',
    },
    schedule: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', location: 'Financial District' },
      { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', location: 'Technology Park' },
      { day: 'Thursday', hours: '11:00 AM - 8:00 PM', location: 'Business Center' },
      { day: 'Friday', hours: '11:00 AM - 10:00 PM', location: 'Nightlife District' },
      { day: 'Saturday', hours: '12:00 PM - 10:00 PM', location: 'Weekend Bazaar' },
      { day: 'Sunday', hours: '12:00 PM - 7:00 PM', location: 'Family Park' },
    ],
    menu: [
      {
        category: 'Classic Pizzas',
        items: [
          { name: 'Margherita', description: 'Tomato sauce, mozzarella, fresh basil', price: 380 },
          { name: 'Pepperoni', description: 'Tomato sauce, mozzarella, pepperoni', price: 420 },
          { name: 'Quattro Formaggi', description: 'Four cheese pizza with mozzarella, gorgonzola, parmesan, and ricotta', price: 450 },
        ]
      },
      {
        category: 'Specialty Pizzas',
        items: [
          { name: 'Truffle Mushroom', description: 'Wild mushrooms, truffle oil, mozzarella, arugula', price: 490 },
          { name: 'BBQ Chicken', description: 'BBQ sauce, chicken, red onions, cilantro', price: 470 },
          { name: 'Mediterranean', description: 'Tomato sauce, feta, olives, bell peppers, artichokes', price: 450 },
        ]
      },
      {
        category: 'Sides',
        items: [
          { name: 'Garlic Knots', description: 'Twisted bread with garlic butter and parmesan', price: 210 },
          { name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmesan, caesar dressing', price: 290 },
          { name: 'Tomato Soup', description: 'Creamy tomato soup with basil', price: 240 },
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Italian Soda', description: 'Sparkling water with fruit syrup', price: 190 },
          { name: 'Limonata', description: 'Homemade lemonade with fresh mint', price: 220 },
          { name: 'Espresso', description: 'Classic Italian espresso', price: 140 },
        ]
      },
    ],
  },

  // Masala Magic (from trending trucks)
  'masala-magic': {
    id: 'masala-magic',
    name: 'Masala Magic',
    description: 'A culinary journey through North India with authentic spices and traditional recipes. Our chef brings generations of family secrets to create a magical experience of flavors and aromas.',
    images: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2045&q=80',
      'https://images.unsplash.com/photo-1596797038530-2c107aa4606c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80',
    ],
    cuisine: 'North Indian',
    rating: 4.9,
    reviewCount: 213,
    phone: '(555) 567-8901',
    website: 'www.masalamagic.com',
    socials: {
      instagram: '@masalamagictruck',
      twitter: '@masalamagictruck',
    },
    schedule: [
      { day: 'Monday', hours: '11:00 AM - 8:00 PM', location: 'City Center' },
      { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', location: 'Tech Hub' },
      { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', location: 'Business Park' },
      { day: 'Thursday', hours: '11:00 AM - 8:00 PM', location: 'University Area' },
      { day: 'Friday', hours: '11:00 AM - 9:00 PM', location: 'Downtown' },
      { day: 'Saturday', hours: '12:00 PM - 9:00 PM', location: 'Art District' },
      { day: 'Sunday', hours: '12:00 PM - 7:00 PM', location: 'Family Park' },
    ],
    menu: [
      {
        category: 'Curries',
        items: [
          { name: 'Butter Chicken', description: 'Tender chicken in a creamy tomato-based sauce', price: 420 },
          { name: 'Palak Paneer', description: 'Cottage cheese in a spinach gravy', price: 380 },
          { name: 'Lamb Curry', description: 'Tender lamb in a rich onion and tomato gravy', price: 480 },
          { name: 'Dal Makhani', description: 'Black lentils simmered with cream and spices', price: 350 },
        ]
      },
      {
        category: 'Breads & Rice',
        items: [
          { name: 'Garlic Naan', description: 'Leavened bread with garlic and butter', price: 100 },
          { name: 'Butter Naan', description: 'Leavened bread with butter', price: 90 },
          { name: 'Jeera Rice', description: 'Basmati rice with cumin seeds', price: 180 },
          { name: 'Chicken Biryani', description: 'Fragrant rice with chicken and spices', price: 420 },
        ]
      },
      {
        category: 'Appetizers',
        items: [
          { name: 'Vegetable Samosas', description: 'Crispy pastry with spiced potato filling', price: 220 },
          { name: 'Chicken Tikka', description: 'Grilled marinated chicken pieces', price: 350 },
          { name: 'Onion Bhaji', description: 'Crispy onion fritters', price: 200 },
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mango Lassi', description: 'Yogurt drink with mango pulp', price: 180 },
          { name: 'Masala Chai', description: 'Spiced Indian tea', price: 120 },
          { name: 'Rose Sherbet', description: 'Refreshing rose-flavored drink', price: 150 },
        ]
      },
    ],
  },

  // For the remaining trending trucks, let's add more data
  'chaat-chowk': {
    id: 'chaat-chowk',
    name: 'Chaat Chowk',
    description: 'Experience the vibrant street food flavors of India with our authentic chaats and snacks. Each dish bursts with a perfect balance of sweet, tangy, and spicy notes that will transport you straight to the bustling streets of Delhi.',
    images: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    ],
    cuisine: 'Street Food',
    rating: 4.7,
    reviewCount: 156,
    phone: '(555) 678-9012',
    website: 'www.chaatchowk.com',
    socials: {
      instagram: '@chaatchowktruck',
      twitter: '@chaatchowktruck',
    },
    schedule: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '12:00 PM - 8:00 PM', location: 'Business District' },
      { day: 'Wednesday', hours: '12:00 PM - 8:00 PM', location: 'Tech Campus' },
      { day: 'Thursday', hours: '12:00 PM - 8:00 PM', location: 'University Quarter' },
      { day: 'Friday', hours: '12:00 PM - 9:00 PM', location: 'Food Truck Park' },
      { day: 'Saturday', hours: '11:00 AM - 9:00 PM', location: 'Weekend Market' },
      { day: 'Sunday', hours: '11:00 AM - 7:00 PM', location: 'Cultural Festival' },
    ],
    menu: [
      {
        category: 'Chaats',
        items: [
          { name: 'Pani Puri', description: 'Crispy hollow shells filled with spiced water, potatoes, and chickpeas', price: 180 },
          { name: 'Bhel Puri', description: 'Puffed rice, vegetables, and tangy tamarind sauce', price: 160 },
          { name: 'Aloo Tikki Chaat', description: 'Potato patties with chickpeas, yogurt, and chutneys', price: 190 },
          { name: 'Papdi Chaat', description: 'Crispy wafers with yogurt, potatoes, and chutneys', price: 180 },
        ]
      },
      {
        category: 'Street Snacks',
        items: [
          { name: 'Samosa', description: 'Triangular pastry filled with spiced potatoes and peas', price: 120 },
          { name: 'Kachori', description: 'Fried pastry filled with spicy lentils', price: 130 },
          { name: 'Pav Bhaji', description: 'Spiced vegetable curry with buttered rolls', price: 220 },
        ]
      },
      {
        category: 'Rolls & Wraps',
        items: [
          { name: 'Paneer Kathi Roll', description: 'Flatbread wrap with cottage cheese and spices', price: 250 },
          { name: 'Chicken Kathi Roll', description: 'Flatbread wrap with grilled chicken and spices', price: 280 },
          { name: 'Aloo Tikki Wrap', description: 'Flatbread wrap with potato patty and chutneys', price: 220 },
        ]
      },
      {
        category: 'Beverages',
        items: [
          { name: 'Sweet Lassi', description: 'Sweetened yogurt drink', price: 150 },
          { name: 'Masala Chai', description: 'Spiced Indian tea', price: 120 },
          { name: 'Jal Jeera', description: 'Cumin-flavored refreshing drink', price: 110 },
        ]
      },
    ],
  },
  
  // Additional trending trucks (abbreviated for brevity)
  'mithai-junction': {
    id: 'mithai-junction',
    name: 'Mithai Junction',
    description: 'A sweet paradise featuring traditional Indian desserts made with authentic recipes. Our sweets are prepared daily with fresh ingredients and just the right amount of sweetness.',
    images: [
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2014&q=80',
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80',
      'https://images.unsplash.com/photo-1605197584662-8c0b8dc0fa5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    ],
    cuisine: 'Dessert',
    rating: 4.8,
    reviewCount: 178,
    phone: '(555) 789-0123',
    website: 'www.mithaijunction.com',
    socials: {
      instagram: '@mithaijunction',
      twitter: '@mithaijunction',
    },
    schedule: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '12:00 PM - 8:00 PM', location: 'Commercial Avenue' },
      { day: 'Wednesday', hours: '12:00 PM - 8:00 PM', location: 'Innovation Center' },
      { day: 'Thursday', hours: '12:00 PM - 8:00 PM', location: 'College Campus' },
      { day: 'Friday', hours: '12:00 PM - 9:00 PM', location: 'Shopping District' },
      { day: 'Saturday', hours: '11:00 AM - 9:00 PM', location: 'Cultural Fair' },
      { day: 'Sunday', hours: '11:00 AM - 7:00 PM', location: 'Festival Grounds' },
    ],
    menu: [
      {
        category: 'Traditional Sweets',
        items: [
          { name: 'Gulab Jamun', description: 'Soft milk solids balls soaked in sugar syrup', price: 120 },
          { name: 'Jalebi', description: 'Crispy swirls soaked in saffron sugar syrup', price: 100 },
          { name: 'Rasgulla', description: 'Soft cottage cheese balls in sugar syrup', price: 120 },
          { name: 'Kaju Katli', description: 'Diamond-shaped cashew fudge', price: 180 },
        ]
      },
      {
        category: 'Milk Specialties',
        items: [
          { name: 'Kulfi', description: 'Traditional Indian ice cream in various flavors', price: 150 },
          { name: 'Rasmalai', description: 'Cottage cheese patties in sweetened milk', price: 190 },
          { name: 'Rabri', description: 'Sweetened thickened milk with nuts', price: 160 },
        ]
      },
      {
        category: 'Snack Sweets',
        items: [
          { name: 'Besan Ladoo', description: 'Chickpea flour and ghee balls', price: 130 },
          { name: 'Mysore Pak', description: 'Ghee-based gram flour sweet', price: 140 },
          { name: 'Chum Chum', description: 'Cottage cheese sweet with coconut', price: 120 },
        ]
      },
      {
        category: 'Beverages',
        items: [
          { name: 'Masala Chai', description: 'Spiced Indian tea', price: 90 },
          { name: 'Badam Milk', description: 'Almond-flavored milk', price: 120 },
          { name: 'Thandai', description: 'Spiced milk drink with nuts', price: 130 },
        ]
      },
    ],
  },
  
  'dosa-darbar': {
    id: 'dosa-darbar',
    name: 'Dosa Darbar',
    description: 'Authentic South Indian cuisine featuring a variety of dosas, uttapams, and idlis. We bring the flavors of South India with traditional recipes and fresh ingredients.',
    images: [
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      'https://images.unsplash.com/photo-1610192244261-3f33de3f447e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    ],
    cuisine: 'South Indian',
    rating: 4.6,
    reviewCount: 124,
    phone: '(555) 890-1234',
    website: 'www.dosadarbar.com',
    socials: {
      instagram: '@dosadarbar',
      twitter: '@dosadarbar',
    },
    menu: [
      {
        category: 'Dosas',
        items: [
          { name: 'Masala Dosa', description: 'Crispy rice crepe filled with spiced potatoes', price: 240 },
          { name: 'Mysore Masala Dosa', description: 'Spicy crepe with red chutney and potato filling', price: 270 },
          { name: 'Plain Dosa', description: 'Classic crispy rice crepe', price: 190 },
          { name: 'Ghee Roast Dosa', description: 'Extra crispy dosa roasted with ghee', price: 280 },
        ]
      },
      {
        category: 'Uttapams',
        items: [
          { name: 'Onion Uttapam', description: 'Thick rice pancake with onions', price: 220 },
          { name: 'Mixed Vegetable Uttapam', description: 'Thick rice pancake with mixed vegetables', price: 240 },
          { name: 'Tomato Uttapam', description: 'Thick rice pancake with tomatoes', price: 220 },
        ]
      },
      {
        category: 'Idlis & Vadas',
        items: [
          { name: 'Idli Sambar', description: 'Steamed rice cakes with lentil soup', price: 180 },
          { name: 'Medu Vada', description: 'Savory fried lentil donuts', price: 150 },
          { name: 'Rava Idli', description: 'Semolina steamed cakes', price: 190 },
        ]
      },
      {
        category: 'Beverages',
        items: [
          { name: 'Filter Coffee', description: 'Traditional South Indian coffee', price: 120 },
          { name: 'Buttermilk', description: 'Spiced yogurt drink', price: 90 },
          { name: 'Badam Milk', description: 'Almond-flavored milk', price: 120 },
        ]
      },
    ],
    schedule: [
      { day: 'Monday', hours: '8:00 AM - 3:00 PM', location: 'Business Park' },
      { day: 'Tuesday', hours: '8:00 AM - 3:00 PM', location: 'Tech Campus' },
      { day: 'Wednesday', hours: '8:00 AM - 3:00 PM', location: 'Office Complex' },
      { day: 'Thursday', hours: '8:00 AM - 3:00 PM', location: 'University Area' },
      { day: 'Friday', hours: '8:00 AM - 3:00 PM', location: 'Commercial Center' },
      { day: 'Saturday', hours: '8:00 AM - 5:00 PM', location: 'Weekend Market' },
      { day: 'Sunday', hours: '8:00 AM - 2:00 PM', location: 'Farmers Market' },
    ],
  },

  'paratha-paradise': {
    id: 'paratha-paradise',
    name: 'Paratha Paradise',
    description: 'A taste of authentic North Indian parathas with a variety of fillings and accompaniments. Our parathas are made with whole wheat flour and fresh ingredients for a wholesome meal experience.',
    images: [
      'https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2017&q=80',
      'https://images.unsplash.com/photo-1605374857972-8d35b548d43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    ],
    cuisine: 'North Indian',
    rating: 4.5,
    reviewCount: 97,
    menu: [
      {
        category: 'Stuffed Parathas',
        items: [
          { name: 'Aloo Paratha', description: 'Whole wheat bread stuffed with spiced potatoes', price: 180 },
          { name: 'Paneer Paratha', description: 'Whole wheat bread stuffed with cottage cheese', price: 220 },
          { name: 'Gobi Paratha', description: 'Whole wheat bread stuffed with spiced cauliflower', price: 190 },
          { name: 'Mixed Vegetable Paratha', description: 'Whole wheat bread stuffed with mixed vegetables', price: 200 },
        ]
      },
      {
        category: 'Plain Parathas',
        items: [
          { name: 'Butter Paratha', description: 'Layered whole wheat bread with butter', price: 120 },
          { name: 'Laccha Paratha', description: 'Multi-layered flaky whole wheat bread', price: 140 },
          { name: 'Pudina Paratha', description: 'Whole wheat bread with mint', price: 150 },
        ]
      },
      {
        category: 'Accompaniments',
        items: [
          { name: 'Curd', description: 'Fresh homemade yogurt', price: 80 },
          { name: 'Pickle', description: 'Assorted Indian pickles', price: 60 },
          { name: 'Dal Fry', description: 'Yellow lentils with spices', price: 170 },
        ]
      },
      {
        category: 'Beverages',
        items: [
          { name: 'Lassi', description: 'Traditional Punjabi yogurt drink', price: 140 },
          { name: 'Masala Chai', description: 'Spiced Indian tea', price: 90 },
          { name: 'Jaljeera', description: 'Cumin flavored refreshing drink', price: 100 },
        ]
      },
    ],
    schedule: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', location: 'Downtown' },
      { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', location: 'Corporate Park' },
      { day: 'Thursday', hours: '11:00 AM - 8:00 PM', location: 'Tech Hub' },
      { day: 'Friday', hours: '11:00 AM - 9:00 PM', location: 'Food Court' },
      { day: 'Saturday', hours: '12:00 PM - 9:00 PM', location: 'Market Plaza' },
      { day: 'Sunday', hours: '12:00 PM - 7:00 PM', location: 'Community Park' },
    ],
    phone: '(555) 901-2345',
    website: 'www.parathaparadise.com',
    socials: {
      instagram: '@parathaparadise',
      twitter: '@parathaparadise',
    },
  },

  'lassi-lovers': {
    id: 'lassi-lovers',
    name: 'Lassi Lovers',
    description: 'Refreshing traditional Indian yogurt drinks in various flavors along with light snacks. Our lassis are made with fresh yogurt and natural ingredients for a perfect refreshment.',
    images: [
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1559831731-0a9fee373033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    ],
    cuisine: 'Beverages',
    rating: 4.4,
    reviewCount: 85,
    menu: [
      {
        category: 'Sweet Lassis',
        items: [
          { name: 'Mango Lassi', description: 'Yogurt blended with mango pulp and sugar', price: 160 },
          { name: 'Rose Lassi', description: 'Yogurt blended with rose syrup and sugar', price: 150 },
          { name: 'Malai Lassi', description: 'Creamy yogurt blended with sugar and topped with cream', price: 170 },
          { name: 'Strawberry Lassi', description: 'Yogurt blended with strawberry and sugar', price: 170 },
        ]
      },
      {
        category: 'Savory Lassis',
        items: [
          { name: 'Salted Lassi', description: 'Yogurt blended with salt and cumin', price: 130 },
          { name: 'Mint Lassi', description: 'Yogurt blended with fresh mint, salt, and spices', price: 140 },
          { name: 'Masala Lassi', description: 'Yogurt blended with traditional Indian spices', price: 150 },
        ]
      },
      {
        category: 'Snacks',
        items: [
          { name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes', price: 120 },
          { name: 'Kachori', description: 'Crispy pastry filled with spiced lentils', price: 130 },
          { name: 'Dhokla', description: 'Steamed savory cake made from fermented rice', price: 120 },
        ]
      },
      {
        category: 'Other Beverages',
        items: [
          { name: 'Masala Chai', description: 'Spiced Indian tea', price: 90 },
          { name: 'Shikanji', description: 'Indian-style lemonade with spices', price: 110 },
          { name: 'Aam Panna', description: 'Raw mango drink with spices', price: 120 },
        ]
      },
    ],
    schedule: [
      { day: 'Monday', hours: '10:00 AM - 7:00 PM', location: 'City Park' },
      { day: 'Tuesday', hours: '10:00 AM - 7:00 PM', location: 'Business District' },
      { day: 'Wednesday', hours: '10:00 AM - 7:00 PM', location: 'Corporate Campus' },
      { day: 'Thursday', hours: '10:00 AM - 7:00 PM', location: 'College Area' },
      { day: 'Friday', hours: '10:00 AM - 8:00 PM', location: 'Arts District' },
      { day: 'Saturday', hours: '11:00 AM - 8:00 PM', location: 'Weekend Market' },
      { day: 'Sunday', hours: '11:00 AM - 6:00 PM', location: 'Community Festival' },
    ],
    phone: '(555) 012-3456',
    website: 'www.lassilovers.com',
    socials: {
      instagram: '@lassilovers',
      twitter: '@lassilovers',
    },
  },
};

const TruckDetails = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState('menu');
  
  // Get the truck data based on ID or default to the first one if not found
  const truckData = mockTruckDataMap[id || 'taco-haven'] || mockTruckDataMap['taco-haven'];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Gallery */}
          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden h-[400px] shadow-lg">
              <img 
                src={truckData.images[activeImageIndex]} 
                alt={truckData.name}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {truckData.cuisine}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{truckData.rating}</span>
                    <span className="text-white/70 ml-1">({truckData.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <h1 className="font-serif text-3xl md:text-4xl font-bold">{truckData.name}</h1>
              </div>
              
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-foodtruck-slate hover:text-red-500" />
                </button>
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Share2 className="h-5 w-5 text-foodtruck-slate" />
                </button>
              </div>
            </div>
            
            <div className="flex mt-4 space-x-3 overflow-x-auto pb-2">
              {truckData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={cn(
                    "w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all",
                    activeImageIndex === index ? "ring-2 ring-foodtruck-teal" : "opacity-70 hover:opacity-100"
                  )}
                >
                  <img 
                    src={image} 
                    alt={`${truckData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  {['menu', 'schedule', 'reviews', 'about'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "py-4 px-1 font-medium text-sm border-b-2 transition-colors whitespace-nowrap",
                        activeTab === tab
                          ? "border-foodtruck-teal text-foodtruck-teal"
                          : "border-transparent text-foodtruck-slate/70 hover:text-foodtruck-slate hover:border-foodtruck-slate/30"
                      )}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="py-6">
                {activeTab === 'menu' && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foodtruck-slate mb-6">Menu</h2>
                    
                    <div className="space-y-10">
                      {truckData.menu.map((category) => (
                        <div key={category.category}>
                          <h3 className="font-medium text-xl text-foodtruck-slate mb-4 pb-2 border-b border-gray-200">
                            {category.category}
                          </h3>
                          <div className="space-y-4">
                            {category.items.map((item) => (
                              <div key={item.name} className="flex justify-between">
                                <div className="pr-4">
                                  <h4 className="font-medium text-foodtruck-slate">{item.name}</h4>
                                  <p className="text-sm text-foodtruck-slate/70 mt-1">{item.description}</p>
                                </div>
                                <div className="flex-shrink-0 font-medium text-foodtruck-slate">
                                  ₹{item.price}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'schedule' && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foodtruck-slate mb-6">Weekly Schedule</h2>
                    
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                      {truckData.schedule.map((day, index) => (
                        <div 
                          key={day.day}
                          className={cn(
                            "flex flex-col sm:flex-row sm:items-center p-4",
                            index < truckData.schedule.length - 1 && "border-b border-gray-200"
                          )}
                        >
                          <div className="sm:w-1/3 mb-2 sm:mb-0">
                            <div className="font-medium text-foodtruck-slate">{day.day}</div>
                          </div>
                          <div className="sm:w-1/3 mb-2 sm:mb-0">
                            <div className={cn(
                              "flex items-center",
                              day.hours === 'Closed' ? "text-red-500" : "text-green-600"
                            )}>
                              <Clock className="h-4 w-4 mr-2" />
                              {day.hours}
                            </div>
                          </div>
                          <div className="sm:w-1/3">
                            {day.location && (
                              <div className="flex items-center text-foodtruck-slate/80">
                                <MapPin className="h-4 w-4 mr-2" />
                                {day.location}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foodtruck-slate mb-6">Reviews</h2>
                    <p className="text-foodtruck-slate/80">
                      This would contain user reviews and ratings in a real implementation.
                    </p>
                  </div>
                )}
                
                {activeTab === 'about' && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foodtruck-slate mb-6">About</h2>
                    <p className="text-foodtruck-slate/80 mb-6">
                      {truckData.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-foodtruck-lightgray/50 rounded-lg p-4">
                        <h3 className="font-medium text-foodtruck-slate mb-3">Contact Information</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">{truckData.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Globe className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <a
                              href={`https://${truckData.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foodtruck-teal/80 hover:text-foodtruck-teal"
                            >
                              {truckData.website}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Instagram className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">{truckData.socials.instagram}</span>
                          </div>
                          <div className="flex items-center">
                            <Twitter className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">{truckData.socials.twitter}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-foodtruck-lightgray/50 rounded-lg p-4">
                        <h3 className="font-medium text-foodtruck-slate mb-3">Quick Info</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">Price: ₹₹ (Average)</span>
                          </div>
                          <div className="flex items-center">
                            <Truck className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">Founded: 2018</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">Average wait time: 5-10 minutes</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">Usually serves: Downtown area</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="font-medium text-lg text-foodtruck-slate mb-4">Current Location</h3>
                
                <div className="bg-foodtruck-lightgray rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-foodtruck-teal mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium text-foodtruck-slate">
                        {truckData.schedule.find(day => day.day === 'Friday')?.location || 'Downtown'}
                      </p>
                      <p className="text-sm text-foodtruck-slate/70">123 Main Street</p>
                      <p className="text-sm text-foodtruck-slate/70">
                        Open until {truckData.schedule.find(day => day.day === 'Friday')?.hours.split(' - ')[1] || '10:00 PM'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden h-40 mb-6">
                  {/* This would be a Google Maps embed in a real implementation */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-foodtruck-slate/70">
                    Map placeholder
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 rounded-lg bg-foodtruck-teal text-white font-medium hover:bg-foodtruck-slate transition-colors">
                    Pre-Order for Pickup
                  </button>
                  <button className="w-full px-4 py-3 rounded-lg border border-foodtruck-teal text-foodtruck-teal font-medium hover:bg-foodtruck-teal hover:text-white transition-colors">
                    Get Directions
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-foodtruck-slate mb-3">Next Scheduled At</h3>
                  
                  <div className="space-y-3">
                    {truckData.schedule.slice(1, 3).map((day, index) => (
                      day.hours !== 'Closed' && (
                        <div key={index} className="flex items-center">
                          <Calendar className="h-4 w-4 text-foodtruck-teal mr-2" />
                          <span className="text-sm font-medium text-foodtruck-slate">{day.day}</span>
                          <span className="mx-2 text-foodtruck-slate/30">•</span>
                          <span className="text-sm text-foodtruck-slate/80">{day.location}</span>
                        </div>
                      )
                    ))}
                  </div>
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

export default TruckDetails;
