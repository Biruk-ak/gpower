import type { NavItem, ContactInfo } from "@/types";

export const SITE = {
  name: "G-Power",
  legalName: "G-Power Manufacturing PLC",
  tagline: "Reliable Power. Sustainable Ethiopia.",
  description:
    "G-Power Manufacturing PLC designs, supplies, and installs advanced solar power and energy storage solutions for residential, commercial, industrial, and institutional customers across Ethiopia.",
  url: "https://gpower.et",
  sisterCompany: "Five Star Elevator Manufacturing PLC",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const CONTACT: ContactInfo = {
  phone: "+251 92 668 8559",
  email: "info@gpower.et",
  address: "G-Power Tower, Jemo Michael, Next to Anbesa Garage, Addis Ababa, Ethiopia",
  hours: [
    "Monday – Friday: 8:00 AM – 6:00 PM",
    "Saturday: 9:00 AM – 2:00 PM",
    "Sunday: Closed",
  ],
};

export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "X", href: "https://x.com", icon: "twitter" },
] as const;
