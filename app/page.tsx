/*
Single-file starter portfolio page (Next.js / React + TailwindCSS + Framer Motion)

Usage:
1) Create a Next.js app (if you don't have one):
   npx create-next-app@latest my-portfolio --typescript
2) Install dependencies:
   cd my-portfolio
   npm install framer-motion lucide-react
   (Tailwind: follow Tailwind setup for Next.js: https://tailwindcss.com/docs/guides/nextjs)
3) Replace pages/index.tsx with this file's contents (or put under app/page.tsx for app router and adjust imports).
4) Add your projects to the `projects` array below. Replace images with your own and update links.
5) Run: npm run dev

Notes:
- This file is intentionally self-contained and demonstrates responsive design, dark mode toggle, hero, project cards, case-study modal, contact form (mailto fallback), accessible markup, and subtle animations.
- You can remove framer-motion if not wanted; the app will still work.
- Replace placeholder text, profile image, and project data with your own.
*/
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Mail, Github, Linkedin, ExternalLink, X } from "lucide-react";

// Sample projects — replace these with your real projects. Keep each project object with keys: id, title, subtitle, tags, description, image (url), demo, repo
const projects = [
  {
    id: "p1",
    title: "Sugarcane Disease Classifier",
    subtitle: "Computer Vision — DenseNet121 (91.94% acc)",
    tags: ["Deep Learning", "PyTorch","Langchain", "Agritech"],
    description:
      "Built an image classification pipeline for sugarcane leaf disease detection. Trained DenseNet121 and achieved 91.94% accuracy across 6 classes; deployed as a lightweight REST API.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
    demo: "https://huggingface.co/spaces/siddhi363/Sugarcane_Disease_Prediction",
    repo: "https://github.com/siddhiyadav363/Sugarcane_Disease_Prediction",
  },
  {
    id: "p2",
    title: "Gesture Palette — Real-time Hand Gesture Recognition",
    subtitle: "Web app + Model inference (Realtime)",
    tags: ["Computer Vision", "Mediapipe", "Flask"],
    description:
      "Engineered a real-time hand gesture recognition system powering an interactive virtual canvas. Built a lightweight CNN with on-device inference and optimized for low-latency UX.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
    demo: "https://example.com/gesture-palette",
    repo: "https://github.com/siddhiyadav363/gesture-palette",
  },
  {
    id: "p3",
    title: "IMAGICA — Image Caption Generator (Android)",
    subtitle: "Assistive mobile app",
    tags: ["Android", "ML", "Object Detection", "Accessibility"],
    description:
      "Created an Android app that automatically generates captions for images to assist visually impaired users. Combined on-device preprocessing with a cloud-backed model for accuracy.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
    video:
      "https://drive.google.com/file/d/1kbvVKINOGela0JvMYmKoZrgSYKM_ukys/preview",
    demo: "https://drive.google.com/file/d/1kbvVKINOGela0JvMYmKoZrgSYKM_ukys/view?usp=sharing",
    repo: "https://github.com/siddhiyadav363/IMAGICA",
  },
 
];

