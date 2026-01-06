import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 6, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  PlaceTo Africa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p className="text-muted-foreground">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Information We Collect</h2>

                <h3 className="font-semibold text-lg text-foreground mb-3">Personal Data</h3>
                <p className="text-muted-foreground mb-4">
                  When you use our services, we may collect personally identifiable information, such as:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Location data and property preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication preferences and history</li>
                </ul>

                <h3 className="font-semibold text-lg text-foreground mb-3">Usage Data</h3>
                <p className="text-muted-foreground mb-4">
                  We automatically collect certain information when you visit, use, or navigate our site:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Browser type and version</li>
                  <li>IP address and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Search queries and property views</li>
                  <li>Referral source and navigation patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect in the following ways:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To process your property inquiries and viewing requests</li>
                  <li>To improve and personalize your experience</li>
                  <li>To communicate with you about properties, updates, and services</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To analyze usage patterns and improve our platform</li>
                  <li>To detect, prevent, and address technical issues or fraud</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Sharing Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With property owners when you inquire about or schedule viewings</li>
                  <li>With service providers who assist us in operating our platform</li>
                  <li>With analytics partners to improve our services</li>
                  <li>In response to legal requests or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no electronic transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Your Privacy Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent where we rely on it</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us at privacy@placetoafrica.com.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to track activity on our site and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features may not function properly without cookies.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our site may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to and maintained on servers located outside your country. By using our services, you consent to such transfers. We ensure appropriate safeguards are in place for these transfers.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-muted/30 rounded-xl p-6">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> privacy@placetoafrica.com<br />
                    <strong>Phone:</strong> +256 (0) 700 123 456<br />
                    <strong>Address:</strong> Kampala, Uganda
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
