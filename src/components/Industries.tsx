
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pill, Leaf, Battery, Gem } from "lucide-react";

const Industries = () => {
  const currentFocus = {
    icon: <Pill className="w-12 h-12 text-zenblock-electric-blue" />,
    title: "Pharmaceuticals",
    description: "Our primary focus is transforming pharmaceutical supply chains across India, UAE, and beyond.",
    compliance: ["DSCSA (US)", "Tatmeen (UAE)", "CDSCO (India)", "GS1 Standards"],
    benefits: [
      "Prevent counterfeit drugs entering the market",
      "Ensure regulatory compliance across borders",
      "Enable rapid recalls and spoilage tracking",
      "Provide end-to-end audit trails",
      "Build consumer trust through transparency"
    ]
  };

  const futureIndustries = [
    {
      icon: <Leaf className="w-8 h-8 text-zenblock-pharma-green" />,
      title: "Agriculture",
      description: "Farm-to-table traceability for food safety and organic certification"
    },
    {
      icon: <Battery className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Battery-as-a-Service",
      description: "Tracking battery lifecycle, performance, and recycling"
    },
    {
      icon: <Gem className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Luxury Goods",
      description: "Authenticity verification for high-value products"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-zenblock-soft-violet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-[2rem] font-bold text-zenblock-primary-text mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg md:text-xl lg:text-[1.125rem] text-zenblock-secondary-text max-w-3xl mx-auto">
            Starting with pharmaceuticals and expanding to other regulated industries 
            that require trust, transparency, and compliance.
          </p>
        </div>

        {/* Current Focus - Pharmaceuticals */}
        <div className="mb-16">
          <Card className="bg-zenblock-white shadow-xl border-2 border-zenblock-electric-blue">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                {currentFocus.icon}
              </div>
              <CardTitle className="text-3xl text-zenblock-primary-text">{currentFocus.title}</CardTitle>
              <Badge className="bg-zenblock-electric-blue text-zenblock-white">Current Focus</Badge>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-base lg:text-[1rem] text-zenblock-secondary-text text-center">{currentFocus.description}</p>
              
              {/* Compliance Standards */}
              <div>
                <h4 className="text-xl font-semibold text-zenblock-primary-text mb-4">Regulatory Compliance</h4>
                <div className="flex flex-wrap gap-2">
                  {currentFocus.compliance.map((standard, index) => (
                    <Badge key={index} variant="outline" className="border-zenblock-electric-blue text-zenblock-electric-blue">
                      {standard}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xl font-semibold text-zenblock-primary-text mb-4">Key Benefits</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentFocus.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-zenblock-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-zenblock-secondary-text text-[1rem]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geography Focus */}
              <div className="bg-zenblock-soft-mint p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-zenblock-primary-text mb-4">Geographic Focus</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-zenblock-electric-blue mb-1">🇮🇳</div>
                    <div className="font-semibold text-zenblock-primary-text">India</div>
                    <div className="text-sm text-zenblock-secondary-text">Manufacturing Hub</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zenblock-electric-blue mb-1">🇦🇪</div>
                    <div className="font-semibold text-zenblock-primary-text">UAE</div>
                    <div className="text-sm text-zenblock-secondary-text">Distribution Center</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zenblock-electric-blue mb-1">🌍</div>
                    <div className="font-semibold text-zenblock-primary-text">Global</div>
                    <div className="text-sm text-zenblock-secondary-text">Expanding Markets</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Industries */}
        <div>
          <h3 className="text-3xl lg:text-[2rem] font-bold text-center text-zenblock-primary-text mb-12">Future Expansion</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {futureIndustries.map((industry, index) => (
              <Card key={index} className="card-hover bg-zenblock-white">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-xl text-zenblock-primary-text">{industry.title}</CardTitle>
                  <Badge variant="outline" className="border-zenblock-secondary-text text-zenblock-secondary-text">
                    Coming Soon
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-zenblock-secondary-text text-center text-[1rem]">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
