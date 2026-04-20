import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Car,
  Star,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  CheckCircle,
  Menu,
  X,
  CalendarCheck,
  Droplets,
  Shield,
  Sparkles,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowRight,
  Monitor,
  Smartphone,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    name: "Básico",
    price: "$80",
    duration: "15 min",
    color: "from-zinc-700 to-zinc-800",
    accent: "text-zinc-300",
    badge: "",
    items: ["Lavado exterior", "Enjuague de motor", "Secado a mano"],
  },
  {
    name: "Estándar",
    price: "$150",
    duration: "25 min",
    color: "from-blue-700 to-blue-900",
    accent: "text-blue-300",
    badge: "Popular",
    items: [
      "Todo lo del Básico",
      "Aspirado interior",
      "Limpieza de tablero",
      "Aroma incluido",
    ],
  },
  {
    name: "Premium",
    price: "$220",
    duration: "40 min",
    color: "from-purple-700 to-purple-900",
    accent: "text-purple-300",
    badge: "Recomendado",
    items: [
      "Todo lo del Estándar",
      "Pulido de rines",
      "Cera protectora",
      "Limpieza de vidrios",
      "Desinfección interior",
    ],
  },
  {
    name: "Detailing",
    price: "$400",
    duration: "90 min",
    color: "from-amber-700 to-amber-900",
    accent: "text-amber-300",
    badge: "Completo",
    items: [
      "Todo lo del Premium",
      "Pulido de pintura",
      "Acondicionador de piel",
      "Tratamiento de plásticos",
      "Perfume premium",
      "Revisión de pintura",
    ],
  },
];

const reviews = [
  {
    name: "Carlos M.",
    stars: 5,
    text: "Excelente servicio, dejaron mi carro como nuevo. El sistema de reservas es muy cómodo, no tuve que esperar nada.",
    time: "Hace 2 días",
    service: "Premium",
  },
  {
    name: "Ana L.",
    stars: 5,
    text: "Muy profesionales. Reservé en línea y llegué directo. Sin filas, sin esperas. Lo recomiendo totalmente.",
    time: "Hace 1 semana",
    service: "Estándar",
  },
  {
    name: "Pedro R.",
    stars: 5,
    text: "El detailing dejó mi camioneta increíble. Vale cada peso. Ya tengo mi próxima cita agendada.",
    time: "Hace 1 semana",
    service: "Detailing",
  },
];

const hours = [
  { day: "Lunes – Viernes", time: "8:00 AM – 7:00 PM" },
  { day: "Sábado", time: "8:00 AM – 6:00 PM" },
  { day: "Domingo", time: "9:00 AM – 3:00 PM" },
];

// ─── LANDING INTERNA ─────────────────────────────────────────────────────────

