import type { IconType } from "react-icons";
import {
  FaBullhorn,
  FaCloud,
  FaDiagramProject,
  FaLandmark,
  FaStore,
} from "react-icons/fa6";
import { TbCloudComputing } from "react-icons/tb";

export const OFFERING_ICON_CLASS = "text-[#A855F7]";
export const OFFERING_ICON_BG_CLASS = "bg-[#A855F7]/10";

export type OfferingExpertise = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
  gridClass: string;
};

export const coreExpertiseOfferings: OfferingExpertise[] = [
  {
    id: "platform-clouds",
    title: "Salesforce Cloud Platforms",
    description:
      "We design and deliver scalable solutions across Core Platform, Sales Cloud, Service Cloud, and Experience Cloud—aligned to your customer lifecycle and operating model.",
    highlights: [
      "Sales & service process design",
      "Experience Cloud portals & communities",
      "Platform governance and release management",
    ],
    icon: FaCloud,
    gridClass: "col-span-1 md:col-span-2",
  },
  {
    id: "commerce",
    title: "B2B & B2C Commerce",
    description:
      "Commerce Cloud specialists with hands-on experience building high-traffic storefronts, catalog architecture, and checkout flows from the ground up.",
    highlights: [
      "Headless & hybrid commerce models",
      "Order management & promotions",
      "ERP and payment gateway integrations",
    ],
    icon: FaStore,
    gridClass: "col-span-1 md:col-span-1",
  },
  {
    id: "public-sector",
    title: "Public Sector Solutions",
    description:
      "Proven delivery across government and regulated programs with Salesforce solutions tailored to citizen services and compliance-heavy workflows.",
    highlights: [
      "License & permits management",
      "Inspections, grants & benefits programs",
      "Child care and case management use cases",
    ],
    icon: FaLandmark,
    gridClass: "col-span-1 md:col-span-2",
  },
  {
    id: "marketing",
    title: "Marketing Cloud & Pardot",
    description:
      "Campaign orchestration, lead nurturing, and marketing operations powered by Marketing Cloud and Account Engagement (Pardot) best practices.",
    highlights: [
      "Journey Builder & Automation Studio",
      "Lead scoring and attribution models",
      "CRM-aligned marketing analytics",
    ],
    icon: FaBullhorn,
    gridClass: "col-span-1 md:col-span-1",
  },
  {
    id: "mulesoft",
    title: "MuleSoft Development & Architecture",
    description:
      "API-led connectivity that unifies Salesforce with ERP, legacy systems, and third-party applications through robust MuleSoft integration patterns.",
    highlights: [
      "System and process APIs",
      "Anypoint Platform governance",
      "Reusable integration assets & CI/CD",
    ],
    icon: FaDiagramProject,
    gridClass: "col-span-1 md:col-span-1",
  },
  {
    id: "multi-cloud",
    title: "Multi-Cloud & Enterprise Integration",
    description:
      "Deep integration expertise across ESB, ETL, and iPaaS landscapes—helping enterprises modernize data pipelines and orchestrate multi-cloud workloads.",
    highlights: [
      "Enterprise service bus (ESB) patterns",
      "Batch & real-time ETL pipelines",
      "iPaaS strategy and platform selection",
    ],
    icon: TbCloudComputing,
    gridClass: "col-span-1 md:col-span-2",
  },
];
