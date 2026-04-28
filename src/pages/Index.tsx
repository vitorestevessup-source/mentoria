import { TopBar } from "@/components/landing/TopBar";
import { Marquee } from "@/components/landing/Marquee";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { SocialProof } from "@/components/landing/SocialProof";
import { Method } from "@/components/landing/Method";
import { LiveSession } from "@/components/landing/LiveSession";
import { About } from "@/components/landing/About";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { MidCta } from "@/components/landing/MidCta";

const Index = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Hero />
      <Marquee items={[
        "Método validado",
        "Suporte ao vivo semanal",
        "+350 alunos",
        "Acesso vitalício",
        "Garantia 7 dias",
        "Comece do zero",
      ]} />
      <Stats />
      <SocialProof />
      <About />
      <Method />
      <LiveSession />
      <MidCta />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
