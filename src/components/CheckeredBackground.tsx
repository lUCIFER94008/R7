import { useEffect, useState } from "react";

export function CheckeredBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none rounded-lg">
      {/* Checkered pattern background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #E0E0E0 25%, transparent 25%),
            linear-gradient(-45deg, #E0E0E0 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #E0E0E0 75%),
            linear-gradient(-45deg, transparent 75%, #E0E0E0 75%)
          `,
          backgroundColor: '#F5F5F5',
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px'
        }}
      />
      
      {/* Interactive hover glow effect */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl transition-all duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.12) 0%, transparent 70%)',
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
        }}
      />
    </div>
  );
}