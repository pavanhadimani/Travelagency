"use client";

import { motion } from "framer-motion";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import Image from "next/image";

export default function ManageTours() {
  const tours = [
    { id: 1, name: "Swiss Alps Grand Tour", price: "$3,200", duration: "7 Days", status: "Active", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=100&auto=format&fit=crop" },
    { id: 2, name: "Masai Mara Safari", price: "$2,800", duration: "5 Days", status: "Active", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=100&auto=format&fit=crop" },
    { id: 3, name: "Japan Cherry Blossom", price: "$4,100", duration: "10 Days", status: "Draft", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=100&auto=format&fit=crop" },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold font-heading text-foreground">Manage Tours</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> Add New Tour
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex justify-between items-center bg-muted/50">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search tours..." 
              className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/20">
                <th className="p-4 text-sm font-medium text-muted-foreground">Tour Name</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Duration</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Price</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="p-4 text-sm font-medium text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour.id} className="border-b border-border hover:bg-muted/10 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md overflow-hidden shrink-0">
                        <Image src={tour.image} alt={tour.name} width={40} height={40} className="object-cover w-full h-full" />
                      </div>
                      <span className="font-medium text-foreground">{tour.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground">{tour.duration}</td>
                  <td className="p-4 text-sm text-foreground">{tour.price}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${tour.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                      {tour.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-destructive transition-colors rounded-lg hover:bg-destructive/10">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
