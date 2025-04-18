
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Blog = () => {
  const posts = [
    {
      title: "NutriScan",
      date: "2025-04-10",
      excerpt: ".",
      tags: ["Quantum", "AI", "Technology"]
    },
    {
      title: "The Future of Neural Networks",
      date: "2025-04-05",
      excerpt: "Deep dive into next-generation neural network architectures.",
      tags: ["AI", "Deep Learning", "Research"]
    },
    {
      title: "Quantum-AI Hybrid Systems",
      date: "2025-03-28",
      excerpt: "Combining quantum computing with artificial intelligence.",
      tags: ["Quantum", "AI", "Hybrid"]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black">
      <BackgroundEffects />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Latest Insights
        </h1>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <Card key={index} className="bg-slate-800/50 dark:bg-slate-900/50 border-purple-500/20 backdrop-blur-sm transform hover:scale-[1.02] transition-transform">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-gray-200">{post.title}</h2>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
