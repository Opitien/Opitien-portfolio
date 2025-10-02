"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative cursor-spotlight">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight md:leading-snug">
                  Opitien
                  <br />
                  <span className="text-muted-foreground text-left px-2.5">{"Ejiroghene"}</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Frontend Developer passionate about blending
                  <span className="text-foreground"> design</span> and <span className="text-foreground"> technology</span>,
                  to build clean, engaging, and human-centered digital
                  <span className="text-foreground"> experience</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work & collaboration
                  </div>
                  <div>Nigeria</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-center space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/5 animate-pulse"></div>
                <img
                  src="/opitien.jpg"
                  alt="Opitien Ejiroghene"
                  className="w-full h-full object-cover rounded-full border-2 border-border hover:border-muted-foreground/50 transition-all duration-500 hover:scale-105"
                />
              </div>

              <div className="space-y-4 text-center lg:text-right">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Frontend Developer - Intern</div>

                  <a
                    href="https://www.southcircle.cc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline"
                  >
                    @ South Circle
                  </a>

                  <div className="text-xs text-muted-foreground">2025 — Present</div>
                </div>

              </div>

              <div className="space-y-4 text-center lg:text-right">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                  {["React", "Tailwind", "Next.js", "Wix CMS", "Node.js", "Typescript", "Bootstrap"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2023 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025",
                  role: "Frontend Developer - Intern",
                  company: "South Circle",
                  description: "Contributed to the development of South Circle, creating responsive, user-friendly web interfaces that merge design and functionality.",
                  tech: ["React", "TypeScript", "Next.js", "Tailwind", "Node.js", "Figma", "Bootstrap"],
                },
                {
                  year: "2023",
                  role: "Free Lance Frontend Developer",
                  company: "WIX",
                  description: "Worked as a freelance frontend developer, designing and customizing Wix websites for clients by creating responsive layouts, optimizing user experience, and aligning designs with brand identity.",
                  tech: ["Wix CMS", "Wix Velo", "Wix Editor", "JavaScript", "HTML", "CSS"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-100"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Recent Projects</h2>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {[
                {
                  title: "Sight Studio",
                  description: "Design Agency - A boutique design studio in Warri crafting branding identities and web presence for startups and global brands. (Developer)",
                  tech: ["React", "Node.js", "Bootstrap", "Next.js", "Typescript"],
                  url: "https://sightstudio.co/",
                  image: "/sight-studio.png",
                },
                {
                  title: "Furnilux",
                  description: "E-commerce store - Discover our curated collection of modern, comfortable, and stylish furniture designed to make your house feel like home.",
                  tech: ["Next.js", "React", "Tailwind", "Node.js", "Typescript"],
                  url: "https://v0-furnilux-furniture-design.vercel.app/",
                  image: "/furnilux-shop.png",
                },
                {
                  title: "Bravax Forms",
                  description: "Smart Forms + Mini CRM - Create smart WhatsApp forms and manage customers with our mini CRM. Built for Nigerian small business owners and Gen Z entrepreneurs. (Contributor)",
                  tech: ["Vite", "Next.js", "Tailwind", "Node.js",],
                  url: "https://www.bravaxforms.com/",
                  image: "/bravax-forms.png",
                },
                {
                  title: "Aidera Landing Page",
                  description: "Aidera is an AI-powered platform designed to simplify healthcare and innovation. Access AI-driven insights, tools, and solutions to make smarter decisions with ease.",
                  tech: ["Next.js","Typescript", "Tailwind","React"],
                  url: "https://aidera-landing-build.vercel.app/",
                  image: "/aidera-landing-page.png",
                },
              ].map((project, index) => (
                <Link key={index} href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <article className="h-full p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] transform-gpu">
                    <div className="space-y-4">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs text-muted-foreground bg-muted rounded-sm">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <span>View Project</span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="connect"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:test@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">opitiene@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@OpitienEdison", url: "https://github.com/Opitien" },
                  { name: "Instagram", handle: "@OpitienEdison", url: "https://www.instagram.com/opitien_dev" },
                  { name: "X", handle: "@OpitienEdison", url: "https://x.com/OpitienEdison" },
                  { name: "LinkedIn", handle: "@OpitienEdison", url: "https://www.linkedin.com/in/opitien" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Opitien Ejiroghene. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with v0.dev by Ejirohene Opitien</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <a
                href="https://wa.me/2349065521578"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>
              </a>

            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
