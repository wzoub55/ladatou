"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowLeft, Users } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const destinationEmail = "contact@ladatou.yt";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Nom: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  return (
    <main className="min-h-screen bg-[#FEF3C7]">
      {/* Header bar */}
      <header className="sticky top-0 z-50 border-b border-[#7C3AED]/10 bg-[#FEF3C7]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/img/logo.png" alt="Logo LADATOU" className="h-12 w-12 object-contain" />
            <div className="text-center">
              <div className="text-lg font-black tracking-[0.18em] text-[#FF6B35]">LADATOU</div>
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-[#FF6B35]/80">Tout à 2€</div>
              <div className="mt-1 h-[2px] w-full rounded-full bg-[#FF6B35]/70" />
            </div>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(255,107,53,0.28)] transition hover:bg-[#7C3AED]"
          >
            <ArrowLeft className="h-4 w-4" /> Retour à l&apos;accueil
          </a>
        </div>
      </header>

      {/* À propos */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-extrabold text-[#7C3AED] shadow-sm backdrop-blur-sm">
              <Users className="h-4 w-4" /> À propos de nous
            </div>
            <h1 className="text-4xl font-black tracking-tight text-[#4C1D95] sm:text-5xl">
              Qui sommes-<span className="text-[#FF6B35]">nous</span> ?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4C1D95]/80">
              LADATOU est le magasin discount familial de Mayotte, situé à Kaweni, Mamoudzou.
              Notre concept est simple : offrir à toutes les familles mahoraises des centaines
              d&apos;articles de qualité à un prix unique de <strong className="text-[#FF6B35]">2€</strong>.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#4C1D95]/80">
              Maison, cuisine, enfants, fournitures scolaires, décoration, cadeaux… Nous
              renouvelons régulièrement nos rayons pour vous proposer toujours plus de
              nouveautés. Chez LADATOU, faire plaisir à toute la famille n&apos;a jamais été aussi accessible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info + formulaire */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            {/* Infos de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-black tracking-tight text-[#4C1D95]">
                Nos <span className="text-[#FF6B35]">coordonnées</span>
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6B35] text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4C1D95]">Téléphone</h3>
                    <a href="tel:+262639000000" className="text-lg text-[#7C3AED] hover:underline">
                      +262 639 00 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED] text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4C1D95]">Email</h3>
                    <a href={`mailto:${destinationEmail}`} className="text-lg text-[#7C3AED] hover:underline">
                      {destinationEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5B21B6] text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4C1D95]">Adresse</h3>
                    <p className="text-[#4C1D95]/80">Impasse Maharaja, Kaweni</p>
                    <p className="text-[#4C1D95]/80">Mamoudzou – Mayotte</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#FF6B35]/10 p-5">
                <p className="text-sm font-bold text-[#FF6B35]">Horaires d&apos;ouverture</p>
                <p className="mt-2 text-[#4C1D95]/80">Lundi – Samedi : 9h30 – 17h00</p>
                <p className="text-[#4C1D95]/80">Dimanche : Fermé</p>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="rounded-[2rem] bg-white/80 p-8 shadow-[0_20px_60px_rgba(76,29,149,0.10)] backdrop-blur-sm sm:p-10">
                <h2 className="text-3xl font-black tracking-tight text-[#4C1D95]">
                  Envoyez-nous un <span className="text-[#FF6B35]">message</span>
                </h2>
                <p className="mt-2 text-[#4C1D95]/70">
                  Remplissez le formulaire et votre application mail s&apos;ouvrira avec le message prêt à envoyer.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-[#4C1D95]">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-[#7C3AED]/15 bg-white px-4 py-3 text-[#4C1D95] placeholder:text-[#4C1D95]/40 focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-[#4C1D95]">
                      Votre email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full rounded-xl border border-[#7C3AED]/15 bg-white px-4 py-3 text-[#4C1D95] placeholder:text-[#4C1D95]/40 focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-bold text-[#4C1D95]">
                      Objet
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="L'objet de votre message"
                      className="w-full rounded-xl border border-[#7C3AED]/15 bg-white px-4 py-3 text-[#4C1D95] placeholder:text-[#4C1D95]/40 focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-[#4C1D95]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Votre message..."
                      className="w-full resize-none rounded-xl border border-[#7C3AED]/15 bg-white px-4 py-3 text-[#4C1D95] placeholder:text-[#4C1D95]/40 focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-7 py-4 text-base font-extrabold text-white shadow-[0_14px_34px_rgba(255,107,53,0.28)] transition hover:bg-[#7C3AED]"
                  >
                    <Send className="h-4 w-4" /> Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="border-t border-[#7C3AED]/10 bg-[#FEF3C7]/50 px-4 py-8 text-center">
        <p className="text-sm text-[#4C1D95]/60">© 2026 LADATOU – Tout à 2€ | Mayotte</p>
      </footer>
    </main>
  );
}
