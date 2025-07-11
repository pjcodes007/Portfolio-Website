import { useEffect, useRef } from "react";
import "../../App.css"; // Make sure this imports your @font-face

const SpinningText: React.FC = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 10;
      const y = (window.innerHeight / 2 - e.clientY) / 10;

      if (logoRef.current) {
        logoRef.current.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-transparent overflow-hidden" style={{ perspective: "800px" }}>
      <div
        ref={logoRef}
        className="text-white text-[4.2rem] font-[Bitcount_Grid_Double] transition-transform duration-100"
      >
        &lt;PJ&gt;
      </div>
    </div>
  );
};

export default SpinningText;
