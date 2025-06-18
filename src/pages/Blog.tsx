
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Pharmaceutical Supply Chains",
      excerpt: "Exploring how blockchain technology is revolutionizing drug traceability and patient safety in the pharmaceutical industry.",
      date: "December 15, 2024",
      author: "Zenblock Team",
      category: "Technology"
    },
    {
      title: "Regulatory Compliance in the Digital Age",
      excerpt: "Understanding the evolving landscape of pharmaceutical regulations and how technology can ensure compliance across global markets.",
      date: "December 10, 2024", 
      author: "Compliance Team",
      category: "Regulation"
    },
    {
      title: "Building Trust Through Transparency",
      excerpt: "How end-to-end visibility in supply chains creates trust among manufacturers, distributors, and patients.",
      date: "December 5, 2024",
      author: "Business Team",
      category: "Industry Insights"
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Blog
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Insights, updates, and thought leadership on blockchain technology, 
              pharmaceutical innovation, and supply chain transformation.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-zenblock-white card-hover border border-zenblock-soft-violet">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-zenblock-electric-blue font-medium">{post.category}</span>
                    <span className="text-sm text-zenblock-secondary-text">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-zenblock-primary-text mb-3">{post.title}</h2>
                  <p className="text-zenblock-secondary-text text-lg mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zenblock-secondary-text">By {post.author}</span>
                    <button className="text-zenblock-electric-blue hover:text-zenblock-electric-blue/80 font-medium">
                      Read More →
                    </button>
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

export default Blog;
