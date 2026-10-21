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
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Aller au contenu
      </a>
      <AmbientBackground />
      <Header />
      {children}
      <RelatedPages />
      <Footer />
      {showFab && <WhatsAppFab />}
    </>
  );
}
