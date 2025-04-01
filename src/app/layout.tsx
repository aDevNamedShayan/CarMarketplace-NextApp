import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./page";
import { Bell, ChevronDown, Heart, Menu, Search, User } from "lucide-react";
import Logo from '@/assets/Logo.png'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cars & Bids: Auction of modern cool cars, trucks and SUVs",
  description: "The go-to auction platform for no-reserve sales of enthusiastic cars! transparent, simple, and buyer-friendly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
      <header className="bg-secondary sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className='flex items-center w-32'>
                <Image src={Logo} alt='Cars & Bids Logo' />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href='/auctions'>Auctions</NavLink>
              <NavLink>Past Results</NavLink>
              <NavLink className="flex items-center">
                What&apos;s Cars & Bids? <ChevronDown className="ml-1 w-4 h-4" />
              </NavLink>
              <NavLink className="flex items-center">
                Sell a Car <ChevronDown className="ml-1 w-4 h-4" />
              </NavLink>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-secondary-light rounded-full">
                <Search className="w-5 h-5 text-gray-300" />
              </button>
              <button className="p-2 hover:bg-secondary-light rounded-full">
                <Heart className="w-5 h-5 text-gray-300" />
              </button>
              <button className="p-2 hover:bg-secondary-light rounded-full">
                <Bell className="w-5 h-5 text-gray-300" />
              </button>
              <button className="p-2 hover:bg-secondary-light rounded-full">
                <User className="w-5 h-5 text-gray-300" />
              </button>
              <button className="bg-primary hover:bg-primary-hover text-secondary px-4 py-2 rounded-md font-semibold">
                Sign Up
              </button>
              <button className="md:hidden p-2 hover:bg-secondary-light rounded-full">
                <Menu className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>
        {children}
      </body>
    </html>
  );
}
