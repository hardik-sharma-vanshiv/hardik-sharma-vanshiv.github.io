import type { LucideIcon } from 'lucide-react'
import {
  Award,
  Briefcase,
  Building2,
  MessageCircle,
  User2,
  Zap,
} from 'lucide-react'

export type TechElevateStudent = {
  name: string
  role: string
  company: string
  image: string
  delay?: string
}

export type TechElevateCohort = {
  id: number
  label: string
  description: string
  students: TechElevateStudent[]
}

export type TechElevateCurriculumModule = {
  title: string
  content: string | string[]
  type: 'list' | 'text'
  open?: boolean
}

export type TechElevateBenefit = {
  title: string
  description: string
  icon: LucideIcon
}

export type TechElevateCurriculumPillar = {
  index: string
  label: string
  active: boolean
}

export type TechElevateAdvancedModule = {
  title: string
  description: string
}

export const techElevateHero = {
  badge: 'Limited Seats Available - Enrolling Now',
  title: 'Career Accelerator',
  titleHighlight: 'Program',
  description:
    'From learning to leading — we bridge the gap! Join our in-person Salesforce Career Accelerator Program, crafted to equip you with hands-on technical expertise, vital soft skills, and dedicated placement support to help you step confidently into the corporate world with a competitive advantage.',
  image:
    '/images/techelevate.jpg',
  highlights: [
    { label: 'Industry Certified', icon: 'shield' as const },
    { label: 'Placement Support', icon: 'briefcase' as const },
  ],
  cardTitle: 'Industry Expert Led',
  cardSubtitle: 'Transform your potential into performance',
}

export const techElevateBenefitsSection = {
  title: 'Career Accelerator Program Benefits',
  description:
    'More than just training—we provide the tools, mentorship, and experience to make you industry-ready from Day 1.',
}

export const techElevateBenefits: TechElevateBenefit[] = [
  {
    title: '1:1 Mentorship',
    description:
      "Get personalized guidance from Salesforce MVPs and industry veterans who have navigated the path you're on.",
    icon: User2,
  },
  {
    title: 'Certification Guide & Voucher',
    description:
      'Master the curriculum with expert-led study paths and receive a voucher to ace your official certification exam.',
    icon: Award,
  },
  {
    title: 'Live Project Experience',
    description:
      'Bridge the gap between theory and practice by working on real-world multi-cloud deployments.',
    icon: Briefcase,
  },
  {
    title: 'Soft Skills Development',
    description:
      'Master the art of professional communication, stakeholder management, and collaborative problem-solving.',
    icon: MessageCircle,
  },
  {
    title: 'Interview Guidance',
    description:
      'From resume polishing to mock technical rounds, we ensure you stand out in front of top-tier recruiters.',
    icon: Zap,
  },
  {
    title: 'Placement & Job Opportunities',
    description:
      'Get access to exclusive hiring partners, job referrals, and dedicated placement support to kickstart your career.',
    icon: Building2,
  },
]

export const techElevateCurriculumSection = {
  titleLines: ['Complete', 'Curriculum'],
  description:
    'A comprehensive deep dive into the Salesforce ecosystem, covering everything from core fundamentals to advanced AI systems.',
}

export const techElevateCurriculumPillars: TechElevateCurriculumPillar[] = [
  { index: '01', label: 'Admin & Configuration', active: true },
  { index: '02', label: 'Development & Code', active: true },
  { index: '03', label: 'Advanced Clouds & AI', active: true },
]

