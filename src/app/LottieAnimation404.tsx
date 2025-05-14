"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/lottie/not-found.json";

export default function LottieAnimation404() {
  return <Lottie animationData={animationData} loop />;
}
