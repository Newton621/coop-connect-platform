import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart3 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface LifecycleRecord {
  id: string;
  batch_name: string;
  breed: string | null;
  current_stage: string;
  quantity: number;
  start_date: string;
  notes: string | null;
  user_id: string;
  created_at: string;
}

export function LifecycleManager() {
  const [records, setRecords] = useState<LifecycleRecord[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    const { data, error } = await supabase
      .from('lifecycle_records')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch lifecycle records",
        variant: "destructive"
      });
    } else {
      setRecords(data || []);
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'egg': return 'bg-yellow-100 text-yellow-800';
      case 'chick': return 'bg-orange-100 text-orange-800';
      case 'juvenile': return 'bg-blue-100 text-blue-800';
      case 'adult': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const calculateAge = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Lifecycle Records
        </CardTitle>
        <CardDescription>Monitor chicken lifecycle tracking across all users</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batch Name</TableHead>
              <TableHead>Breed</TableHead>
              <TableHead>Current Stage</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>User ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">{record.batch_name}</TableCell>
                <TableCell>{record.breed || 'N/A'}</TableCell>
                <TableCell>
                  <Badge className={getStageColor(record.current_stage)}>
                    {record.current_stage}
                  </Badge>
                </TableCell>
                <TableCell>{record.quantity}</TableCell>
                <TableCell>{calculateAge(record.start_date)}</TableCell>
                <TableCell>{formatDate(record.start_date)}</TableCell>
                <TableCell className="font-mono text-sm">
                  {record.user_id.substring(0, 8)}...
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {records.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No lifecycle records found
          </div>
        )}
      </CardContent>
    </Card>
  );
}