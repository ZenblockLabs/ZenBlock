
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Trust",
      description: "Building unshakeable confidence in every transaction"
    },
    {
      icon: <Target className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Transparency",
      description: "Complete visibility across the entire supply chain"
    },
    {
      icon: <Users className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Integrity",
      description: "Honest, ethical practices in everything we do"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Innovation",
      description: "Cutting-edge technology for tomorrow's challenges"
    }
  ];

  const milestones = [
    { year: "2024", title: "MVP Completed", description: "Successfully developed and tested our blockchain traceability platform" },
    { year: "2024", title: "Pilot Outreach", description: "Engaging with pharmaceutical companies across India and UAE" },
    { year: "2025", title: "Regulatory Partnerships", description: "Building relationships with Tatmeen, FDA, and CDSCO" }
  ];

  const teamMembers = [
    {
      name: "Swetha Panda",
      role: "Founder, Zenblock Labs",
      background: "MBA | 9+ Years of Industry Experience. Former Software Developer at IBM, where she honed her expertise in enterprise-grade tech architecture and security. Led product innovation as a Product Manager at RentenPe, a rising fintech startup, driving strategic roadmaps and scalable tech integrations. Swetha combines deep technical know-how with strategic business insight. Her mission with Zenblock Labs is to revolutionize the pharmaceutical supply chain using blockchain technology to ensure trust, traceability, and transparency.",
      expertise: "Enterprise Technology, Product Management",
      image: "/lovable-uploads/05fb628d-0ac2-4497-95e0-899da9345a41.png"
    },
    {
      name: "Sapan Kumar Panda",
      role: "Financial Consultant, Zenblock Labs", 
      background: "B.Com | 30 Years in Real Estate & Financial Advisory. A seasoned financial consultant with three decades of experience in the real estate finance sector. Has advised on complex, high-value financing projects and brings deep insight into financial structuring, regulatory navigation, and investor relations. Plays a key role in financial modelling, capital planning, and strategic funding for Zenblock's growth journey.",
      expertise: "Financial Advisory, Real Estate Finance",
      image: "/lovable-uploads/744df5bf-e5ef-42ca-b1d4-cd35bc74a88e.png"
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        {/* Intro Section */}
        <div className="bg-zenblock-soft-violet py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              About Zenblock Labs
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Our vision is to ensure and assure that every business operates on trust. 
              We're solving the critical challenges of counterfeits, compliance gaps, 
              and supply chain fragmentation in regulated industries.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Problem Statement */}
          <div className="py-16">
            <h2 className="text-3xl font-bold text-center text-zenblock-primary-text mb-12">The Problem We Solve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-zenblock-white shadow-lg border border-yellow-200 rounded-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-zenblock-primary-text mb-3 text-xl">Counterfeiting</h3>
                  <p className="text-zenblock-secondary-text">$200B+ annual losses from fake pharmaceuticals globally</p>
                </CardContent>
              </Card>
              <Card className="bg-zenblock-white shadow-lg border border-yellow-200 rounded-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-zenblock-primary-text mb-3 text-xl">Compliance Gaps</h3>
                  <p className="text-zenblock-secondary-text">Complex regulatory requirements across multiple jurisdictions</p>
                </CardContent>
              </Card>
              <Card className="bg-zenblock-white shadow-lg border border-yellow-200 rounded-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-zenblock-primary-text mb-3 text-xl">Fragmentation</h3>
                  <p className="text-zenblock-secondary-text">Lack of visibility and coordination across supply chain partners</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="py-16 bg-zenblock-soft-violet">
            <h2 className="text-3xl font-bold text-center text-zenblock-primary-text mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center card-hover bg-zenblock-white">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-zenblock-primary-text mb-2">{value.title}</h3>
                    <p className="text-zenblock-secondary-text">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="py-16">
            <h2 className="text-3xl font-bold text-center text-zenblock-primary-text mb-12">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-zenblock-electric-blue text-zenblock-white rounded-full flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-zenblock-primary-text mb-2">{milestone.title}</h3>
                    <p className="text-zenblock-secondary-text">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Team */}
          <div className="py-16 bg-zenblock-soft-violet">
            <h2 className="text-3xl font-bold text-center text-zenblock-primary-text mb-12">Meet Our Core Team</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
