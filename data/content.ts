import type {
  Stat,
  Service,
  WhyChooseItem,
  Product,
  Project,
  ProcessStep,
  Testimonial,
  FAQItem,
  ClientLogo,
} from "@/types";

export const HERO_STATS: Stat[] = [
  { value: 2000, suffix: "+", label: "Clients in Addis" },
  { value: 500, suffix: "+", label: "Beyond the City" },
  { value: 98, suffix: "%", label: "Cost Savings" },
  { value: 5, suffix: " yr", label: "Warranty" },
];

export const COMPANY_STATS: Stat[] = [
  { value: 6, suffix: "+", label: "Years of Excellence" },
  { value: 2500, suffix: "+", label: "Projects Delivered" },
  { value: 2500, suffix: "+", label: "Happy Customers" },
  { value: 40, suffix: "+", label: "Cities Served" },
  { value: 5000, suffix: "+", label: "Installations" },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "1", name: "G-Power Hybrid Systems", image: "/images/inverter-led.png" },
  { id: "2", name: "Lithium Storage", image: "/images/battery-pair.png" },
  { id: "3", name: "Modular ESS", image: "/images/battery-tower.png" },
  { id: "4", name: "Smart Inverters", image: "/images/inverter-smart.png" },
];

export const ABOUT_HIGHLIGHTS = [
  {
    id: "iso",
    title: "ISO 9001 Certified",
    description: "Quality management systems certified for excellence.",
    icon: "award" as const,
  },
  {
    id: "clean",
    title: "Clean & Renewable",
    description: "Eco-friendly solutions that reduce your carbon footprint.",
    icon: "leaf" as const,
  },
  {
    id: "warranty",
    title: "5-Year Warranty",
    description: "Comprehensive warranty for peace of mind.",
    icon: "shield" as const,
  },
];

export const SERVICES: Service[] = [
  {
    id: "solar",
    title: "Solar Panel Installation",
    description:
      "High-efficiency photovoltaic systems for residential, commercial, and industrial properties — engineered to cut electricity costs by up to 70%.",
    features: [
      "Free site assessment",
      "Premium-grade panels",
      "Expert installation team",
    ],
    image: "/images/solar-rooftop.png",
    icon: "sun",
  },
  {
    id: "storage",
    title: "Energy Storage Systems",
    description:
      "Advanced lithium battery solutions for uninterrupted power — built for data centers, telecom, homes, and critical facilities.",
    features: [
      "5-year warranty",
      "Smart monitoring",
      "Scalable 5kW–100kW+",
    ],
    image: "/images/ess-racks.png",
    icon: "battery",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Round-the-clock technical care and scheduled maintenance to keep every system performing at peak efficiency.",
    features: [
      "24/7 support desk",
      "Quarterly inspections",
      "Emergency repair",
    ],
    image: "/images/install-wall.png",
    icon: "wrench",
  },
];

