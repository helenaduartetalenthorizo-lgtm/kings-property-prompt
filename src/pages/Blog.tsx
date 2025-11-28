import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const blogPosts = [
  {
    id: 1,
    title: "London Property Market Outlook 2024: What Buyers Need to Know",
    excerpt: "Discover the latest trends shaping London's property market and what opportunities await savvy buyers in the coming year.",
    image: hero1,
    date: "November 25, 2024",
    category: "Market Trends",
  },
  {
    id: 2,
    title: "Top 5 Tips for First-Time Buyers in SW16",
    excerpt: "Navigating the property market as a first-time buyer can be daunting. Here are our expert tips to help you succeed.",
    image: hero2,
    date: "November 20, 2024",
    category: "Buying Guide",
  },
  {
    id: 3,
    title: "Maximizing Your Property's Value Before Selling",
    excerpt: "Simple improvements that can significantly increase your property's appeal and market value.",
    image: hero3,
    date: "November 15, 2024",
    category: "Selling Tips",
  },
  {
    id: 4,
    title: "The Complete Landlord Guide to Tenant Selection",
    excerpt: "How to find reliable tenants and protect your investment with proper vetting procedures.",
    image: hero4,
    date: "November 10, 2024",
    category: "Landlords",
  },
  {
    id: 5,
    title: "Understanding Property Valuations: A Comprehensive Guide",
    excerpt: "What factors determine your property's value and how to ensure you get an accurate assessment.",
    image: hero1,
    date: "November 5, 2024",
    category: "Valuations",
  },
  {
    id: 6,
    title: "Investment Property: Is Buy-to-Let Still Worth It?",
    excerpt: "Analyzing the current buy-to-let market and whether it remains a viable investment strategy.",
    image: hero2,
    date: "October 30, 2024",
    category: "Investment",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Property Blog | Kings Property Consultancy London</title>
        <meta
          name="description"
          content="Expert insights on London property market trends, buying guides, selling tips, and investment advice from Kings Property Consultancy."
        />
      </Helmet>
      <Layout>
        <PageBanner
          title="Our Blog"
          subtitle="Expert insights and property market updates"
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-card border border-border overflow-hidden hover:border-primary transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest property news and insights
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Subscribe to Newsletter
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
