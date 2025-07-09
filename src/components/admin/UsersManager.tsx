import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  phone: string | null;
  farm_location: string | null;
  farm_size: string | null;
  experience_level: string | null;
  created_at: string;
}

export function UsersManager() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch user profiles",
        variant: "destructive"
      });
    } else {
      setProfiles(data || []);
    }
  };

  const getExperienceColor = (level: string | null) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          User Profiles
        </CardTitle>
        <CardDescription>View and manage registered user profiles</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Farm Location</TableHead>
              <TableHead>Farm Size</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {profiles.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell className="font-medium">
                  {profile.full_name || 'N/A'}
                </TableCell>
                <TableCell>{profile.phone || 'N/A'}</TableCell>
                <TableCell>{profile.farm_location || 'N/A'}</TableCell>
                <TableCell>{profile.farm_size || 'N/A'}</TableCell>
                <TableCell>
                  <Badge className={getExperienceColor(profile.experience_level)}>
                    {profile.experience_level || 'beginner'}
                  </Badge>
                </TableCell>
                <TableCell>{formatDate(profile.created_at)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {profiles.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No user profiles found
          </div>
        )}
      </CardContent>
    </Card>
  );
}