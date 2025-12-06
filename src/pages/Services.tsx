import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import {
  Bot,
  Code2,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation Solutions",
    description: "Transform your business operations with intelligent automation that learns, adapts, and evolves with your needs.",
    features: [
      "Intelligent process automation",
      "Natural language processing",
      "Predictive analytics integration",
      "Custom AI model development",
    ],
    accent: "primary",
  },
  {
    icon: Workflow,
    title: "n8n Automation Solution",
    description: "Streamline your workflows with powerful n8n-based automation that connects all your tools and services seamlessly.",
    features: [
      "Custom workflow design",
      "Multi-app integrations",
      "Trigger-based automation",
      "Real-time data syncing",
    ],
    accent: "skyblue",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Bespoke software solutions crafted with precision to address your unique business challenges and goals.",
    features: [
      "Full-stack web applications",
      "Mobile app development",
      "API design & integration",
      "Legacy system modernization",
    ],
    accent: "primary",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business needs, challenges, and goals to craft the perfect solution.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our experts design a comprehensive roadmap tailored to your specific requirements.",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular iterations ensures we deliver exactly what you need.",
  },
  {
    step: "04",
    title: "Deployment",
    description: "Smooth rollout with thorough testing and seamless integration into your operations.",
  },
];

const Services = () => {
  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
                <Cpu className="w-4 h-4 text-primary" />
                Our Services
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Comprehensive </span>
                <span className="gradient-text">Solutions</span>
                <br />
                <span className="text-foreground">for Modern </span>
                <span className="gradient-text">Businesses</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From AI automation to cybersecurity, we deliver end-to-end solutions that transform how businesses operate and compete.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[120px] translate-x-1/2" />
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlassCard className="h-full group">
                  <div className="flex flex-col gap-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      service.accent === "skyblue" 
                        ? "bg-gradient-to-br from-skyblue/20 to-skyblue/5 group-hover:shadow-[0_0_30px_hsl(var(--skyblue)/0.3)]"
                        : "bg-gradient-to-br from-primary/20 to-primary/5 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                    }`}>
                      <service.icon className={`w-8 h-8 ${service.accent === "skyblue" ? "text-skyblue" : "text-primary"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${service.accent === "skyblue" ? "text-skyblue" : "text-primary"}`} />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
              Our Process
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">How We </span>
              <span className="gradient-text">Deliver Excellence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A proven methodology that ensures consistent, high-quality results for every project.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="relative">
                  <GlassCard className="h-full text-center">
                    <div className="font-heading text-5xl font-bold gradient-text mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </GlassCard>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary/50" />
                    </div>
                  )}
                </div>
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
                  <span className="text-foreground">Let's Build </span>
                  <span className="gradient-text">Something Amazing</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Ready to transform your business with cutting-edge technology? Let's discuss your project.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
