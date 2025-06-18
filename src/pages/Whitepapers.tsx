
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Whitepapers = () => {
  const whitepapers = [
    {
      title: "Blockchain Technology in Pharmaceutical Supply Chains: A Comprehensive Guide",
      description: "An in-depth analysis of how blockchain technology addresses critical challenges in pharmaceutical traceability, compliance, and security.",
      pages: "45 pages",
      category: "Technology",
      downloadCount: "2.3K downloads"
    },
    {
      title: "Regulatory Compliance in the Digital Age: Meeting Global Standards",
      description: "Exploring how blockchain solutions help pharmaceutical companies navigate complex regulatory requirements across different markets.",
      pages: "32 pages", 
      category: "Compliance",
      downloadCount: "1.8K downloads"
    },
    {
      title: "The Economics of Supply Chain Transparency: ROI Analysis",
      description: "Financial impact assessment of implementing blockchain traceability solutions in pharmaceutical manufacturing and distribution.",
      pages: "28 pages",
      category: "Business",
      downloadCount: "1.5K downloads"
    },
    {
      title: "Combating Counterfeit Drugs: Technology Solutions for Patient Safety",
      description: "How blockchain-based authentication systems protect patients from counterfeit medications and ensure drug authenticity.",
      pages: "38 pages",
      category: "Safety",
      downloadCount: "2.1K downloads"
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Whitepapers & Research
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Access our comprehensive research and technical documentation on blockchain 
              applications in pharmaceutical supply chains and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="bg-zenblock-white card-hover border border-zenblock-soft-violet">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-zenblock-electric-blue font-medium">{paper.category}</span>
                    <span className="text-sm text-zenblock-secondary-text">{paper.pages}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zenblock-primary-text mb-4">{paper.title}</h3>
                  <p className="text-zenblock-secondary-text mb-6">{paper.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zenblock-secondary-text">{paper.downloadCount}</span>
                    <button className="bg-zenblock-electric-blue text-zenblock-white px-6 py-2 rounded-lg font-semibold hover:bg-zenblock-electric-blue/90 transition-colors">
                      Download PDF
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-zenblock-soft-violet border border-zenblock-soft-violet">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Research Collaboration</h2>
                <p className="text-zenblock-secondary-text mb-6">
                  Partner with our research team to explore new applications of blockchain 
                  technology in pharmaceutical supply chains and regulatory compliance.
                </p>
                <button className="bg-zenblock-electric-blue text-zenblock-white px-8 py-3 rounded-lg font-semibold hover:bg-zenblock-electric-blue/90 transition-colors">
                  Contact Research Team
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Whitepapers;
