/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import imgCabana1 from "../assets/img/cabana-1.jpg";
import imgCabana2 from "../assets/img/cabana-2.jpg";
import imgCabana3 from "../assets/img/cabana-3.jpeg";
import imgCabanasEquipadas from "../assets/img/cabanias-equipadas.jpg";
import imgEcoSostenible from "../assets/img/eco-sostenible.jpeg";
import imgEntornoNatural from "../assets/img/entorno-natural.jpg";
import imgFogatas from "../assets/img/fogatas-areas-aire-libre.jpeg";
import imgInternet from "../assets/img/internet-alta-velocidad.jpg";
import imgLogo from "../assets/img/logo.png";
import imgRestaurante from "../assets/img/restaurante-bar.jpg";
import imgRestauranteBanner from "../assets/img/restaurante-banner-main.jpg";
import imgServicioPersonalizado from "../assets/img/servicio-personalizado.jpeg";
import imgAventura from "../assets/img/aventura.png";
import imgBanner from "../assets/img/banner.jpg";
import imgServicioPersonalizado1 from "../assets/img/servicio_personalizado_1.jpg";
import imgServicioPersonalizado2 from "../assets/img/servicio_personalizado_2.jpg";
import imgServicioPersonalizado3 from "../assets/img/servicio_personalizado_3.jpg";
import imgServicioPersonalizado4 from "../assets/img/servicio_personalizado_4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Villa Alpina Oxapampa | Cabañas en la selva alta" },
      {
        name: "description",
        content:
          "Hospedaje boutique estilo alpino en Oxapampa, Perú. Cabañas equipadas, restaurante orgánico y experiencias en la naturaleza.",
      },
      { property: "og:title", content: "Villa Alpina Oxapampa" },
      {
        property: "og:description",
        content:
          "Refugio entre montañas y bosque nublado. Reserva tu escape en Villa Alpina.",
      },
    ],
  }),
  component: Index,
});

/* ---------- DATA ---------- */

const cabanas = [
  {
    name: "Cabaña #1",
    capacity: "3 personas",
    desc: "Nuestra cabaña alpina combina un diseño moderno con el encanto rústico. Con dos pisos y un ambiente acogedor, ofrece todas las comodidades del hogar, rodeada de la tranquilidad de la naturaleza.",
    tag: "Romántica",
    img: imgCabana1,
  },
  {
    name: "Cabaña #2",
    capacity: "7 personas",
    desc: "Nuestra cabaña alpina #2 tiene un diseño vanguardista y único que te hará sentir como en casa, permitiéndote desconectar del caos de la ciudad. ",
    tag: "Familiar",
    img: imgCabana2,
  },
  {
    name: "Cabaña #3",
    capacity: "4 personas",
    desc: "Nuestra cabaña alpina combina un diseño moderno con el encanto rústico. Con dos pisos y un ambiente acogedor, ofrece todas las comodidades del hogar, rodeada de la tranquilidad de la naturaleza.",
    tag: "Pet Friendly",
    img: imgCabana3,
  },
];

const servicios = [
  { icon: "🌄", title: "Entorno natural", desc: "Montañas y bosque nublado privilegiados.", img: imgEntornoNatural },
  { icon: "🏡", title: "Cabañas equipadas", desc: "Estilo alpino, totalmente confortables.", img: imgCabanasEquipadas },
  { icon: "🔥", title: "Fogatas y áreas al aire libre", desc: "Espacios para desconectar.", img: imgFogatas },
  { icon: "🍽️", title: "Restaurante-bar", desc: "Carta variada con huerto propio orgánico.", img: imgRestaurante },
  { icon: "🚴", title: "Aventura", desc: "Caminatas, cuatrimotos, ciclismo y exploración.", img: imgAventura },
  { icon: "📶", title: "Internet alta velocidad", desc: "Pensado para el viajero remoto.", img: imgInternet },
  { icon: "🌱", title: "Eco-sostenible", desc: "Energía solar y biodigestores.", img: imgEcoSostenible },
  { icon: "🛎️", title: "Servicio personalizado", desc: "Hospitalidad peruana auténtica.", img: imgServicioPersonalizado },
];

