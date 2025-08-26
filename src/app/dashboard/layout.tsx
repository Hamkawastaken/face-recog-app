"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, LayoutDashboard } from "lucide-react";

const nav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Daftar User", href: "/dashboard/users", icon: Users },
  { label: "Logbook", href: "/dashboard/logbook", icon: BookOpen },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white shadow-sm">
        <div className="h-16 flex items-center justify-center font-bold text-lg">
          Absensi Device
        </div>
        <nav className="p-4 space-y-2">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link key={n.label} href={n.href}>
                <Button
                  variant={active ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2 cursor-pointer"
                >
                  <n.icon className="h-4 w-4" />
                  {n.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
