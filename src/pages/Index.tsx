import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import {
  Bot,
  Code2,
  Cloud,
  Database,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation Solutions",
    description: "Streamline operations with intelligent automation that learns and adapts to your business needs.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technology to solve your unique challenges.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Engineering",
    description: "Scalable infrastructure and seamless deployments for maximum efficiency and reliability.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Transform raw data into actionable insights that drive informed decision-making.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with enterprise-grade security measures and protocols.",
  },
  {
    icon: Sparkles,
    title: "AI Integration Services",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy solutions in days, not months",
  },
  {
    icon: Target,
    title: "Precision Driven",
    description: "Tailored solutions for your exact needs",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Top-tier engineers and AI specialists",
  },
];

const testimonials = [
  {
    quote: "AutoGoAI transformed our operations. We've seen a 40% increase in efficiency since implementing their AI solutions.",
    author: "Sarah Chen",
    role: "CTO, TechVentures Inc",
  },
  {
    quote: "The team's expertise in cloud infrastructure helped us scale seamlessly during our busiest season.",
    author: "Michael Roberts",
    role: "VP Engineering, ScaleUp",
  },
  {
    quote: "Their AI-powered analytics platform gave us insights we never knew were possible.",
    author: "Emily Watson",
    role: "Data Director, DataDriven Co",
  },
];

const trustedBy = [
  "TechCorp",
  "InnovateLabs",
  "FutureScale",
  "DataSphere",
  "CloudNine",
];

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                AI-Powered IT Solutions
              </span>
            </div>

            <h1 className="animate-in-delay-1 font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">AutoGoAI – </span>
              <span className="gradient-text">Build Faster.</span>
              <br />
              <span className="text-foreground">Scale </span>
              <span className="gradient-text">Smarter.</span>
            </h1>

            <p className="animate-in-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Empowering businesses with AI-driven automation, innovative IT solutions, and scalable engineering that transforms how you operate.
            </p>

            <div className="animate-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Schedule a Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="animate-in-delay-4 grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
              {[
                { value: "15+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "10+", label: "Enterprise Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[120px] translate-x-1/2" />
      </section>

      {/* Trusted By Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center">
            <p className="text-sm text-muted-foreground mb-8">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {trustedBy.map((company, index) => (
                <div
                  key={index}
                  className="text-xl md:text-2xl font-heading font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {company}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Comprehensive </span>
              <span className="gradient-text">AI & IT Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From intelligent automation to enterprise-grade security, we deliver solutions that drive real business value.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlassCard className="h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/services">
              <Button variant="hero-outline" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Built for </span>
                <span className="gradient-text">Growth & Innovation</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We combine deep technical expertise with a passion for innovation to deliver solutions that don't just meet your needs—they exceed them.
              </p>

              <ul className="space-y-4">
                {[
                  "AI-first approach to every challenge",
                  "Scalable architecture for future growth",
                  "24/7 support and maintenance",
                  "Transparent pricing, no hidden fees",
                  "Agile development methodology",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <GlassCard key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </GlassCard>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">What Our </span>
              <span className="gradient-text">Clients Say</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <GlassCard className="h-full flex flex-col">
                  <div className="flex-1">
                    <div className="text-primary text-4xl font-serif mb-4">"</div>
                    <p className="text-foreground leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <p className="font-heading font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <GlassCard className="text-center py-16 px-8 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
              
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-foreground">Ready to </span>
                  <span className="gradient-text">Transform Your Business?</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Let's discuss how AutoGoAI can help you build faster, scale smarter, and stay ahead of the competition.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="xl">
                      Get Started Today
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant="hero-outline" size="xl">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