const testimonios = [
  { name: "Emanuele E.", text: "Tuvimos una experiencia increíble en este lugar. Desde que llegamos, nos hicieron sentir súper bienvenidos y la atención fue realmente de primera: todo el personal fue muy amable, atento y cálido con nosotros.", rating: 5, location: "Lima, Perú" },
  { name: "Francesca.", text: "Totalmente recomendado! Las cabañas son preciosas, el paisaje es espectacular y Pierina y Miguel son muy atentos! Además el lugar es seguro y muy tranquilo. Excelente elección, espero volver muy pronto!", rating: 5, location: "Lima, Perú" },
  { name: "Diana R.", text: "Me encantó la experiencia! La villa es hermosa, cuenta con todo lo que necesitamos para nuestra estadía. Miguel y Pierina están en todo momento dispuestos a ayudarnos! Recomiendo mil este lugar! Espero volver pronto!", rating: 5, location: "Lima, Perú" },
  { name: "Isaias G.", text: "Uno de los mejores (Por no decir el mejor) hotel de Oxapampa, muy recomendado para todos :) .", rating: 5, location: "Cusco, Perú" },
  { name: "Natalia J.", text: "Como en casa, desde que entras te hacen sentir como en casa, todos muy amables. Miguel, Pierina y Víctor muy atentos y amables. La cabaña muy hermosa y sobre todo muy limpia. Definitivamente recomendada! , y por supuesto que planeamos volver🥰. Muchas gracias por todo❤️.", rating: 5, location: "Huancayo, Perú" },
];

const menu = {
  Desayunos: [
    { name: "Regional", desc: "Huevos fritos con cecina o chorizo artesanales, acompañados de yuca frita, plátano frito y tostada con mermelada, jugo de frutas y café de la zona.", price: "S/. 24" },
    { name: "Provenzal", desc: "Omelette de verduras relleno de queso y coronado con rodajas de palta, pan, jugo de frutas y café de la zona.", price: "S/. 21" },
    { name: "Fit", desc: "Ensalada de frutas, huevo revuelto, palta orgánica, pan y café de la zona.", price: "S/. 18" },
  ],
  Sandwiches: [
    { name: "Sandwich de pechuga de pollo a la plancha", desc: "Servido con lechuga y tomate.", price: "S/. 12" },
    { name: "Sandwich mixto caliente", desc: "Pan de molde con jamón y queso edam. + huevo (S/. 2.00)", price: "S/. 8" },
    { name: "Sandwich de pollo deshilachado", desc: "Con lechuga, mayonesa y papas al hilo.", price: "S/. 10" },
    { name: "Empanada de carne", desc: "", price: "S/. 9" },
  ],
  Hamburguesas: [
    { name: "Villa Alpina", desc: "Hamburguesa artesanal con 180 g de carne vacuna, lechuga, tomate, pepinillo, tocino y queso cheddar. Servida con papas amarillas fritas.", price: "S/. 24" },
    { name: "Cheeseburger tradicional", desc: "Hamburguesa artesanal con 180 g de carne vacuna, lechuga, tomate y doble queso cheddar. Servida con papas amarillas fritas.", price: "S/. 21" },
  ],
  Piqueos: [
    { name: "Tequeños de lomo saltado (6 unidades)", desc: "Servidos con salsa huancaína.", price: "S/. 14" },
    { name: "Tequeños de lomo saltado (12 unidades)", desc: "Servidos con salsa huancaína.", price: "S/. 26" },
    { name: "Alitas BBQ o acevichadas (6 unidades)", desc: "Servidas con papas amarillas fritas.", price: "S/. 20" },
    { name: "Alitas BBQ o acevichadas (12 unidades)", desc: "Servidas con papas amarillas fritas.", price: "S/. 38" },
    { name: "Chicharrón de pollo", desc: "Servido con papas fritas.", price: "S/. 26" },
  ],
  "Platos a la carta": [
    { name: "Lomo saltado", desc: "", price: "S/. 32" },
    { name: "Chaufa regional", desc: "Con chorizo y cecina artesanales.", price: "S/. 31" },
    { name: "Pechuga de pollo a la plancha", desc: "Servida con arroz y ensalada fresca.", price: "S/. 29" },
    { name: "Fetuccini al pesto con milanesa de pollo al panko", desc: "", price: "S/. 33" },
    { name: "Sopa casera de pollo", desc: "", price: "S/. 18" },
  ],
  "Bebidas frías": [
    { name: "Cerveza Dorcher (artesanal)", desc: "Cranberry / Radler (limón).", price: "S/. 12" },
    { name: "Pilsen 305 ml", desc: "", price: "S/. 7" },
    { name: "Cusqueña 305 ml", desc: "", price: "S/. 8" },
    { name: "Gaseosas medianas", desc: "", price: "S/. 3" },
    { name: "Agua Cielo 625 ml", desc: "", price: "S/. 2.50" },
    { name: "Jugos de fruta", desc: "", price: "S/. 8" },
  ],
  Cócteles: [
    { name: "Pisco sour Villa Alpina", desc: "Hecho con limones orgánicos de nuestro huerto.", price: "S/. 22" },
    { name: "Maracuyá sour", desc: "", price: "S/. 23" },
    { name: "Chilcano clásico", desc: "", price: "S/. 18" },
    { name: "Chilcano de maracuyá", desc: "", price: "S/. 19" },
    { name: "Cuba libre", desc: "", price: "S/. 17" },
    { name: "Jack & Coke", desc: "Whiskey Jack Daniels y Coca Cola.", price: "S/. 24" },
  ],
  "Bebidas calientes": [
    { name: "Café americano", desc: "", price: "S/. 7" },
    { name: "Infusiones naturales", desc: "Anís, manzanilla, flor de jamaica.", price: "S/. 5" },
  ],
  "Vinos en botella": [
    { name: "Frontera", desc: "", price: "S/. 50" },
    { name: "Casillero del Diablo", desc: "Preguntar por cepas disponibles.", price: "S/. 75" },
  ],
};

