import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Reviews } from "@/components/site/Reviews";
import { Hours } from "@/components/site/Hours";
import { Contact } from "@/components/site/Contact";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";
import { StickyMobileBar } from "@/components/site/StickyMobileBar";

const TITLE = "Café de Especialidad · Demo";
const DESC =
  "Café de especialidad y brunch artesanal. Disfruta de desayunos únicos en un ambiente moderno y acogedor.";
const URL = "https://cafe-especialidad-demo.vercel.app/";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Café de Especialidad",
  image: URL + "og.jpg",
  url: URL,
  telephone: "+34624537879",
  priceRange: "€€",
  servesCuisine: ["Brunch", "Specialty Coffee", "Breakfast"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Principal, 1",
    addressLocality: "Alicante",
    postalCode: "03001",
    addressCountry: "ES",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "243",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "13:00" },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: ["https://www.instagram.com/websites.agus/"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "cafetería Alicante, brunch Alicante, café de especialidad Alicante, desayunos Alicante",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#6B4F3A" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:site_name", content: "Café de Especialidad" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Hours />
        <Contact />
        <Gallery />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
