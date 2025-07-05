/**
 * Lead Capture Form Page
 *
 * This page provides a form for users to submit property leads (name, email, phone, property address).
 * On submission, the form data is sent to a configured webhook endpoint (see NEXT_PUBLIC_WEBHOOK_URL).
 * Success and error states are displayed to the user. Uses shadcn/ui components for UI.
 */
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL || "";
export default function LeadCapture() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    property_address: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", property_address: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Lead Capture Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <Textarea
            name="property_address"
            placeholder="Property Address"
            value={form.property_address}
            onChange={handleChange}
            required
            rows={3}
          />
          <Button
            type="submit"
            className="w-full mt-2"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {success && (
          <Alert className="mt-4 border-green-500 bg-green-50 text-green-800">Lead submitted successfully!</Alert>
        )}
        {error && (
          <Alert className="mt-4 border-red-500 bg-red-50 text-red-800">{error}</Alert>
        )}
      </Card>
    </div>
  );
} 