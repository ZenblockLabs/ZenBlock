
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const ApiDocs = () => {
  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/products/{productId}/trace",
      description: "Retrieve complete traceability information for a product",
      parameters: ["productId (string): Unique product identifier"]
    },
    {
      method: "POST", 
      path: "/api/v1/products",
      description: "Register a new product in the blockchain network",
      parameters: ["productData (object): Product information and metadata"]
    },
    {
      method: "PUT",
      path: "/api/v1/products/{productId}/location",
      description: "Update product location in the supply chain",
      parameters: ["productId (string)", "locationData (object): New location details"]
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Comprehensive documentation for integrating with Zenblock Labs' 
              blockchain traceability platform APIs.
            </p>
          </div>

          <div className="mb-12">
            <Card className="bg-zenblock-soft-violet border border-zenblock-electric-blue">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-primary-text mb-4">Getting Started</h2>
                <div className="space-y-4 text-zenblock-secondary-text">
                  <p>
                    <strong>Base URL:</strong> https://api.zenblocklabs.com
                  </p>
                  <p>
                    <strong>Authentication:</strong> Bearer token required for all requests
                  </p>
                  <p>
                    <strong>Rate Limits:</strong> 1000 requests per hour per API key
                  </p>
                  <p>
                    <strong>Response Format:</strong> JSON
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zenblock-primary-text mb-8">API Endpoints</h2>
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="bg-zenblock-white border border-zenblock-soft-violet">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      endpoint.method === 'GET' 
                        ? 'bg-zenblock-soft-mint text-zenblock-pharma-green'
                        : endpoint.method === 'POST'
                        ? 'bg-zenblock-soft-violet text-zenblock-electric-blue' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-zenblock-primary-text font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-zenblock-secondary-text mb-4">{endpoint.description}</p>
                  <div>
                    <h4 className="font-semibold text-zenblock-primary-text mb-2">Parameters:</h4>
                    <ul className="space-y-1">
                      {endpoint.parameters.map((param, idx) => (
                        <li key={idx} className="text-zenblock-secondary-text">
                          <code className="text-sm bg-zenblock-soft-violet px-2 py-1 rounded">{param}</code>
                        </li>
                      ))}
                    </ul>
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

export default ApiDocs;
