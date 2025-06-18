
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Swetha Panda",
      role: "Founder, Zenblock Labs",
      background: "MBA | 9+ Years of Industry Experience. Former Software Developer at IBM, where she honed her expertise in enterprise-grade tech architecture and security. Led product innovation as a Product Manager at RentenPe, a rising fintech startup, driving strategic roadmaps and scalable tech integrations.",
      expertise: "Enterprise Technology, Product Management",
      image: "/lovable-uploads/05fb628d-0ac2-4497-95e0-899da9345a41.png"
    },
    {
      name: "Sapan Kumar Panda",
      role: "Financial Consultant, Zenblock Labs", 
      background: "B.Com | 30 Years in Real Estate & Financial Advisory. A seasoned financial consultant with three decades of experience in the real estate finance sector. Has advised on complex, high-value financing projects and brings deep insight into financial structuring, regulatory navigation, and investor relations.",
      expertise: "Financial Advisory, Real Estate Finance",
      image: "/lovable-uploads/744df5bf-e5ef-42ca-b1d4-cd35bc74a88e.png"
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Meet Our Core Team
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Meet the experts behind Zenblock Labs' innovative blockchain solutions 
              for pharmaceutical supply chain transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-zenblock-white card-hover border border-zenblock-soft-violet">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-zenblock-electric-blue"
                    />
                    <h3 className="text-2xl font-bold text-zenblock-primary-text mb-2">{member.name}</h3>
                    <h4 className="text-lg font-semibold text-zenblock-electric-blue mb-4">{member.role}</h4>
                  </div>
                  <p className="text-zenblock-secondary-text mb-4 text-center">{member.background}</p>
                  <div className="border-t border-zenblock-soft-violet pt-4 text-center">
                    <span className="text-sm font-medium text-zenblock-pharma-green">
                      Expertise: {member.expertise}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-zenblock-soft-violet border border-zenblock-soft-violet">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-zenblock-primary-text mb-4">Join Our Team</h2>
                <p className="text-lg text-zenblock-secondary-text mb-6">
                  We're always looking for talented individuals who share our passion for 
                  revolutionizing pharmaceutical supply chains through blockchain technology.
                </p>
                <button className="bg-zenblock-electric-blue text-zenblock-white px-8 py-3 rounded-lg font-semibold hover:bg-zenblock-electric-blue/90 transition-colors">
                  View Open Positions
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

export default Team;
