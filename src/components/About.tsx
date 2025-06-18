
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
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
      background: "MBA | 9+ Years of Industry Experience. Former Software Developer at IBM and Product Manager at RentenPe. Swetha combines deep technical know-how with strategic business insight.",
      image: "/lovable-uploads/05fb628d-0ac2-4497-95e0-899da9345a41.png"
    },
    {
      name: "Sapan Kumar Panda",
      role: "Financial Consultant, Zenblock Labs", 
      background: "B.Com | 30 Years in Real Estate & Financial Advisory. A seasoned financial consultant bringing deep insight into financial structuring and regulatory navigation.",
      image: "/lovable-uploads/744df5bf-e5ef-42ca-b1d4-cd35bc74a88e.png"
    }
  ];

  return (
    <section id="about" className="py-20 bg-zenblock-soft-violet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-[2rem] font-bold text-zenblock-primary-text mb-6">
            About Zenblock Labs
          </h2>
          <p className="text-lg md:text-xl lg:text-[1.125rem] text-zenblock-secondary-text max-w-3xl mx-auto">
            Our vision is to ensure and assure that every business operates on trust. 
            We're solving the critical challenges of counterfeits, compliance gaps, 
            and supply chain fragmentation in regulated industries.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-16">
          <h3 className="text-3xl lg:text-[2rem] font-bold text-center text-zenblock-primary-text mb-12">The Problem We Solve</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-zenblock-white shadow-lg border border-yellow-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-zenblock-primary-text mb-2 text-[1.125rem]">Counterfeiting</h4>
                <p className="text-zenblock-secondary-text text-[1rem]">$200B+ annual losses from fake pharmaceuticals globally</p>
              </CardContent>
            </Card>
            <Card className="bg-zenblock-white shadow-lg border border-yellow-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-zenblock-primary-text mb-2 text-[1.125rem]">Compliance Gaps</h4>
                <p className="text-zenblock-secondary-text text-[1rem]">Complex regulatory requirements across multiple jurisdictions</p>
              </CardContent>
            </Card>
            <Card className="bg-zenblock-white shadow-lg border border-yellow-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-zenblock-primary-text mb-2 text-[1.125rem]">Fragmentation</h4>
                <p className="text-zenblock-secondary-text text-[1rem]">Lack of visibility and coordination across supply chain partners</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl lg:text-[2rem] font-bold text-center text-zenblock-primary-text mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover bg-zenblock-white">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-zenblock-primary-text mb-2 text-[1rem]">{value.title}</h4>
                  <p className="text-zenblock-secondary-text text-[1rem]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-16">
          <h3 className="text-3xl lg:text-[2rem] font-bold text-center text-zenblock-primary-text mb-12">Our Journey</h3>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-16 h-16 bg-zenblock-electric-blue text-zenblock-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-zenblock-primary-text mb-1 text-[1rem]">{milestone.title}</h4>
                  <p className="text-zenblock-secondary-text text-[1rem]">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div>
          <h3 className="text-3xl lg:text-[2rem] font-bold text-center text-zenblock-primary-text mb-12">Meet Our Core Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-zenblock-white card-hover border border-zenblock-soft-violet">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-3 border-zenblock-electric-blue"
                    />
                    <h4 className="text-xl font-bold text-zenblock-primary-text mb-1">{member.name}</h4>
                    <h5 className="text-md font-semibold text-zenblock-electric-blue mb-3">{member.role}</h5>
                  </div>
                  <p className="text-zenblock-secondary-text text-sm text-center">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
