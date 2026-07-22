export type LeaderLevel = "National" | "State";

export interface PartyLeader {
  id: string;
  name: string;
  position: string;
  level: LeaderLevel;
  state: string;
  photo: string;
  shortDescription: string;
}

export const partyLeadership: PartyLeader[] = [
  // National Leadership
  {
    id: "nl-001",
    name: "Alhaji Musa Ibrahim",
    position: "National Chairman",
    level: "National",
    state: "Abuja (FCT)",
    photo: "https://placehold.co/600x700/0a2a5e/ffffff?text=National+Chairman",
    shortDescription:
      "A veteran political administrator with over three decades of experience shaping democratic institutions across Nigeria.",
  },
  {
    id: "nl-002",
    name: "Barrister Aisha Bello",
    position: "National Secretary",
    level: "National",
    state: "Abuja (FCT)",
    photo: "https://placehold.co/600x700/0a2a5e/ffffff?text=National+Secretary",
    shortDescription:
      "Distinguished legal practitioner and party strategist committed to transparent, inclusive party governance.",
  },
  {
    id: "nl-003",
    name: "Chief Emeka Okafor",
    position: "National Treasurer",
    level: "National",
    state: "Anambra State",
    photo: "https://placehold.co/600x700/0a2a5e/ffffff?text=National+Treasurer",
    shortDescription:
      "A seasoned financial executive ensuring fiscal discipline and accountability across party operations.",
  },
  {
    id: "nl-004",
    name: "Dr. Fatima Aliyu",
    position: "National Organising Secretary",
    level: "National",
    state: "Kano State",
    photo: "https://placehold.co/600x700/0a2a5e/ffffff?text=Org.+Secretary",
    shortDescription:
      "Dedicated to building robust grassroots structures that give every NDC member a meaningful voice.",
  },
  {
    id: "nl-005",
    name: "Senator Garba Tukur",
    position: "Board of Trustees Chairman",
    level: "National",
    state: "Sokoto State",
    photo: "https://placehold.co/600x700/0a2a5e/ffffff?text=BoT+Chairman",
    shortDescription:
      "Elder statesman and founding pillar of the NDC, providing visionary guidance to the party's long-term direction.",
  },
  {
    id: "nl-006",
    name: "Hon. Ngozi Adeyemi",
    position: "National Publicity Secretary",
    level: "National",
    state: "Lagos State",
    photo: "https://placehold.co/600x700/0a2a5e/ffffff?text=Publicity+Secretary",
    shortDescription:
      "Award-winning communications professional amplifying the NDC's message across national and digital platforms.",
  },

  // State Leadership — Zamfara
  {
    id: "sl-001",
    name: "Alhaji Sani Gusau",
    position: "State Chairman",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=State+Chairman",
    shortDescription:
      "Lifelong Zamfara resident committed to uniting communities and driving inclusive political participation.",
  },
  {
    id: "sl-002",
    name: "Hajiya Rahama Shinkafi",
    position: "State Women Leader",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=Women+Leader",
    shortDescription:
      "A fierce advocate for women's rights, education, and political representation across Zamfara's 14 LGAs.",
  },
  {
    id: "sl-003",
    name: "Malam Umar Kaura Namoda",
    position: "State Secretary",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=State+Secretary",
    shortDescription:
      "Meticulous administrator ensuring the smooth coordination of all NDC Zamfara State operations and records.",
  },
  {
    id: "sl-004",
    name: "Engr. Aminu Birnin Magaji",
    position: "State Treasurer",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=State+Treasurer",
    shortDescription:
      "Civil engineer turned party financial steward, bringing technical rigour to the management of party resources.",
  },
  {
    id: "sl-005",
    name: "Comrade Lawal Talata Mafara",
    position: "State Youth Leader",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=Youth+Leader",
    shortDescription:
      "Dynamic youth mobiliser channelling the energy of Zamfara's young population into positive civic engagement.",
  },
  {
    id: "sl-006",
    name: "Alhaja Zainab Tsafe",
    position: "State Publicity Secretary",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=Publicity+Secretary",
    shortDescription:
      "Communications specialist and journalist dedicated to projecting the NDC's vision to every corner of Zamfara.",
  },
];
