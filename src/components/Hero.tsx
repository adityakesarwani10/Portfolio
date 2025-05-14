
"use client";

import ParticleCanvas from "./hero/ParticleCanvas";
import ProfileSection from "./hero/ProfileSection";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start justify-center pt-32 mt-23 relative overflow-hidden"
    >
      <ParticleCanvas className="absolute top-0 left-0 w-full h-full -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <ProfileSection />
      </div>
    </section>
  );
};

export default Hero;