export const WHY_CHOOSE: WhyChooseItem[] = [
  {
    id: "savings",
    title: "Energy Savings",
    description:
      "Reduce running costs by up to 98% compared to traditional generators with clean, efficient systems.",
    icon: "zap",
  },
  {
    id: "install",
    title: "Fast Installation",
    description:
      "Rapid delivery and professional installation so your operations stay online without delay.",
    icon: "rocket",
  },
  {
    id: "warranty",
    title: "5-Year Warranty",
    description:
      "Comprehensive product coverage and peace of mind backed by certified quality standards.",
    icon: "shield",
  },
  {
    id: "engineers",
    title: "Certified Engineers",
    description:
      "ISO-aligned teams with deep expertise in solar, storage, and hybrid energy architecture.",
    icon: "badge-check",
  },
  {
    id: "support",
    title: "24/7 Support",
    description:
      "Always-on technical assistance for troubleshooting, monitoring, and emergency response.",
    icon: "headphones",
  },
  {
    id: "eco",
    title: "Clean & Renewable",
    description:
      "Eco-forward solutions that lower your carbon footprint while securing reliable power.",
    icon: "leaf",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "elevator",
    title: "Five Star Elevator",
    description:
      "Installation and maintenance services, including warranty and maintenance offerings. A recent third-party listing advertises a 5-year warranty.",
    category: "Elevator",
    image: "/images/elevator.jpg",
    features: ["Passenger elevators", "Hospital elevators", "Home elevators"],
  },
  {
    id: "battery",
    title: "Lithium Battery Storage",
    description:
      "High-density ESS batteries designed for long cycle life, smart BMS, and seamless grid integration.",
    category: "Storage",
    image: "/images/battery-pair.png",
    features: ["Long cycle life", "Smart BMS", "Modular scaling"],
    details: {
      title: "Battery · Inverter",
      items: [
        "1.2kWh (12V)",
        "2.5kWh (24V)",
        "5kWh (48V)",
        "10kWh (48V)",
        "16kWh (48V)",
      ],
    },
  },
  {
    id: "solar",
    title: "Solar PV Modules",
    description:
      "Premium high-efficiency panels optimized for Ethiopian irradiance and commercial rooftops.",
    category: "Solar",
    image: "/images/solar-rooftop.png",
    features: ["High efficiency", "Weather resilient", "Tier-1 quality"],
  },
  {
    id: "inverters",
    title: "Smart Inverters",
    description:
      "Hybrid inverters with seamless transfer, remote monitoring, and generator-ready architecture.",
    category: "Power",
    image: "/images/inverter-led.png",
    features: ["Hybrid ready", "Remote monitoring", "Auto transfer"],
  },
  {
    id: "ess",
    title: "Complete ESS Packages",
    description:
      "Turnkey energy storage systems for data centers, telecom towers, farms, and industrial sites.",
    category: "Systems",
    image: "/images/battery-tower.png",
    features: ["Turnkey design", "Scalable capacity", "24/7 monitoring"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Residential ESS Installation",
    category: "Residential",
    location: "Addis Ababa",
    image: "/images/install-green.png",
    span: "tall",
  },
  {
    id: "2",
    title: "Hybrid Backup System",
    category: "Commercial",
    location: "Addis Ababa",
    image: "/images/install-residential.png",
    span: "wide",
  },
  {
    id: "3",
    title: "Rooftop Solar Array",
    category: "Solar",
    location: "Addis Ababa",
    image: "/images/solar-rooftop.png",
    span: "normal",
  },
  {
    id: "4",
    title: "Industrial Battery Racks",
    category: "Industrial",
    location: "Greater Addis",
    image: "/images/ess-racks.png",
    span: "normal",
  },
];

export const PROCESS: ProcessStep[] = [
  {
    id: "1",
    step: 1,
    title: "Consultation",
    description:
      "We assess your energy needs, site conditions, and goals to define the right solution.",
  },
  {
    id: "2",
    step: 2,
    title: "Planning",
    description:
      "Custom system design with ROI modeling, capacity planning, and clear project timelines.",
  },
  {
    id: "3",
    step: 3,
    title: "Installation",
    description:
      "Certified engineers install and commission your system with precision and minimal disruption.",
  },
  {
    id: "4",
    step: 4,
    title: "Testing",
    description:
      "Rigorous performance validation ensures safety, efficiency, and reliability from day one.",
  },
  {
    id: "5",
    step: 5,
    title: "Support",
    description:
      "Ongoing monitoring, maintenance, and 24/7 support keep your power uninterrupted.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "G-Power's solar system has completely transformed our home's energy supply. Reliable and cost-effective!",
    name: "Abebe Bekele",
    company: "Homeowner · Addis Ababa",
    rating: 5,
    initial: "A",
  },
  {
    id: "2",
    quote:
      "Working with G-Power has been a game changer. The installation was smooth, and the batteries are incredibly reliable, ensuring steady electricity supply even during outages. Our work has never been interrupted.",
    name: "Mr. Daniel",
    company: "IT Manager · Elilly Hotel",
    rating: 5,
    initial: "M",
  },
  {
    id: "3",
    quote:
      "We switched to G-Power and our electricity bills dropped significantly. Highly recommended!",
    name: "Sara Tesfaye",
    company: "Business Owner · Local Shop",
    rating: 5,
    initial: "S",
  },
  {
    id: "4",
    quote:
      "G-Power is a game changer. Their batteries provide uninterrupted power supply, which is crucial for our business. Their customer service is top notch and they support us every step of the way.",
    name: "Mr. Teferi Solomon",
    company: "IT Property Management & Control Senior Officer · Awach Saccos Ltd",
    rating: 5,
    initial: "M",
  },
  {
    id: "5",
    quote:
      "Excellent service and quality products. Our farm now runs entirely on solar!",
    name: "Daniel Mekonnen",
    company: "Farm Owner · Debre Zeit",
    rating: 5,
    initial: "D",
  },
  {
    id: "6",
    quote:
      "Installing G-Power in our complex was the best decision. The energy storage system is efficient, and we've seen a significant reduction in power issues. The team delivered exactly what they promised.",
    name: "Mr. Mulugeta",
    company: "Property Owner",
    rating: 5,
    initial: "M",
  },
  {
    id: "7",
    quote:
      "Professional installation and great after-sales support. Thank you G-Power!",
    name: "Hana Abraham",
    company: "Project Manager · Construction Company",
    rating: 5,
    initial: "H",
  },
  {
    id: "8",
    quote:
      "G-Power has revolutionized power management on our farm. The batteries and inverters keep our water pumps running smoothly. The solar integration is seamless, and we've significantly reduced energy costs while improving reliability.",
    name: "Mr. Khalid",
    company: "Owner · Ertale International Agricultural dev't PLC",
    rating: 5,
    initial: "M",
  },
  {
    id: "9",
    quote:
      "The hybrid inverter is perfect for our office needs. Uninterrupted power!",
    name: "Yonas Samuel",
    company: "Tech Entrepreneur · Addis Ababa",
    rating: 5,
    initial: "Y",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "1",
    question: "How much can I save by switching to solar and storage?",
    answer:
      "Most clients reduce generator running costs by up to 98% and electricity bills by up to 70%, depending on load profile, system size, and site conditions. We provide a free assessment with projected ROI.",
  },
  {
    id: "2",
    question: "What warranty do you offer?",
    answer:
      "Our energy storage and solar systems include a comprehensive 5-year warranty, backed by ISO 9001-certified quality processes and professional after-sales support.",
  },
  {
    id: "3",
    question: "How long does installation take?",
    answer:
      "Typical residential and small commercial installations complete within days after design approval. Larger industrial and ESS projects follow a tailored timeline shared during planning.",
  },
  {
    id: "4",
    question: "Do you serve areas outside Addis Ababa?",
    answer:
      "Yes. We have delivered solutions to 500+ clients beyond Addis and serve 40+ cities across Ethiopia, with logistics and engineering support included.",
  },
  {
    id: "5",
    question: "What industries do you specialize in?",
    answer:
      "We serve healthcare, government, telecom, data centers, manufacturing, hospitality, agriculture, and residential properties — with systems sized from 5kW to 100kW+.",
  },
  {
    id: "6",
    question: "Is maintenance included?",
    answer:
      "Yes. Every installation includes structured maintenance options, quarterly checks, and 24/7 technical support to keep systems running at peak performance.",
  },
];
