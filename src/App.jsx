import { motion } from "framer-motion";

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", variant, children }) {
  const base = "inline-flex items-center justify-center font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
      : variant === "ghost"
        ? "text-slate-900 hover:text-slate-600"
        : "bg-slate-950 text-white hover:bg-slate-800";

  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

const projects = [
  {
    title: "Spanish Language Wheel",
    stack: "React · TypeScript · UI interactiva",
    description:
      "Aplicación visual e interactiva para practicar conjugaciones verbales en español.",
    points: ["Interfaz intuitiva", "React Hooks", "Componentes mantenibles"],
    type: "Educación",
    link: "https://github.com/artiegoesviral/spanish-language-wheel",
  },
  {
    title: "Aplicación Reproductor de Música",
    stack: "Angular · TypeScript · HTML · CSS",
    description:
      "Aplicación web completa para reproducir música de manera interactiva.",
    points: ["Angular", "Assets", "Arquitectura clara"],
    type: "Full-Stack",
    link: "https://artiegoesviral.github.io/voila-audio-player/",
  },
  {
    title: "Filtro E-commerce",
    stack: "JavaScript · HTML · CSS",
    description:
      "Interfaz dinámica para filtrar y visualizar productos con buen rendimiento.",
    points: ["Filtros dinámicos", "Renderizado eficiente", "Responsive"],
    type: "E-commerce",
    link: "https://artiegoesviral.github.io/ecommerce-product-filter/",
  },
];

const skills = [
  { icon: "💻", title: "Frontend", text: "HTML, CSS, JavaScript, React, Angular" },
  { icon: "🎨", title: "UI/UX", text: "Diseño responsive y accesibilidad" },
  { icon: "📱", title: "Responsive", text: "Adaptado a móvil, tablet y desktop" },
  { icon: "♿", title: "Accesibilidad", text: "Buenas prácticas WCAG" },
  { icon: "🗄️", title: "Backend", text: "Node.js, APIs REST, bases de datos" },
  { icon: "✨", title: "Optimización", text: "Rendimiento y mantenimiento" },
];

export default function PortfolioQurat() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl font-bold md:text-6xl">
            Diseño interfaces web claras y modernas
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Soy Qurat, full stack developer. Combino diseño y desarrollo frontend para crear experiencias web funcionales. Siempre mejorando y dispuesta a aprender nuevas tecnologías.
          </p>

          <div className="mt-4 flex gap-4 text-sm text-slate-600">
            <span>📍 Madrid</span>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Habilidades</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.title} className="p-6 border rounded-xl">
              <CardContent>
                <div className="text-2xl">{skill.icon}</div>
                <h3 className="mt-2 font-semibold">{skill.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{skill.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Proyectos</h2>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="border rounded-xl p-5">
              <CardContent>
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm text-slate-500">{project.stack}</p>
                <p className="mt-2 text-slate-600">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.points.map((p) => (
                    <span key={p} className="text-xs bg-slate-100 px-2 py-1 rounded">
                      {p}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="mt-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver proyecto ↗
                    </a>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-12">
        <Card className="p-6 bg-slate-900 text-white rounded-2xl">
          <CardContent>
            <h2 className="text-2xl font-bold">Contacto</h2>

            <div className="mt-3 flex flex-col gap-2">
              <a href="mailto:quratsikander@gmail.com">quratsikander@gmail.com</a>
              <a href="https://www.linkedin.com/in/quratsikander">LinkedIn</a>
              <a href="https://github.com/artiegoesviral">GitHub</a>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}