const menuNota = "NOTA: Nuestros cócteles en base a pisco son elaborados con Pisco La Caravedo by Porton y nuestros cócteles en base a ron son elaborados con Ron Bacardi.";

const serviciosPersonalizados = [
  { name: "Servicio de fogata", description: "Incluye leña y encendido", price: "S/ 35" },
  { name: "Servicio de parrilla", description: "Incluye alquiler de la parrilla, set de utensilios parrilleros, tabla de picar, mesa y sillas outdoor", price: "S/ 50" },
  { name: "Tour en cuatrimoto", description: "(Turno mañana o tarde) Tour guiado de aproximadamente 2 horas, que recorre la hacienda Yanachaga (incluye tour interno), visita a la plaza de armas en Huancabamba, bosque de pinos y puentes colgantes. Incluye fotos y videos", price: "S/ 100 por persona" },
  { name: "Alquiler de bicicletas montañeras", description: "Alquiler de las bicicletas para uso dentro del lodge y alrededores", price: "Medio día – S/.45\nFull day – S/.90" },
  { name: "Restaurante-Bar", description: "Servicio en salón o en la cabaña de 8 a.m. a 10 p.m.", price: "Consultar carta" },
  { name: "Venta de productos de higiene personal", description: "Repelente, cepillo de dientes de bambú, pasta dental, pastillas para gripe, alergia o dolor de cabeza.", price: "Consultar precios" },
];

const imagenesServicioPersonalizado = [
  imgServicioPersonalizado1,
  imgServicioPersonalizado2,
  imgServicioPersonalizado3,
  imgServicioPersonalizado4,
];

/* ---------- COMPONENT ---------- */

