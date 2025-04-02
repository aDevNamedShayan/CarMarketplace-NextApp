// app/page.tsx
import { ChevronDown, Star, Clock } from 'lucide-react';
import Image from 'next/image'; // Using next/image for optimization


// Helper component for Auction Cards (makes the main component cleaner)
const AuctionCard = ({
  imageUrl,
  timeLeft,
  bidAmount,
  year,
  make,
  model,
  description,
  isFeatured = false,
  isInspected = false,
  hasStar = false,
}: {
  imageUrl: string;
  timeLeft: string;
  bidAmount: string;
  year: number;
  make: string;
  model: string;
  description: string;
  isFeatured?: boolean;
  isInspected?: boolean;
  hasStar?: boolean;
}) => (
  <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg relative border border-zinc-700/50 flex flex-col">
    {isFeatured && (
      <div className="absolute top-2 left-2 bg-yellow-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded z-10">
        FEATURED
      </div>
    )}
    <div className="relative h-48 w-full">
      <Image src={imageUrl} alt={`${year} ${make} ${model}`} layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-2 flex justify-between items-center text-white text-xs">
        <span className="flex items-center gap-1">
          <Clock size={14} /> {timeLeft}
        </span>
        <span className="font-semibold">Bid ${bidAmount}</span>
      </div>
    </div>
    <div className="p-3 flex-grow flex flex-col">
      <h3 className="text-white font-semibold text-sm flex items-center justify-between">
        <span>{`${year} ${make} ${model}`}</span>
        {hasStar && <Star size={16} className="text-yellow-500 fill-current" />}
      </h3>
      <p className="text-zinc-400 text-xs mt-1 flex-grow">{description}</p>
      {isInspected && (
         <span className="mt-2 text-xs text-blue-400 border border-blue-400 rounded px-1.5 py-0.5 self-start">
           INSPECTED
         </span>
      )}
    </div>
  </div>
);

export default function CarsAndBidsPage() {
  return (
    <div className="bg-zinc-900 min-h-screen text-zinc-300 p-4 md:p-8">
      {/* Featured Auction Section */}
      <div className="mb-8">
        <div className="relative grid grid-cols-3 grid-rows-2 gap-1 aspect-[2/1] max-h-[50vh]">
           {/* Large Image */}
          <div className="relative col-span-2 row-span-2 rounded-l-lg overflow-hidden">
             <Image src="/placeholder-audi-main.jpg" alt="Featured Car Main" layout="fill" objectFit="cover" />
             <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded z-10">
               FEATURED
             </div>
             <div className="absolute bottom-2 left-2 bg-black/60 text-white p-2 rounded text-sm flex gap-4 items-center">
               <span className="flex items-center gap-1"><Clock size={16} /> 6:26:40</span>
               <span className="font-bold text-base">Bid $107,500</span>
             </div>
          </div>
          {/* Small Images */}
          <div className="relative overflow-hidden">
            <Image src="/placeholder-audi-front.jpg" alt="Featured Car Front" layout="fill" objectFit="cover" className="rounded-tr-lg" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/placeholder-audi-interior.jpg" alt="Featured Car Interior" layout="fill" objectFit="cover" />
          </div>
           <div className="relative overflow-hidden">
             <Image src="/placeholder-audi-engine.jpg" alt="Featured Car Engine" layout="fill" objectFit="cover" />
           </div>
           <div className="relative overflow-hidden">
             <Image src="/placeholder-audi-rear.jpg" alt="Featured Car Rear" layout="fill" objectFit="cover" className="rounded-br-lg" />
             {/* You could add the arrow overlay here if needed */}
             <div className="absolute bottom-2 right-2 bg-black/50 rounded-full p-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
             </div>
           </div>
        </div>
         {/* Featured Car Details */}
        <div className="mt-3">
          <h2 className="text-xl text-white font-semibold">2024 Audi RS6 Avant Performance</h2>
          <p className="text-sm text-zinc-400">Black Optic Package, RS Sport Exhaust System</p>
        </div>
      </div>

      {/* Auctions Filter/Sort Section */}
      <div className="py-4 mb-6 border-y border-zinc-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-lg text-white font-semibold mr-4">Auctions</h2>
          {/* Filter Buttons - Add onClick handlers for real functionality */}
          <button className="flex items-center gap-1 text-sm bg-zinc-700 hover:bg-zinc-600 px-3 py-1.5 rounded text-white">
            Years <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 text-sm bg-zinc-700 hover:bg-zinc-600 px-3 py-1.5 rounded text-white">
            Transmission <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 text-sm bg-zinc-700 hover:bg-zinc-600 px-3 py-1.5 rounded text-white">
            Body Style <ChevronDown size={16} />
          </button>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm flex-wrap justify-center">
          {/* Sort/Filter Tabs - Add active state styling and onClick */}
          <button className="text-white font-semibold hover:text-white">Ending soon</button>
          <button className="text-zinc-400 hover:text-white">Newly listed</button>
          <button className="text-zinc-400 hover:text-white">No reserve</button>
          <button className="text-zinc-400 hover:text-white">Lowest mileage</button>
          <button className="text-zinc-400 hover:text-white">Closest to me</button>
        </div>
      </div>

      {/* Auction Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Replace with actual data mapping */}
        <AuctionCard
          imageUrl="/placeholder-z8.jpg"
          timeLeft="3:31:40"
          bidAmount="181,000"
          year={2002}
          make="BMW"
          model="Z8"
          description="~28,000 Miles, 6-Speed Manual, Hardtop"
        />
         <AuctionCard
          imageUrl="/placeholder-miata.jpg"
          timeLeft="3:38:40"
          bidAmount="8,100"
          year={1991}
          make="Mazda"
          model="MX-5 Miata Special Edition"
          description="5-Speed Manual, Factory Hardtop"
          isFeatured={true} // Example of featured tag
        />
         <AuctionCard
          imageUrl="/placeholder-van.jpg"
          timeLeft="3:45:40"
          bidAmount="5,000"
          year={1994}
          make="GMC"
          model="Vandura 3500"
          description="A-Team Van Replica, 5.7-Liter V8, Dry-Climate-Owned"
          hasStar={true} // Example of star icon
        />
        <AuctionCard
          imageUrl="/placeholder-rcf.jpg"
          timeLeft="3:52:40"
          bidAmount="27,500"
          year={2017}
          make="Lexus"
          model="RC F"
          description="INSPECTED 5.0-Liter V8, Premium and Technology Packages, California-Owned"
          isInspected={true} // Example using the description flag
        />
         {/* Add more AuctionCard components as needed */}
      </div>
    </div>
  );
}