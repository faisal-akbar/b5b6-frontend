import {
  HelpSection,
  ParcelDetails,
  TrackParcelHero,
} from "@/components/modules/trackParcel";

export default function TrackParcel() {
  return (
    <div className="min-h-screen bg-background">
      <TrackParcelHero />
      <ParcelDetails />
      <HelpSection />
    </div>
  );
}
