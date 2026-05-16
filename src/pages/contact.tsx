import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Nav />
      <Contact />
      <Footer />
    </main>
  );
}
