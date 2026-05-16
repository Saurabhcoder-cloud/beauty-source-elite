import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Wholesale } from "@/components/site/Wholesale";

export default function WholesalePage() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Nav />
      <Wholesale />
      <Footer />
    </main>
  );
}
