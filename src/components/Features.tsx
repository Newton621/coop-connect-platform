import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  ShoppingCart, 
  BookOpen, 
  Video, 
  Radio, 
  Settings,
  Egg,
  TrendingUp,
  Users,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import lifecycleImage from "@/assets/chick-lifecycle.jpg";
import marketplaceImage from "@/assets/marketplace.jpg";
import farmerImage from "@/assets/farmer-interview.jpg";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Lifecycle Tracker",
      description: "Monitor every stage of your chicks' growth from day 1 to maturity with real-time updates, feed schedules, and vaccination tracking.",
      image: lifecycleImage,
      link: "/lifecycle",
      stats: "Track 1000+ chicks simultaneously"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Smart Marketplace",
      description: "Buy and sell chicks, layers, organic feed, fresh eggs, and manure with integrated M-Pesa payment system.",
      image: marketplaceImage,
      link: "/marketplace",
      stats: "500+ products available"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning Center",
      description: "Access comprehensive tutorials, expert guides, and educational content to master poultry farming techniques.",
      image: "/api/placeholder/400/300",
      link: "/learning",
      stats: "100+ educational resources"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Farmer Interviews",
      description: "Learn from experienced farmers through video interviews, success stories, and practical farming tips.",
      image: farmerImage,
      link: "/interviews",
      stats: "50+ expert interviews"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Live Streaming",
      description: "Watch live updates from our farm, interactive sessions, and real-time poultry management demonstrations.",
      image: "/api/placeholder/400/300",
      link: "/livestream",
      stats: "Live 24/7 farm monitoring"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Admin Dashboard",
      description: "Comprehensive management tools for tracking expenses, generating reports, and monitoring farm performance.",
      image: "/api/placeholder/400/300",
      link: "/admin",
      stats: "Complete farm analytics"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="text-primary">Smart Poultry Farming</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need 
            to manage your poultry farm efficiently and profitably.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-lift transition-farm border-0 farm-shadow hover:glow-shadow bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-farm">
                    {feature.icon}
                  </div>
                  <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {feature.stats}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-farm">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardDescription className="text-sm mb-6 leading-relaxed">
                  {feature.description}
                </CardDescription>
                
                <Link to={feature.link}>
                  <Button variant="farm" className="w-full group-hover:shadow-lg">
                    Explore {feature.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">
              <Egg className="w-8 h-8 mx-auto mb-2" />
              10K+
            </div>
            <div className="text-sm text-muted-foreground">Chicks Tracked</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-success">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              85%
            </div>
            <div className="text-sm text-muted-foreground">Profit Increase</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-warning">
              <Users className="w-8 h-8 mx-auto mb-2" />
              500+
            </div>
            <div className="text-sm text-muted-foreground">Active Farmers</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              24/7
            </div>
            <div className="text-sm text-muted-foreground">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;