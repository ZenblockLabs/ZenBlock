
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill, Truck, Hospital, Smartphone, Shield, Search } from "lucide-react";

const Solution = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Pill className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Drug Registration",
      description: "Secure registration of pharmaceutical products with unique digital identities on the blockchain"
    },
    {
      icon: <Truck className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Event Logging",
      description: "Complete tracking from manufacturing through distribution to final dispensing"
    },
    {
      icon: <Search className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Real-time Traceability",
      description: "Instant visibility into product location, condition, and custody chain"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "QR Code Verification",
      description: "End customers can verify product authenticity by scanning QR codes"
    },
    {
      icon: <Shield className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Audit Logs",
      description: "Immutable records for regulatory compliance and audit requirements"
    },
    {
      icon: <Hospital className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Recall Management",
      description: "Rapid identification and tracking of products for recalls and spoilage"
    }
  ];

  const techStack = [
    { name: "Hyperledger Fabric", description: "Permissioned blockchain for enterprise security" },
    { name: "Supabase", description: "Real-time database and authentication" },
    { name: "React", description: "Modern web interface for all stakeholders" },
    { name: "Mobile Apps", description: "iOS and Android apps for field operations" }
  ];

  return (
    <section id="solution" className="py-20 bg-zenblock-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
            Our Solution
          </h2>
          <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
            End-to-end drug traceability powered by blockchain technology, 
            providing complete visibility and trust across the pharmaceutical supply chain.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-zenblock-primary-text mb-12">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover bg-zenblock-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <CardTitle className="text-xl text-zenblock-primary-text">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zenblock-secondary-text">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-zenblock-primary-text mb-12">How It Works</h3>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-gradient-to-r from-zenblock-electric-blue to-zenblock-pharma-green"></div>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Manufacturing", desc: "Product registered on blockchain" },
                { step: "2", title: "Distribution", desc: "Each transfer logged securely" },
                { step: "3", title: "Retail/Hospital", desc: "Arrival and storage tracked" },
                { step: "4", title: "Consumer", desc: "Authenticity verified via QR" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-zenblock-electric-blue text-zenblock-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-zenblock-primary-text mb-2">{item.title}</h4>
                  <p className="text-zenblock-secondary-text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-zenblock-primary-text mb-12">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="text-center card-hover bg-zenblock-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-zenblock-primary-text mb-2">{tech.name}</h4>
                  <p className="text-zenblock-secondary-text">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zenblock-dark-blue to-zenblock-electric-blue text-zenblock-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Supply Chain?</h3>
              <p className="text-zenblock-inverse-text/90 mb-6">
                See how our blockchain solution can enhance trust and compliance in your operations.
              </p>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-zenblock-white text-zenblock-electric-blue hover:bg-zenblock-white/90"
              >
                Schedule a Demo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solution;
