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
      <Button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="fixed bottom-5 left-5 py-5 rounded-full px-4 shadow-lg cursor-pointer"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 left-5 bg-slate-950 shadow-2xl rounded-lg px-6 pb-2 pt-6 flex flex-col gap-4"
          >
            
            {/* Tombol Close */}
            {/* <Button
              onClick={() => setMenuOpen(false)}
              variant="ghost"
              className="cursor-pointer hover:bg-transparent"
              size="icon"
            >
              <X className="size-6 text-slate-300" />
            </Button> */}

            {/* <h2 className="text-4xl text-center font-extrabold mb-4">Menu</h2> */}
            <div className="grid grid-cols-4 gap-x-3 h-full mb-4">
              <Button
                variant="outline"
                className="w-36 h-32 bg-slate-800 text-slate-300 hover:text-slate-300 border border-slate-700 hover:bg-slate-900 flex flex-col cursor-pointer"
              >
                <p>🫴💻</p>
                <p>Ambil Laptop</p>
              </Button>
              <Button
                variant="outline"
                className="w-36 h-32 bg-slate-800 text-slate-300 hover:text-slate-300 border border-slate-700 hover:bg-slate-900 flex flex-col cursor-pointer"
              >
                <p>🫴📱</p>
                <p>Ambil Hp</p>
              </Button>
              <Button
                variant="outline"
                className="w-36 h-32 bg-slate-800 text-slate-300 hover:text-slate-300 border border-slate-700 hover:bg-slate-900 flex flex-col cursor-pointer"
              >
                <p>🔁💻</p>
                <p>Kembalikan Laptop</p>
              </Button>
              <Button
                variant="outline"
                className="w-36 h-32 bg-slate-800 text-slate-300 hover:text-slate-300 border border-slate-700 hover:bg-slate-900 flex flex-col cursor-pointer"
              >
                <p>🔁📱</p>
                <p>Kembalikan Hp</p>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