export default function PortfolioPage() {
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-md p-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold">SY</div>
              <div>
                <h1 className="text-lg font-semibold">Siddhi Yadav</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">AI Engineer & Data Scientist— Building interactive ML experiences</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <nav className="hidden md:flex gap-4 text-sm">
                <a href="#work" className="hover:underline">Work</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#contact" className="hover:underline">Contact</a>
              </nav>

              <button
                aria-label="toggle theme"
                onClick={() => setDark((s) => !s)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </header>

          {/* HERO */}
          <section className="mt-12 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">AI-powered</span> products that people love.
              </motion.h2>

              <motion.p initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl">
                I'm a AI/ML engineer who ships production-ready models and delightful UIs. I focus on performance, accessibility, and explainability.
              </motion.p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium shadow hover:scale-[1.01] transition-transform">See my work</a>
                <a href="mailto:siddhiyadav363@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border dark:border-gray-700">Hire me</a>
              </div>

              <div className="mt-8 flex gap-5 items-center">
                <a aria-label="Github" href="https://github.com/siddhiyadav363" className="flex items-center gap-2 text-sm">
                  <Github size={18} /> <span className="hidden sm:inline">GitHub</span>
                </a>
                <a aria-label="LinkedIn" href="https://linkedin.com/in/siddhi-363-yadav" className="flex items-center gap-2 text-sm">
                  <Linkedin size={18} /> <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a aria-label="Email" href="mailto:siddhiyadav363@gmail.com" className="flex items-center gap-2 text-sm">
                  <Mail size={18} /> <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }} className="w-full max-w-md">
                <div className="bg-gradient-to-tr from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl">
                  <img alt="profile" src="\casual.png" className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-md mx-auto" />
                  <h3 className="mt-4 text-center text-xl font-semibold">Siddhi Yadav</h3>
                  <p className="mt-1 text-center text-gray-600 dark:text-gray-300 text-sm">AI/Data Scientist — Computer Vision & Product-focused ML</p>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-sm font-semibold">3</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">1+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Years exp</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">91.94%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Top model acc</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* WORK / PROJECTS */}
          <section id="work" className="mt-14">
            <h3 className="text-2xl font-semibold">Selected Projects</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Detailed case studies & demos — click to explore.</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <motion.article key={p.id} whileHover={{ y: -6 }} className="rounded-xl bg-gray-50 dark:bg-gray-800 p-4 shadow-md">
                  <div className="relative rounded-md overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Open demo" className="p-2 rounded-md bg-white/80 dark:bg-black/40 backdrop-blur-sm">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-lg font-semibold">{p.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.subtitle}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-white dark:bg-gray-700 border text-gray-600 dark:text-gray-200">{t}</span>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{p.description}</p>
                      <button onClick={() => setSelected(p)} className="ml-4 text-sm px-3 py-1 rounded-md bg-indigo-600 text-white">Read</button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="mt-14 grid gap-6 md:grid-cols-3 items-start">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">About me</h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300">I build production-focused machine learning systems and polished user interfaces. My work sits at the intersection of research and product — I iterate quickly, measure impact, and improve models with real user feedback. I enjoy mentoring others and open-sourcing small tools that make development faster.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="font-semibold">Skills</h4>
                  <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                    <li>Python, ML, Data Science</li>
                    <li>Computer Vision, NLP, Data Analytics</li>
                    <li>SQL, OOPs, DSA, HTML, CSS</li>
                    <li>Deployment: Git, FastAPI, AWS</li>
                  </ul>
                </div>

                <div className="rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="font-semibold">Impact</h4>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Built models that improved disease detection accuracy and reduced manual review time. Experienced in delivering end-to-end solutions from dataset collection to deployment and monitoring.</p>
                </div>
              </div>
            </div>

            <aside className="rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
              <h4 className="font-semibold">Quick facts</h4>
              <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Location:</strong> India</p>
                <p><strong>Available:</strong> Full-time</p>
                <p><strong>Open to:</strong> Remote / Relocation</p>
              </div>
            </aside>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mt-14">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">I'm open to full-time roles and interesting projects. Fill the form or email me directly.</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
             <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const formData = {
                  name: (form[0] as HTMLInputElement).value,
                  email: (form[1] as HTMLInputElement).value,
                  subject: (form[2] as HTMLInputElement).value,
                  message: (form[3] as HTMLTextAreaElement).value,
                };

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                  });

                  if (res.ok) {
                    alert("Message sent successfully ✅");
                    form.reset();
                  } else {
                    alert("Failed to send message ❌");
                  }
                } catch (err) {
                  alert("An error occurred ❌");
                  console.error(err);
                }
              }}
            >  <div className="grid gap-3 md:grid-cols-2">
                  <input required placeholder="Your name" className="px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900" />
                  <input required type="email" placeholder="Email" className="px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900" />
                </div>
                <input placeholder="Subject" className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900" />
                <textarea required placeholder="Message" rows={5} className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900" />
                <div>
                  <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send</button>
                </div>
              </form> 

              


              <div className="rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
                <h4 className="font-semibold">Get in touch</h4>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Email: <a href="mailto:siddhiyadav363@gmail.com" className="underline">siddhiyadav363@gmail.com</a></p>
                <div className="mt-4 flex gap-3">
                  <a href="https://github.com/siddhiyadav363" aria-label="GitHub" className="px-3 py-2 rounded-md border dark:border-gray-700">GitHub</a>
                  <a href="https://linkedin.com/in/siddhi-363-yadav" aria-label="LinkedIn" className="px-3 py-2 rounded-md border dark:border-gray-700">LinkedIn</a>
                </div>

                <div className="mt-6">
                  <h5 className="font-semibold">Download CV</h5>
                  {/* <p className="text-sm mt-2">Add your CV to <code>public\Siddhi_Yadav_Resume.pdf</code> and update this link.</p> */}
                  <a href="\Siddhi_Yadav_Resume.pdf" className="mt-3 inline-block px-3 py-2 rounded-md bg-white dark:bg-gray-700 border">Download</a>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-16 text-center text-xs text-gray-500 dark:text-gray-400 pb-8">
            © {new Date().getFullYear()} Siddhi Yadav — Built with ❤️ • <span className="italic">Available for full-time</span>
          </footer>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-4">
              <motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }} className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl p-6 shadow-xl overflow-auto">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{selected.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{selected.subtitle}</p>
                  </div>

                  <button onClick={() => setSelected(null)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                    <X />
                  </button>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover rounded-md" />

                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{selected.description}</p>

                    <div className="mt-4 flex gap-3">
                      <a href={selected.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white">Live demo <ExternalLink size={14} /></a>
                      <a href={selected.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border">Repository</a>
                    </div>

                    <div className="mt-4">
                      <h5 className="font-semibold">Tags</h5>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selected.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
