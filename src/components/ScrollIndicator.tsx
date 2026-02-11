import { useEffect, useState } from "react";
import indicatorImage from "figma:asset/4189fb6d8c768d687d4de971a7265b0b8a27ab44.png";

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll progress (0 to 100)
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / totalScrollableHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-0 h-screen hidden md:flex items-start pt-20 pb-20 z-50 pointer-events-none">
      <div className="relative h-full">
        {/* Moving indicator image */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
          style={{ 
            top: `${scrollProgress}%`,
            transform: `translate(-50%, -50%)`
          }}
        >
          <img 
            src={indicatorImage} 
            alt="Scroll indicator" 
            className="h-24 w-auto opacity-80"
          />
        </div>
      </div>
    </div>
  );
}