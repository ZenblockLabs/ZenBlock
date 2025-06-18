
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      title: "Zenblock Labs Announces Partnership with Global Pharmaceutical Leader",
      summary: "Strategic collaboration to implement blockchain traceability across international supply chains.",
      date: "December 18, 2024",
      category: "Partnership"
    },
    {
      title: "New Funding Round Completed: $25M Series A",
      summary: "Investment will accelerate platform development and global expansion initiatives.",
      date: "December 12, 2024", 
      category: "Funding"
    },
    {
      title: "Zenblock Labs Receives FDA Recognition for Innovation",
      summary: "Platform acknowledged for advancing pharmaceutical supply chain security and compliance.",
      date: "December 8, 2024",
      category: "Recognition"
    },
    {
      title: "Launch of Enhanced API Suite",
      summary: "New developer tools and APIs enable seamless integration with existing pharmaceutical systems.",
      date: "December 1, 2024",
      category: "Product"
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Latest News
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Stay updated with the latest developments, partnerships, and innovations 
              from Zenblock Labs as we transform pharmaceutical supply chains.
            </p>
          </div>

          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="bg-zenblock-white card-hover border border-zenblock-soft-violet">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-zenblock-electric-blue font-medium">{item.category}</span>
                    <span className="text-sm text-zenblock-secondary-text">{item.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-zenblock-primary-text mb-3">{item.title}</h2>
                  <p className="text-zenblock-secondary-text text-lg mb-4">{item.summary}</p>
                  <button className="text-zenblock-electric-blue hover:text-zenblock-electric-blue/80 font-medium">
                    Read Full Article →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-zenblock-soft-mint border border-zenblock-soft-violet">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Media Inquiries</h2>
                <p className="text-zenblock-secondary-text mb-6">
                  For press releases, media kits, and interview requests, contact our media relations team.
                </p>
                <button className="bg-zenblock-pharma-green text-zenblock-white px-6 py-3 rounded-lg font-semibold hover:bg-zenblock-pharma-green/90 transition-colors">
                  Contact Media Team
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

export default News;
