import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Video, FileText, Play } from "lucide-react";

const Learning = () => {
  const courses = [
    {
      title: "Chicken Care Basics",
      description: "Learn fundamental chicken care practices from day one to market",
      duration: "2 hours",
      type: "video",
      icon: Video,
    },
    {
      title: "Disease Prevention Guide",
      description: "Complete guide to preventing common chicken diseases",
      duration: "1.5 hours",
      type: "article",
      icon: FileText,
    },
    {
      title: "Feed Management",
      description: "Optimize feeding schedules and nutrition for better growth",
      duration: "45 minutes",
      type: "video",
      icon: Video,
    },
    {
      title: "Breeding Techniques",
      description: "Advanced breeding methods for better offspring",
      duration: "3 hours",
      type: "course",
      icon: Book,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Learning Center</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the art of chicken farming with our comprehensive learning resources. 
            From beginner basics to advanced techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {course.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                    <Button variant="farm" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Need More Help?</h2>
          <p className="text-muted-foreground mb-6">
            Join our community of farmers and get personalized advice
          </p>
          <Button variant="hero" size="lg">
            Join Community
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Learning;