import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    shootType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      shootType: "",
      eventDate: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const whatsappUrl = `https://wa.me/917736256589?text=${encodeURIComponent(
    "Hi! I'd like to know more about your photography services.",
  )}`;

  return (
    <div className="pt-24">
<section className="section-padding text-center max-w-3xl mx-auto">
  <p className="text-primary font-body text-xs md:text-sm tracking-[0.1em] uppercase mb-3">
    Every Story Begins With A Moment
  </p>

  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
    Tell Us Your <span className="gold-gradient-text">Story</span>
  </h1>

  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
    Share your vision, your moments, and what makes your story unique.
    Let’s turn them into photographs you’ll remember forever.
  </p>
</section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-body font-medium">
                    Name *
                  </label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-secondary border-border"
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-body font-medium">Phone</label>
                  <Input
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-secondary border-border"
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-body font-medium">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-secondary border-border"
                    maxLength={255}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-body font-medium">
                    Shoot Type
                  </label>
                  <Select
                    value={formData.shootType}
                    onValueChange={(v) => handleChange("shootType", v)}
                  >
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="portrait">Portrait</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-body font-medium">
                  Event Date
                </label>
                <Input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => handleChange("eventDate", e.target.value)}
                  className="bg-secondary border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-body font-medium">
                  Message *
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="bg-secondary border-border min-h-[140px]"
                  maxLength={1000}
                />
              </div>
              <Button
                variant="hero"
                size="xl"
                type="submit"
                className="w-full sm:w-auto"
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Info sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <div className="glass-card p-8 space-y-6">
              <h3 className="font-display text-xl font-semibold">
                Contact Info
              </h3>
              <div className="space-y-4 text-sm">
                <a
                  href="tel:+91-7736256589"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={18} className="text-primary" /> +91-7736256589
                </a>
                <a
                  href="mailto:ruhaismuhammed@gnail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={18} className="text-primary" />{" "}
                  ruhaismuhammed@gnail.com
                </a>
                <span className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary" /> Feroke,
                  Kozhikode, Kerala, India
                </span>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group block"
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle size={22} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-semibold">Chat on WhatsApp</p>
                <p className="text-muted-foreground text-xs">
                  Quick replies, always available
                </p>
              </div>
            </a>

            {/* Social */}
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
