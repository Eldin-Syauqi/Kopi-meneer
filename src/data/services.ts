import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "coffee-bar",
    title: "Coffee Bar",
    description: "Espresso drinks, manual brew, and seasonal specials made by our baristas.",
    price: "From Rp 25.000",
    features: ["Single-origin beans", "Oat and soy milk options", "Free Wi-Fi"],
  },
  {
    id: "coffee-beans",
    title: "Coffee Beans",
    description: "Freshly roasted beans in 250 g and 1 kg bags, ground for your brewing method.",
    price: "From Rp 85.000",
    features: ["Roasted weekly", "Ground to order", "Subscription available"],
  },
  {
    id: "catering",
    title: "Event Catering",
    description: "A mobile coffee cart for offices, weddings, and community events.",
    price: "From Rp 1.500.000",
    features: ["On-site barista", "Custom menu", "Up to 200 guests"],
  },
  {
    id: "workshop",
    title: "Barista Workshop",
    description: "Hands-on classes on espresso, latte art, and home brewing for beginners.",
    price: "Rp 350.000 / person",
    features: ["Small groups", "All equipment provided", "Take-home beans"],
  },
];