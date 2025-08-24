"use client";

import { useEffect, useRef } from "react";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Gagal Akses Kamera", err);
      });
  }, []);
  return <>
  <div className="">
    <video ref={videoRef} autoPlay playsInline className="w-screen h-screen object-cover"></video>
</div></>;
}
