import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div className="pointer-events-none fixed z-[9998] inset-0">
      <div
        className="absolute w-15 h-15 rounded-full bg-purple-700 opacity-100 blur-3xl transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 48}px, ${position.y - 48}px)`,
        }}
      />
    </div>
  );
};

export default MouseGlow;
