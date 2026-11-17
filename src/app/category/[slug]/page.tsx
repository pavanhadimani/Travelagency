import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star, MapPin } from "lucide-react";

// Mock data
const getCategoryData = (slug: string) => {
  const categories: Record<string, { title: string; desc: string; tours: any[] }> = {
    "luxury": {
      title: "Luxury Tours",
      desc: "Experience the pinnacle of travel with our ultra-premium luxury packages.",
      tours: [
        {
          id: "maldives",
          title: "Maldives Luxury Resort",
          image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
          duration: "5 Days",
          price: "₹85,000",
          rating: 5.0,
          difficulty: "Easy"
        }
      ]
    },
    "adventure": {
      title: "Adventure Tours",
      desc: "For those who seek thrills and unforgettable experiences in the wild.",
      tours: [
        {
          id: "manali",
          title: "Majestic Manali Escape",
          image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
          duration: "6 Days",
          price: "₹18,500",
          rating: 4.8,
          difficulty: "Moderate"
        }
      ]
    },
    "family": {
      title: "Family Tours",
      desc: "Perfect getaways designed for family bonding and fun.",
      tours: [
        {
          id: "kerala",
          title: "Kerala Backwaters Serenity",
          image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
          duration: "4 Days",
          price: "₹15,200",
          rating: 4.9,
          difficulty: "Easy"
        }
      ]
    },
    "beach": {
      title: "Beach Escapes",
      desc: "Relax on pristine white sands with crystal clear waters.",
      tours: [
        {
          id: "goa",
          title: "Goa Beach & Heritage",
          image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
          duration: "5 Days",
          price: "₹12,800",
          rating: 4.7,
          difficulty: "Easy"
        }
      ]
    }
  };

  return categories[slug.toLowerCase()] || {
    title: slug.charAt(0).toUpperCase() + slug.slice(1) + " Tours",
    desc: "Explore our handpicked selection of tours for this category.",
    tours: [
      {
        id: "manali",
        title: "Majestic Manali Escape",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
        duration: "6 Days",
        price: "₹18,500",
        rating: 4.8,
        difficulty: "Moderate"
      }
    ]
  };
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = getCategoryData(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6">
            {category.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {category.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.tours.map((tour: any) => (
            <div
              key={tour.id}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-72 w-full overflow-hidden block">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md">
                  <span className="font-bold text-primary text-lg">{tour.price}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{tour.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span>{tour.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-heading text-foreground mb-6 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>
                
                <div className="mt-auto flex gap-4 border-t border-border/50 pt-6">
                  <Link
                    href={`/tours/${tour.id}`}
                    className="flex-1 py-3 text-center border-2 border-primary text-primary font-button font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/book"
                    className="flex-1 py-3 text-center bg-primary text-white font-button font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
