import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  TrendingUp, 
  Heart, 
  Thermometer, 
  Scale, 
  Pill,
  Camera,
  Plus,
  BarChart3
} from "lucide-react";
import lifecycleImage from "@/assets/chick-lifecycle.jpg";

const Lifecycle = () => {
  const [currentBatch, setCurrentBatch] = useState(1);

  const batches = [
    {
      id: 1,
      name: "Batch #2024-001",
      startDate: "2024-01-15",
      currentAge: 21,
      totalChicks: 500,
      healthyChicks: 485,
      status: "Growing",
      stage: "Young Chick",
      nextVaccination: "2024-02-10",
      feedType: "Starter Feed",
      progress: 30
    },
    {
      id: 2,
      name: "Batch #2024-002",
      startDate: "2024-01-01",
      currentAge: 35,
      totalChicks: 300,
      healthyChicks: 295,
      status: "Healthy",
      stage: "Growing",
      nextVaccination: "2024-02-15",
      feedType: "Grower Feed",
      progress: 50
    }
  ];

  const currentBatchData = batches.find(b => b.id === currentBatch) || batches[0];

  const stages = [
    { name: "Day 1-7", description: "Brooding Stage", completed: true },
    { name: "Day 8-21", description: "Young Chick", completed: true },
    { name: "Day 22-42", description: "Growing", completed: false, current: true },
    { name: "Day 43-84", description: "Developing", completed: false },
    { name: "Day 85+", description: "Mature", completed: false }
  ];

  const recentUpdates = [
    {
      date: "2024-02-05",
      type: "Health Check",
      description: "Weekly health assessment completed. All chicks showing good growth patterns.",
      status: "success"
    },
    {
      date: "2024-02-03",
      type: "Feed Update",
      description: "Switched to grower feed mix. Consumption rate: 2.5kg per 100 chicks daily.",
      status: "info"
    },
    {
      date: "2024-02-01",
      type: "Vaccination",
      description: "Newcastle disease vaccination administered to all chicks.",
      status: "warning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Lifecycle Tracker</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Monitor every stage of your chicks' growth journey with precision tracking, 
                health monitoring, and automated care recommendations.
              </p>
              <Button variant="farm" size="lg">
                <Plus className="mr-2 w-5 h-5" />
                Add New Batch
              </Button>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={lifecycleImage}
                alt="Chick Lifecycle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Batch Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Active Batches</h2>
          <div className="flex flex-wrap gap-4">
            {batches.map((batch) => (
              <Card 
                key={batch.id}
                className={`cursor-pointer transition-farm hover-lift ${
                  currentBatch === batch.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setCurrentBatch(batch.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{batch.name}</CardTitle>
                    <Badge variant={batch.status === 'Healthy' ? 'default' : 'secondary'}>
                      {batch.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    {batch.totalChicks} chicks • Day {batch.currentAge}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Batch Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="farm-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Calendar className="w-5 h-5 text-primary" />
                <Badge variant="outline">Day {currentBatchData.currentAge}</Badge>
              </div>
              <CardTitle className="text-lg">Current Age</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentBatchData.currentAge} Days</div>
              <div className="text-sm text-muted-foreground">
                Started {new Date(currentBatchData.startDate).toLocaleDateString()}
              </div>
            </CardContent>
          </Card>

          <Card className="farm-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Heart className="w-5 h-5 text-success" />
                <Badge variant="outline" className="status-healthy">Healthy</Badge>
              </div>
              <CardTitle className="text-lg">Health Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentBatchData.healthyChicks}/{currentBatchData.totalChicks}</div>
              <div className="text-sm text-muted-foreground">
                {Math.round((currentBatchData.healthyChicks / currentBatchData.totalChicks) * 100)}% Healthy
              </div>
            </CardContent>
          </Card>

          <Card className="farm-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <TrendingUp className="w-5 h-5 text-accent" />
                <Badge variant="outline" className="status-growing">Growing</Badge>
              </div>
              <CardTitle className="text-lg">Growth Stage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentBatchData.stage}</div>
              <div className="text-sm text-muted-foreground">
                Feed: {currentBatchData.feedType}
              </div>
            </CardContent>
          </Card>

          <Card className="farm-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Pill className="w-5 h-5 text-warning" />
                <Badge variant="outline" className="status-warning">Upcoming</Badge>
              </div>
              <CardTitle className="text-lg">Next Vaccination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Date(currentBatchData.nextVaccination).toLocaleDateString()}
              </div>
              <div className="text-sm text-muted-foreground">
                Newcastle Disease
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Growth Progress */}
        <Card className="mb-8 farm-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 w-5 h-5" />
              Growth Progress
            </CardTitle>
            <CardDescription>
              Track your chicks through each growth stage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>{currentBatchData.progress}%</span>
                </div>
                <Progress value={currentBatchData.progress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {stages.map((stage, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-farm ${
                      stage.completed
                        ? 'border-success bg-success/10'
                        : stage.current
                        ? 'border-primary bg-primary/10'
                        : 'border-muted bg-muted/50'
                    }`}
                  >
                    <div className="text-sm font-medium">{stage.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stage.description}
                    </div>
                    {stage.completed && (
                      <div className="text-success text-xs mt-2">✓ Completed</div>
                    )}
                    {stage.current && (
                      <div className="text-primary text-xs mt-2">• Current</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Updates */}
        <Card className="farm-shadow">
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>
              Latest activities and health records for {currentBatchData.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    update.status === 'success' ? 'bg-success' :
                    update.status === 'warning' ? 'bg-warning' : 'bg-primary'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-medium">{update.type}</div>
                      <div className="text-sm text-muted-foreground">{update.date}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{update.description}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button variant="outline">
                <Camera className="mr-2 w-4 h-4" />
                Add Photo Update
              </Button>
              <Button variant="outline">
                <Thermometer className="mr-2 w-4 h-4" />
                Record Temperature
              </Button>
              <Button variant="outline">
                <Scale className="mr-2 w-4 h-4" />
                Log Weight
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Lifecycle;