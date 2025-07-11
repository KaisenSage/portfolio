import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Centralized Resume / CV Card */}
          <div className="flex justify-center mb-8">
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all flex flex-col items-start w-full max-w-md">
              <h3 className="text-xl font-bold mb-2">Resume / CV</h3>
              <p className="text-gray-400 mb-4">
                Download a PDF copy of my latest resume/CV below.
              </p>
              <a
                href="/Babalola%20Abdallah%20Resume%20file.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 font-semibold"
              >
                Download Resume →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* AI-Powered Meal Plan App */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">AI Powered MealPlan App</h3>
              <p className="text-gray-400 mb-4">
                Built a full-stack AI-powered web application that generates personalized weekly meal plans based on user preferences and dietary goals.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Clerk Auth", "PostgreSQL", "(Prisma ORM)", "React Query", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-start items-center">
                <a
                  href="https://mealplan-zeta.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* VirtualR Project */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">VirtualR - VR App Development Tools</h3>
              <p className="text-gray-400 mb-4">
                Built scalable backend services with Node.js to support project saving, loading, and collaboration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Node.js", "Three.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-start items-center">
                <a
                  href="https://github.com/KaisenSage/VirtualR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>

            {/* E-Commerce Web App */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-start items-center">
                <a
                  href="https://ecommercewebsite-wccj.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* AirBnB App */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">AirBnB App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack AirBnB platform to practice scalable web development using the MVC architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Flask", "MySQL", "HTML/CSS", "JavaScript", "jQuery"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-start items-center">
                <a
                  href="https://github.com/KaisenSage/AirBnB_clone_v4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};