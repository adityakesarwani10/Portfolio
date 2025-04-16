
import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-cyan-500/5 to-blue-500/10 animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20" />
      </div>

      {/* Floating orbs with improved animations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-[float_6s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-600/10 rounded-full filter blur-3xl animate-[float_10s_ease-in-out_infinite]" />

      {/* Neural network-like background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-20" />
    </>
  );
};

export default BackgroundEffects;
