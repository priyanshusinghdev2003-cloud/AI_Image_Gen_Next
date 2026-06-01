import HomeHeroSection from "@/components/HomeHeroSection";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      <HomeHeroSection />
    </main>
  );
}