export const techElevateCurriculum: TechElevateCurriculumModule[] = [
  {
    title: 'Introduction to Salesforce',
    content: [
      'Salesforce Navigation Experience',
      'Classic vs Lightning',
      'Custom and Standard Apps',
      'Data Types for Fields',
      'Master-Detail & Lookup',
      'Formula Fields & Validation',
      'Objects, Tabs, and Fields',
      'Security & Permission Sets',
      'Reports and Dashboards',
      'Data Sharing & Profiles',
    ],
    type: 'list',
    open: true,
  },
  {
    title: 'Lightning Flow',
    content: [
      'Screen Flow',
      'Record-Triggered Flow',
      'Schedule-Triggered Flow',
      'Autolaunch Flow',
      'Platform Event Triggered Flow',
    ],
    type: 'list',
  },
  {
    title: 'Sales, Service & Experience Clouds',
    content:
      'In-depth modules covering the core functional clouds of the Salesforce ecosystem including Lead management, Case management, and Digital Experiences.',
    type: 'text',
  },
  {
    title: 'Apex Programming',
    content: [
      'Object Oriented Programming',
      'Apex Class & Methods',
      'Data Types & Collections',
      'SOQL, SOSL, DML',
      'Apex Trigger & Test Class',
      'Asynchronous Apex',
      'Project Implementation',
    ],
    type: 'list',
  },
  {
    title: 'Lightning Web Components (LWC)',
    content: [
      'Basics of HTML, CSS & JS',
      'SFDX & VSCode Setup',
      'Lifecycle Hooks',
      'Lightning Data Service',
      'Wire Apex Methods',
      'Lightning Message Service',
      '50+ Scenarios Hands-on',
    ],
    type: 'list',
  },
  {
    title: 'Salesforce Integration',
    content: [
      'REST, SOAP & JSON',
      'Named Credentials',
      'Apex Rest Services',
      'Postman & API Testing',
      'Flow Builder Callouts',
      'Salesforce Connect',
    ],
    type: 'list',
  },
  {
    title: 'Deployment Process',
    content: [
      'Sandbox Creation',
      'Change Set Deployment',
      'Workbench Deployment',
      'VSCode & ANT Process',
      'Push Code to GIT Repository',
    ],
    type: 'list',
  },
]

export const techElevateAdvancedModules: TechElevateAdvancedModule[] = [
  {
    title: 'Agentforce',
    description: 'Master autonomous AI agents and support orchestration.',
  },
  {
    title: 'Data 360',
    description: 'Unified customer data cloud and profile management.',
  },
  {
    title: 'OmniStudio',
    description: 'Industry-specific low-code UI/UX for complex workflows.',
  },
]

export const techElevateFeaturedStory = {
  badge: 'Featured Global Story',
  title: 'From Jodhpur to the',
  titleHighlight: 'Global Stage',
  titleSuffix: ': Tanishka Singh',
  paragraphs: [
    'From the narrow lanes of a small Tier-3 city in India — Jodhpur — to being featured on the Salesforce global blog!',
    'Her remarkable transformation was recognized internationally, earning her a feature on the official Salesforce Global Blog, showcasing her technical prowess and the impact of dedicated training.',
  ],
  image:
    'https://media.licdn.com/dms/image/v2/D5622AQHVKVfs0MFHqA/feedshare-shrink_2048_1536/B56Zm__xLyJ8A4-/0/1759862789824?e=1776902400&v=beta&t=hNHKqXEif2_2RhFa_kHDcj2yIc25pRQa_LCM3eV8ZJM',
  link: 'https://www.salesforce.com/blog/workforce-development-ai-careers/',
  linkText: 'Read the Featured Article',
}

export const techElevateSuccessStoriesSection = {
  title: 'Success Stories',
  description:
    'Witness the transformation of our graduates who are now leading tech innovations across the industry.',
  programTitle: 'Career Accelerator Program',
}

