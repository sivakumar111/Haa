import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import {
  Bot,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

const products = [
  {
    icon: Bot,
    name: "AutoGoAI Agent Suite",
    tagline: "Intelligent automation at your fingertips",
    description: "A comprehensive suite of AI agents designed to automate complex workflows, handle customer interactions, and streamline operations across your organization.",
    features: [
      "Multi-agent orchestration",
      "Natural language understanding",
      "Custom workflow builders",
      "Real-time analytics dashboard",
      "Enterprise-grade security",
      "API integrations",
    ],
    highlight: "Most Popular",
  },
  {
    icon: Users,
    name: "AutoGoAI CRM Integrator",
    tagline: "Supercharge your customer relationships",
    description: "Seamlessly connect AI capabilities with your existing CRM to enhance customer insights, automate follow-ups, and drive conversions with intelligent recommendations.",
    features: [
      "Salesforce & HubSpot integration",
      "Predictive lead scoring",
      "Automated email sequences",
      "Customer sentiment analysis",
      "Conversation intelligence",
      "Custom reporting",
    ],
    highlight: null,
  },
  {
    icon: BarChart3,
    name: "AutoGoAI Insight Engine",
    tagline: "Transform data into decisions",
    description: "An advanced analytics platform powered by AI that turns your raw data into actionable insights, predictive forecasts, and strategic recommendations.",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboards",
      "Anomaly detection",
      "Natural language queries",
      "Export & sharing",
    ],
    highlight: "New",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "10x Faster",
    description: "Deploy AI solutions in days, not months",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "SOC 2 compliant with advanced security",
  },
  {
    icon: Globe,
    title: "Scale Globally",
    description: "Multi-region deployment & support",
  },
];

const Products = () => {
  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                Our Products
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Powerful </span>
                <span className="gradient-text">AI Products</span>
                <br />
                <span className="text-foreground">for </span>
                <span className="gradient-text">Modern Teams</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Purpose-built AI solutions designed to integrate seamlessly into your existing workflows and deliver immediate value.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[120px] translate-x-1/2" />
      </section>

      {/* Products Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {products.map((product, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <GlassCard className="relative overflow-hidden">
                  {product.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        {product.highlight}
                      </span>
                    </div>
                  )}
                  
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                        <product.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-primary font-medium mb-4">{product.tagline}</p>
                      <p className="text-muted-foreground leading-relaxed mb-8">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link to="/contact">
                          <Button variant="hero" size="lg">
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="hero-outline" size="lg">
                          Learn More
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 p-3 rounded-xl bg-foreground/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Why Teams Choose </span>
              <span className="gradient-text">AutoGoAI</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlassCard className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <GlassCard className="text-center py-16 px-8 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
              
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Ready to Get </span>
                  <span className="gradient-text">Started?</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Try our products with a free trial or schedule a demo with our team.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="xl">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="hero-outline" size="xl">
                      Schedule Demo
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

export default Products;
