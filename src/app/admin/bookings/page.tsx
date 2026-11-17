"use client";

import { Search, Eye, CheckCircle, XCircle } from "lucide-react";

export default function AdminBookings() {
  const bookings = [
    { id: "BKG-8892", customer: "John Doe", email: "john@example.com", tour: "Swiss Alps Grand Tour", date: "Sep 15, 2026", status: "Confirmed", amount: "$3,200" },
    { id: "BKG-8893", customer: "Sarah Jenkins", email: "sarah@example.com", tour: "Maldives Overwater", date: "Oct 12, 2026", status: "Pending", amount: "$5,400" },
    { id: "BKG-8894", customer: "Michael Chen", email: "michael@example.com", tour: "Japan Cherry Blossom", date: "Mar 25, 2027", status: "Confirmed", amount: "$4,100" },
    { id: "BKG-8895", customer: "Elena Rodriguez", email: "elena@example.com", tour: "Masai Mara Safari", date: "Nov 05, 2026", status: "Cancelled", amount: "$2,800" },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold font-heading text-foreground">Recent Bookings</h1>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex justify-between items-center bg-muted/50">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by ID, Customer, or Tour..." 
              className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex gap-2">
            <select className="bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
              <option>All Statuses</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/20">
                <th className="p-4 text-sm font-medium text-muted-foreground">Booking ID</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Customer</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Tour / Package</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Travel Date</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Amount</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="p-4 text-sm font-medium text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-border hover:bg-muted/10 transition-colors">
                  <td className="p-4 text-sm font-medium text-primary">{booking.id}</td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground">{booking.customer}</span>
                      <span className="text-xs text-muted-foreground">{booking.email}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground">{booking.tour}</td>
                  <td className="p-4 text-sm text-foreground">{booking.date}</td>
                  <td className="p-4 text-sm font-medium text-foreground">{booking.amount}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1 w-max
                      ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                        booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : 
                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                      {booking.status === 'Confirmed' && <CheckCircle className="w-3 h-3" />}
                      {booking.status === 'Cancelled' && <XCircle className="w-3 h-3" />}
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                      <Eye className="w-4 h-4" />
                    </button>
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
