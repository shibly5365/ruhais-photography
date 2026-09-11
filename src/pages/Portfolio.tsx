import { useState, useCallback } from "react";
import Lightbox from "@/components/Lightbox";

import heroWedding from "@/assets/hero-wedding.jpeg";
import heroWedding1 from "@/assets/hero-wedding1.jpeg";
import heroWedding2 from "@/assets/hero-wedding2.jpeg";
import heroWedding3 from "@/assets/hero-wedding3.jpeg";
import heroWedding4 from "@/assets/hero-wedding4.jpeg";
import heroWedding5 from "@/assets/hero-wedding5.jpeg";
import heroPortrait from "@/assets/hero-portrait.jpeg";
import heroPortrait1 from "@/assets/hero-portrait1.jpeg";
import heroPortrait2 from "@/assets/hero-portrait2.jpeg";
import heroPortrait3 from "@/assets/hero-portrait3.jpeg";
import heroPortrait4 from "@/assets/hero-portrait4.jpeg";
import heroPortrait5 from "@/assets/hero-portrait5.jpeg";
import heroEvents from "@/assets/hero-events.jpg";
import heroModeling from "@/assets/hero-modeling.jpeg"
import heroModeling1 from "@/assets/hero-modeling1.jpeg"
import heroModeling2 from "@/assets/hero-modeling2.jpeg"
import heroModeling3 from "@/assets/hero-modeling3.jpeg";
import heroModeling4 from "@/assets/hero-modeling4.jpeg";
import heroModeling6 from "@/assets/hero-modeling6.jpeg";

type Category = "All" | "Wedding" | "Portrait" | "Events" | "Modeling";

const galleryItems = [
  { src: heroWedding, alt: "Wedding moment", category: "Wedding" as const },
  { src: heroPortrait, alt: "Portrait session", category: "Portrait" as const },
  { src: heroEvents, alt: "Event capture", category: "Events" as const },
  { src: heroModeling, alt: "Modeling shot", category: "Modeling" as const },
  { src: heroWedding1, alt: "Wedding ceremony", category: "Wedding" as const },
  { src: heroPortrait1, alt: "Creative portrait", category: "Portrait" as const },
  
  { src: heroModeling4, alt: "Modeling shot", category: "Modeling" as const },
  { src: heroWedding2, alt: "Wedding moment", category: "Wedding" as const },
  { src: heroPortrait2, alt: "Portrait session", category: "Portrait" as const },
  { src: heroModeling1, alt: "Modeling shot", category: "Modeling" as const },
  { src: heroWedding3, alt: "Wedding ceremony", category: "Wedding" as const },
  { src: heroPortrait3, alt: "Creative portrait", category: "Portrait" as const },
  { src: heroModeling3, alt: "Modeling shot", category: "Modeling" as const },
  { src: heroPortrait4, alt: "Creative portrait", category: "Portrait" as const },
  { src: heroWedding4, alt: "Wedding moment", category: "Wedding" as const },
  { src: heroModeling2, alt: "Modeling shot", category: "Modeling" as const },
  { src: heroWedding5, alt: "Wedding ceremony", category: "Wedding" as const },
  { src: heroPortrait5, alt: "Creative portrait", category: "Portrait" as const },
  { src: heroModeling6, alt: "Modeling shot", category: "Modeling" as const },
  
];

const categories: Category[] = ["All", "Wedding", "Portrait", "Events", "Modeling"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding text-center max-w-4xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Our Work</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
        <p className="text-muted-foreground text-lg">
          Browse through our curated collection of moments frozen in time.
        </p>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 px-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${
              activeFilter === cat
                ? "gold-gradient-bg text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div
              key={`${item.alt}-${i}`}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] animate-scale-in"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-500 flex items-center justify-center">
                <span className="text-foreground font-display text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default Portfolio;
