
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Pharmaceutical Manufacturing",
      company: "Leading Multinational Pharma Corp",
      challenge: "Tracking products across 40+ countries with varying regulatory requirements",
      solution: "Implemented comprehensive blockchain traceability with automated compliance reporting",
      results: ["99.9% traceability accuracy", "60% reduction in compliance costs", "Zero counterfeit incidents"],
      industry: "Manufacturing"
    },
    {
      title: "Specialty Drug Distribution Network", 
      company: "Regional Healthcare Distributor",
      challenge: "Managing cold chain integrity for temperature-sensitive biologics",
      solution: "Real-time monitoring with blockchain-secured temperature and location data",
      results: ["100% cold chain compliance", "45% reduction in product waste", "Enhanced patient safety"],
      industry: "Distribution"
    },
    {
      title: "Clinical Trial Supply Management",
      company: "Contract Research Organization",
      challenge: "Ensuring drug accountability and patient safety across multiple trial sites",
      solution: "End-to-end visibility from manufacturing to patient administration",
      results: ["Improved trial efficiency", "Enhanced regulatory reporting", "Faster audit processes"],
      industry: "Clinical Research"
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Discover how leading pharmaceutical companies have transformed their 
              supply chains with Zenblock Labs' blockchain solutions.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-zenblock-white border border-zenblock-soft-violet">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-zenblock-electric-blue font-medium">{study.industry}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-zenblock-primary-text mb-3">{study.title}</h2>
                  <h3 className="text-lg font-semibold text-zenblock-secondary-text mb-6">{study.company}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-zenblock-soft-violet p-6 rounded-lg">
                      <h4 className="font-semibold text-zenblock-primary-text mb-3">Challenge</h4>
                      <p className="text-zenblock-secondary-text">{study.challenge}</p>
                    </div>
                    
                    <div className="bg-zenblock-soft-mint p-6 rounded-lg">
                      <h4 className="font-semibold text-zenblock-primary-text mb-3">Solution</h4>
                      <p className="text-zenblock-secondary-text">{study.solution}</p>
                    </div>
                    
                    <div className="bg-zenblock-white border-2 border-zenblock-electric-blue p-6 rounded-lg">
                      <h4 className="font-semibold text-zenblock-primary-text mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-zenblock-secondary-text">• {result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
