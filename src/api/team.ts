import type { TeamMember } from "@/types";

interface RandomUser {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
}

const roles = [
  "Head Barista",
  "Coffee Roaster",
  "Store Manager",
  "Pastry Chef",
  "Barista",
  "Quality Controller",
  "Events Lead",
  "Customer Experience",
];

const bios = [
  "Loves a perfectly pulled espresso and teaching others how to taste it.",
  "Roasts every batch by ear, nose, and a lot of patience.",
  "Keeps the shop running smoothly and the guests smiling.",
  "Bakes the pastries that go with every cup we serve.",
];

export async function getTeamMembers(count = 8): Promise<TeamMember[]> {
  const url = `https://randomuser.me/api/?results=${count}&seed=kopi-meneer&nat=nl,gb,de&inc=login,name,email,picture`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Could not load team members");

  const data = (await response.json()) as { results: RandomUser[] };

  return data.results.map((user, index) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    role: roles[index % roles.length],
    bio: bios[index % bios.length],
    photo: user.picture.large,
    email: user.email,
  }));
}
