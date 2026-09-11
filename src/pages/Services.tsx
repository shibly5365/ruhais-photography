import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Heart,
  PartyPopper,
  Award,
  Sparkles,
  Star,
} from "lucide-react";

import heroWedding from "@/assets/hero-wedding.jpeg";
import heroPortrait from "@/assets/hero-portrait.jpeg";
import heroEvents from "@/assets/hero-events.jpg";
import heroModeling from "@/assets/hero-modeling.jpeg";

const services = [
  {
    title: "Wedding Photography",
    icon: Heart,
    image: heroWedding,
    description:
      "Your love story deserves to be told beautifully. From intimate ceremonies to grand celebrations, we capture every emotion, every detail, every magical moment.",
    features: [
      "Full day coverage",
      "Engagement session",
      "Premium album",
      "Online gallery",
    ],
    starting: "From $3,500",
  },
  {
    title: "Portrait Photography",
    icon: Camera,
    image: heroPortrait,
    description:
      "Professional portraits that reveal your authentic self. Perfect for personal branding, headshots, family portraits, and creative expression.",
    features: [
      "2-hour session",
      "Multiple outfits",
      "Professional retouching",
      "Digital delivery",
    ],
    starting: "From $500",
  },
  {
    title: "Event Photography",
    icon: PartyPopper,
    image: heroEvents,
    description:
      "Corporate events, galas, conferences, and celebrations — we document the energy, connections, and highlights that make your event unforgettable.",
    features: [
      "Flexible hours",
      "Same-day previews",
      "Fast turnaround",
      "Online sharing",
    ],
    starting: "From $1,200",
  },
  {
    title: "Modeling Photography",
    icon: Camera,
    image: heroModeling,
    description:
      "Capture confidence, style, and personality with striking images designed for portfolios, fashion, and commercial campaigns.",
    features: [
      "Studio or on-location",
      "Creative direction",
      "Professional retouching",
      "High-resolution images",
    ],
    starting: "From $800",
  },
];

const Services = () => (
  <div className="pt-24">
    {/* Header */}
    <section className="section-padding text-center max-w-4xl mx-auto">
      <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
        What We Offer
      </p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Our Services
      </h1>
      <p className="text-muted-foreground text-lg">
        Tailored photography packages designed to meet your unique vision and
        needs.
      </p>
    </section>

    {/* Stats bar */}
    <div className="max-w-5xl mx-auto px-6 mb-20">
      <div className="glass-card p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {[
          { icon: Award, label: "Years of Experience", value: "3+" },
          { icon: Camera, label: "Projects Completed", value: "200+" },
          { icon: Star, label: "Client Satisfaction", value: "100%" },
        ].map(({ icon: Icon, label, value }, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Icon className="text-primary" size={28} />
            <span className="font-display text-3xl font-bold gold-gradient-text">
              {value}
            </span>
            <span className="text-muted-foreground text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Service Cards */}
    <section className="max-w-7xl mx-auto px-6 pb-20 space-y-20">
      {services.map((svc, i) => (
        <div
          key={svc.title}
          className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
        >
          <div className="lg:w-1/2 overflow-hidden rounded-2xl">
            <img
              src={svc.image}
              alt={svc.title}
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <svc.icon className="text-primary" size={32} />
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              {svc.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {svc.description}
            </p>
            <ul className="space-y-2">
              {svc.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Sparkles size={14} className="text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="font-display text-2xl font-bold gold-gradient-text">
              {/* {svc.starting} */}
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">Book This Package</Link>
            </Button>
          </div>
        </div>
      ))}
    </section>
  </div>
);

export default Services;
