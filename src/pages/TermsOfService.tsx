import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 6, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using PlaceTo Africa ("the Platform"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Description of Services</h2>
                <p className="text-muted-foreground mb-4">
                  PlaceTo Africa provides an online platform connecting property seekers with property listings across Africa. Our services include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Property search and discovery tools</li>
                  <li>Property listing information and images</li>
                  <li>Communication facilitation between seekers and property owners</li>
                  <li>AI-powered assistance and recommendations</li>
                  <li>Viewing appointment scheduling</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  When using PlaceTo Africa, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and truthful information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use the platform only for lawful purposes</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not engage in fraudulent or deceptive practices</li>
                  <li>Not attempt to compromise the security of the platform</li>
                  <li>Not use automated systems to access the platform without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Property Listings</h2>

                <h3 className="font-semibold text-lg text-foreground mb-3">Information Accuracy</h3>
                <p className="text-muted-foreground mb-4">
                  While we strive to ensure accuracy, PlaceTo Africa does not guarantee that all property information is complete, accurate, or current. Property details, prices, and availability are subject to change without notice.
                </p>

                <h3 className="font-semibold text-lg text-foreground mb-3">Verification</h3>
                <p className="text-muted-foreground mb-4">
                  Properties marked as "Verified" have undergone our verification process. However, users should conduct their own due diligence before committing to any property transaction.
                </p>

                <h3 className="font-semibold text-lg text-foreground mb-3">Third-Party Content</h3>
                <p className="text-muted-foreground">
                  Property listings are provided by property owners or authorized agents. PlaceTo Africa is not responsible for the accuracy or legality of third-party content.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Transactions and Agreements</h2>
                <p className="text-muted-foreground mb-4">
                  PlaceTo Africa facilitates connections but is not a party to any rental or purchase agreements between users and property owners. All transactions, negotiations, and agreements are solely between the property seeker and property owner.
                </p>
                <p className="text-muted-foreground">
                  We recommend all parties:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Review all documents carefully before signing</li>
                  <li>Seek legal advice when necessary</li>
                  <li>Verify property ownership and legal status</li>
                  <li>Document property condition before occupancy</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Fees and Payments</h2>
                <p className="text-muted-foreground mb-4">
                  Browsing PlaceTo Africa is free. Some services may require payment, which will be clearly indicated. All fees are non-refundable unless otherwise stated.
                </p>
                <p className="text-muted-foreground">
                  Property-specific fees, deposits, or charges are between the user and property owner and are not processed through PlaceTo Africa.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All content on PlaceTo Africa, including text, graphics, logos, images, and software, is the property of PlaceTo Africa or its content suppliers and is protected by copyright and intellectual property laws.
                </p>
                <p className="text-muted-foreground">
                  You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Privacy and Data Protection</h2>
                <p className="text-muted-foreground">
                  Your use of PlaceTo Africa is also governed by our Privacy Policy. By using our services, you consent to the collection and use of information as described in the Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Disclaimers and Limitations of Liability</h2>

                <h3 className="font-semibold text-lg text-foreground mb-3">Service Availability</h3>
                <p className="text-muted-foreground mb-4">
                  PlaceTo Africa is provided "as is" and "as available." We do not guarantee uninterrupted or error-free service. We may modify, suspend, or discontinue any aspect of the platform at any time.
                </p>

                <h3 className="font-semibold text-lg text-foreground mb-3">Limitation of Liability</h3>
                <p className="text-muted-foreground mb-4">
                  To the fullest extent permitted by law, PlaceTo Africa shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.
                </p>

                <h3 className="font-semibold text-lg text-foreground mb-3">Property Disputes</h3>
                <p className="text-muted-foreground">
                  PlaceTo Africa is not responsible for disputes between users and property owners, including issues related to property condition, ownership, rental agreements, or payments.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold PlaceTo Africa harmless from any claims, damages, losses, or expenses arising from your use of the platform, your violation of these Terms, or your violation of any rights of another party.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your access to PlaceTo Africa at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of Uganda, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Kampala, Uganda.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page with a new "Last updated" date. Continued use after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Severability</h2>
                <p className="text-muted-foreground">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/30 rounded-xl p-6">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> legal@placetoafrica.com<br />
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

export default TermsOfService;
