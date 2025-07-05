import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
// @ts-ignore: shadcn/ui Card import placeholder
import { Card } from "@/components/ui/card";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  property_address: string;
  status: "Received" | "Emailed" | "Texted";
  created_at: string;
}

const STATUS_COLORS: Record<string, string> = {
  Received: "bg-gray-200 text-gray-800",
  Emailed: "bg-blue-200 text-blue-800",
  Texted: "bg-green-200 text-green-800",
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLeads = async () => {
    setLoading(true);
    setError("");
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else setLeads(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
    const interval = setInterval(fetchLeads, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-4xl p-4 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Agent Dashboard</h1>
        {loading ? (
          <div className="text-center py-8">Loading leads...</div>
        ) : error ? (
          <div className="alert alert-error">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Phone</th>
                  <th className="px-3 py-2 text-left">Property Address</th>
                  <th className="px-3 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8">No leads found.</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b last:border-none">
                      <td className="px-3 py-2 whitespace-nowrap">{lead.name}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{lead.email}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{lead.phone}</td>
                      <td className="px-3 py-2 whitespace-pre-line max-w-xs break-words">{lead.property_address}</td>
                      <td className="px-3 py-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${STATUS_COLORS[lead.status] || "bg-gray-100 text-gray-700"}`}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
} 