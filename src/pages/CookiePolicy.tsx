
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-zenblock-secondary-text">
              Last updated: December 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">What Are Cookies</h2>
                <p className="text-zenblock-secondary-text">
                  Cookies are small text files that are stored on your computer or mobile device 
                  when you visit our website. They help us provide you with a better experience 
                  by remembering your preferences and improving our services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Types of Cookies We Use</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zenblock-primary-text mb-2">Essential Cookies</h3>
                    <p className="text-zenblock-secondary-text">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zenblock-primary-text mb-2">Analytics Cookies</h3>
                    <p className="text-zenblock-secondary-text">
                      Help us understand how visitors interact with our website by collecting anonymous information.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zenblock-primary-text mb-2">Preference Cookies</h3>
                    <p className="text-zenblock-secondary-text">
                      Remember your preferences and settings to provide a personalized experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zenblock-white border border-zenblock-soft-violet">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Managing Cookies</h2>
                <p className="text-zenblock-secondary-text">
                  You can control and manage cookies through your browser settings. 
                  Please note that disabling certain cookies may affect the functionality of our website.
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

export default CookiePolicy;
