import React from "react";
import Image from "next/image";
import { Phone, MapPin, Globe, Star, Wifi } from "lucide-react";
import { Business } from "@/data/businesses";

interface BusinessProfileProps {
  business: Business;
}

function WhatsAppIcon({ className = "w-6 h-6 text-white" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
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

  const telHref = hasPhone ? formatTelUrl(business.phone) : "";
  const whatsAppHref = hasWhatsApp ? formatWhatsAppUrl(business.whatsapp) : "";
  const websiteHref = hasWebsite ? formatWebUrl(business.website) : "";

  const initials = getInitials(business.name);

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-slate-900 flex justify-center py-0 sm:py-8 sm:px-4 selection:bg-amber-100">
      {/* Mobile-proportional Container */}
      <div className="w-full max-w-[420px] bg-white sm:rounded-[36px] sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] sm:border sm:border-slate-100 min-h-screen sm:min-h-0 flex flex-col items-center px-5 py-6">
        
        {/* Top Business Logo */}
        {business.logo ? (
          <div className="w-full flex items-center justify-center pt-2 pb-1">
            <div className="relative w-44 h-20">
              <Image
                src={business.logo}
                alt={business.name}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-white text-2xl font-bold shadow-md my-2">
            {initials}
          </div>
        )}

        {/* Hero Room / Cover Image */}
        {business.coverImage && (
          <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-sm relative mt-3 border border-slate-100">
            <Image
              src={business.coverImage}
              alt={`${business.name} preview`}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Title, Branch, & Location Subtitle */}
        <div className="mt-4 text-center w-full px-2">
          <h1 className="text-xl sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug">
            {business.name}
          </h1>
          {business.branch && (
            <p className="text-base sm:text-[17px] font-semibold text-slate-800 mt-0.5">
              {business.branch}
            </p>
          )}
          <p className="text-xs sm:text-[13px] text-slate-400 font-normal mt-0.5">
            {business.city || business.address}
          </p>
        </div>

        {/* Action Buttons List (Matching the design screenshot) */}
        <div className="mt-5 w-full flex flex-col gap-2.5">
          {/* 1. Call Now */}
          {hasPhone && (
            <a
              href={telHref}
              id="btn-call"
              className="w-full h-[58px] bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 relative group"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20">
                <Phone className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[16px] tracking-tight pr-11">
                Call Now
              </span>
            </a>
          )}

          {/* 2. WhatsApp */}
          {hasWhatsApp && (
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-whatsapp"
              className="w-full h-[58px] bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 relative group"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[16px] tracking-tight pr-11">
                WhatsApp
              </span>
            </a>
          )}

          {/* 3. Get Directions */}
          {hasMaps && (
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-directions"
              className="w-full h-[58px] bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 relative group"
            >
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#EA4335] fill-[#EA4335]" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[16px] tracking-tight pr-11">
                Get Directions
              </span>
            </a>
          )}

          {/* 4. Leave a Review */}
          {hasReview && (
            <a
              href={business.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-review"
              className="w-full h-[58px] bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 relative group"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-[#fbbf24] to-[#f59e0b] flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/20">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[16px] tracking-tight pr-11">
                Leave a Review
              </span>
            </a>
          )}

          {/* 5. Instagram */}
          {hasInstagram && (
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-instagram"
              className="w-full h-[58px] bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 relative group"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shrink-0 shadow-sm">
                <InstagramIcon className="w-5 h-5 text-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[16px] tracking-tight pr-11">
                Instagram
              </span>
            </a>
          )}

          {/* 6. Visit Website */}
          {hasWebsite && (
            <a
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-website"
              className="w-full h-[58px] bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 relative group"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0070f3] to-[#0051cb] flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[16px] tracking-tight pr-11">
                Visit Website
              </span>
            </a>
          )}
        </div>

        {/* Subtle Brand Tagline */}
        <div className="mt-8 pb-2 text-center text-xs text-slate-400 flex items-center gap-1.5 justify-center">
          <Wifi className="w-3.5 h-3.5 text-slate-400 rotate-90" />
          <span>Smart NFC Business Card</span>
        </div>

      </div>
    </main>
  );
}
