import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageJsonLd from "@/components/seo/PageJsonLd";
import RelatedPages from "@/components/seo/RelatedPages";

interface SiteShellProps {
  children: React.ReactNode;
  showFab?: boolean;
}

export default function SiteShell({ children, showFab = true }: SiteShellProps) {
  return (
    <>
      <PageJsonLd />
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <AmbientBackground />
      <Header />
      <div id="contenu">{children}</div>
      <RelatedPages />
      <Footer />
      {showFab && <WhatsAppFab />}
    </>
  );
}
