"use client";

import { useRef, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera error:", err);
      }
    };
    enableCamera();
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Kamera full screen */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Floating Hamburger Button (tengah bawah) */}
      {!menuOpen && (
        <Button
          onClick={() => setMenuOpen(true)}
          className="fixed top-4 left-4 rounded-full p-4 shadow-lg cursor-pointer"
          size="icon"
        >
          <Menu className="h-7 w-7" />
        </Button>
      )}

      {/* Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-1/4 h-full bg-white shadow-2xl p-6 flex flex-col gap-4"
          >
            {/* Tombol Close */}
            <Button
              onClick={() => setMenuOpen(false)}
              variant="ghost"
              className="absolute top-7 right-4 cursor-pointer"
              size="icon"
            >
              <X className="size-6" />
            </Button>

            <h2 className="text-4xl text-center font-extrabold mb-4">Menu</h2>
            <div className="flex flex-col justify-evenly gap-x-4 h-full">
              <Button variant="outline" className="w-full h-48 cursor-pointer">
                📷 Absen
              </Button>
              <Button variant="outline" className="w-full h-48 cursor-pointer">
                📒 Logbook
              </Button>
              <Button variant="outline" className="w-full h-48 cursor-pointer">
                ⚙️ Dashboard
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
