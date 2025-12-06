import { GlassCard } from "@/components/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
                <FileText className="w-4 h-4 text-primary" />
                Legal
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Terms of </span>
                <span className="gradient-text">Service</span>
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
                      1. Agreement to Terms
                    </h2>
                    <p className="leading-relaxed">
                      By accessing or using the services provided by AutoGoAI ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      2. Services
                    </h2>
                    <p className="leading-relaxed">
                      AutoGoAI provides AI automation, custom software development, cloud engineering, data analytics, and cybersecurity services. The specific details of services will be outlined in individual service agreements or statements of work.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      3. User Responsibilities
                    </h2>
                    <p className="leading-relaxed mb-4">
                      When using our services, you agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Use the services in compliance with applicable laws</li>
                      <li>Not engage in any unauthorized use of the services</li>
                      <li>Notify us immediately of any security breaches</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      4. Intellectual Property
                    </h2>
                    <p className="leading-relaxed">
                      Unless otherwise agreed in writing, all intellectual property rights in our services, including but not limited to software, designs, and methodologies, remain the property of AutoGoAI. Client-specific deliverables are subject to the terms outlined in individual service agreements.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      5. Confidentiality
                    </h2>
                    <p className="leading-relaxed">
                      Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of engagement. This obligation survives the termination of any service agreement.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      6. Limitation of Liability
                    </h2>
                    <p className="leading-relaxed">
                      To the maximum extent permitted by law, AutoGoAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      7. Termination
                    </h2>
                    <p className="leading-relaxed">
                      We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms of Service. Upon termination, your right to use the services will cease immediately.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      8. Governing Law
                    </h2>
                    <p className="leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      9. Changes to Terms
                    </h2>
                    <p className="leading-relaxed">
                      We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      10. Contact Information
                    </h2>
                    <p className="leading-relaxed">
                      For questions about these Terms of Service, please contact us at:
                      <br />
                      <a href="mailto:legal@autogoai.com" className="text-primary hover:underline">
                        legal@autogoai.com
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

export default Terms;
