import type { CompanyValue, Milestone } from "@/types";

export const milestones: Milestone[] = [
  {
    year: "2018",
    title: "The first cart",
    description: "Kopi Meneer starts as a small coffee cart serving neighbors on weekend mornings.",
  },
  {
    year: "2020",
    title: "Our own shop",
    description: "We open our first shop with a small roaster and a handful of tables.",
  },
  {
    year: "2022",
    title: "Roasting in-house",
    description: "Beans are now roasted weekly in-house and sold to home brewers.",
  },
  {
    year: "2025",
    title: "Growing the community",
    description: "Workshops, events, and catering bring more people into our coffee community.",
  },
];

export const values: CompanyValue[] = [
  {
    title: "Quality first",
    description: "We source carefully, roast fresh, and never rush a good cup.",
  },
  {
    title: "Warm hospitality",
    description: "Everyone who walks in is a guest, and every guest is greeted by name.",
  },
  {
    title: "Fair and sustainable",
    description: "We pay farmers fairly and reduce waste across our shop.",
  },
];

export const stats = [
  { value: "2018", label: "The year we started" },
  { value: "1,200+", label: "Cups served every week" },
  { value: "12", label: "People on the team" },
];
