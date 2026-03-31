export interface RaidBounty {
  boss: string;
  location: string;
}

export interface RotationSlot {
  slot: number;
  bosses: RaidBounty[];
}

export const RAID_BOUNTY_ROTATION: RotationSlot[] = [
  {
    slot: 1,
    bosses: [
      { boss: "Shiverpeaks Pass", location: "Shiverpeaks Pass" },
      { boss: "Voice and Claw of the Fallen", location: "Shiverpeaks Pass" },
      { boss: "Fraenir of Jormag", location: "Shiverpeaks Pass" },
      { boss: "Gorseval", location: "Spirit Vale (W1)" },
      { boss: "Cairn", location: "Bastion of the Penitent (W4)" },
      { boss: "Mursaat Overseer", location: "Bastion of the Penitent (W4)" },
    ]
  },
  {
    slot: 2,
    bosses: [
      { boss: "Aetherblade Hideout", location: "End of Dragons Raid" },
      { boss: "Cardinal Sabir", location: "The Key of Ahdashim (W7)" },
      { boss: "Whisper of Jormag", location: "Shiverpeaks Pass" },
      { boss: "Vale Guardian", location: "Spirit Vale (W1)" },
      { boss: "Cosmic Observatory", location: "Secrets of the Obscure Raid" },
      { boss: "Cold War", location: "Shiverpeaks Pass" },
      { boss: "Boneskinner", location: "Shiverpeaks Pass" },
      { boss: "Sabetha", location: "Spirit Vale (W1)" },
      { boss: "Xunlai Jade Junkyard", location: "End of Dragons Raid" },
      { boss: "Temple of Febe", location: "Secrets of the Obscure Raid" },
      { boss: "Keep Construct", location: "Stronghold of the Faithful (W3)" },
      { boss: "Kela", location: "Guardian's Glade" },
    ]
  },
  {
    slot: 3,
    bosses: [
      { boss: "Slothasor", location: "Salvation Pass (W2)" },
      { boss: "Matthias", location: "Salvation Pass (W2)" },
      { boss: "Xera", location: "Stronghold of the Faithful (W3)" },
      { boss: "Samarog", location: "Bastion of the Penitent (W4)" },
      { boss: "Conjured Amalgamate", location: "Mythwright Gambit (W6)" },
      { boss: "Twin Largos", location: "Mythwright Gambit (W6)" },
      { boss: "Decima", location: "Mount Balrior (Janthir Wilds)" },
      { boss: "Cardinal Adina", location: "The Key of Ahdashim (W7)" },
      { boss: "Old Lion's Court", location: "End of Dragons Raid" },
      { boss: "Ura", location: "Mount Balrior (Janthir Wilds)" },
      { boss: "Kaineng Overlook", location: "End of Dragons Raid" },
      { boss: "Deimos", location: "Bastion of the Penitent (W4)" },
    ]
  },
  {
    slot: 4,
    bosses: [
      { boss: "Qadim", location: "Mythwright Gambit (W6)" },
      { boss: "Qadim the Peerless", location: "The Key of Ahdashim (W7)" },
      { boss: "Soulless Horror", location: "Hall of Chains (W5)" },
      { boss: "Harvest Temple", location: "End of Dragons Raid" },
      { boss: "Dhuum", location: "Hall of Chains (W5)" },
      { boss: "Greer", location: "Mount Balrior (Janthir Wilds)" },
    ]
  }
];
