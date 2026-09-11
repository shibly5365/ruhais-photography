import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Camera, Users, Heart } from "lucide-react";

import heroPortrait from "@/assets/hero-portrait.jpeg";

const About = () => (
  <div className="pt-24">
    {/* Header */}
    <section className="section-padding text-center max-w-4xl mx-auto">
      <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">About Lumière</h1>
    </section>

    {/* Content */}
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src={heroPortrait}
              alt="The photographer"
              className="rounded-2xl w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:block">
              <p className="font-display text-3xl font-bold gold-gradient-text">12+</p>
              <p className="text-muted-foreground text-sm">Years of Passion</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            The Art of Seeing<br />
            <span className="gold-gradient-text">What Others Miss</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2012, Lumière Studio was born from a deep passion for visual storytelling. We believe that every moment holds a story worth preserving — from the quiet intimacy of a glance to the grand spectacle of celebration.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our approach blends documentary authenticity with artistic vision. We don't just take photos — we create visual narratives that resonate with emotion and stand the test of time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Based in New York City, we work with clients worldwide, bringing the same dedication and artistry to every project, whether it's an intimate portrait session or a destination wedding.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            {[
              { icon: Award, label: "Award Winner", desc: "International Photography Awards" },
              { icon: Camera, label: "2,500+ Shoots", desc: "Moments captured" },
              { icon: Users, label: "Global Clients", desc: "Worldwide projects" },
              { icon: Heart, label: "100% Passion", desc: "In every frame" },
            ].map(({ icon: Icon, label, desc }, i) => (
              <div key={i} className="space-y-2">
                <Icon className="text-primary" size={24} />
                <p className="font-display font-semibold">{label}</p>
                <p className="text-muted-foreground text-xs">{desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button variant="hero" asChild>
              <Link to="/contact">Work With Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
