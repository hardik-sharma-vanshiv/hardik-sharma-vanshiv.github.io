export type SalesforceCloud = {
  id: string;
  title: string;
  description: string;
  image: string;
  accent: string;
};

export const salesforceClouds: SalesforceCloud[] = [
  {
    id: "sales-cloud",
    title: "Sales Cloud",
    description:
      "Streamline lead, account, and opportunity management with automation and forecasting so your sales teams close deals faster and build stronger customer relationships.",
    image: "/images/sales.webp",
    accent: "from-rose-400 to-rose-600",
  },
  {
    id: "service-cloud",
    title: "Service Cloud",
    description:
      "Deliver efficient, personalized support with unified customer data, omnichannel case management, and automation that helps teams resolve issues faster.",
    image: "/images/service.jpg",
    accent: "from-emerald-400 to-emerald-600",
  },
  {
    id: "marketing-cloud",
    title: "Marketing Cloud",
    description:
      "Design precise, AI-driven customer journeys with personalized campaigns and optimization strategies that improve engagement, conversions, and growth.",
    image: "/images/marketing.jpg",
    accent: "from-orange-400 to-orange-600",
  },
  {
    id: "commerce-cloud",
    title: "Commerce Cloud",
    description:
      "Power scalable eCommerce by connecting sales, inventory, and service for seamless buyer journeys across web, mobile, and in-store channels.",
    image: "/images/commerce.png",
    accent: "from-green-400 to-green-600",
  },
  {
    id: "revenue-cloud",
    title: "Revenue Cloud",
    description:
      "Automate quote-to-cash workflows with flexible pricing and sales channels to speed deal closures, improve accuracy, and fuel revenue growth.",
    image: "/images/salesforcelogo.png",
    accent: "from-blue-400 to-blue-600",
  },
  {
    id: "experience-cloud",
    title: "Experience Cloud",
    description:
      "Build custom portals and communities to engage customers, partners, and employees with personalized content, interactions, and expert integration support.",
    image: "/images/salesforcelogo.png",
    accent: "from-violet-400 to-violet-600",
  },
  {
    id: "mulesoft",
    title: "MuleSoft",
    description:
      "Connect apps, data, and systems with API-led integration to build automations and streamline workflows across your entire digital ecosystem.",
    image: "/images/mulesoft.png",
    accent: "from-cyan-400 to-cyan-600",
  },
];
