import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-center items-center px-4 py-12 text-center">
      <div className="w-full max-w-sm glass-card rounded-3xl p-8 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-xl font-bold text-white mb-2">Card Not Found</h1>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          The business profile you scanned or visited is not configured or has been updated.
        </p>

        <Link
          href="/"
          className="w-full py-3.5 px-5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm flex items-center justify-center gap-2 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </main>
  );
}
