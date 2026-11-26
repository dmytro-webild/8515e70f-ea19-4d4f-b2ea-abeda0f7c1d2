import HeroBadgeCentered from "@/components/sections/hero/HeroBadgeCentered";
import AboutCompareLists from "@/components/sections/about/AboutCompareLists";
import SocialProofWordmarkGrid from "@/components/sections/social-proof/SocialProofWordmarkGrid";
import MetricsDividerRow from "@/components/sections/metrics/MetricsDividerRow";
import TestimonialLogoCarousel from "@/components/sections/testimonial/TestimonialLogoCarousel";
import FaqCardGrid from "@/components/sections/faq/FaqCardGrid";
import ContactFormGlassPhoto from "@/components/sections/contact/ContactFormGlassPhoto";
import StrandField from "@/components/kit/StrandField";
import LoaderStrandRing from "@/components/loaders/LoaderStrandRing";
import { Apple, Beef, CookingPot, Croissant, Flame, Leaf, LeafyGreen, Milk, Star, Utensils, Wheat } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <StrandField

      />

      <LoaderStrandRing
        brand="BurgerCraft"
        introDelay={1.4}
      />

      <div id="hero" data-webild-section="HeroBadgeCentered" data-webild-section-id="HeroBadgeCentered-1" data-section="hero">
        <HeroBadgeCentered
          introDelay={1.4}
          badge={{
            label: "Fresco",
            text: "Ingredientes frescos todos os dias",
            href: "#about"
          }}
          title="Hamburguer artesanal feito na chapa com ingredientes frescos"
          description="Blend de carnes selecionadas, pão selado na manteiga e molhos artesanais preparados todos os dias."
          primaryButton={{
            text: "Ver cardápio",
            href: "#contact"
          }}
          secondaryButton={{
            text: "Ver endereço",
            href: "#contact"
          }}
          images={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/still-life-delicious-american-hamburger_23-2149637341.jpg",
              imageAlt: "delicious bacon cheeseburger on dark background"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/side-view-meat-burger-with-stuck-knife-with-french-fries-soups-tray_140725-13957.jpg",
              imageAlt: "double burger with melted cheese"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/delicious-grilled-cheeseburger-with-bacon_23-2151985471.jpg",
              imageAlt: "bacon cheeseburger on grill"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-delicious-burger-assortment_23-2148868205.jpg",
              imageAlt: "bacon cheeseburger with fries"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/delicious-looking-hamburger-arrangement_23-2148614065.jpg",
              imageAlt: "gourmet burger with black sesame bun"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-burger-with-eggs-vegetables-inside-round-plate_140725-11604.jpg",
              imageAlt: "burger with fried egg and lettuce"
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutCompareLists" data-webild-section-id="AboutCompareLists-1" data-section="about">
        <AboutCompareLists
          tag="Nosso diferencial"
          title="Preparo comum deixa a desejar."
          titleMuted="O sabor autêntico vem do frescor."
          otherTitle="Hamburguerias comuns"
          otherItems={[
            "Carne congelada e sem suculência",
            "Molhos industrializados cheios de conservantes",
            "Pães murchos e sem selagem adequada",
            "Ingredientes estocados por vários dias",
            "Sabor genérico sem identidade própria"
          ]}
          brandName="BurgerCraft"
          brandIcon={Flame}
          items={[
            "Carne moída diariamente no salão",
            "Molhos artesanais feitos na casa",
            "Pão fresco tostado na manteiga",
            "Vegetais orgânicos selecionados da hora",
            "Blend exclusivo grelhado na chapa quente"
          ]}
        />
      </div>

      <div id="logos" data-webild-section="SocialProofWordmarkGrid" data-webild-section-id="SocialProofWordmarkGrid-1" data-section="logos">
        <SocialProofWordmarkGrid
          title="Parceiros que abastecem nossa cozinha diariamente"
          items={[
            {
              name: "Vale Verde",
              icon: Leaf
            },
            {
              name: "Queijos Sul",
              icon: Milk
            },
            {
              name: "Padaria Vila",
              icon: Wheat
            },
            {
              name: "Horta Campo",
              icon: LeafyGreen
            },
            {
              name: "Corte Nobre",
              icon: Beef
            },
            {
              name: "Ervas Frescas",
              icon: CookingPot
            },
            {
              name: "Frutas Vale",
              icon: Apple
            },
            {
              name: "Pão Artesanal",
              icon: Croissant
            }
          ]}
        />
      </div>

      <div id="metrics" data-webild-section="MetricsDividerRow" data-webild-section-id="MetricsDividerRow-1" data-section="metrics">
        <MetricsDividerRow
          tag="Nosso padrão"
          title="Qualidade em cada detalhe"
          titleMuted="do nosso preparo."
          items={[
            {
              value: "100%",
              label: "Carne fresca moída no dia"
            },
            {
              value: "50+",
              label: "Receitas e molhos autorais"
            },
            {
              value: "10k+",
              label: "Burgers artesanais servidos"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialLogoCarousel" data-webild-section-id="TestimonialLogoCarousel-1" data-section="testimonial">
        <TestimonialLogoCarousel
          tag="Voz dos clientes"
          title="O que dizem sobre"
          titleMuted="nossos burgers"
          secondaryButton={{
            text: "Falar conosco",
            href: "#contact"
          }}
          testimonials={[
            {
              quote: "Pão macio, carne no ponto certo e bacon super crocante. Meu lugar favorito na cidade.",
              name: "Rafael Santos",
              role: "Cliente frequente",
              company: "Pinheiros",
              icon: Flame
            },
            {
              quote: "A maionese da casa é incrível e o atendimento no balcão é sempre muito rápido e atencioso.",
              name: "Tiago Martins",
              role: "Morador do bairro",
              company: "São Paulo",
              icon: Utensils
            },
            {
              quote: "O sabor do gorgonzola com a cebola caramelizada é incrível. Recomendo a todos.",
              name: "Carolina Souza",
              role: "Fã de burguer",
              company: "BurgerCraft",
              icon: Beef
            },
            {
              quote: "Ingredientes sempre frescos e selecionados. Dá para sentir a diferença no primeiro pedaço.",
              name: "Beatriz Rodrigues",
              role: "Visitante da casa",
              company: "Pinheiros",
              icon: Star
            }
          ]}
          labels={{
            previous: "Anterior",
            next: "Próximo"
          }}
        />
      </div>

      <div id="faq" data-webild-section="FaqCardGrid" data-webild-section-id="FaqCardGrid-1" data-section="faq">
        <FaqCardGrid
          tag="Tire suas dúvidas"
          title="Informações úteis"
          titleMuted="sobre a casa."
          items={[
            {
              title: "Vocês realizam entrega em domicílio?",
              description: "Atendemos presencialmente em nosso salão em Pinheiros e aceitamos pedidos para retirada direta no local."
            },
            {
              title: "Quais são os horários de funcionamento?",
              description: "Funcionamos de terça a domingo, das 18h às 23h, na Rua dos Pinheiros, 450."
            },
            {
              title: "Existem opções vegetarianas ou sem glúten?",
              description: "Servimos o Veggie Mix por R$ 34 e disponibilizamos a opção de pão sem glúten mediante solicitação."
            },
            {
              title: "É necessário fazer reserva de mesa?",
              description: "Atendemos por ordem de chegada no salão, mas aceitamos reservas prévias para grupos grandes via telefone."
            },
            {
              title: "Quais são as formas de pagamento aceitas?",
              description: "Aceitamos pagamentos em dinheiro, cartões de débito e crédito, PIX e os principais vales-refeição."
            },
            {
              title: "Como entrar em contato para eventos ou grupos?",
              description: "Você pode ligar para (11) 99876-5432 ou enviar uma mensagem para contato@burgercraft.com.br."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactFormGlassPhoto" data-webild-section-id="ContactFormGlassPhoto-1" data-section="contact">
        <ContactFormGlassPhoto
          title="Vem saborear no salão,"
          titleMuted="ou fale com nossa equipe."
          labels={{
            firstName: "Nome",
            lastName: "Sobrenome",
            email: "E-mail",
            company: "Assunto",
            message: "Sua mensagem para nós"
          }}
          placeholders={{
            firstName: "Seu nome",
            lastName: "Seu sobrenome",
            email: "contato@burgercraft.com.br",
            company: "Dúvida ou evento",
            message: "Como podemos ajudar no seu atendimento hoje?"
          }}
          primaryButton={{
            text: "Enviar mensagem"
          }}
          note="Respondemos rapidamente. Se preferir, ligue para o número (11) 99876-5432."
          successText="Obrigado! Retornaremos sua mensagem o mais rápido possível."
          imageSrc="https://img.b2bpic.net/free-photo/burger-with-usa-flag-wooden-board_23-2149897359.jpg"
          imageAlt="Burger with usa flag on wooden board"
        />
      </div>
    </>
  );
}
