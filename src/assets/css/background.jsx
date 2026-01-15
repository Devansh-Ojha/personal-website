import React, { useEffect, useRef } from 'react';

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const gap = 40; // Distance between dots (higher = cleaner/less dense)
    const speed = 0.003; // Very slow, deliberate movement
    const amplitude = 30; // How high the wave goes
    const waveLength = 0.003; // How wide the waves are

    let offset = 0; 

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x <= width; x += gap) {
        for (let y = 0; y <= height; y += gap) {
      
          const distanceFromCenter = Math.sqrt(Math.pow(x - width/2, 2) + Math.pow(y - height/2, 2));
          
          const z = Math.sin(distanceFromCenter * waveLength + offset) * amplitude;

          // 4. Draw the Dot
          ctx.beginPath();
          const radius = Math.max(0.5, 1.5 + z * 0.02); 
          const opacity = Math.max(0.1, 0.5 + z * 0.01); 
          
          ctx.fillStyle = `rgba(100, 116, 139, ${opacity})`; 
          ctx.arc(x, y + z, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      offset -= speed;
      requestAnimationFrame(animate);
    }

    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('resize', onResize);
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#f6f7f9ff', // Deep Slate / Dark Navy
          zIndex: -1,
        }}
      />
    </>
  );
}