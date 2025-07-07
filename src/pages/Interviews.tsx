import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Calendar, MapPin } from "lucide-react";
import farmerInterviewImage from "@/assets/farmer-interview.jpg";

const Interviews = () => {
  const interviews = [
    {
      id: 1,
      title: "From 10 to 10,000 Chickens: Sarah's Success Story",
      farmer: "Sarah Wanjiku",
      location: "Kiambu County",
      date: "March 15, 2024",
      duration: "25 min",
      description: "Learn how Sarah scaled her operation from a small backyard setup to a commercial farm",
      image: farmerInterviewImage,
      featured: true,
    },
    {
      id: 2,
      title: "Organic Farming: The Natural Way",
      farmer: "John Mwangi",
      location: "Nakuru County",
      date: "March 10, 2024",
      duration: "18 min",
      description: "Discover organic chicken farming techniques that maximize profit while being eco-friendly",
      image: farmerInterviewImage,
      featured: false,
    },
    {
      id: 3,
      title: "Technology in Modern Poultry",
      farmer: "Grace Akinyi",
      location: "Nairobi County",
      date: "March 5, 2024",
      duration: "22 min",
      description: "How modern technology transformed Grace's farming operations and increased efficiency",
      image: farmerInterviewImage,
      featured: false,
    },
    {
      id: 4,
      title: "Overcoming Challenges: Disease Management",
      farmer: "Peter Kamau",
      location: "Murang'a County",
      date: "February 28, 2024",
      duration: "20 min",
      description: "Peter shares his experience dealing with Newcastle disease and prevention strategies",
      image: farmerInterviewImage,
      featured: false,
    },
  ];

  const featuredInterview = interviews.find(interview => interview.featured);
  const regularInterviews = interviews.filter(interview => !interview.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Farmer Interviews</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from successful chicken farmers across Kenya. Learn from their experiences, 
            challenges, and breakthrough moments.
          </p>
        </div>

        {/* Featured Interview */}
        {featuredInterview && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Featured Interview</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredInterview.image} 
                    alt={featuredInterview.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">{featuredInterview.title}</CardTitle>
                    <CardDescription className="text-base">{featuredInterview.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{featuredInterview.farmer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{featuredInterview.farmer}</p>
                        <div className="flex items-center text-sm text-muted-foreground space-x-4">
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {featuredInterview.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {featuredInterview.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{featuredInterview.duration}</span>
                      <Button variant="hero" size="lg">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Interview
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Interviews */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">More Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularInterviews.map((interview) => (
              <Card key={interview.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={interview.image} 
                    alt={interview.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{interview.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{interview.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="text-xs">{interview.farmer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{interview.farmer}</p>
                      <p className="text-xs text-muted-foreground">{interview.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{interview.duration}</span>
                    <span>{interview.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Interviews;