"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Map, Compass, BookOpen, Users, LogOut, Globe } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Manage Tours", href: "/admin/tours", icon: Compass },
    { name: "Destinations", href: "/admin/destinations", icon: Map },
    { name: "Bookings", href: "/admin/bookings", icon: BookOpen },
    { name: "Customers", href: "/admin/customers", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-muted flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-card border-r border-border shrink-0 md:h-screen sticky top-0 overflow-y-auto hidden md:block">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-primary" />
            <span className="font-heading text-2xl font-bold tracking-tight text-foreground">VoyageX Admin</span>
          </Link>
        </div>
        <nav className="p-4 space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${
                  isActive ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border mt-auto">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors font-medium">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 overflow-x-hidden p-6 md:p-10">
        {children}
      </main>
    </div>
  );
}
