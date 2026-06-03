import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | AI Studio",
  description: "Privacy policy for AI Studio - Learn how we protect and handle your data",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border/40 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>Back to home</span>
              <ChevronRightIcon className="size-4" />
            </Link>
            <div className="space-y-4">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Your privacy is important to us. Learn how AI Studio collects, uses, and protects your information.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Last updated: June 2024 • Effective from: June 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* Table of Contents */}
            <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
              <h2 className="font-semibold text-foreground">Table of Contents</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Introduction",
                  "Information We Collect",
                  "How We Use Your Information",
                  "Data Security",
                  "Your Rights and Choices",
                  "Cookies and Tracking",
                  "Third-Party Services",
                  "Data Retention",
                  "Children's Privacy",
                  "Policy Changes",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-primary hover:underline transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Introduction */}
            <section id="introduction" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-7">
                AI Studio ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our image restyling service.
              </p>
              <p className="text-muted-foreground leading-7">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our service. By accessing and using AI Studio, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section id="information-we-collect" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">1. Account Information</h3>
                  <p className="text-muted-foreground leading-7">
                    When you create an account, we collect:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Email address</li>
                    <li>Full name</li>
                    <li>Username</li>
                    <li>Password (encrypted)</li>
                    <li>Profile picture (optional)</li>
                    <li>Account preferences</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">2. Image and Content Data</h3>
                  <p className="text-muted-foreground leading-7">
                    When you use our service:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Original images you upload for restyling</li>
                    <li>Generated restyled images</li>
                    <li>Style selections and preferences applied</li>
                    <li>Processing metadata and timestamps</li>
                    <li>Quality ratings and feedback on results</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground italic">
                    Note: We do not share your images with third parties. Your images are stored securely and are only used to provide the restyling service.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">3. Usage Information</h3>
                  <p className="text-muted-foreground leading-7">
                    We automatically collect information about your interactions:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Pages visited and features used</li>
                    <li>Time spent on different sections</li>
                    <li>Clicks and navigation patterns</li>
                    <li>Search queries and filters applied</li>
                    <li>Errors and troubleshooting information</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">4. Device Information</h3>
                  <p className="text-muted-foreground leading-7">
                    We collect technical information about your device:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Device type and model</li>
                    <li>Mobile network information</li>
                    <li>Referrer and entry/exit pages</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">5. Payment Information</h3>
                  <p className="text-muted-foreground leading-7">
                    For paid subscriptions, we collect:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Billing address</li>
                    <li>Payment method details (processed securely via payment processors)</li>
                    <li>Transaction history</li>
                    <li>Subscription plan and status</li>
                    <li>Invoice information</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground italic">
                    Note: We do not store full credit card numbers. Payment processing is handled by secure third-party processors.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section id="how-we-use-your-information" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-7">
                AI Studio uses the collected information for various purposes:
              </p>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="text-primary font-semibold min-w-fit">Service Delivery</div>
                  <p className="text-muted-foreground">Providing and maintaining the image restyling service, processing uploads, and generating results.</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary font-semibold min-w-fit">Personalization</div>
                  <p className="text-muted-foreground">Customizing your experience, remembering preferences, and recommending styles.</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary font-semibold min-w-fit">Communication</div>
                  <p className="text-muted-foreground">Sending service updates, support responses, promotional content (with your consent), and important notices.</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary font-semibold min-w-fit">Analytics</div>
                  <p className="text-muted-foreground">Understanding usage patterns, identifying popular features, and improving service quality.</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary font-semibold min-w-fit">Security</div>
                  <p className="text-muted-foreground">Detecting fraud, preventing abuse, and protecting your account and data.</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary font-semibold min-w-fit">Legal Compliance</div>
                  <p className="text-muted-foreground">Complying with laws, regulations, and responding to legal requests.</p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section id="data-security" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-7">
                We implement comprehensive security measures to protect your data:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li><strong>Encryption:</strong> Data in transit is encrypted using TLS/SSL protocols. Sensitive data is encrypted at rest.</li>
                <li><strong>Access Control:</strong> Only authorized personnel have access to personal information, with strict access controls and authentication.</li>
                <li><strong>Monitoring:</strong> Continuous monitoring and intrusion detection systems help identify and prevent unauthorized access.</li>
                <li><strong>Backup:</strong> Regular backups ensure data recovery in case of incidents while maintaining security standards.</li>
                <li><strong>Incident Response:</strong> We have protocols in place to respond quickly to security incidents and notify affected users as required by law.</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground italic">
                While we strive to protect your information, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights and Choices */}
            <section id="your-rights-and-choices" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-7">
                Depending on your location, you may have the following rights:
              </p>
              <div className="space-y-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">Right to Access</h3>
                  <p className="text-muted-foreground">You can request a copy of the personal data we hold about you.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">Right to Rectification</h3>
                  <p className="text-muted-foreground">You can correct inaccurate or incomplete information in your account.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">Right to Erasure</h3>
                  <p className="text-muted-foreground">You can request deletion of your personal data, subject to certain legal obligations.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">Right to Data Portability</h3>
                  <p className="text-muted-foreground">You can request your data in a portable, machine-readable format.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">Right to Opt-Out</h3>
                  <p className="text-muted-foreground">You can opt out of marketing communications and certain data processing activities.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">Account Deletion</h3>
                  <p className="text-muted-foreground">You can delete your account at any time through your account settings. Your uploaded images will be permanently deleted.</p>
                </div>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section id="cookies-and-tracking" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-7">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              <div className="space-y-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">Essential Cookies</h3>
                  <p className="text-muted-foreground">Required for authentication, security, and basic functionality. These cannot be disabled.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">Preference Cookies</h3>
                  <p className="text-muted-foreground">Remember your settings and preferences for a personalized experience.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">Analytics Cookies</h3>
                  <p className="text-muted-foreground">Help us understand how you use the service to improve features and performance.</p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground leading-7">
                You can control cookies through your browser settings. Disabling certain cookies may affect service functionality.
              </p>
            </section>

            {/* Third-Party Services */}
            <section id="third-party-services" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Third-Party Services</h2>
              <p className="text-muted-foreground leading-7">
                AI Studio may integrate with third-party services:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li><strong>Authentication:</strong> Clerk for secure user authentication and account management</li>
                <li><strong>Payment Processing:</strong> Stripe or similar providers for secure payment transactions</li>
                <li><strong>Analytics:</strong> Third-party analytics services to understand usage patterns</li>
                <li><strong>Cloud Storage:</strong> AWS or similar providers for secure data storage and processing</li>
                <li><strong>Error Tracking:</strong> Sentry for monitoring and fixing application errors</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-7">
                These third parties have their own privacy policies and are contractually bound to protect your data. We are not responsible for their privacy practices beyond what we can contractually require.
              </p>
            </section>

            {/* Data Retention */}
            <section id="data-retention" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Retention</h2>
              <p className="text-muted-foreground leading-7">
                We retain your information for as long as necessary to provide services and fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li><strong>Account Data:</strong> Retained while your account is active, plus 30 days after deletion for recovery purposes</li>
                <li><strong>Images:</strong> Retained while your account is active and deleted upon account deletion</li>
                <li><strong>Usage Logs:</strong> Kept for 90 days for analytics and security purposes</li>
                <li><strong>Payment Records:</strong> Retained as required by tax and accounting regulations (typically 7 years)</li>
                <li><strong>Legal Data:</strong> Kept as long as required by applicable laws</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section id="children's-privacy" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Children's Privacy</h2>
              <p className="text-muted-foreground leading-7">
                AI Studio is not intended for children under 13 years old. We do not knowingly collect personal information from children. If we discover we have collected information from a child under 13, we will delete it immediately. If you believe we have inadvertently collected such information, please contact us immediately.
              </p>
            </section>

            {/* Policy Changes */}
            <section id="policy-changes" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Policy Changes</h2>
              <p className="text-muted-foreground leading-7">
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the "Last Updated" date and, where required, by sending you an email or posting a prominent notice on our website. Your continued use of AI Studio following the posting of revised Privacy Policy means you accept and agree to the changes.
              </p>
            </section>

            {/* Contact Us */}
            <section id="contact-us" className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-7">
                If you have questions about this Privacy Policy, concerns about our privacy practices, or wish to exercise your rights, please contact us:
              </p>
              <div className="mt-6 rounded-lg border border-border/60 bg-card p-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a href="mailto:privacy@aistudio.com" className="text-primary hover:underline">
                    privacy@aistudio.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Mailing Address</p>
                  <p className="text-muted-foreground text-sm">
                    AI Studio<br />
                    123 Privacy Street<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Response Time</p>
                  <p className="text-muted-foreground text-sm">
                    We will respond to all privacy inquiries within 30 days.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="px-5 py-6 sm:px-8 lg:px-12">
        <Footer />
      </div>
    </main>
  );
}
