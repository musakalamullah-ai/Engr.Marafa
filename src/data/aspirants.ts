export type AspirantStatus = "Declared" | "Screening Passed" | "Awaiting Clearance" | "Confirmed";

export interface Aspirant {
  id: string;
  name: string;
  office: string;
  constituency: string;
  photo: string;
  status: AspirantStatus;
  bio: string;
}

export const aspirants: Aspirant[] = [
  {
    id: "asp-001",
    name: "Engr. Sen. Kabiru Garba Marafa, OFR, CON",
    office: "Senate",
    constituency: "Zamfara Central Senatorial District",
    photo: "https://placehold.co/600x700/0a2a5e/ffffff?text=Sen.+Marafa",
    status: "Confirmed",
    bio: "Distinguished engineer and statesman with a proven record of legislative leadership and community development spanning decades of public service in Zamfara State.",
  },
  {
    id: "asp-002",
    name: "Alhaji Bello Gusau",
    office: "House of Representatives",
    constituency: "Gusau/Tsafe Federal Constituency",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=Alhaji+Bello",
    status: "Screening Passed",
    bio: "A respected community leader with deep roots in Gusau and Tsafe, championing rural infrastructure and small-business development.",
  },
  {
    id: "asp-003",
    name: "Dr. Maryam Shinkafi",
    office: "House of Representatives",
    constituency: "Shinkafi/Zurmi Federal Constituency",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=Dr.+Maryam",
    status: "Declared",
    bio: "Medical doctor and women's rights advocate bringing healthcare expertise and inclusive governance to the federal legislature.",
  },
  {
    id: "asp-004",
    name: "Barrister Sani Kaura Namoda",
    office: "House of Representatives",
    constituency: "Kaura Namoda/Birnin Magaji Federal Constituency",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=Bar.+Sani",
    status: "Screening Passed",
    bio: "Legal practitioner with extensive courtroom and legislative drafting experience, committed to rule of law and citizens' rights.",
  },
  {
    id: "asp-005",
    name: "Alhaji Umar Talata Mafara",
    office: "House of Representatives",
    constituency: "Talata Mafara/Bakura Federal Constituency",
    photo: "https://placehold.co/600x700/1a4b8c/ffffff?text=Alhaji+Umar",
    status: "Declared",
    bio: "Agribusiness entrepreneur and community mobiliser dedicated to transforming rural Zamfara through agricultural modernisation.",
  },
  {
    id: "asp-006",
    name: "Hajiya Rabi Maradun",
    office: "State House of Assembly",
    constituency: "Maradun Constituency",
    photo: "https://placehold.co/600x700/2c6b9e/ffffff?text=Hajiya+Rabi",
    status: "Confirmed",
    bio: "Education activist and grassroots organiser who has spent years building schools and empowering girls in underserved communities.",
  },
  {
    id: "asp-007",
    name: "Comrade Ibrahim Anka",
    office: "State House of Assembly",
    constituency: "Anka Constituency",
    photo: "https://placehold.co/600x700/2c6b9e/ffffff?text=Com.+Ibrahim",
    status: "Screening Passed",
    bio: "Youth activist and labour movement leader advocating for job creation, trade skills training, and equitable resource allocation.",
  },
  {
    id: "asp-008",
    name: "Engr. Abubakar Bukkuyum",
    office: "State House of Assembly",
    constituency: "Bukkuyum Constituency",
    photo: "https://placehold.co/600x700/2c6b9e/ffffff?text=Engr.+Abubakar",
    status: "Awaiting Clearance",
    bio: "Civil engineer with a portfolio of completed public infrastructure projects across Zamfara, standing on a platform of development-first governance.",
  },
  {
    id: "asp-009",
    name: "Alhaji Musa Bungudu",
    office: "State House of Assembly",
    constituency: "Bungudu Constituency",
    photo: "https://placehold.co/600x700/2c6b9e/ffffff?text=Alhaji+Musa",
    status: "Declared",
    bio: "Former local government administrator with demonstrated capacity to deliver services at the grassroots level.",
  },
  {
    id: "asp-010",
    name: "Hajiya Fatima Maru",
    office: "State House of Assembly",
    constituency: "Maru Constituency",
    photo: "https://placehold.co/600x700/2c6b9e/ffffff?text=Hajiya+Fatima",
    status: "Confirmed",
    bio: "Social entrepreneur and microfinance pioneer whose work has lifted hundreds of families in Maru out of poverty.",
  },
  {
    id: "asp-011",
    name: "Alhaji Lawal Gummi",
    office: "State House of Assembly",
    constituency: "Gummi Constituency",
    photo: "https://placehold.co/600x700/2c6b9e/ffffff?text=Alhaji+Lawal",
    status: "Screening Passed",
    bio: "Seasoned administrator and community elder committed to transparent local governance and equitable distribution of dividends of democracy.",
  },
  {
    id: "asp-012",
    name: "Dr. Suleiman Tsafe",
    office: "State House of Assembly",
    constituency: "Tsafe Constituency",
    photo: "https://placehold.co/600x700/2c6b9e/ffffff?text=Dr.+Suleiman",
    status: "Awaiting Clearance",
    bio: "Public health specialist and academic bringing evidence-based policy thinking to Zamfara's legislative chamber.",
  },
];
