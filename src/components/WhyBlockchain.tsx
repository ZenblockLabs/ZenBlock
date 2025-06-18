
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Handshake, Lock } from "lucide-react";

const WhyBlockchain = () => {
  const benefits = [
    {
      icon: <Shield className="w-10 h-10 text-zenblock-electric-blue" />,
      title: "Tamper-Proof History",
      description: "Once data is recorded on the blockchain, it cannot be altered or deleted, ensuring complete integrity of your supply chain records."
    },
    {
      icon: <Eye className="w-10 h-10 text-zenblock-electric-blue" />,
      title: "Shared Visibility",
      description: "All authorized stakeholders have real-time access to the same information, eliminating information silos and improving coordination."
    },
    {
      icon: <Handshake className="w-10 h-10 text-zenblock-electric-blue" />,
      title: "Trust Without Intermediaries",
      description: "Blockchain creates trust through mathematics and cryptography, not through reliance on central authorities or third parties."
    },
    {
      icon: <Lock className="w-10 h-10 text-zenblock-electric-blue" />,
      title: "Permissioned Access",
      description: "Unlike public blockchains, Hyperledger Fabric provides enterprise-grade privacy and access controls for sensitive business data."
    }
  ];

  const comparison = [
    {
      aspect: "Data Integrity",
      traditional: "Can be modified or deleted",
      blockchain: "Immutable and verifiable"
    },
    {
      aspect: "Trust Model",
      traditional: "Relies on central authorities",
      blockchain: "Cryptographic consensus"
    },
    {
      aspect: "Transparency",
      traditional: "Limited visibility",
      blockchain: "Shared ledger access"
    },
    {
      aspect: "Audit Trail",
      traditional: "Fragmented records",
      blockchain: "Complete provenance"
    }
  ];

  return (
    <section className="py-20 bg-zenblock-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-[2rem] font-bold text-zenblock-primary-text mb-6">
            Why Blockchain?
          </h2>
          <p className="text-lg md:text-xl lg:text-[1.125rem] text-zenblock-secondary-text max-w-3xl mx-auto">
            Blockchain technology provides the foundation for unshakeable trust 
            and transparency in complex supply chain networks.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover bg-zenblock-white">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {benefit.icon}
                    <CardTitle className="text-xl lg:text-[1rem] text-zenblock-primary-text">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zenblock-secondary-text leading-relaxed text-[1rem]">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-3xl lg:text-[2rem] font-bold text-center text-zenblock-primary-text mb-12">
            Traditional vs. Blockchain Approach
          </h3>
          <Card className="overflow-hidden bg-zenblock-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zenblock-electric-blue text-zenblock-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-[1rem]">Aspect</th>
                    <th className="px-6 py-4 text-left font-semibold text-[1rem]">Traditional Systems</th>
                    <th className="px-6 py-4 text-left font-semibold text-[1rem]">Blockchain Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-zenblock-soft-violet" : "bg-zenblock-white"}>
                      <td className="px-6 py-4 font-medium text-zenblock-primary-text text-[1rem]">{row.aspect}</td>
                      <td className="px-6 py-4 text-zenblock-secondary-text text-[1rem]">{row.traditional}</td>
                      <td className="px-6 py-4 text-zenblock-electric-blue font-medium text-[1rem]">{row.blockchain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Hyperledger Fabric Callout */}
        <div>
          <Card className="bg-gradient-to-r from-zenblock-dark-blue to-zenblock-electric-blue text-zenblock-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl lg:text-[2rem] font-bold mb-4">Why Hyperledger Fabric?</h3>
              <p className="text-zenblock-inverse-text/80 mb-6 max-w-3xl mx-auto text-[1rem]">
                Unlike public blockchains, Hyperledger Fabric is designed for enterprise use with 
                permissioned networks, private data channels, and modular architecture that meets 
                the stringent requirements of regulated industries.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-2xl lg:text-[1.5rem] font-bold mb-2">Enterprise Ready</div>
                  <div className="text-zenblock-inverse-text/80 text-[0.875rem]">Built for business requirements</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-[1.5rem] font-bold mb-2">Privacy First</div>
                  <div className="text-zenblock-inverse-text/80 text-[0.875rem]">Confidential transactions</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-[1.5rem] font-bold mb-2">Scalable</div>
                  <div className="text-zenblock-inverse-text/80 text-[0.875rem]">High throughput and performance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyBlockchain;