function LandingContent({
  isMobile,
  activeSection,
  setActiveSection,
}: {
  isMobile: boolean;
  activeSection: string;
  setActiveSection: (s: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const navLinks = ["Inicio", "Servicios", "Reservar", "Reseñas", "Contacto"];

  const times = ["9:00", "9:30", "10:00", "10:30", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
  const busyTimes = ["9:30", "11:00", "14:00"];

  return (
    <div
      className="bg-[#0a0a0a] text-white overflow-y-auto"
      style={{ fontSize: isMobile ? "11px" : "14px", height: "100%" }}
    >
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className={`flex items-center justify-between ${isMobile ? "px-3 py-2" : "px-8 py-3"}`}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center">
              <Car className={isMobile ? "w-3.5 h-3.5" : "w-4 h-4"} />
            </div>
            <span className={`font-bold ${isMobile ? "text-sm" : "text-base"}`}>
              AutoLavado<span className="text-blue-400">Express</span>
            </span>
          </div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          ) : (
            <div className="flex items-center gap-6">
              {navLinks.map((l) => (
                <button
                  key={l}
                  onClick={() => setActiveSection(l)}
                  className={`text-sm transition-colors ${activeSection === l ? "text-blue-400" : "text-zinc-400 hover:text-white"}`}
                >
                  {l}
                </button>
              ))}
              <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-4 py-1.5 rounded-lg font-semibold transition-colors">
                Reservar
              </button>
            </div>
          )}
        </div>
        {isMobile && menuOpen && (
          <div className="px-3 pb-3 flex flex-col gap-2 border-t border-white/10 pt-2">
            {navLinks.map((l) => (
              <button key={l} onClick={() => { setActiveSection(l); setMenuOpen(false); }} className="text-left text-sm text-zinc-300 py-1">
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className={`relative overflow-hidden ${isMobile ? "px-4 py-10" : "px-8 py-20"}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className={`relative ${isMobile ? "" : "max-w-2xl"}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            Reserva en línea disponible
          </div>

          <h1 className={`font-black leading-tight mb-4 ${isMobile ? "text-2xl" : "text-4xl"}`}>
            Tu auto,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              impecable
            </span>{" "}
            en minutos.
          </h1>

          <p className={`text-zinc-400 mb-6 leading-relaxed ${isMobile ? "text-xs" : "text-sm"}`}>
            Lavado profesional sin filas ni esperas. Reserva tu turno en
            segundos y llega directo al servicio.
          </p>

          <div className={`flex gap-3 flex-wrap`}>
            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
              <CalendarCheck className="w-4 h-4" />
              Reservar turno
            </button>
            <button className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-zinc-300 font-medium px-5 py-2.5 rounded-xl transition-colors text-sm">
              Ver servicios
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className={`flex gap-4 mt-6 ${isMobile ? "flex-col gap-2" : "gap-6"}`}>
            {[
              { icon: Star, label: "4.9 en Google", color: "text-amber-400" },
              { icon: Users, label: "+500 clientes", color: "text-blue-400" },
              { icon: Clock, label: "Abierto hoy", color: "text-emerald-400" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-zinc-400">
                <Icon className={`w-3.5 h-3.5 ${color}`} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className={`${isMobile ? "px-4 py-8" : "px-8 py-12"}`}>
        <div className="mb-6">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Lo que ofrecemos</p>
          <h2 className={`font-black ${isMobile ? "text-xl" : "text-2xl"}`}>Nuestros servicios</h2>
        </div>

        <div className={`grid gap-3 ${isMobile ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-4"}`}>
          {services.map((s) => (
            <div
              key={s.name}
              onClick={() => setSelectedService(selectedService === s.name ? null : s.name)}
              className={`relative rounded-xl border cursor-pointer transition-all duration-200 overflow-hidden ${
                selectedService === s.name
                  ? "border-blue-400/60 shadow-lg shadow-blue-500/10"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {s.badge && (
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded-full">
                  {s.badge}
                </div>
              )}
              <div className={`bg-gradient-to-br ${s.color} p-4`}>
                <p className={`font-black text-lg ${s.accent}`}>{s.name}</p>
                <p className="text-white text-2xl font-black">{s.price}</p>
                <p className="text-white/60 text-xs">{s.duration}</p>
              </div>
              <div className="bg-zinc-900 p-3 space-y-1.5">
                {s.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
                <button className="w-full mt-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 rounded-lg transition-colors">
                  Reservar este →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVAR */}
      <section className={`${isMobile ? "px-4 py-8" : "px-8 py-12"} bg-zinc-900/50`}>
        <div className="mb-6">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Sin filas</p>
          <h2 className={`font-black ${isMobile ? "text-xl" : "text-2xl"}`}>Agenda tu turno</h2>
        </div>

        <div className={`${isMobile ? "" : "max-w-lg"} bg-zinc-900 border border-white/10 rounded-2xl p-5 space-y-5`}>
          {/* Step 1 */}
          <div>
            <p className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">1. Elige tu servicio</p>
            <div className="grid grid-cols-2 gap-2">
              {services.map((s) => (
                <button
                  key={s.name}
                  onClick={() => { setSelectedService(s.name); setBookingStep(1); }}
                  className={`text-left px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                    selectedService === s.name
                      ? "bg-blue-500/20 border-blue-400/50 text-blue-300"
                      : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-500"
                  }`}
                >
                  <span className="font-bold">{s.name}</span>
                  <span className="text-zinc-400 ml-1">{s.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className={bookingStep >= 1 ? "opacity-100" : "opacity-30 pointer-events-none"}>
            <p className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">2. Selecciona horario</p>
            <div className="grid grid-cols-5 gap-1.5">
              {times.map((t) => {
                const busy = busyTimes.includes(t);
                return (
                  <button
                    key={t}
                    disabled={busy}
                    onClick={() => { setSelectedTime(t); setBookingStep(2); }}
                    className={`py-1.5 rounded-lg text-xs font-medium transition-all ${
                      busy
                        ? "bg-zinc-800 text-zinc-600 line-through cursor-not-allowed"
                        : selectedTime === t
                        ? "bg-blue-500 text-white"
                        : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3 */}
          <div className={bookingStep >= 2 ? "opacity-100" : "opacity-30 pointer-events-none"}>
            <p className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">3. Tus datos</p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                placeholder="WhatsApp (recibirás confirmación)"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button
            className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              bookingStep >= 2
                ? "bg-blue-500 hover:bg-blue-400 text-white"
                : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            }`}
            disabled={bookingStep < 2}
          >
            <CalendarCheck className="w-4 h-4" />
            Confirmar reservación
          </button>

          {selectedService && selectedTime && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <p className="text-xs text-emerald-300">
                <strong>{selectedService}</strong> · Hoy {selectedTime} · Te confirmaremos por WhatsApp
              </p>
            </div>
          )}
        </div>
      </section>

      {/* RESEÑAS */}
      <section className={`${isMobile ? "px-4 py-8" : "px-8 py-12"}`}>
        <div className="mb-6">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Lo que dicen</p>
          <h2 className={`font-black ${isMobile ? "text-xl" : "text-2xl"}`}>
            Reseñas de clientes{" "}
            <span className="text-amber-400">★ 4.9</span>
          </h2>
        </div>

        <div className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
          {reviews.map((r) => (
            <div key={r.name} className="bg-zinc-900 border border-white/10 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold">{r.name}</p>
                    <p className="text-[10px] text-zinc-500">{r.time}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">"{r.text}"</p>
              <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] rounded-full">
                {r.service}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO + HORARIOS */}
      <section className={`${isMobile ? "px-4 py-8" : "px-8 py-12"} bg-zinc-900/50`}>
        <div className={`grid gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Horarios</p>
            <h3 className="text-lg font-black mb-4">Estamos abiertos</h3>
            <div className="space-y-2">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
                  <span className="text-zinc-400">{h.day}</span>
                  <span className="text-white font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Ubicación</p>
            <h3 className="text-lg font-black mb-4">¿Cómo llegar?</h3>
            <div className="bg-zinc-800 rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300">Av. Principal 123, Col. Centro, Tu Ciudad</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-zinc-300">+52 (555) 123-4567</span>
              </div>
              <div className="h-24 bg-zinc-700 rounded-lg flex items-center justify-center border border-white/10">
                <div className="text-center text-xs text-zinc-500">
                  <MapPin className="w-5 h-5 mx-auto mb-1 text-blue-400" />
                  Mapa interactivo
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors flex-1 justify-center">
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </button>
                <button className="flex items-center gap-1.5 border border-white/20 hover:border-white/40 text-zinc-300 text-xs font-medium px-3 py-2 rounded-lg transition-colors flex-1 justify-center">
                  <Phone className="w-3.5 h-3.5" />
                  Llamar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${isMobile ? "px-4 py-6" : "px-8 py-8"} border-t border-white/10`}>
        <div className={`flex gap-4 ${isMobile ? "flex-col" : "items-center justify-between"}`}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
              <Car className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold">
              AutoLavado<span className="text-blue-400">Express</span>
            </span>
          </div>
          <p className="text-xs text-zinc-500">© 2025 · Todos los derechos reservados</p>
          <div className="flex gap-3">
            <button className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-colors">
              <Instagram className="w-3.5 h-3.5 text-zinc-400" />
            </button>
            <button className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-colors">
              <Facebook className="w-3.5 h-3.5 text-zinc-400" />
            </button>
            <button className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-colors">
              <MessageCircle className="w-3.5 h-3.5 text-zinc-400" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── COMPONENTE PRINCIPAL ────────────────────────────────────────────────────

export default function CarwashLandingPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [activeSection, setActiveSection] = useState("Inicio");

  return (
    <section ref={ref} className="container mx-auto px-6 py-20">
      {/* ENCABEZADO */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
          <Droplets className="w-4 h-4" />
          Así se vería su sitio web
        </div>
        <h2 className="font-retro text-4xl md:text-5xl mb-3">
          Landing page en vivo
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Esto es un prototipo interactivo. Puedes navegar, seleccionar servicios
          y simular una reservación — exactamente como lo haría tu cliente.
        </p>
      </motion.div>

      {/* TOGGLE DESKTOP / MOBILE */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center gap-2 mb-8"
      >
        {(["desktop", "mobile"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border transition-all ${
              view === v
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {v === "desktop" ? (
              <Monitor className="w-4 h-4" />
            ) : (
              <Smartphone className="w-4 h-4" />
            )}
            {v === "desktop" ? "Escritorio" : "Móvil"}
          </button>
        ))}
      </motion.div>

      {/* BROWSER FRAME */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={`mx-auto transition-all duration-500 ${
          view === "desktop" ? "max-w-5xl" : "max-w-sm"
        }`}
      >
        {view === "desktop" ? (
          /* ── DESKTOP FRAME ── */
          <div className="rounded-2xl border border-border overflow-hidden shadow-2xl">
            {/* Barra del navegador */}
            <div className="bg-zinc-800 px-4 py-3 flex items-center gap-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-zinc-700 rounded-md px-3 py-1 text-xs text-zinc-400 flex items-center gap-2">
                <Shield className="w-3 h-3 text-emerald-400" />
                autolavadoexpress.mx
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </div>
            {/* Contenido */}
            <div style={{ height: "600px", overflowY: "auto" }}>
              <LandingContent
                isMobile={false}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </div>
          </div>
        ) : (
          /* ── MOBILE FRAME ── */
          <div className="mx-auto" style={{ width: "320px" }}>
            <div className="relative bg-zinc-900 rounded-[2.5rem] border-4 border-zinc-700 shadow-2xl overflow-hidden" style={{ height: "680px" }}>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-zinc-900 rounded-b-xl z-50 flex items-center justify-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                <div className="w-8 h-1.5 bg-zinc-700 rounded-full" />
              </div>
              {/* Status bar */}
              <div className="flex items-center justify-between px-5 pt-6 pb-1 text-[10px] text-white/60 bg-black">
                <span>9:41</span>
                <span>●●●</span>
              </div>
              {/* Contenido */}
              <div style={{ height: "calc(100% - 48px)", overflowY: "auto" }}>
                <LandingContent
                  isMobile={true}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* NOTA AL PIE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center text-xs text-muted-foreground mt-6"
      >
        Prototipo interactivo · El diseño final se adapta a la identidad del negocio
      </motion.p>
    </section>
  );
}

// needed for icon import used above
function Users({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