function Index() {
  const [reserva, setReserva] = useState({
    nombre: "",
    email: "",
    telefono: "",
    cabana: "",
    checkin: "",
    checkout: "",
    adultos: 2,
    ninos: 0,
    mascotas: 0,
    infantes: 0,
    mensaje: "",
  })
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "bd7a4db8-b458-40fb-b908-fde192e38e08");
    formData.append("subject", "Nueva solicitud de reserva - Villa Alpina");
    formData.append("name", reserva.nombre);
    formData.append("email", reserva.email);
    formData.append("phone", reserva.telefono);
    formData.append("cabin", reserva.cabana);
    formData.append("check_in", reserva.checkin);
    formData.append("check_out", reserva.checkout);
    formData.append("adults", String(reserva.adultos));
    formData.append("children", String(reserva.ninos));
    formData.append("pets", String(reserva.mascotas));
    formData.append("infants", String(reserva.infantes));
    formData.append("message", reserva.mensaje || "Sin mensaje adicional");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "No se pudo enviar la solicitud");
      }

      setEnviado(true);
      setTimeout(() => setEnviado(false), 5000);
    } catch (error) {
      console.error("Error al enviar la solicitud de reserva:", error);
      setEnviado(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Cabanas />
      <Servicios />
      <Testimonios />
      <Restaurante />
      <Reservas
        reserva={reserva}
        setReserva={setReserva}
        onSubmit={handleSubmit}
        enviado={enviado}
      />
      <Footer />
    </div>
  );
}

