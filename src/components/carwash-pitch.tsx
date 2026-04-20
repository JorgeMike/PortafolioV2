import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Car,
  Clock,
  Globe,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  CalendarCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const problems = [
  {
    icon: Clock,
    label: "Filas largas en horas pico",
    description: "Clientes esperando sin saber cuánto tiempo falta",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: Globe,
    label: "Sin presencia en internet",
    description: "Clientes potenciales que no te encuentran en Google",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: Users,
    label: "Sin control de afluencia",
    description: "No sabes cuántos clientes llegan ni cuándo",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

const solutions = [
  {
    icon: CalendarCheck,
    title: "Reservaciones en línea",
    description:
      "Tus clientes reservan su turno desde el celular. Sin filas, sin esperas innecesarias.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Smartphone,
    title: "Sitio web profesional",
    description:
      "Aparece en Google Maps, muestra tus servicios y precios, genera confianza desde el primer clic.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: TrendingUp,
    title: "Panel de control",
    description:
      "Ve en tiempo real cuántos clientes tienes hoy, qué servicios se piden más y en qué horarios.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: Star,
    title: "Reseñas automáticas",
    description:
      "Invita a tus clientes a dejar una reseña después de su visita. Más estrellas, más clientes.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
];

const mockScreens = [
  {
    id: "booking",
    label: "Reserva de turno",
    emoji: "📅",
    description: "El cliente elige día, hora y servicio desde su celular",
    preview: BookingMockup,
  },
  {
    id: "home",
    label: "Página de inicio",
    emoji: "🌐",
    description: "Primera impresión profesional con servicios y precios",
    preview: HomeMockup,
  },
  {
    id: "dashboard",
    label: "Panel del negocio",
    emoji: "📊",
    description: "Control total: turnos del día, ingresos y estadísticas",
    preview: DashboardMockup,
  },
];

function BookingMockup() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-5 border border-white/10 w-full max-w-sm mx-auto shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-zinc-500">autolavado.mx/reservar</span>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-xs text-zinc-400 mb-1">Elige tu servicio</p>
          <div className="grid grid-cols-2 gap-2">
            {["Básico $80", "Estándar $150", "Premium $220", "Detailing $400"].map((s, i) => (
              <div
                key={s}
                className={`rounded-lg p-2 text-xs font-medium border ${i === 2 ? "bg-blue-500 border-blue-400 text-white" : "bg-zinc-800 border-zinc-700 text-zinc-300"}`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-zinc-400 mb-1">Selecciona horario</p>
          <div className="grid grid-cols-4 gap-1">
            {["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"].map((h, i) => (
              <div
                key={h}
                className={`text-center rounded text-xs py-1 ${i === 3 ? "bg-blue-500 text-white" : i === 1 || i === 5 ? "bg-zinc-700 text-zinc-500 line-through" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}`}
              >
                {h}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 flex items-center gap-2">
          <CalendarCheck className="w-4 h-4 text-blue-400 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-blue-300">Turno confirmado</p>
            <p className="text-xs text-zinc-400">Hoy 12:00 · Premium · $220</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeMockup() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-5 border border-white/10 w-full max-w-sm mx-auto shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-zinc-500">autolavado.mx</span>
      </div>
      <div className="space-y-3">
        <div className="bg-gradient-to-br from-blue-600/40 to-purple-600/30 rounded-xl p-4 border border-blue-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Car className="w-5 h-5 text-blue-400" />
            <p className="text-sm font-bold text-white">Autolavado Express</p>
          </div>
          <p className="text-xs text-zinc-300 mb-3">Tu auto reluciente en minutos. Reserva en línea.</p>
          <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg inline-block">
            Reservar ahora →
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[["4.9★", "Google"], ["500+", "Clientes"], ["3 min", "Promedio"]].map(([val, label]) => (
            <div key={label} className="bg-zinc-800 rounded-lg p-2 text-center">
              <p className="text-xs font-bold text-white">{val}</p>
              <p className="text-[10px] text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {[["Básico", "$80"], ["Estándar", "$150"], ["Premium", "$220"]].map(([name, price]) => (
            <div key={name} className="flex justify-between items-center bg-zinc-800 rounded-lg px-3 py-1.5">
              <span className="text-xs text-zinc-300">{name}</span>
              <span className="text-xs font-semibold text-blue-400">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-5 border border-white/10 w-full max-w-sm mx-auto shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-zinc-500">Panel de administración</span>
      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Turnos hoy", value: "14", color: "text-blue-400", trend: "+3" },
            { label: "Ingresos hoy", value: "$2,180", color: "text-emerald-400", trend: "+12%" },
          ].map((stat) => (
            <div key={stat.label} className="bg-zinc-800 rounded-xl p-3">
              <p className="text-[10px] text-zinc-500 mb-1">{stat.label}</p>
              <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-emerald-400">{stat.trend} vs ayer</p>
            </div>
          ))}
        </div>
        <div className="bg-zinc-800 rounded-xl p-3">
          <p className="text-[10px] text-zinc-500 mb-2">Próximos turnos</p>
          <div className="space-y-1.5">
            {[
              { time: "10:00", name: "Carlos M.", service: "Premium", status: "Activo" },
              { time: "10:30", name: "Ana L.", service: "Básico", status: "Esperando" },
              { time: "11:00", name: "Pedro R.", service: "Estándar", status: "Confirmado" },
            ].map((t) => (
              <div key={t.name} className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 w-10">{t.time}</span>
                <span className="text-zinc-300 flex-1">{t.name}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${t.status === "Activo" ? "bg-emerald-500/20 text-emerald-400" : t.status === "Esperando" ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"}`}>
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-800 rounded-xl p-3">
          <p className="text-[10px] text-zinc-500 mb-2">Servicios populares</p>
          {[["Premium", 65], ["Estándar", 25], ["Básico", 10]].map(([name, pct]) => (
            <div key={name as string} className="mb-1.5">
              <div className="flex justify-between text-[10px] mb-0.5">
                <span className="text-zinc-400">{name}</span>
                <span className="text-zinc-300">{pct}%</span>
              </div>
              <div className="h-1 bg-zinc-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CarwashPitch() {
  const ref = useRef(null);
  const [activeScreen, setActiveScreen] = useState(0);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ActivePreview = mockScreens[activeScreen].preview;

  return (
    <section ref={ref} className="container mx-auto px-6 py-20">
      {/* ENCABEZADO */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          Propuesta para tu negocio
        </div>
        <h2 className="font-retro text-4xl md:text-6xl mb-4">
          Así puede verse tu negocio
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Imagina tener una fila organizada, clientes felices y control total
          desde tu celular — todo en un solo lugar.
        </p>
      </motion.div>

      {/* PROBLEMAS ACTUALES */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-16"
      >
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
          El problema hoy
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl border bg-card"
            >
              <div className={`p-2 rounded-lg shrink-0 ${p.bg}`}>
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">{p.label}</p>
                <p className="text-xs text-muted-foreground">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FLECHA DE TRANSICIÓN */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex items-center justify-center gap-3 mb-16"
      >
        <div className="h-px flex-1 bg-border" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
          <ChevronRight className="w-4 h-4" />
          La solución
        </div>
        <div className="h-px flex-1 bg-border" />
      </motion.div>

      {/* SOLUCIONES */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
      >
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            className={`p-5 rounded-xl border ${s.border} bg-card hover:shadow-lg transition-shadow duration-300`}
          >
            <div className={`p-2 rounded-lg inline-block mb-3 ${s.bg}`}>
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <h4 className="font-bold mb-2">{s.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* PREVIEW INTERACTIVO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 1.1 }}
      >
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
          Vista previa del producto
        </h3>

        {/* Tabs de pantallas */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {mockScreens.map((screen, i) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeScreen === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
              }`}
            >
              <span>{screen.emoji}</span>
              {screen.label}
            </button>
          ))}
        </div>

        {/* Mockup + descripción */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ActivePreview />
          </motion.div>

          <motion.div
            key={`desc-${activeScreen}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <span className="text-3xl">{mockScreens[activeScreen].emoji}</span>
              <h4 className="text-2xl font-bold mt-2 mb-3">
                {mockScreens[activeScreen].label}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {mockScreens[activeScreen].description}
              </p>
            </div>

            {activeScreen === 0 && (
              <ul className="space-y-2">
                {[
                  "Horarios disponibles en tiempo real",
                  "Confirmación por WhatsApp automática",
                  "El cliente puede cancelar o reagendar",
                  "Sin llamadas, sin confusiones",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {activeScreen === 1 && (
              <ul className="space-y-2">
                {[
                  "Aparece en Google cuando te busquen",
                  "Muestra servicios, precios y ubicación",
                  "Botón directo para reservar o llamar",
                  "Diseño adaptado a celular y escritorio",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {activeScreen === 2 && (
              <ul className="space-y-2">
                {[
                  "Ve todos los turnos del día de un vistazo",
                  "Ingresos diarios y semanales en tiempo real",
                  "Identifica tus horarios más ocupados",
                  "Administra desde el celular donde estés",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-20 text-center"
      >
        <div className="inline-block p-8 rounded-2xl border bg-card max-w-lg w-full">
          <Car className="w-10 h-10 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-bold mb-2">¿Listo para dar el salto?</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Esto es solo una muestra de lo que podemos construir juntos.
            Hablemos sobre lo que necesita tu negocio.
          </p>
          <a
            href="mailto:alvaradojr2001@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Contáctame
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
