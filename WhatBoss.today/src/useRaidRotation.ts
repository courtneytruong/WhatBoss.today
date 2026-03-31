import { useState, useEffect } from "react";
import type {
  RaidBounty,
} from "./rotationData";
import {
  RAID_BOUNTY_ROTATION,
} from "./rotationData";
import { fetchTodaysBounties } from "./gw2api";

export interface DayEntry {
  date: Date;
  bosses: RaidBounty[];
  isToday: boolean;
  isVerified: boolean;
}

export interface UseRaidRotationResult {
  week: DayEntry[];
  unknownBosses: string[];
  isLoading: boolean;
  error: string | null;
}

export default function useRaidRotation(): UseRaidRotationResult {
  const [week, setWeek] = useState<DayEntry[]>([]);
  const [unknownBosses, setUnknownBosses] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRaidRotation = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch today's bounties
        const todaysBounties = await fetchTodaysBounties();
        const apiNames = todaysBounties.bossNames;

        // Track which API bosses were matched
        const matchedApiNames = new Set<string>();

        // Find anchorIndex for each slot
        const anchorIndices: number[] = [];

        for (let slot = 0; slot < RAID_BOUNTY_ROTATION.length; slot++) {
          const slotData = RAID_BOUNTY_ROTATION[slot];
          let foundIndex = -1;

          // Search for a match in this slot's bosses
          for (let i = 0; i < slotData.bosses.length; i++) {
            const bossInSlot = slotData.bosses[i].boss.toLowerCase();
            for (const apiBoss of apiNames) {
              if (bossInSlot === apiBoss.toLowerCase()) {
                foundIndex = i;
                matchedApiNames.add(apiBoss);
                break;
              }
            }
            if (foundIndex !== -1) break;
          }

          // If no match found, use 0 as default anchor
          anchorIndices.push(foundIndex !== -1 ? foundIndex : 0);
        }

        // Identify unknown bosses
        const unknown = apiNames.filter((name) => !matchedApiNames.has(name));
        setUnknownBosses(unknown);

        // Build week data (7 days)
        const weekData: DayEntry[] = [];

        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
          const date = new Date();
          date.setDate(date.getDate() + dayOffset);
          date.setHours(0, 0, 0, 0);

          const bosses: RaidBounty[] = [];

          // Collect one boss per slot for this day
          for (let slot = 0; slot < RAID_BOUNTY_ROTATION.length; slot++) {
            const slotData = RAID_BOUNTY_ROTATION[slot];
            const anchorIndex = anchorIndices[slot];
            const slotBossIndex =
              (anchorIndex + dayOffset) % slotData.bosses.length;
            bosses.push(slotData.bosses[slotBossIndex]);
          }

          const isToday = dayOffset === 0;
          const isVerified = isToday && unknown.length === 0;

          weekData.push({
            date,
            bosses,
            isToday,
            isVerified,
          });
        }

        setWeek(weekData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadRaidRotation();
  }, []);

  return {
    week,
    unknownBosses,
    isLoading,
    error,
  };
}
