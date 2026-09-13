import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Camera, Users, Heart } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpeg";

const About = () => (
  <div className="pt-24">
    {/* Header */}
    <section className="section-padding text-center max-w-4xl mx-auto">
      <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
        Our Story
      </p>

      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
        About Me
        <br />
      </h1>
    </section>

    {/* Content */}
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Image */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src={heroPortrait}
              alt="Muhammed Ruhais - Photographer"
              className="rounded-2xl w-full aspect-[3/4] object-cover"
              loading="lazy"
            />

            <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:block">
              <p className="font-display text-3xl font-bold gold-gradient-text">
                3+
              </p>
              <p className="text-muted-foreground text-sm">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            The Art of Seeing
            <br />
            <span className="gold-gradient-text">What Others Miss</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Ruhh Studio</strong> is a
            photography and visual storytelling studio based in Kerala, India.
            We photograph weddings, people, fashion, events, brands, food, and
            places—but our approach remains the same: finding the moments that
            feel real.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The glance between two people. The laughter nobody planned. The
            quiet moments between the big ones. Because sometimes, the
            photograph you treasure most is the one nobody knew was happening.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Founded by Muhammed Ruhais,{" "}
            <strong className="text-foreground">Ruhh Studio</strong> began with
            a simple fascination with photographing people and the world around
            him. His approach is natural and observant—watching, waiting, and
            stepping in when the moment calls for it.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            From cinematic and emotional to energetic and spontaneous, every
            story brings its own mood. The goal is simple: to create photographs
            that don't just show what happened, but bring you back to how it
            felt.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            {[
              {
                icon: Award,
                label: "Creative Vision",
                desc: "Unique visual storytelling",
              },
              {
                icon: Camera,
                label: "Natural Moments",
                desc: "Real moments captured",
              },
              {
                icon: Users,
                label: "Visual Storytelling",
                desc: "Every frame has something to say",
              },
              {
                icon: Heart,
                label: "100% Passion",
                desc: "In every frame",
              },
            ].map(({ icon: Icon, label, desc }, i) => (
              <div key={i} className="space-y-2">
                <Icon className="text-primary" size={24} />

                <p className="font-display font-semibold">{label}</p>

                <p className="text-muted-foreground text-xs">{desc}</p>
              </div>
            ))}
          </div>

          {/* Button */}
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
