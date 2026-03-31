export interface GW2Achievement {
  id: number;
  name: string;
}

export interface GW2CategoryResponse {
  achievements: number[];
}

export interface TodaysBounties {
  bossNames: string[];
}

export async function fetchTodaysBounties(): Promise<TodaysBounties> {
  // Fetch the category response to get achievement IDs
  const categoryResponse = await fetch(
    "https://api.guildwars2.com/v2/achievements/categories/475"
  );

  if (!categoryResponse.ok) {
    throw new Error(`Failed to fetch achievements category: ${categoryResponse.statusText}`);
  }

  const categoryData: GW2CategoryResponse = await categoryResponse.json();

  if (!categoryData.achievements || categoryData.achievements.length === 0) {
    throw new Error("No achievements found in category 475");
  }

  // Extract all achievement IDs
  const achievementIds = categoryData.achievements.join(",");

  // Fetch achievement details
  const achievementsResponse = await fetch(
    `https://api.guildwars2.com/v2/achievements?ids=${achievementIds}`
  );

  if (!achievementsResponse.ok) {
    throw new Error(`Failed to fetch achievement details: ${achievementsResponse.statusText}`);
  }

  const achievements: GW2Achievement[] = await achievementsResponse.json();

  if (!achievements || achievements.length === 0) {
    throw new Error("No achievement details returned from API");
  }

  // Extract and trim boss names
  const bossNames = achievements.map((achievement) =>
  achievement.name.replace("Raid Bounty: ", "").trim()
);

  return {
    bossNames,
  };
}
