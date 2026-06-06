import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsAppFab";

interface SiteShellProps {
  children: React.ReactNode;
  showFab?: boolean;
}

export default function SiteShell({ children, showFab = true }: SiteShellProps) {
  return (
    <>
      <AmbientBackground />
      <Header />
      {children}
      <Footer />
      {showFab && <WhatsAppFab />}
    </>
  );
}
