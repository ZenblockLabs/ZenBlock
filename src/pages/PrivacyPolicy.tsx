
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-zenblock-secondary-text">
              Last updated: December 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Information We Collect</h2>
                <div className="space-y-4 text-zenblock-secondary-text">
                  <p>
                    At Zenblock Labs, we collect information that you provide directly to us, 
                    such as when you create an account, use our services, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Personal information (name, email address, phone number)</li>
                    <li>Company information for business accounts</li>
                    <li>Usage data and analytics</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-zenblock-secondary-text">
                  <ul className="list-disc list-inside space-y-2">
                    <li>To provide and maintain our blockchain traceability services</li>
                    <li>To communicate with you about our services and updates</li>
                    <li>To improve our platform and develop new features</li>
                    <li>To ensure compliance with regulatory requirements</li>
                    <li>To detect and prevent fraud or security incidents</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Data Security</h2>
                <p className="text-zenblock-secondary-text">
                  We implement industry-standard security measures to protect your personal information, 
                  including encryption, secure data transmission, and regular security audits. 
                  Our blockchain infrastructure provides additional layers of security and immutability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Contact Us</h2>
                <p className="text-zenblock-secondary-text">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@zenblocklabs.com
                  <br />
                  Address: Hyderabad, India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
