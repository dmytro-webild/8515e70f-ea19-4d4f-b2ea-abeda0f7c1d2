import { Outlet } from "react-router-dom";
import NavbarHairline from "@/components/navbars/NavbarHairline";
import FooterQuietColumns from "@/components/sections/footer/FooterQuietColumns";
import { Beef, Flame } from "lucide-react";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="glass" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarHairline
          brand="BurgerCraft"
          logoIcon={Flame}
          navItems={[
            {
              name: "Nosso Processo",
              href: "#about"
            },
            {
              name: "Qualidade",
              href: "#metrics"
            },
            {
              name: "Depoimentos",
              href: "#testimonial"
            },
            {
              name: "Dúvidas",
              href: "#faq"
            }
          ]}
          primaryButton={{
            text: "Contato",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="glass" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterQuietColumns
          brand="BurgerCraft"
          brandIcon={Beef}
          description="Hamburgueria artesanal com carne moída diariamente, pães frescos e ingredientes selecionados. O verdadeiro sabor na chapa."
          columns={[
            {
              title: "Navegação",
              items: [
                {
                  label: "Início",
                  href: "#hero"
                },
                {
                  label: "Nossa História",
                  href: "#about"
                },
                {
                  label: "Diferenciais",
                  href: "#metrics"
                },
                {
                  label: "Avaliações",
                  href: "#testimonial"
                }
              ]
            },
            {
              title: "Atendimento",
              items: [
                {
                  label: "Dúvidas Frequentes",
                  href: "#faq"
                },
                {
                  label: "Contato e Localização",
                  href: "#contact"
                },
                {
                  label: "Política de Privacidade",
                  href: "#"
                },
                {
                  label: "Termos de Uso",
                  href: "#"
                }
              ]
            },
            {
              title: "Redes Sociais",
              items: [
                {
                  label: "Instagram",
                  href: "#"
                },
                {
                  label: "Facebook",
                  href: "#"
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/5511998765432"
                }
              ]
            }
          ]}
          copyright="© 2026 BurgerCraft. Todos os direitos reservados."
        />
      </footer>
    </div>
  );
}
