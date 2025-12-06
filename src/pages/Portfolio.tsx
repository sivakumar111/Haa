import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  LineChart,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    icon: Bot,
    category: "AI Business Automation",
    title: "Enterprise Process Automation",
    client: "Fortune 500 Retail Company",
    description: "Implemented an end-to-end AI automation system that streamlined inventory management, customer service, and order processing.",
    results: [
      "40% reduction in manual tasks",
      "$2M annual cost savings",
      "3x faster order processing",
    ],
    tags: ["AI/ML", "Process Automation", "Integration"],
  },
  {
    icon: Cloud,
    category: "Cloud Migration",
    title: "Multi-Cloud Infrastructure",
    client: "FinTech Startup",
    description: "Led a comprehensive cloud migration from on-premises infrastructure to a multi-cloud architecture with AWS and Azure.",
    results: [
      "99.99% uptime achieved",
      "60% infrastructure cost reduction",
      "5x faster deployment cycles",
    ],
    tags: ["AWS", "Azure", "Kubernetes", "DevOps"],
  },
  {
    icon: Code2,
    category: "Full-Stack Development",
    title: "Customer Portal Platform",
    client: "Healthcare Provider",
    description: "Built a HIPAA-compliant patient portal enabling appointment scheduling, telemedicine, and secure communication.",
    results: [
      "50,000+ active users",
      "45% increase in patient engagement",
      "HIPAA & SOC 2 compliant",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Security"],
  },
  {
    icon: LineChart,
    category: "Predictive Analytics",
    title: "Demand Forecasting System",
    client: "E-commerce Platform",
    description: "Developed a machine learning-powered analytics dashboard for real-time demand forecasting and inventory optimization.",
    results: [
      "92% forecast accuracy",
      "30% reduction in stockouts",
      "Real-time insights",
    ],
    tags: ["Machine Learning", "Python", "Analytics", "Dashboard"],
  },
];

const stats = [
  { value: "15+", label: "Projects Completed" },
  { value: "$50M+", label: "Client Revenue Generated" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Industries Served" },
];

const Portfolio = () => {
  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                Our Portfolio
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Proven </span>
                <span className="gradient-text">Results</span>
                <br />
                <span className="text-foreground">Real </span>
                <span className="gradient-text">Impact</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore how we've helped businesses across industries achieve transformative results with our AI and IT solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[120px] translate-x-1/2" />
      </section>

      {/* Stats Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <GlassCard className="py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <GlassCard className="group">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <project.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-primary text-sm font-medium">{project.category}</p>
                          <h3 className="font-heading text-2xl font-bold text-foreground">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-2">Client: {project.client}</p>
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-lg bg-foreground/5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-foreground/5 rounded-xl p-6">
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                        Key Results
                      </h4>
                      <ul className="space-y-3">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground/80">{result}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="ghost" className="mt-6 text-primary hover:text-primary/80">
                        View Case Study <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
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
                  <span className="text-foreground">Let's Create Your </span>
                  <span className="gradient-text">Success Story</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Ready to join our portfolio of successful projects? Let's discuss how we can help you achieve similar results.
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

export default Portfolio;
