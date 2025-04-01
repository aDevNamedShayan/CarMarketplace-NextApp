import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Heart } from 'lucide-react';
import clsx from 'clsx';
import HeroSecImage from "@/assets/HeroSection.webp"

interface AuctionCard {
  id: number;
  image: string;
  title: string;
  year: number;
  mileage: string;
  timeLeft: string;
  currentBid: number;
  bids: number;
}

const auctions: AuctionCard[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&auto=format&fit=crop&q=60",
    title: "BMW M3 Competition",
    year: 2021,
    mileage: "12,500 miles",
    timeLeft: "3 days",
    currentBid: 65000,
    bids: 23
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&auto=format&fit=crop&q=60",
    title: "Porsche 911 Carrera S",
    year: 2020,
    mileage: "8,900 miles",
    timeLeft: "2 days",
    currentBid: 89000,
    bids: 45
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=60",
    title: "Mercedes-AMG GT",
    year: 2019,
    mileage: "15,200 miles",
    timeLeft: "4 days",
    currentBid: 72000,
    bids: 31
  },
];

export function NavLink({ children, className, href }: { children: React.ReactNode; className?: string, href?: string }) {
  return (
    <Link href={href || '#'} className={clsx("text-gray-300 hover:text-white font-medium", className)}>
      {children}
    </Link>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-secondary-light">

      {/* Hero Section */}
      <div className="relative bg-secondary h-[500px] flex items-center justify-center">
        <Image
          src={HeroSecImage}
          alt="Hero car"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          fill
        />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Car</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Discover unique and enthusiast vehicles through our curated online auctions.</p>
          <div className="flex justify-center gap-4">
            <Link href='/auctions' className="bg-primary text-secondary px-8 py-3 rounded-md font-semibold hover:bg-primary-hover transition-colors">
              Browse Auctions
            </Link>
            <button className="bg-white text-secondary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Sell Your Car
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-10 py-6 bg-secondary">
        {/* Featured Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Auctions</h2>
            <button className="text-primary font-medium hover:text-primary-hover">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auctions.map((auction) => (
              <div key={auction.id} className="bg-secondary-light rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative pb-[66%]">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{auction.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <span>{auction.year}</span>
                    <span className="mx-2">•</span>
                    <span>{auction.mileage}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-600">Current Bid</p>
                      <p className="text-xl font-bold">${auction.currentBid.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">{auction.timeLeft} left</p>
                      <p className="text-sm text-gray-600">{auction.bids} bids</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Sports Cars', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60' },
              { name: 'SUVs & Trucks', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60' },
              { name: 'Classic Cars', image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&auto=format&fit=crop&q=60' },
              { name: 'Luxury', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=60' },
            ].map((category) => (
              <a
                key={category.name}
                href="#"
                className="relative rounded-xl overflow-hidden group"
              >
                <div className="relative pb-[100%]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Find Your Car',
                description: 'Browse through our curated selection of enthusiast vehicles.',
                icon: '🔍'
              },
              {
                title: 'Place Your Bid',
                description: 'Participate in our exciting auctions with other car enthusiasts.',
                icon: '🏷️'
              },
              {
                title: 'Win & Drive',
                description: 'Complete your purchase and drive home in your dream car.',
                icon: '🚗'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-secondary rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Sell Your Car?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied sellers who have found the perfect buyers for their vehicles on Cars & Bids.</p>
          <button className="bg-primary text-secondary px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-hover transition-colors">
            Start Your Auction
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">About</h3>
              <ul className="space-y-2">
                <li><NavLink>How it Works</NavLink></li>
                <li><NavLink>Team</NavLink></li>
                <li><NavLink>Press</NavLink></li>
                <li><NavLink>Careers</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Sell</h3>
              <ul className="space-y-2">
                <li><NavLink>Submit Your Car</NavLink></li>
                <li><NavLink>Photography Guide</NavLink></li>
                <li><NavLink>Success Stories</NavLink></li>
                <li><NavLink>Seller FAQ</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Buy</h3>
              <ul className="space-y-2">
                <li><NavLink>How to Bid</NavLink></li>
                <li><NavLink>Buyer FAQ</NavLink></li>
                <li><NavLink>Shipping</NavLink></li>
                <li><NavLink>Financing</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li><NavLink>Support</NavLink></li>
                <li><NavLink>Feedback</NavLink></li>
                <li><NavLink>Terms of Service</NavLink></li>
                <li><NavLink>Privacy Policy</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Cars & Bids Clone. This is a practice project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;