/* ---------- SECTIONS ---------- */

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          {/* [LOGO PLACEHOLDER] */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg">
            {/*LOGO DE VILLA ALPINA REDONDEADO.*/}
            <img src={imgLogo} alt="Logo" className="h-full w-full object-contain" style={{ borderRadius: "50%" }} />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">
            Villa Alpina
          </span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#home" className="transition-colors hover:text-accent">Inicio</a>
          <a href="#cabanas" className="transition-colors hover:text-accent">Cabañas</a>
          <a href="#servicios" className="transition-colors hover:text-accent">Servicios</a>
          <a href="#restaurante" className="transition-colors hover:text-accent">Restaurante</a>
          <a href="#reservas" className="transition-colors hover:text-accent">Reservas</a>
        </nav>
        <a
          href="#reservas"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground shadow-soft transition-transform hover:scale-105 md:inline-block"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* [IMAGEN HERO PLACEHOLDER - paisaje selva alta Oxapampa.] */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-moss to-bark">
        <div className="absolute inset-0 flex items-center justify-center text-cream/30 text-sm font-mono">
          <img
            src={imgBanner}
            alt="Imagen de fondo · paisaje villa alpina."
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cream/80">
          Oxapampa · Perú
        </p>
        <h1 className="text-accent font-display text-5xl font-medium leading-tight md:text-7xl lg:text-8xl">
          Bienvenidos a <em className="text-accent not-italic">Villa Alpina</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/90 md:text-lg">
          Donde la selva alta y la tradición europea se encuentran. Un refugio
          diseñado para desconectarse, respirar naturaleza y vivir una experiencia
          auténtica a 25 minutos de Oxapampa.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#reservas"
            className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-accent-foreground shadow-soft transition-transform hover:scale-105"
          >
            Reservar estadía
          </a>
          <a
            href="#cabanas"
            className="rounded-full border border-cream/40 bg-cream/10 px-8 py-3 text-sm font-medium text-cream backdrop-blur transition-colors hover:bg-cream/20"
          >
            Ver cabañas
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-xs">
        ↓ descubre más
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Nuestra esencia</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
            Vives la naturaleza, reconectas contigo mismo.
          </h2>
        </div>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Rodeada de montañas, aire puro y paisajes de ensueño, Villa Alpina
            combina el encanto de la arquitectura alpina con la calidez de la
            hospitalidad peruana. Inspirada en los colonos austro-alemanes que
            fundaron la región, cada espacio refleja tranquilidad y confort.
          </p>
          <p>
            Cada amanecer trae la neblina suave de la selva alta y cada atardecer
            regala vistas inolvidables. Nuestras cabañas ofrecen privacidad,
            comodidad y vistas a jardines y montañas — el escenario perfecto para
            el descanso.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Misión",
            text: "Ofrecer una experiencia única donde la tranquilidad de la naturaleza convive con las comodidades de un espacio moderno y un servicio personalizado.",
          },
          {
            title: "Visión",
            text: "Ser un modelo ejemplar de autosostenibilidad mediante tecnologías eco-amigables, biohuerto propio, paneles solares y biodigestores.",
          },
          {
            title: "Valores",
            text: "Auténticos, hospitalarios, eco-sostenibles y en evolución constante. Fieles al origen, impulsando el futuro de la hospitalidad.",
          },
        ].map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-card"
          >
            <h3 className="font-display text-2xl text-primary">{b.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cabanas() {
  return (
    <section id="cabanas" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Hospedaje</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
              Cabañas estilo alpino
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada cabaña está pensada para ofrecer privacidad, confort y una
              experiencia única con vista a jardines y montañas.
            </p>
          </div>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <span>← desliza →</span>
          </div>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:thin]">
          {cabanas.map((c) => (
            <article
              key={c.name}
              className="group relative w-[85vw] shrink-0 snap-center overflow-hidden rounded-3xl bg-card shadow-card transition-transform hover:-translate-y-1 sm:w-[420px]"
            >
              {/* [IMAGEN CABAÑA PLACEHOLDER] */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-moss via-forest to-bark">
                <div className="absolute inset-0 flex items-center justify-center text-cream/40 text-xs font-mono">
                  <img src={c.img} alt={c.name} className="h-full w-full object-cover" />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-medium text-primary">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.capacity}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
                <a
                  href="#reservas"
                  className="mt-5 inline-block text-sm font-medium text-accent transition-colors hover:text-primary"
                >
                  Reservar esta cabaña →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  const [servicioPersonalizadoAbierto, setServicioPersonalizadoAbierto] = useState(false);

  return (
    <>
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-14 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Experiencia</p>
        <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
          Servicios y experiencias que te esperan
        </h2>
        <p className="mt-4 text-muted-foreground">
          En Villa Alpina, no solo te hospedas: vives la naturaleza,
          desconectas del ruido y reconectas contigo mismo.
        </p>
      </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s) => (
            <button
              key={s.title}
              type="button"
              onClick={() => s.title === "Servicio personalizado" && setServicioPersonalizadoAbierto(true)}
              className="group overflow-hidden rounded-3xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-haspopup={s.title === "Servicio personalizado" ? "dialog" : undefined}
            >
            {/* [IMAGEN SERVICIO PLACEHOLDER.] */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-moss/30 via-forest/20 to-bark/30">
              <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-muted-foreground/50">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover object-center" />
              </div>
              {s.title === "Servicio personalizado" && (
                <span className="absolute bottom-3 right-3 rounded-full bg-primary/90 px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  Ver más
                </span>
              )}
            </div>
              <div className="p-6">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-3 font-display text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Dialog open={servicioPersonalizadoAbierto} onOpenChange={setServicioPersonalizadoAbierto}>
        <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto p-0">
          <div className="grid md:grid-cols-[minmax(280px,0.9fr)_1.1fr]">
            <div className="h-72 overflow-hidden bg-primary md:h-[680px]">
              <Carousel className="h-72 md:h-[680px]" opts={{ loop: true }}>
                <CarouselContent className="ml-0 h-72 md:h-[680px]">
                {imagenesServicioPersonalizado.map((imagen, index) => (
                  <CarouselItem key={imagen} className="flex h-72 basis-full pl-0 md:h-[680px]">
                    <img
                      src={imagen}
                      alt={`Servicio personalizado, imagen ${index + 1}`}
                      className="block h-72 w-full object-cover object-center md:h-[680px]"
                    />
                  </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 border-primary-foreground/40 bg-primary/70 text-primary-foreground hover:bg-primary" />
                <CarouselNext className="right-4 border-primary-foreground/40 bg-primary/70 text-primary-foreground hover:bg-primary" />
              </Carousel>
            </div>

            <div className="p-6 sm:p-8">
              <DialogTitle className="font-display text-3xl text-primary">Servicio personalizado</DialogTitle>
              <DialogDescription className="mt-4 text-sm leading-relaxed text-foreground">
                Gracias por elegir Villa Alpina para tu estadía en Oxapampa. Además de nuestras acogedoras cabañas, ofrecemos los siguientes servicios adicionales para hacer tu visita aún más especial.
              </DialogDescription>
              <div className="mt-6 overflow-hidden rounded-lg border border-border">
                <div className="grid grid-cols-[1fr_1.5fr_0.8fr] gap-3 bg-muted px-3 py-3 text-xs font-semibold uppercase tracking-wide text-primary sm:px-4">
                  <span>Servicio</span>
                  <span>Descripción</span>
                  <span>Precio</span>
                </div>
                {serviciosPersonalizados.map((servicio) => (
                  <div key={servicio.name} className="grid grid-cols-[1fr_1.5fr_0.8fr] gap-3 border-t border-border px-3 py-3 text-xs leading-relaxed sm:px-4 sm:text-sm">
                    <span className="font-medium text-primary">{servicio.name}</span>
                    <span className="whitespace-pre-line text-muted-foreground">{servicio.description}</span>
                    <span className="whitespace-pre-line font-medium text-accent">{servicio.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Para reservas o más información, envíe un mensaje de WhatsApp al{" "}
                <a href="https://wa.me/51991995618" target="_blank" rel="noreferrer" className="font-semibold text-accent underline underline-offset-4">
                  991995618
                </a>.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Restaurante() {
  return (
    <section id="restaurante" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Restaurante & Bar</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
              Del huerto a tu mesa
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/80">
              Carta variada y saludable. Muchos de nuestros insumos provienen de
              nuestro propio huerto 100% orgánico, en un ambiente acogedor con
              vista a las montañas.
            </p>
          </div>
          {/* [IMAGEN RESTAURANTE PLACEHOLDER] */}
          <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-bark to-moss md:h-80">
            <div className="absolute inset-0 flex items-center justify-center text-cream/50 text-xs font-mono">
                <img src={imgRestauranteBanner} alt="Restaurante" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {Object.entries(menu).map(([categoria, items]) => (
            <div key={categoria}>
              <h3 className="mb-6 flex items-baseline gap-4 font-display text-2xl text-accent">
                {categoria}
                <span className="h-px flex-1 bg-primary-foreground/20" />
              </h3>
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.name} className="flex gap-6">
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-medium text-primary-foreground">
                          {item.name}
                        </h4>
                        <span className="text-sm text-accent">{item.price}</span>
                      </div>
                      <p className="mt-1 text-sm text-primary-foreground/70">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-primary-foreground/70">{menuNota}</p>
      </div>
    </section>
  );
}

interface ReservasProps {
  reserva: {
    nombre: string;
    email: string;
    telefono: string;
    cabana: string;
    checkin: string;
    checkout: string;
    adultos: number;
    ninos: number;
    mascotas: number;
    infantes: number;
    mensaje: string;
  };
  setReserva: React.Dispatch<React.SetStateAction<ReservasProps["reserva"]>>;
  onSubmit: (e: React.FormEvent) => void;
  enviado: boolean;
}

function Reservas({ reserva, setReserva, onSubmit, enviado }: ReservasProps) {
  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  const labelClass = "mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground";

  return (
    <section id="reservas" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Reservas</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
            Asegura tu refugio en Villa Alpina
          </h2>
          <p className="mt-4 text-muted-foreground">
            Completa el formulario y nuestro equipo te confirmará disponibilidad
            por correo o WhatsApp en menos de 24 horas.
          </p>

          <div className="mt-10 space-y-4 rounded-2xl border border-border bg-secondary/50 p-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Ubicación</p>
              <p className="mt-1 text-sm">Carretera a Huancabamba S/N (A 25 minutos del centro de Oxapampa, Pasco — Perú)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Check-in / Check-out</p>
              <p className="mt-1 text-sm">03:00 pm · 11:00 am</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Contacto</p>
              <p className="mt-1 text-sm">corporacionvillaalpina@outlook.com · WhatsApp: +51 991 995 618</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelClass}>Nombre completo</label>
              <input
                required
                type="text"
                value={reserva.nombre}
                onChange={(e) => setReserva((r) => ({ ...r, nombre: e.target.value }))}
                className={inputClass}
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input
                required
                type="email"
                value={reserva.email}
                onChange={(e) => setReserva((r) => ({ ...r, email: e.target.value }))}
                className={inputClass}
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className={labelClass}>Teléfono</label>
              <input
                required
                type="tel"
                value={reserva.telefono}
                onChange={(e) => setReserva((r) => ({ ...r, telefono: e.target.value }))}
                className={inputClass}
                placeholder="+51 999 999 999"
              />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass}>Cabaña preferida</label>
              <select
                required
                value={reserva.cabana}
                onChange={(e) => setReserva((r) => ({ ...r, cabana: e.target.value }))}
                className={inputClass}
              >
                <option value="">Selecciona una cabaña</option>
                {cabanas.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name} — {c.capacity}
                  </option>
                ))}
                <option value="sin-preferencia">Sin preferencia / recomiéndame</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Check-in</label>
              <input
                required
                type="date"
                value={reserva.checkin}
                onChange={(e) => setReserva((r) => ({ ...r, checkin: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Check-out</label>
              <input
                required
                type="date"
                value={reserva.checkout}
                onChange={(e) => setReserva((r) => ({ ...r, checkout: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Adultos</label>
              <input
                required
                type="number"
                min={1}
                max={12}
                value={reserva.adultos}
                onChange={(e) => setReserva((r) => ({ ...r, adultos: Number(e.target.value) }))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Niños</label>
              <input
                type="number"
                min={0}
                max={10}
                value={reserva.ninos}
                onChange={(e) => setReserva((r) => ({ ...r, ninos: Number(e.target.value) }))}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Mascotas</label>
              <input
                type="number"
                min={0}
                max={5}
                value={reserva.mascotas}
                onChange={(e) => setReserva((r) => ({ ...r, mascotas: Number(e.target.value) }))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Infantes</label>
              <input
                type="number"
                min={0}
                max={5}
                value={reserva.infantes}
                onChange={(e) => setReserva((r) => ({ ...r, infantes: Number(e.target.value) }))}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass}>Mensaje (opcional)</label>
              <textarea
                rows={4}
                value={reserva.mensaje}
                onChange={(e) => setReserva((r) => ({ ...r, mensaje: e.target.value }))}
                className={inputClass}
                placeholder="Requerimientos especiales, alergias, celebraciones..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-foreground shadow-soft transition-transform hover:scale-[1.01]"
          >
            Solicitar reserva
          </button>

          {enviado && (
            <p className="mt-4 text-center text-sm text-moss">
              ✓ ¡Solicitud enviada! Te contactaremos pronto.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg">
              <img src={imgLogo} alt="Logo" className="h-full w-full object-cover" style={{ borderRadius: "50%" }} />
            </div>
            <span className="font-display text-xl">Villa Alpina</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Refugio alpino en la selva alta de Oxapampa. Naturaleza, gastronomía
            orgánica y hospitalidad peruana.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base text-primary">Explora</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#cabanas" className="hover:text-accent">Cabañas</a></li>
            <li><a href="#servicios" className="hover:text-accent">Servicios</a></li>
            <li><a href="#restaurante" className="hover:text-accent">Restaurante</a></li>
            <li><a href="#reservas" className="hover:text-accent">Reservas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base text-primary">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Oxapampa, Pasco — Perú</li>
            <li>corporacionvillaalpina@outlook.com</li>
            <li>WhatsApp: +51 991 995 618</li>
            <li><a href="https://www.instagram.com/villaalpinaoxapampa/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Instagram</a></li>
            <li><a href="https://www.facebook.com/p/Villa-Alpina-Oxapampa-61559405715784/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Facebook</a></li>
            <li><a href="https://www.airbnb.com.pe/rooms/1127824197339076737?source_impression_id=p3_1787854989_P3-R3yCjpwMcO1tf" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Airbnb</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Villa Alpina Oxapampa. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function Testimonios() {
  return (
    <section id="testimonios" className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Opiniones</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
            Lo que dicen nuestros huéspedes
          </h2>
        </div>
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:thin]">
          {testimonios.map((t) => (
            <article
              key={t.name}
              className="w-[85vw] shrink-0 snap-center rounded-3xl bg-card p-8 shadow-card sm:w-[380px]"
            >
              <div className="flex gap-1 text-accent">
                {"★".repeat(t.rating)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                “{t.text}”
              </p>
              <div className="mt-6">
                <p className="font-medium text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
