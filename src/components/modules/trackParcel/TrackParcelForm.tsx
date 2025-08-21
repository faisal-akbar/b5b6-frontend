import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

function TrackParcelForm() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [parcelData, setParcelData] = useState<{
    trackingId: string;
    currentStatus: string;
    estimatedDelivery: string;
    deliveredAt?: string;
    statusLog: Array<{
      status: string;
      location: string;
      note: string;
      updatedAt: string;
    }>;
    pickupAddress: string;
    deliveryAddress: string;
  } | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setLoading(true);
    setResult(null);
    setParcelData(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (trackingId.includes("TRK")) {
        setParcelData(parcelData);
        setResult("Parcel found! Here are the details:");
      } else {
        setResult("Parcel not found. Please check your tracking number.");
      }
    }, 1500);
  };

  return (
    <Card className="max-w-2xl mx-auto p-8 shadow-xl border-0 bg-gradient-to-br from-card to-card/50">
      <CardContent className="space-y-6">
        <form onSubmit={handleTrack} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter tracking number (e.g., NL123456789)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="h-12 text-lg"
                autoFocus
              />
            </div>
            <Button
              type="submit"
              disabled={loading || !trackingId.trim()}
              className="h-12 px-8"
            >
              {loading ? (
                <div className="animate-spin h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Track your parcel with our advanced tracking system
          </p>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-base text-muted-foreground">{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default TrackParcelForm;
