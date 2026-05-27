import type { Metadata } from "next";
import { Footer } from "@/components/common/footer";
import { Hero } from "@/components/home/hero";
import { MeetSection } from "@/components/home/meet";
import { KitSection } from "@/components/home/kit";
import { ExpeditionsSection } from "@/components/home/expeditions";
import { JournalSection } from "@/components/home/journal";
import { TVSection } from "@/components/home/tv";
import { PostcardSection } from "@/components/home/postcard";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} · ${site.author.name}`,
  description: site.description,
  alternates: { canonical: site.url },
};

export default async function HomePage() {
  const posts = await getAllPosts();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.author.name,
    alternateName: site.author.handle,
    jobTitle: site.author.role,
    email: `mailto:${site.author.email}`,
    url: site.url,
    sameAs: [site.author.linkedin, site.author.leetcode],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en-US",
    author: { "@type": "Person", name: site.author.name },
  };

  return (
    <>
      <main id="top">
        <Hero />
        <MeetSection />
        <KitSection />
        <ExpeditionsSection />
        <JournalSection posts={posts} />
        <TVSection />
        <PostcardSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
