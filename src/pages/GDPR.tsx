
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              GDPR Compliance
            </h1>
            <p className="text-lg text-zenblock-secondary-text">
              General Data Protection Regulation compliance information
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Your Rights Under GDPR</h2>
                <div className="space-y-4 text-zenblock-secondary-text">
                  <p>
                    Under the General Data Protection Regulation (GDPR), you have the following rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Right to Access:</strong> Request information about your personal data</li>
                    <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Right to Portability:</strong> Receive your data in a portable format</li>
                    <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                    <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Legal Basis for Processing</h2>
                <div className="space-y-4 text-zenblock-secondary-text">
                  <p>We process your personal data based on:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Consent for marketing communications</li>
                    <li>Contract performance for service delivery</li>
                    <li>Legitimate interests for improving our services</li>
                    <li>Legal obligations for compliance requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Data Protection Officer</h2>
                <p className="text-zenblock-secondary-text">
                  For GDPR-related inquiries or to exercise your rights, please contact our 
                  Data Protection Officer at:
                  <br />
                  Email: dpo@zenblocklabs.com
                  <br />
                  We will respond to your request within 30 days.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Data Transfers</h2>
                <p className="text-zenblock-secondary-text">
                  When transferring personal data outside the EU/EEA, we ensure appropriate 
                  safeguards are in place, including Standard Contractual Clauses and 
                  adequacy decisions by the European Commission.
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

export default GDPR;
