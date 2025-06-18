
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-zenblock-secondary-text">
              Last updated: December 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Acceptance of Terms</h2>
                <p className="text-zenblock-secondary-text">
                  By accessing and using Zenblock Labs' services, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Service Description</h2>
                <div className="space-y-4 text-zenblock-secondary-text">
                  <p>
                    Zenblock Labs provides blockchain-based traceability solutions for pharmaceutical 
                    supply chains, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>End-to-end product tracking and verification</li>
                    <li>Regulatory compliance monitoring</li>
                    <li>Real-time supply chain visibility</li>
                    <li>API access for system integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">User Responsibilities</h2>
                <div className="space-y-4 text-zenblock-secondary-text">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use the service in compliance with applicable laws and regulations</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Limitation of Liability</h2>
                <p className="text-zenblock-secondary-text">
                  Zenblock Labs shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss of profits, 
                  data, use, goodwill, or other intangible losses.
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

export default TermsOfService;
