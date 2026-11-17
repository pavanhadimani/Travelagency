import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star, CheckCircle2, Calendar } from "lucide-react";

// Mock data to simulate database fetch
const getTourData = (slug: string) => {
  const tours: Record<string, any> = {
    "manali": {
      title: "Majestic Manali Escape",
      image: "https://images.unsplash.com/photo-1605649487212-4d52293c2f20?q=80&w=1200&auto=format&fit=crop",
      duration: "6 Days",
      price: "₹18,500",
      rating: 4.8,
      difficulty: "Moderate",
      highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Vashisht Hot Springs"],
      description: "Experience the breathtaking beauty of the Himalayas in Manali. This 6-day escape takes you through snow-capped peaks, lush green valleys, and ancient temples. Perfect for both adventure seekers and those looking for a peaceful retreat.",
      itinerary: [
        { day: 1, title: "Arrival & Local Sightseeing", desc: "Arrive in Manali and visit Hadimba Temple and Vashisht Village." },
        { day: 2, title: "Solang Valley Adventure", desc: "Full day excursion to Solang Valley for adventure sports." },
        { day: 3, title: "Rohtang Pass", desc: "Drive to the spectacular Rohtang Pass (subject to weather)." },
        { day: 4, title: "Kullu & Naggar", desc: "Visit Naggar Castle and explore the Kullu Valley." },
        { day: 5, title: "Leisure & Shopping", desc: "Explore Mall road and buy local handicrafts." },
        { day: 6, title: "Departure", desc: "Morning checkout and departure." },
      ]
    },
    "maldives": {
      title: "Maldives Luxury Resort",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
      duration: "5 Days",
      price: "₹85,000",
      rating: 5.0,
      difficulty: "Easy",
      highlights: ["Overwater Villas", "Scuba Diving", "Sunset Cruise", "Private Dining"],
      description: "Indulge in ultimate luxury with our 5-day Maldives resort package. Stay in an exclusive overwater villa with direct access to the crystal-clear ocean. Enjoy world-class dining, relaxing spa treatments, and stunning sunset views.",
      itinerary: [
        { day: 1, title: "Welcome to Paradise", desc: "Speedboat or seaplane transfer to your luxury resort." },
        { day: 2, title: "Ocean Exploration", desc: "Guided snorkeling or scuba diving session." },
        { day: 3, title: "Spa & Wellness", desc: "Rejuvenating couple's spa treatment." },
        { day: 4, title: "Sunset Cruise", desc: "Romantic sunset cruise with dinner." },
        { day: 5, title: "Departure", desc: "Morning at leisure before departure." },
      ]
    },
    "kerala": {
      title: "Kerala Backwaters Serenity",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
      duration: "4 Days",
      price: "₹15,200",
      rating: 4.9,
      difficulty: "Easy",
      highlights: ["Houseboat Stay", "Ayurvedic Spa", "Munnar Tea Gardens"],
      description: "Discover the tranquil beauty of Kerala's backwaters and the lush green tea gardens of Munnar. This 4-day tour offers a perfect blend of relaxation in a traditional houseboat and nature exploration.",
      itinerary: [
        { day: 1, title: "Arrival in Cochin & Transfer to Munnar", desc: "Enjoy scenic views of waterfalls and tea gardens." },
        { day: 2, title: "Munnar Sightseeing", desc: "Visit Eravikulam National Park and Mattupetty Dam." },
        { day: 3, title: "Alleppey Houseboat", desc: "Transfer to Alleppey for an overnight houseboat cruise." },
        { day: 4, title: "Departure", desc: "Morning checkout and drop off at Cochin." },
      ]
    },
    "goa": {
      title: "Goa Beach & Heritage",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      duration: "5 Days",
      price: "₹12,800",
      rating: 4.7,
      difficulty: "Easy",
      highlights: ["Baga Beach", "Basilica of Bom Jesus", "Dudhsagar Falls"],
      description: "Experience the vibrant culture and beautiful beaches of Goa. This tour covers the bustling North Goa beaches, the historic churches of Old Goa, and a thrilling trip to the majestic Dudhsagar Falls.",
      itinerary: [
        { day: 1, title: "Arrival & Beach Time", desc: "Check-in and relax at Baga or Calangute beach." },
        { day: 2, title: "North Goa Tour", desc: "Visit Aguada Fort, Vagator, and Anjuna beaches." },
        { day: 3, title: "South Goa & Heritage", desc: "Explore Old Goa churches and Mangueshi temple." },
        { day: 4, title: "Dudhsagar Excursion", desc: "Full day trip to the spectacular Dudhsagar waterfalls." },
        { day: 5, title: "Departure", desc: "Morning at leisure before departure." },
      ]
    }
  };

  return tours[slug] || null;
};

// We must properly await params in Next.js 15+ 
export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const tour = getTourData(resolvedParams.slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" /> {tour.duration}
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" /> {tour.difficulty}
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> {tour.rating}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold font-heading text-foreground mb-6">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {tour.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-heading text-foreground mb-6">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.highlights.map((highlight: string) => (
                  <div key={highlight} className="flex items-center gap-3 bg-muted px-4 py-3 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-heading text-foreground mb-6">Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day: any) => (
                  <div key={day.day} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0">
                        {day.day}
                      </div>
                      <div className="w-0.5 h-full bg-border my-2" />
                    </div>
                    <div className="bg-card border border-border p-6 rounded-2xl flex-grow shadow-sm hover:shadow-md transition-shadow mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">{day.title}</h3>
                      <p className="text-muted-foreground">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-card border border-border rounded-3xl p-8 shadow-xl">
              <div className="text-3xl font-bold text-primary mb-2">{tour.price} <span className="text-base text-muted-foreground font-normal">/ person</span></div>
              <p className="text-muted-foreground mb-8 pb-8 border-b border-border">Price varies based on travel dates and group size.</p>
              
              <Link 
                href="/book" 
                className="w-full block text-center bg-primary hover:bg-primary/90 text-white font-button font-bold text-lg py-4 rounded-xl transition-all shadow-md hover:shadow-lg mb-4"
              >
                Book This Tour
              </Link>
              <Link 
                href="/contact" 
                className="w-full block text-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-button font-bold text-lg py-4 rounded-xl transition-all"
              >
                Request Customization
              </Link>

              <div className="mt-8 flex items-start gap-4 text-sm text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary shrink-0" />
                <p>Free cancellation up to 30 days before departure. Date changes permitted subject to availability.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
