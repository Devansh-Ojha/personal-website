import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 w-screen h-screen overflow-hidden bg-slate-50/50">
      {/* Engineering / Mathematical Grid Pattern */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Subtle linear accents (like graphing paper major axes) */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '96px 96px',
        }}
      />

      {/* Decorative gradient glowing spots for a modern tech feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/20 blur-[120px] pointer-events-none" />
    </div>
  );
}