import React from "react";
import Image from "next/image";
import {
  Phone,
  Navigation,
  Globe,
  Star,
  MapPin,
  ChevronRight,
  Wifi,
} from "lucide-react";
import { Business } from "@/data/businesses";

interface BusinessProfileProps {
  business: Business;
}

function WhatsAppIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function formatWhatsAppUrl(whatsapp: string): string {
  if (!whatsapp || !whatsapp.trim()) return "";
  const digitsOnly = whatsapp.replace(/\D/g, "");
  if (!digitsOnly) return "";
  let cleanNumber = digitsOnly;
  if (cleanNumber.startsWith("0")) {
    cleanNumber = cleanNumber.replace(/^0+/, "");
  }
  if (cleanNumber.length === 10) {
    cleanNumber = `91${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}`;
}

export function formatTelUrl(phone: string): string {
  if (!phone || !phone.trim()) return "";
  const cleanPhone = phone.trim().replace(/[^\d+]/g, "");
  return `tel:${cleanPhone}`;
}

export function formatWebUrl(url: string): string {
  if (!url || !url.trim()) return "";
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

/**
 * Returns initials from business name for the avatar badge
 */
function getInitials(name: string): string {
  if (!name) return "BC";
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function BusinessProfile({ business }: BusinessProfileProps) {
  const hasPhone = Boolean(business.phone && business.phone.trim() !== "");
  const hasWhatsApp = Boolean(business.whatsapp && business.whatsapp.trim() !== "");
  const hasMaps = Boolean(business.mapsUrl && business.mapsUrl.trim() !== "");
  const hasInstagram = Boolean(business.instagram && business.instagram.trim() !== "");
  const hasWebsite = Boolean(business.website && business.website.trim() !== "");
  const hasReview = Boolean(business.reviewUrl && business.reviewUrl.trim() !== "");
  const hasAddress = Boolean(business.address && business.address.trim() !== "");

  const telHref = hasPhone ? formatTelUrl(business.phone) : "";
  const whatsAppHref = hasWhatsApp ? formatWhatsAppUrl(business.whatsapp) : "";
  const websiteHref = hasWebsite ? formatWebUrl(business.website) : "";

  const initials = getInitials(business.name);

  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between items-center px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* Ambient background glow effects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Center Container for Mobile-First Display */}
      <div className="w-full max-w-md mx-auto relative z-10 flex flex-col items-center">
        {/* NFC Card Shell */}
        <div className="w-full rounded-3xl glass-card p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300">
          
          {/* Top NFC Tag Chip */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-6 tracking-wide">
            <Wifi className="w-3.5 h-3.5 text-blue-400 rotate-90" />
            <span>NFC DIGITAL PROFILE</span>
          </div>

          {/* Business Avatar / Logo */}
          {business.logo ? (
            <div
              className={`relative w-28 h-24 rounded-2xl overflow-hidden ring-2 shadow-xl mb-5 flex items-center justify-center p-2.5 ${
                business.logoBg || "bg-white ring-white/20 shadow-white/5"
              }`}
            >
              <Image
                src={business.logo}
                alt={business.name}
                width={112}
                height={96}
                priority
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-500/25 ring-4 ring-white/10 mb-5 select-none">
              {initials}
            </div>
          )}

          {/* Business Name */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {business.name}
          </h1>

          {/* Business Address */}
          {hasAddress && (
            <div className="mt-3 flex items-start justify-center gap-2 text-slate-400 text-sm leading-relaxed max-w-sm px-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{business.address}</span>
            </div>
          )}

          {/* Subtle separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

          {/* Action Buttons List */}
          <div className="w-full flex flex-col gap-3.5">
            {/* 1. Call Button */}
            {hasPhone && (
              <a
                href={telHref}
                id="btn-call"
                className="w-full min-h-[58px] px-5 py-3.5 rounded-2xl action-btn-primary text-white font-medium flex items-center justify-between group transition duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold tracking-wide">Call</div>
                    <div className="text-xs text-blue-100 opacity-90">{business.phone}</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-blue-100/70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}

            {/* 2. WhatsApp Button */}
            {hasWhatsApp && (
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-whatsapp"
                className="w-full min-h-[58px] px-5 py-3.5 rounded-2xl action-btn-whatsapp text-white font-medium flex items-center justify-between group transition duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold tracking-wide">WhatsApp</div>
                    <div className="text-xs text-emerald-100 opacity-90">Message directly</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-emerald-100/70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}

            {/* 3. Get Directions Button */}
            {hasMaps && (
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-directions"
                className="w-full min-h-[58px] px-5 py-3.5 rounded-2xl action-btn-maps text-white font-medium flex items-center justify-between group transition duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Navigation className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold tracking-wide">Get Directions</div>
                    <div className="text-xs text-sky-100 opacity-90">Open Google Maps</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-sky-100/70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}

            {/* 4. Instagram Button */}
            {hasInstagram && (
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-instagram"
                className="w-full min-h-[58px] px-5 py-3.5 rounded-2xl action-btn-instagram text-white font-medium flex items-center justify-between group transition duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold tracking-wide">Instagram</div>
                    <div className="text-xs text-rose-100 opacity-90">View profile & posts</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-rose-100/70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}

            {/* 5. Website Button */}
            {hasWebsite && (
              <a
                href={websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-website"
                className="w-full min-h-[58px] px-5 py-3.5 rounded-2xl action-btn-website text-white font-medium flex items-center justify-between group transition duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold tracking-wide">Website</div>
                    <div className="text-xs text-indigo-100 opacity-90">Visit official website</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-indigo-100/70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}

            {/* 6. Leave a Review Button */}
            {hasReview && (
              <a
                href={business.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-review"
                className="w-full min-h-[58px] px-5 py-3.5 rounded-2xl action-btn-review text-white font-medium flex items-center justify-between group transition duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold tracking-wide">Leave a Review</div>
                    <div className="text-xs text-amber-100 opacity-90">Rate your experience</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-amber-100/70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>

        {/* Footer Brand Branding */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center gap-1.5 justify-center">
          <Wifi className="w-3.5 h-3.5 text-slate-400 rotate-90" />
          <span>Smart NFC Business Card</span>
        </div>
      </div>
    </main>
  );
}
