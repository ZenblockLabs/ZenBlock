
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Blockchain Developer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      description: "Join our team to build cutting-edge blockchain solutions for pharmaceutical traceability."
    },
    {
      title: "Compliance Specialist",
      department: "Regulatory",
      location: "Remote",
      type: "Full-time", 
      description: "Help ensure our solutions meet international pharmaceutical regulatory standards."
    },
    {
      title: "Sales Executive",
      department: "Business Development",
      location: "UAE/India",
      type: "Full-time",
      description: "Drive business growth by connecting with pharmaceutical companies across the region."
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Be part of the revolution in pharmaceutical supply chain technology. 
              Help us build trust and transparency in regulated industries.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-zenblock-primary-text mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="bg-zenblock-white card-hover border border-zenblock-soft-violet">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-zenblock-primary-text mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-zenblock-secondary-text mb-3">
                          <span>📍 {position.location}</span>
                          <span>🏢 {position.department}</span>
                          <span>⏰ {position.type}</span>
                        </div>
                        <p className="text-zenblock-secondary-text">{position.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <Button className="bg-zenblock-electric-blue text-zenblock-white hover:bg-zenblock-electric-blue/90">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-zenblock-soft-violet border border-zenblock-soft-violet">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Why Work With Us?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-zenblock-primary-text mb-2">Innovation</h3>
                  <p className="text-zenblock-secondary-text">Work on cutting-edge blockchain technology</p>
                </div>
                <div>
                  <h3 className="font-semibold text-zenblock-primary-text mb-2">Impact</h3>
                  <p className="text-zenblock-secondary-text">Make a real difference in global healthcare</p>
                </div>
                <div>
                  <h3 className="font-semibold text-zenblock-primary-text mb-2">Growth</h3>
                  <p className="text-zenblock-secondary-text">Accelerate your career in a fast-growing startup</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
