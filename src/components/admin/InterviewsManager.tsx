import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Video } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Interview {
  id: string;
  title: string;
  farmer_name: string;
  description: string | null;
  video_url: string | null;
  specialty: string | null;
  farm_location: string | null;
  experience_years: number | null;
  interview_date: string | null;
  created_at: string;
}

export function InterviewsManager() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingInterview, setEditingInterview] = useState<Interview | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    farmer_name: "",
    description: "",
    video_url: "",
    specialty: "",
    farm_location: "",
    experience_years: "",
    interview_date: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    const { data, error } = await supabase
      .from('interviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch interviews",
        variant: "destructive"
      });
    } else {
      setInterviews(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = {
      title: formData.title,
      farmer_name: formData.farmer_name,
      description: formData.description || null,
      video_url: formData.video_url || null,
      specialty: formData.specialty || null,
      farm_location: formData.farm_location || null,
      experience_years: formData.experience_years ? parseInt(formData.experience_years) : null,
      interview_date: formData.interview_date || null
    };

    let result;
    if (editingInterview) {
      result = await supabase
        .from('interviews')
        .update(data)
        .eq('id', editingInterview.id);
    } else {
      result = await supabase
        .from('interviews')
        .insert([data]);
    }

    if (result.error) {
      toast({
        title: "Error",
        description: `Failed to ${editingInterview ? 'update' : 'create'} interview`,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: `Interview ${editingInterview ? 'updated' : 'created'} successfully`
      });
      resetForm();
      fetchInterviews();
    }
  };

  const handleEdit = (interview: Interview) => {
    setEditingInterview(interview);
    setFormData({
      title: interview.title,
      farmer_name: interview.farmer_name,
      description: interview.description || "",
      video_url: interview.video_url || "",
      specialty: interview.specialty || "",
      farm_location: interview.farm_location || "",
      experience_years: interview.experience_years?.toString() || "",
      interview_date: interview.interview_date || ""
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('interviews')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete interview",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Interview deleted successfully"
      });
      fetchInterviews();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      farmer_name: "",
      description: "",
      video_url: "",
      specialty: "",
      farm_location: "",
      experience_years: "",
      interview_date: ""
    });
    setEditingInterview(null);
    setIsDialogOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Farmer Interviews
            </CardTitle>
            <CardDescription>Manage farmer interview videos and content</CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()}>
                <Plus className="h-4 w-4 mr-2" />
                Add Interview
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingInterview ? 'Edit Interview' : 'Add New Interview'}
                </DialogTitle>
                <DialogDescription>
                  {editingInterview ? 'Update the interview details' : 'Create a new farmer interview'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="farmer_name">Farmer Name *</Label>
                    <Input
                      id="farmer_name"
                      value={formData.farmer_name}
                      onChange={(e) => setFormData({ ...formData, farmer_name: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="video_url">Video URL</Label>
                  <Input
                    id="video_url"
                    type="url"
                    value={formData.video_url}
                    onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="specialty">Specialty</Label>
                    <Input
                      id="specialty"
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="farm_location">Farm Location</Label>
                    <Input
                      id="farm_location"
                      value={formData.farm_location}
                      onChange={(e) => setFormData({ ...formData, farm_location: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience_years">Experience (Years)</Label>
                    <Input
                      id="experience_years"
                      type="number"
                      value={formData.experience_years}
                      onChange={(e) => setFormData({ ...formData, experience_years: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="interview_date">Interview Date</Label>
                    <Input
                      id="interview_date"
                      type="date"
                      value={formData.interview_date}
                      onChange={(e) => setFormData({ ...formData, interview_date: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingInterview ? 'Update' : 'Create'} Interview
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Specialty</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {interviews.map((interview) => (
              <TableRow key={interview.id}>
                <TableCell className="font-medium">{interview.title}</TableCell>
                <TableCell>{interview.farmer_name}</TableCell>
                <TableCell>{interview.specialty || 'N/A'}</TableCell>
                <TableCell>{interview.farm_location || 'N/A'}</TableCell>
                <TableCell>{interview.experience_years ? `${interview.experience_years} years` : 'N/A'}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(interview)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(interview.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}