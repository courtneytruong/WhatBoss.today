import type { DayEntry } from "./useRaidRotation";
import BountyCard from "./BountyCard";

interface DayColumnProps {
  day: DayEntry;
}

export default function DayColumn({ day }: DayColumnProps) {
  const formattedDate = day.date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className={`day-column ${day.isToday ? "is-today" : ""}`}>
      <div className="day-header">
        <div className="day-date">{formattedDate}</div>
        {day.isVerified && (
          <div className="verification-badge">API Verified ✓</div>
        )}
      </div>
      <div className="bounties-list">
        {day.bosses.map((boss, index) => (
          <BountyCard
            key={index}
            bounty={boss}
            slotNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
