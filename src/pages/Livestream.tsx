import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Radio, 
  Users, 
  MessageCircle, 
  Send, 
  Eye, 
  Calendar,
  Clock,
  Video,
  ExternalLink
} from "lucide-react";

const Livestream = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [isLive, setIsLive] = useState(true);

  const chatMessages = [
    {
      id: 1,
      user: "FarmerJohn",
      message: "Great setup! How often do you clean the chicken coop?",
      time: "2 min ago"
    },
    {
      id: 2,
      user: "PoultryExpert",
      message: "The chicks look very healthy. What feed are you using?",
      time: "3 min ago"
    },
    {
      id: 3,
      user: "NewFarmer254",
      message: "This is so helpful! Thank you for sharing.",
      time: "5 min ago"
    },
    {
      id: 4,
      user: "ChickLover",
      message: "Can you show the feeding area?",
      time: "7 min ago"
    }
  ];

  const upcomingStreams = [
    {
      id: 1,
      title: "Daily Morning Routine - Feeding Time",
      date: "Today",
      time: "6:00 AM",
      duration: "30 min",
      description: "Watch our morning feeding routine and learn about optimal nutrition timing"
    },
    {
      id: 2,
      title: "Vaccination Day - Expert Tips",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "45 min",
      description: "Live vaccination session with our veterinary expert"
    },
    {
      id: 3,
      title: "Q&A Session with Poultry Expert",
      date: "Friday",
      time: "3:00 PM",
      duration: "60 min",
      description: "Ask your poultry farming questions to our expert panel"
    }
  ];

  const liveStats = {
    viewers: 247,
    duration: "2h 15m",
    likes: 89,
    comments: 156
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Radio className="w-8 h-8 text-primary mr-3" />
              <h1 className="text-4xl font-bold">Live Farm Stream</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Watch real-time updates from our poultry farm. Learn from expert farmers, 
              ask questions, and see modern poultry farming in action.
            </p>
            
            {/* Social Media Integration */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://tiktok.com/@n.l.a877"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-farm"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="font-medium">Follow @n.l.a877 on TikTok</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Stream */}
          <div className="lg:col-span-2">
            <Card className="mb-6 farm-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      {isLive && (
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <Badge variant="destructive">LIVE</Badge>
                        </div>
                      )}
                      <CardTitle>Farm Cam - Chick House #1</CardTitle>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{liveStats.viewers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{liveStats.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Video Player Placeholder */}
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Live Stream Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Connect your YouTube, TikTok, or OBS streaming setup here
                    </p>
                    <div className="space-y-2">
                      <Button variant="farm">
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Watch on TikTok Live
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Follow @n.l.a877 for live streaming notifications
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Video className="mr-2 w-4 h-4" />
                      Share Stream
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>❤️ {liveStats.likes} likes</span>
                    <span>💬 {liveStats.comments} comments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stream Description */}
            <Card className="farm-shadow">
              <CardHeader>
                <CardTitle>About This Stream</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Welcome to our live farm stream! Today we're showing you our daily routine 
                  with our 3-week-old chicks. You'll see feeding time, health checks, and 
                  general care practices that ensure healthy growth.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Current Batch: 500 chicks</Badge>
                    <Badge variant="outline">Age: 21 days</Badge>
                    <Badge variant="outline">Breed: Broiler</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Chat */}
            <Card className="farm-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Live Chat
                  <Badge variant="outline" className="ml-2">
                    {liveStats.viewers} viewers
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="h-64 overflow-y-auto custom-scrollbar mb-4 space-y-3">
                  {chatMessages.map((message) => (
                    <div key={message.id} className="p-2 rounded-lg bg-muted/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{message.user}</span>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button size="icon" variant="farm">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-2">
                  Be respectful and keep messages farm-related
                </p>
              </CardContent>
            </Card>

            {/* Upcoming Streams */}
            <Card className="farm-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 w-5 h-5" />
                  Upcoming Streams
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {upcomingStreams.map((stream) => (
                    <div key={stream.id} className="p-3 rounded-lg border bg-card/50">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{stream.date}</Badge>
                        <span className="text-sm text-muted-foreground">{stream.duration}</span>
                      </div>
                      
                      <h4 className="font-medium mb-1">{stream.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{stream.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{stream.time}</span>
                        <Button size="sm" variant="outline">
                          Set Reminder
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="farm-shadow">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Contact Farm WhatsApp
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 w-4 h-4" />
                  Join Community
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Follow on TikTok
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Livestream;