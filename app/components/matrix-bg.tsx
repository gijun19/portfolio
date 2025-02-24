import { useEffect, useRef } from 'react';

const MatrixBrackets = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    
    let animationFrameId: number;
    let fallingSymbols: FallingSymbol[] = [];
    
    const symbols = ['0', '1', '<', '>', '{', '}'];
    
    let logicalWidth = 0;
    let logicalHeight = 0;
    
    // Set up high DPI rendering and return logical dimensions.
    const setupHiDPI = (): DOMRect => {
      const pixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      logicalWidth = rect.width;
      logicalHeight = rect.height;
      
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.resetTransform();
      ctx.scale(pixelRatio, pixelRatio);
      
      return rect;
    };
    
    class FallingSymbol {
      x: number = 0;
      y: number = 0;
      speed: number = 0;
      maxOpacity: number = 0;
      opacity: number = 0;
      symbol: string = '';
      
      constructor() {
        this.reset();
      }
      
      reset() {
        // Use logical dimensions for positioning.
        this.x = Math.floor(Math.random() * logicalWidth);
        this.y = -20;
        this.speed = 0.4 + Math.random() * 0.7;
        this.maxOpacity = 0.7;
        this.opacity = this.maxOpacity;
        this.symbol = Math.random() < 0.6 
          ? ['0', '1'][Math.floor(Math.random() * 2)] 
          : symbols[Math.floor(Math.random() * symbols.length)];
      }
      
      update(): boolean {
        this.y += this.speed;
        // Fade out linearly as the symbol falls:
        this.opacity = Math.max(0, this.maxOpacity * (1 - this.y / logicalHeight));
        return this.y < logicalHeight + 20;
      }
      
      draw() {
        const x = Math.round(this.x);
        const y = Math.round(this.y);
        
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.font = `bold 12px Inter, monospace`;
        ctx!.fillStyle = `rgba(100, 110, 140, ${this.opacity})`;
        
        // Disable image smoothing for crisp text
        ctx!.imageSmoothingEnabled = false;
        ctx!.fillText(this.symbol, x, y);
      }
    }
    
    const resize = () => {
      const rect = setupHiDPI();
      
      // Reinitialize falling symbols using the new logical dimensions.
      fallingSymbols = Array(8)
        .fill(null)
        .map(() => {
          const symbol = new FallingSymbol();
          symbol.y = Math.random() * rect.height;
          return symbol;
        });
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    const animate = () => {
      // Clear the canvas with tailwind color text-stone-50
      ctx.fillStyle = 'oklch(0.985 0.001 106.423)';
      ctx.fillRect(0, 0, logicalWidth, logicalHeight);
      
      fallingSymbols.forEach((symbol) => {
        if (!symbol.update()) {
          if (Math.random() < 0.99) {
            symbol.reset();
          }
        }
        symbol.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
      <canvas ref={canvasRef} className="w-full h-full px-4" />
  );
};

export default MatrixBrackets;
