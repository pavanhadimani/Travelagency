"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, BookOpen } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Revenue", value: "$124,500", change: "+14%", icon: DollarSign },
    { title: "New Bookings", value: "85", change: "+22%", icon: BookOpen },
    { title: "Active Users", value: "1,240", change: "+5%", icon: Users },
    { title: "Conversion Rate", value: "3.2%", change: "+1.2%", icon: TrendingUp },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold font-heading text-foreground mb-8">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <p className="text-muted-foreground text-sm font-medium mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-sm min-h-[400px] flex items-center justify-center">
          <p className="text-muted-foreground">Revenue Chart Placeholder (Chart.js / Recharts)</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm min-h-[400px]">
          <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 items-start pb-4 border-b border-border last:border-0">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">New booking received (BKG-{8000+i})</p>
                  <p className="text-xs text-muted-foreground">{i} hour{i>1?'s':''} ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
