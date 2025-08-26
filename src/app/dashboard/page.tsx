"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  CornerDownLeft,
  CornerUpRight,
  Laptop,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const actions = [
  {
    title: "Ambil Laptop",
    icon: Laptop,
    color: "text-blue-500",
    url: "/ambil-laptop",
  },
  {
    title: "Ambil HP",
    icon: Smartphone,
    color: "text-green-500",
    url: "/ambil-hp",
  },
  {
    title: "Kembali Laptop",
    icon: CornerUpRight,
    color: "text-purple-500",
    url: "/kembali-laptop",
  },
  {
    title: "Kembali HP",
    icon: CornerDownLeft,
    color: "text-orange-500",
    url: "/kembali-laptop",
  },
];

export default function DashboardPage() {
  return (
    <Card>
      <CardContent>
        <div className="space-y-6">
          {/* Ucapan Selamat Datang */}
          <h1 className="text-2xl font-bold">Selamat Datang 👋</h1>
          <p className="text-slate-600">
            Aplikasi Absensi Pengambilan & Pengembalian HP/Laptop
          </p>

          {/* Grid Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {actions.map((a) => {
              const Icon = a.icon;
              return (
                <Card
                  key={a.title}
                  className="shadow hover:shadow-md transition"
                >
                  <CardHeader className="flex flex-col gap-y-8 items-center justify-between">
                    <CardTitle className="text-xl font-bold">
                      {a.title}
                    </CardTitle>
                    <Icon className={`w-24 h-24 ${a.color}`} />
                  </CardHeader>
                  <CardContent>
                    <Link href={a.url}>
                      <Button className="w-full cursor-pointer">Mulai</Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
