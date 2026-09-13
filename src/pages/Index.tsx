import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Camera, Heart, PartyPopper, Package, ArrowRight } from "lucide-react";

import heroWedding from "@/assets/hero-wedding.jpeg";
import heroWedding5 from "@/assets/hero-wedding5.jpeg";
import heroPortrait from "@/assets/hero-portrait.jpeg";
import heroPortrait1 from "@/assets/hero-portrait1.jpeg";
import heroEvents from "@/assets/hero-event1.jpeg";
import heroEvents2 from "@/assets/hero-modeling4.jpeg";
import heroModeling from "@/assets/hero-modeling.jpeg";
import heroModeling2 from "@/assets/hero-modeling2.jpeg";

const heroSlides = [
  { src: heroWedding, alt: "Wedding Photography" },
  { src: heroPortrait, alt: "Portrait Photography" },
  { src: heroEvents, alt: "Event Photography" },
  { src: heroModeling, alt: "Modeling Photography" },
];

const categories = [
  { title: "Wedding", icon: Heart, image: heroWedding, description: "Timeless love stories" },
  { title: "Portrait", icon: Camera, image: heroPortrait, description: "Your essence, captured" },
  {
    title: "Modeling",
    icon: Camera,
    image: heroModeling,
    description: "Style, confidence & expression",
  },
  {
    title: "Events",
    icon: PartyPopper,
    image: "Null",
    description: "Moments that matter",
  },

];



function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const catSection = useInView();
  const testSection = useInView();
  const instaSection = useInView();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Professional Photography
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Capturing Light,<br />
            <span className="gold-gradient-text">Creating Art</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Authentic photography that captures your unique story with creativity and emotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Book a Shoot</Link>
            </Button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? "w-8 bg-primary" : "w-4 bg-foreground/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── Featured Categories ── */}
      <section ref={catSection.ref} className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Our Specialties</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.title}
              to="/portfolio"
              className={`group relative overflow-hidden rounded-2xl aspect-[3/4] ${
                catSection.inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <cat.icon className="text-primary mb-2" size={24} />
                <h3 className="font-display text-xl font-semibold mb-1">{cat.title}</h3>
                <p className="text-muted-foreground text-sm">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>



      {/* ── Instagram Feed Preview ── */}
      <section ref={instaSection.ref} className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">@ruhhstudio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Follow Our Journey</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[heroWedding, heroPortrait, heroEvents2, heroModeling, heroModeling2, heroEvents, heroPortrait1, heroWedding5].map(
            (src, i) => (
              <div
                key={i}
                className={`aspect-square overflow-hidden rounded-xl group cursor-pointer ${
                  instaSection.inView ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Create<br />
            <span className="gold-gradient-text">Something Beautiful?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Let's discuss your vision and bring it to life through the art of photography.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
