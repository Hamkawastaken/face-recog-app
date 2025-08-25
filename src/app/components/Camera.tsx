"use client";

import { useRef, useEffect } from "react";
import FloatingButton from "./FloatingButton";

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

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

      <FloatingButton />
    </div>
  );
}
