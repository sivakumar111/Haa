import { GlassCard } from "@/components/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
                <Shield className="w-4 h-4 text-primary" />
                Legal
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Privacy </span>
                <span className="gradient-text">Policy</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg text-muted-foreground">
                Last updated: December 1, 2024
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <GlassCard className="prose prose-invert max-w-none">
                <div className="space-y-8 text-foreground/80">
                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      1. Introduction
                    </h2>
                    <p className="leading-relaxed">
                      AutoGoAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      2. Information We Collect
                    </h2>
                    <p className="leading-relaxed mb-4">
                      We may collect information about you in a variety of ways, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Personal data you voluntarily provide (name, email, phone number)</li>
                      <li>Business information (company name, job title)</li>
                      <li>Technical data (IP address, browser type, device information)</li>
                      <li>Usage data (pages visited, time spent, interactions)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      3. How We Use Your Information
                    </h2>
                    <p className="leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, operate, and maintain our services</li>
                      <li>Improve and personalize your experience</li>
                      <li>Communicate with you about updates and offers</li>
                      <li>Process transactions and send related information</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Monitor and analyze usage patterns and trends</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      4. Data Security
                    </h2>
                    <p className="leading-relaxed">
                      We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      5. Third-Party Services
                    </h2>
                    <p className="leading-relaxed">
                      We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving our users. These parties agree to keep this information confidential.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      6. Your Rights
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Depending on your location, you may have the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction of inaccurate data</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Data portability</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      7. Contact Us
                    </h2>
                    <p className="leading-relaxed">
                      If you have questions about this Privacy Policy, please contact us at:
                      <br />
                      <a href="mailto:privacy@autogoai.com" className="text-primary hover:underline">
                        privacy@autogoai.com
                      </a>
                    </p>
                  </section>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
