import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollSequenceProps {
  frameCount: number;
  imagePath: (index: number) => string;
}

export const ScrollSequence: React.FC<ScrollSequenceProps> = ({ frameCount, imagePath }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = imagePath(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setIsLoading(false);
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, [frameCount, imagePath]);

  // Render frame on scroll
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img) return;

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw image (cover style)
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(latest * frameCount)
      );
      renderFrame(frameIndex);
    });

    // Initial render
    renderFrame(0);

    return () => unsubscribe();
  }, [images, scrollYProgress, frameCount]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-forest">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-forest">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full"
            />
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="block h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-forest" />
      </div>
    </div>
  );
};
