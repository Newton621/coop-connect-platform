import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Radio } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Livestream {
  id: string;
  title: string;
  description: string | null;
  stream_url: string | null;
  status: string | null;
  scheduled_time: string | null;
  host_id: string;
  created_at: string;
}

export function LivestreamsManager() {
  const [livestreams, setLivestreams] = useState<Livestream[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingStream, setEditingStream] = useState<Livestream | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    stream_url: "",
    status: "scheduled",
    scheduled_time: "",
    host_id: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchLivestreams();
  }, []);

  const fetchLivestreams = async () => {
    const { data, error } = await supabase
      .from('livestreams')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch livestreams",
        variant: "destructive"
      });
    } else {
      setLivestreams(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = {
      title: formData.title,
      description: formData.description || null,
      stream_url: formData.stream_url || null,
      status: formData.status,
      scheduled_time: formData.scheduled_time || null,
      host_id: formData.host_id
    };

    let result;
    if (editingStream) {
      result = await supabase
        .from('livestreams')
        .update(data)
        .eq('id', editingStream.id);
    } else {
      result = await supabase
        .from('livestreams')
        .insert([data]);
    }

    if (result.error) {
      toast({
        title: "Error",
        description: `Failed to ${editingStream ? 'update' : 'create'} livestream`,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: `Livestream ${editingStream ? 'updated' : 'created'} successfully`
      });
      resetForm();
      fetchLivestreams();
    }
  };

  const handleEdit = (stream: Livestream) => {
    setEditingStream(stream);
    setFormData({
      title: stream.title,
      description: stream.description || "",
      stream_url: stream.stream_url || "",
      status: stream.status || "scheduled",
      scheduled_time: stream.scheduled_time || "",
      host_id: stream.host_id
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('livestreams')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete livestream",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Livestream deleted successfully"
      });
      fetchLivestreams();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      stream_url: "",
      status: "scheduled",
      scheduled_time: "",
      host_id: ""
    });
    setEditingStream(null);
    setIsDialogOpen(false);
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'live': return 'bg-red-100 text-red-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'ended': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDateTime = (dateTime: string | null) => {
    if (!dateTime) return 'N/A';
    return new Date(dateTime).toLocaleString();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Radio className="h-5 w-5" />
              Livestreams
            </CardTitle>
            <CardDescription>Manage live streaming sessions and events</CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()}>
                <Plus className="h-4 w-4 mr-2" />
                Add Livestream
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingStream ? 'Edit Livestream' : 'Add New Livestream'}
                </DialogTitle>
                <DialogDescription>
                  {editingStream ? 'Update the livestream details' : 'Create a new livestream session'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="stream_url">Stream URL</Label>
                  <Input
                    id="stream_url"
                    type="url"
                    value={formData.stream_url}
                    onChange={(e) => setFormData({ ...formData, stream_url: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="live">Live</SelectItem>
                        <SelectItem value="ended">Ended</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="scheduled_time">Scheduled Time</Label>
                    <Input
                      id="scheduled_time"
                      type="datetime-local"
                      value={formData.scheduled_time}
                      onChange={(e) => setFormData({ ...formData, scheduled_time: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="host_id">Host ID *</Label>
                  <Input
                    id="host_id"
                    value={formData.host_id}
                    onChange={(e) => setFormData({ ...formData, host_id: e.target.value })}
                    required
                  />
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingStream ? 'Update' : 'Create'} Livestream
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
              <TableHead>Status</TableHead>
              <TableHead>Scheduled Time</TableHead>
              <TableHead>Host ID</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {livestreams.map((stream) => (
              <TableRow key={stream.id}>
                <TableCell className="font-medium">{stream.title}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(stream.status)}>
                    {stream.status}
                  </Badge>
                </TableCell>
                <TableCell>{formatDateTime(stream.scheduled_time)}</TableCell>
                <TableCell className="font-mono text-sm">{stream.host_id}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(stream)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(stream.id)}
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