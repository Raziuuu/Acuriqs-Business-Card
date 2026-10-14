import React from "react";
import {
  CreditCard,
  UserCheck,
  Zap,
  Smartphone,
  Wifi,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const steps = [
    {
      number: "01",
      title: "Get your NFC Card",
      description: "Receive your premium custom physical card embedded with high-speed NFC.",
      icon: CreditCard,
      accent: "from-blue-500 to-cyan-400",
    },
    {
      number: "02",
      title: "We create your digital profile",
      description: "Your business contact, location, social links, and reviews configured cleanly.",
      icon: UserCheck,
      accent: "from-indigo-500 to-purple-400",
    },
    {
      number: "03",
      title: "Tap the card",
      description: "Simply tap the card against any iPhone or Android phone. No app required.",
      icon: Zap,
      accent: "from-amber-500 to-yellow-400",
    },
    {
      number: "04",
      title: "Customers instantly access your business information",
      description: "One tap opens your custom profile so clients can call, locate, or chat instantly.",
      icon: Smartphone,
      accent: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      <header className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Wifi className="w-4 h-4 rotate-90" />
          </div>
          <span className="font-bold tracking-tight text-white text-lg">Smart NFC</span>
        </div>

        <a
          href="https://wa.me/916361109761?text=Hi%2C%20I%20am%20interested%20in%20getting%20a%20Smart%20NFC%20Business%20Card."
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-medium px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition"
        >
          Contact Support
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 sm:py-20">
        <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* NFC Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-blue-400 mb-8 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Next-Generation Contactless Networking</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-3xl">
            Smart NFC{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Business Cards
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
            One tap. Everything your customer needs.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/916361109761?text=Hi%2C%20I%20would%20like%20to%20order%20a%20Smart%20NFC%20Business%20Card."
              target="_blank"
              rel="noopener noreferrer"
              id="cta-get-card"
              className="w-full sm:w-auto min-h-[56px] px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-base flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 transition-all duration-200 active:scale-95"
            >
              <span>Get Your NFC Card</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Card Visual Preview */}
          <div className="mt-16 sm:mt-20 w-full max-w-sm sm:max-w-md mx-auto">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-950/90 border border-white/10 shadow-2xl backdrop-blur-xl text-left select-none overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
              
              <div className="flex items-center justify-between mb-12">
                <div className="w-10 h-7 rounded-md bg-gradient-to-r from-amber-200 to-yellow-400 opacity-80 shadow-sm" />
                <Wifi className="w-6 h-6 text-slate-400 rotate-90" />
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                  Smart Digital Profile
                </div>
                <div className="text-xl font-bold text-white tracking-wide">
                  Your Business Name
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Direct NFC Protocol</span>
                <span className="font-mono text-blue-400">TAP TO CONNECT</span>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <section className="mt-24 sm:mt-32 w-full text-left">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                How It Works
              </h2>
              <p className="mt-2 text-slate-400 text-sm">
                Effortless modern networking in four simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.number}
                    className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-slate-500">
                          {step.number}
                        </span>
                        <div
                          className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${step.accent} bg-opacity-20 flex items-center justify-center text-white`}
                        >
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-white leading-snug mb-2">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Final Simple CTA */}
          <div className="mt-16 sm:mt-20 w-full glass-card rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to upgrade your business card?
            </h3>
            <p className="mt-2 text-slate-400 text-sm max-w-md">
              Order your custom branded NFC card today and elevate your client experience.
            </p>
            <a
              href="https://wa.me/916361109761?text=Hi%2C%20I%20would%20like%20to%20order%20a%20Smart%20NFC%20Business%20Card."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-200 transition active:scale-95 shadow-md"
            >
              Get Your NFC Card
            </a>
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-6 py-8 border-t border-white/5 text-center text-xs text-slate-500">
        <p>© 2026 Smart NFC Business Cards. All rights reserved.</p>
      </footer>
    </div>
  );
}
