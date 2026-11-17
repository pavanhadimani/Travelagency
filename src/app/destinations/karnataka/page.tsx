import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KarnatakaDestination() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1616606484004-5ef3cc46e39d?q=80&w=1920&auto=format&fit=crop"
          alt="Karnataka"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-4">Karnataka</h1>
          <p className="text-xl text-gray-200">One State. Many Worlds.</p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <h2 className="text-3xl font-bold font-heading mb-6">Discover Karnataka</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          From the vibrant IT hub of Bengaluru to the ancient ruins of Hampi, the lush coffee plantations of Coorg, and the pristine beaches of Gokarna, Karnataka offers a diverse array of experiences. Experience royalty in Mysore and witness the majestic wildlife in Bandipur and Nagarhole national parks.
        </p>

        <h3 className="text-2xl font-bold font-heading mb-4">Top Places to Visit</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border border-border p-4 rounded-2xl flex gap-4 items-center bg-card">
            <Image src="https://images.unsplash.com/photo-1659126574791-13313aa424bd?q=80&w=200&auto=format&fit=crop" alt="Mysore" width={80} height={80} className="rounded-xl object-cover h-20 w-20" />
            <div>
              <h4 className="font-bold text-lg">Mysore Palace</h4>
              <p className="text-sm text-muted-foreground">The cultural capital known for its heritage.</p>
            </div>
          </div>
          <div className="border border-border p-4 rounded-2xl flex gap-4 items-center bg-card">
            <Image src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=200&auto=format&fit=crop" alt="Hampi" width={80} height={80} className="rounded-xl object-cover h-20 w-20" />
            <div>
              <h4 className="font-bold text-lg">Hampi Ruins</h4>
              <p className="text-sm text-muted-foreground">A UNESCO World Heritage site with stunning temples.</p>
            </div>
          </div>
          <div className="border border-border p-4 rounded-2xl flex gap-4 items-center bg-card">
            <Image src="https://images.unsplash.com/photo-1699819551081-48095fe86265?q=80&w=200&auto=format&fit=crop" alt="Coorg" width={80} height={80} className="rounded-xl object-cover h-20 w-20" />
            <div>
              <h4 className="font-bold text-lg">Coorg (Kodagu)</h4>
              <p className="text-sm text-muted-foreground">Lush green landscapes and coffee plantations.</p>
            </div>
          </div>
          <div className="border border-border p-4 rounded-2xl flex gap-4 items-center bg-card">
            <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200&auto=format&fit=crop" alt="Gokarna" width={80} height={80} className="rounded-xl object-cover h-20 w-20" />
            <div>
              <h4 className="font-bold text-lg">Gokarna Beaches</h4>
              <p className="text-sm text-muted-foreground">Pristine beaches and a laid-back coastal vibe.</p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-card border border-border p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold font-heading mb-6">Book Your Karnataka Tour</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-3 rounded-xl border border-border bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full p-3 rounded-xl border border-border bg-background" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Travel Date</label>
                <input type="date" className="w-full p-3 rounded-xl border border-border bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Number of Guests</label>
                <input type="number" min="1" placeholder="2" className="w-full p-3 rounded-xl border border-border bg-background" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Preferred Destinations (Optional)</label>
              <textarea rows={3} placeholder="E.g., Coorg, Mysore, Hampi" className="w-full p-3 rounded-xl border border-border bg-background"></textarea>
            </div>
            <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors">
              Request Booking Information
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
