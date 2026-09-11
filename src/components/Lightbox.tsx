import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onNext, onPrev]);

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors z-10"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-foreground/50 hover:text-foreground transition-colors z-10"
        aria-label="Previous"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-foreground/50 hover:text-foreground transition-colors z-10"
        aria-label="Next"
      >
        <ChevronRight size={36} />
      </button>

      <img
        src={current.src}
        alt={current.alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        loading="lazy"
      />

      <div className="absolute bottom-6 text-muted-foreground text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;
