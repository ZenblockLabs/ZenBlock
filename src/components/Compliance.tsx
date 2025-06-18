
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Globe, Shield } from "lucide-react";

const Compliance = () => {
  const regulations = [
    {
      region: "UAE",
      name: "Tatmeen",
      status: "ready",
      icon: "🇦🇪",
      description: "Track and trace requirements for pharmaceutical products",
      timeline: "Currently compliant",
      features: ["Product registration", "Event tracking", "Real-time monitoring", "Audit trails"]
    },
    {
      region: "India",
      name: "CDSCO",
      status: "pilot",
      icon: "🇮🇳", 
      description: "Central Drugs Standard Control Organization compliance",
      timeline: "Pilot program 2025",
      features: ["Manufacturing tracking", "Distribution logs", "Quality assurance", "Regulatory reporting"]
    },
    {
      region: "United States",
      name: "DSCSA",
      status: "development",
      icon: "🇺🇸",
      description: "Drug Supply Chain Security Act requirements",
      timeline: "Development phase",
      features: ["Serialization", "Verification", "Enhanced tracking", "Suspect product investigations"]
    }
  ];

  const standards = [
    {
      name: "GS1 Standards",
      description: "Global standards for business communication and supply chain management",
      compliance: "Full compatibility with GS1 GLN (Global Location Numbers) and GTIN (Global Trade Item Numbers)"
    },
    {
      name: "ISO 27001",
      description: "Information security management systems",
      compliance: "Security framework aligned with international standards"
    },
    {
      name: "FDA 21 CFR Part 11",
      description: "Electronic records and signatures",
      compliance: "Blockchain-based audit trails meet regulatory requirements"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready": return "bg-green-100 text-green-800 border-green-200";
      case "pilot": return "bg-blue-100 text-blue-800 border-blue-200";
      case "development": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ready": return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "pilot": return <Clock className="w-5 h-5 text-blue-600" />;
      case "development": return <Clock className="w-5 h-5 text-orange-600" />;
      default: return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <section id="compliance" className="py-20 bg-zenblock-soft-violet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-[2rem] font-bold text-zenblock-primary-text mb-6">
            Regulatory Compliance
          </h2>
          <p className="text-lg md:text-xl lg:text-[1.125rem] text-zenblock-secondary-text max-w-3xl mx-auto">
            Our platform is designed to meet the stringent regulatory requirements 
            across multiple jurisdictions, ensuring seamless compliance for global operations.
          </p>
        </div>

        {/* Regional Compliance */}
        <div className="mb-16">
          <h3 className="text-3xl lg:text-[2rem] font-bold text-center text-zenblock-primary-text mb-12">Regional Regulations</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {regulations.map((reg, index) => (
              <Card key={index} className="card-hover bg-zenblock-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{reg.icon}</div>
                    <Badge className={getStatusColor(reg.status)}>
                      {getStatusIcon(reg.status)}
                      <span className="ml-1 capitalize">{reg.status}</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl lg:text-[1rem] text-zenblock-primary-text">{reg.name}</CardTitle>
                  <p className="text-sm text-zenblock-secondary-text">{reg.region}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zenblock-secondary-text text-[1rem]">{reg.description}</p>
                  
                  <div>
                    <div className="text-sm font-medium text-zenblock-primary-text mb-1">Timeline</div>
                    <div className="text-sm text-zenblock-secondary-text">{reg.timeline}</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-zenblock-primary-text mb-2">Key Features</div>
                    <div className="space-y-1">
                      {reg.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-zenblock-electric-blue rounded-full"></div>
                          <span className="text-zenblock-secondary-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* International Standards */}
        <div className="mb-16">
          <h3 className="text-3xl lg:text-[2rem] font-bold text-center text-zenblock-primary-text mb-12">International Standards</h3>
          <div className="space-y-6">
            {standards.map((standard, index) => (
              <Card key={index} className="card-hover bg-zenblock-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-zenblock-electric-blue flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl lg:text-[1rem] font-semibold text-zenblock-primary-text mb-2">{standard.name}</h4>
                      <p className="text-zenblock-secondary-text mb-3 text-[1rem]">{standard.description}</p>
                      <div className="bg-zenblock-soft-mint p-3 rounded-lg">
                        <div className="text-sm font-medium text-zenblock-electric-blue mb-1">Our Compliance</div>
                        <div className="text-sm text-zenblock-secondary-text">{standard.compliance}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Roadmap */}
        <div>
          <Card className="bg-gradient-to-r from-zenblock-dark-blue to-zenblock-electric-blue text-zenblock-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-[2rem] font-bold mb-4">Compliance Roadmap</h3>
                <p className="text-zenblock-inverse-text/80 text-[1rem]">
                  Our ongoing commitment to regulatory excellence across global markets
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2 text-[1rem]">FDA Sandbox</h4>
                  <p className="text-zenblock-inverse-text/80 text-[0.875rem]">Participating in regulatory sandbox programs</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2 text-[1rem]">EU MDR</h4>
                  <p className="text-zenblock-inverse-text/80 text-[0.875rem]">Expanding to European medical device regulations</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2 text-[1rem]">WHO Standards</h4>
                  <p className="text-zenblock-inverse-text/80 text-[0.875rem]">Aligning with World Health Organization guidelines</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
