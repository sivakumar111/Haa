import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Clock,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "autogoai.in@gmail.com",
    href: "mailto:autogoai.in@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9949336587",
    href: "tel:+919949336587",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rajahmundry, East Godavari, Andhra Pradesh, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat, 9am - 6pm IST",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                Contact Us
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Let's Build </span>
                <span className="gradient-text">Something</span>
                <br />
                <span className="gradient-text">Amazing</span>
                <span className="text-foreground"> Together</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help transform your business.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[120px] translate-x-1/2" />
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <AnimatedSection>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Send us a message
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </GlassCard>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-6">
              <AnimatedSection delay={100}>
                <GlassCard>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <GlassCard>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Schedule a Call
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Prefer to talk? Book a 30-minute consultation with our team to discuss your project in detail.
                  </p>
                  <Button variant="hero-outline" size="lg" className="w-full">
                    Book a Meeting
                  </Button>
                </GlassCard>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <GlassCard className="bg-gradient-to-br from-primary/10 to-accent/10">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Looking to join our team?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We're always looking for talented individuals. Check out our open positions.
                  </p>
                  <a href="/careers" className="text-primary hover:underline font-medium">
                    View Careers →
                  </a>
                </GlassCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
