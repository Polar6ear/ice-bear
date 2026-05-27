export const site = {
  name: "Ice Bear's Iceberg",
  tagline: "A portfolio for Nitin Negi",
  description:
    "A cartoon iceberg full of full-stack work, writing, and videos. Portfolio of Nitin Negi — software engineer at Sonoka.asia. Spirit animal: Ice Bear.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://icebear.dev",
  locale: "en_US",
  author: {
    name: "Nitin Negi",
    handle: "Ice Bear",
    role: "Software Engineer · Sonoka.asia",
    email: "neuralnitin@gmail.com",
    phone: "+91 95576 28010",
    linkedin: "https://linkedin.com/in/neural-nitin",
    leetcode: "https://leetcode.com/u/neuron_nitin",
    resume: "/resume/Nitin_Negi_Resume.pdf",
  },
  defaultOgImage: "/og/default.png",
} as const;

export type Site = typeof site;