export const techElevateCohorts: TechElevateCohort[] = [
  {
    id: 1,
    label: 'Cohort 1',
    description:
      'Graduates with success in Salesforce Admin, Consultant, and Developer roles.',
    students: [
      {
        name: 'Atharav Porwal',
        role: 'Salesforce Admin',
        company: 'Vanshiv',
        delay: '600',
        image: '/elevate/c2/atharav_porwal.png',
      },
      {
        name: 'Ayush Singhal',
        role: 'Salesforce Consultant',
        company: 'Vanshiv',
        delay: '900',
        image: '/elevate/c2/ayush_singhal.png',
      },
      {
        name: 'Chitranshi Soni',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        delay: '1200',
        image: '/elevate/c2/chitranshi_soni.png',
      },
      {
        name: 'Kulish',
        role: 'Salesforce Admin',
        company: 'Asymbl Technology',
        delay: '1500',
        image: '/elevate/c2/Kulish.png',
      },
      {
        name: 'Lakshmi',
        role: 'Salesforce Developer',
        company: 'Vedsphere Technology',
        delay: '1800',
        image: '/elevate/c2/Lakshmi.png',
      },
      {
        name: 'Monil Sharma',
        role: 'Salesforce Consultant',
        company: 'Vanshiv',
        delay: '2100',
        image: '/elevate/c2/monil_sharma.png',
      },
      {
        name: 'Shivam',
        role: 'Salesforce Developer',
        company: 'Zordial Technologies',
        delay: '2400',
        image: '/elevate/c2/Shivam.png',
      },
      {
        name: 'Siddarth',
        role: 'Salesforce Admin',
        company: 'Asymbl Technology',
        delay: '2700',
        image: '/elevate/c2/siddarth.png',
      },
      {
        name: 'Tanishka Singh',
        role: 'Salesforce Consultant',
        company: 'Vanshiv',
        delay: '3000',
        image: '/elevate/c2/Tanish_singh.png',
      },
      {
        name: 'Tushar',
        role: 'Salesforce Developer',
        company: 'Zordial Technologies',
        delay: '3300',
        image: '/elevate/c2/Tushar.png',
      },
      {
        name: 'Yogesh Mudgal',
        role: 'Salesforce Admin',
        company: 'Vanshiv',
        delay: '3600',
        image: '/elevate/c2/yogesh_mudgal.png',
      },
    ],
  },
  {
    id: 2,
    label: 'Cohort 2',
    description:
      'A diverse batch of learners placed across consulting, development, and admin roles.',
    students: [
      {
        name: 'Bhagyashree Sharma',
        role: 'Salesforce Admin',
        company: 'Vanshiv',
        delay: '900',
        image: '/elevate/c1/bhagyashree_sharma.png',
      },
      {
        name: 'Bhaves Chopra',
        role: 'Salesforce Consultant',
        company: 'Vanshiv',
        delay: '1200',
        image: '/elevate/c1/bhaves_chopra.png',
      },
      {
        name: 'Jhilmil Sharma',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        delay: '1500',
        image: '/elevate/c1/jhilmil_sharma.png',
      },
      {
        name: 'Komal Sadhwani',
        role: 'Salesforce Developer',
        company: 'Bot Consulting',
        delay: '2400',
        image: '/elevate/c1/komal_sadhwani.png',
      },
      {
        name: 'Keshav',
        role: 'Salesforce Consultant',
        company: 'Zordial Technologies',
        delay: '2100',
        image: '/elevate/c1/Keshav.png',
      },
      {
        name: 'Arpit',
        role: 'Salesforce Developer',
        company: 'Zordial Technologies',
        delay: '600',
        image: '/elevate/c1/Arpit.png',
      },
      {
        name: 'Neeraj',
        role: 'Salesforce Admin',
        company: 'Zordial Technologies',
        delay: '2700',
        image: '/elevate/c1/Neeraj.png',
      },
      {
        name: 'Prathibha',
        role: 'Salesforce Consultant',
        company: 'Zordial Technologies',
        delay: '3000',
        image: '/elevate/c1/Prathibha.png',
      },
      {
        name: 'Kartikey',
        role: 'Salesforce Admin',
        company: 'IBirds Software Services',
        delay: '1800',
        image: '/elevate/c1/Kartikey.png',
      },
      {
        name: 'Tanishk',
        role: 'Salesforce Developer',
        company: 'SP Tech',
        delay: '3300',
        image: '/elevate/c1/Tanishk.png',
      },
    ],
  },
  {
    id: 3,
    label: 'Cohort 3',
    description:
      'Recent cohort focusing on hands-on Salesforce projects and real-time client simulations.',
    students: [
      {
        name: 'Bhavya Modi',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        image: '/elevate/c3/Bhavya.webp',
      },
      {
        name: 'Nikita Gaur',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        image: '/elevate/c3/Nikita.webp',
      },
      {
        name: 'Ayush Shrivastava',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        image: '/elevate/c3/Ayush.webp',
      },
      {
        name: 'Akshat Mittal',
        role: 'Salesforce Developer',
        company: 'Saasverse',
        image: '/elevate/c3/Akshat.jpg',
      },
      {
        name: 'Anurag Tiwari',
        role: 'Salesforce Developer',
        company: 'SP Tech',
        image: '/elevate/c3/Anurag.jpg',
      },
      {
        name: 'Swapnil Singhal',
        role: 'Salesforce Developer',
        company: 'SP Tech',
        image: '/elevate/c3/Swapnil.jpg',
      },
      {
        name: 'Chetan Rawat',
        role: 'Salesforce Developer',
        company: 'SP Tech',
        image: '/elevate/c3/Chetan.jpg',
      },
      {
        name: 'Krishna Kant Jangir',
        role: 'Salesforce Developer',
        company: '360 degree',
        image: '/elevate/c3/Krishna kant.jpg',
      },
      {
        name: 'Rahul Tanwar',
        role: 'Salesforce Developer',
        company: 'Zordial Technologies',
        image: '/elevate/c3/Rahul.jpg',
      },
      {
        name: 'Gopal Prajapat',
        role: 'Salesforce Developer',
        company: 'AVR Software',
        image: '/elevate/c3/gopal.jpg',
      },
    ],
  },
  {
    id: 4,
    label: 'Cohort 4',
    description:
      'Advanced learners ready for full-cycle implementation and integration projects.',
    students: [
      {
        name: 'Priyanshi Agarwal',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        image: '/elevate/c4/Priyanshi.jpg',
      },
      {
        name: 'Mohit Jain',
        role: 'Salesforce Developer',
        company: 'Deloitte',
        image: '/elevate/c4/mohitjain.jpg',
      },
    ],
  },
  {
    id: 5,
    label: 'Cohort 5',
    description:
      'Our newest cohort blending technical depth with placement-ready soft skills.',
    students: [
      {
        name: 'Aarush Pareek',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        image: '/elevate/c5/AarushPareek.jpeg',
      },
      {
        name: 'Anjesh Jain',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        image: '/elevate/c5/AnjeshJain.jpeg',
      },
      {
        name: 'Himanshu Giri',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        image: '/elevate/c5/HimanshuGiri.jpeg',
      },
      {
        name: 'Shubham Shubhash Naik',
        role: 'Salesforce Developer',
        company: 'Vanshiv',
        image: '/elevate/c5/Shubham Shubhash Naik.jpeg',
      },
    ],
  },
]

export const techElevateAdmissions = {
  title: 'Get Started with Salesforce Like a Pro',
  description:
    'Limited seats are available for the upcoming batch. Share your details below to book your counseling session.',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDH-fSlYzKMlHycEgBZ4aVdzx_cVPVwU2tWPuq6TQ0i52WICaX2zFLFMp2V4rqRJPDiVvVi04BAzwBnpONi9258W8pFWZJdUz5GVb12gcNovp-pJ_-Bny_mJXtc1LrVEq9VNVjNrLMzX_tonrPjbsbwOPM0Ch7jXJaAYe7mjtScAZtL9oVjF4R1hnSWk2kJGXjkQmVGih7IH3gxksHxC6WUf_833oWDJcvyBQp4eNRc0Tc_3_ZrMvJm_2PxS28LUwd3rjiaUZQ8Dsc',
}
