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
      <AmbientBackground />
      <Header />
      {children}
      <RelatedPages />
      <Footer />
      {showFab && <WhatsAppFab />}
    </>
  );
}
