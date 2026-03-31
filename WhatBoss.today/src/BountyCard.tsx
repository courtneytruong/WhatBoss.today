import type { RaidBounty } from "./rotationData";

interface BountyCardProps {
  bounty: RaidBounty;
  slotNumber: number;
}

export default function BountyCard({
  bounty,
  slotNumber,
}: BountyCardProps) {
  return (
    <div className="bounty-card">
      <div className="bounty-boss">{bounty.boss}</div>
      <div className="bounty-location">{bounty.location}</div>
      <div className="bounty-slot">Slot {slotNumber}</div>
    </div>
  );
}
