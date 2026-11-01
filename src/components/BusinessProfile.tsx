"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MapPin, Star, Wifi, BedDouble, X, Maximize2 } from "lucide-react";
import { Business, Room } from "@/data/businesses";

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

export function formatWhatsAppUrl(whatsapp: string, customText?: string): string {
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
  const textQuery = customText ? `?text=${encodeURIComponent(customText)}` : "";
  return `https://wa.me/${cleanNumber}${textQuery}`;
}

export function formatTelUrl(phone: string): string {
  if (!phone || !phone.trim()) return "";
  const cleanPhone = phone.trim().replace(/[^\d+]/g, "");
  return `tel:${cleanPhone}`;
}

function getInitials(name: string): string {
  if (!name) return "BC";
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function BusinessProfile({ business }: BusinessProfileProps) {
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<Room | null>(null);

  const hasPhone = Boolean(business.phone && business.phone.trim() !== "");
  const hasWhatsApp = Boolean(business.whatsapp && business.whatsapp.trim() !== "");
  const hasMaps = Boolean(business.mapsUrl && business.mapsUrl.trim() !== "");
  const hasInstagram = Boolean(business.instagram && business.instagram.trim() !== "");
  const hasReview = Boolean(business.reviewUrl && business.reviewUrl.trim() !== "");
  const hasRooms = Boolean(business.rooms && business.rooms.length > 0);

  const telHref = hasPhone ? formatTelUrl(business.phone) : "";
  const whatsAppHref = hasWhatsApp ? formatWhatsAppUrl(business.whatsapp) : "";

  const initials = getInitials(business.name);

  // Lock body scroll when rooms drawer or photo preview is active
  useEffect(() => {
    if (isRoomsOpen || activePhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isRoomsOpen, activePhoto]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activePhoto) {
          setActivePhoto(null);
        } else if (isRoomsOpen) {
          setIsRoomsOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, isRoomsOpen]);

  return (
    <main className="min-h-[100dvh] bg-[#f8fafc] sm:bg-[#f1f5f9] text-slate-900 flex justify-center py-0 sm:py-8 sm:px-4 selection:bg-amber-100">
      {/* Mobile-proportional Container */}
      <div className="w-full max-w-[420px] bg-white sm:rounded-[36px] sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] sm:border sm:border-slate-200/80 min-h-[100dvh] sm:min-h-0 flex flex-col items-center px-4 sm:px-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        
        {/* Top Business Logo */}
        {business.logo ? (
          <div className="w-full flex items-center justify-center pt-1 pb-1">
            <div className="relative w-36 h-16 sm:w-44 sm:h-20">
              <Image
                src={business.logo}
                alt={business.name}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 150px, 180px"
              />
            </div>
          </div>
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-md my-2">
            {initials}
          </div>
        )}

        {/* Hero Room / Cover Image */}
        {business.coverImage && (
          <div className="w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm relative mt-2 sm:mt-3 border border-slate-100 bg-slate-50">
            <Image
              src={business.coverImage}
              alt={`${business.name} preview`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 420px"
            />
          </div>
        )}

        {/* Title, Branch, & Location Subtitle */}
        <div className="mt-3.5 sm:mt-4 text-center w-full px-2">
          <h1 className="text-xl sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug">
            {business.name}
          </h1>
          {business.branch && (
            <p className="text-base sm:text-[17px] font-semibold text-slate-800 mt-0.5">
              {business.branch}
            </p>
          )}
          <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5 max-w-[90%] mx-auto line-clamp-2">
            {business.city || business.address}
          </p>
        </div>

        {/* Action Buttons List */}
        <div className="mt-4 sm:mt-5 w-full flex flex-col gap-2.5">
          {/* 1. Call Now */}
          {hasPhone && (
            <a
              href={telHref}
              id="btn-call"
              className="w-full h-[52px] sm:h-[58px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 touch-manipulation group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[15px] sm:text-[16px] tracking-tight">
                Call Now
              </span>
              <div className="w-10 sm:w-11 shrink-0" aria-hidden="true" />
            </a>
          )}

          {/* 2. WhatsApp */}
          {hasWhatsApp && (
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-whatsapp"
              className="w-full h-[52px] sm:h-[58px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 touch-manipulation group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20">
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[15px] sm:text-[16px] tracking-tight">
                WhatsApp
              </span>
              <div className="w-10 sm:w-11 shrink-0" aria-hidden="true" />
            </a>
          )}

          {/* 3. Explore Rooms (Prominent for hotels with rooms) */}
          {hasRooms && (
            <button
              type="button"
              onClick={() => setIsRoomsOpen(true)}
              id="btn-explore-rooms"
              className="w-full h-[52px] sm:h-[58px] bg-white rounded-2xl border border-indigo-200/90 shadow-[0_2px_12px_rgba(99,102,241,0.10)] hover:shadow-md hover:border-indigo-400 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 touch-manipulation group cursor-pointer text-left"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/25">
                <BedDouble className="w-5 h-5 text-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[15px] sm:text-[16px] tracking-tight pl-2">
                Explore Rooms
              </span>
              <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100/80 shrink-0">
                {business.rooms?.length} Rooms
              </span>
            </button>
          )}

          {/* 4. Get Directions */}
          {hasMaps && (
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-directions"
              className="w-full h-[52px] sm:h-[58px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 touch-manipulation group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA4335] fill-[#EA4335]" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[15px] sm:text-[16px] tracking-tight">
                Get Directions
              </span>
              <div className="w-10 sm:w-11 shrink-0" aria-hidden="true" />
            </a>
          )}

          {/* 5. Leave a Review */}
          {hasReview && (
            <a
              href={business.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-review"
              className="w-full h-[52px] sm:h-[58px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 touch-manipulation group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#fbbf24] to-[#f59e0b] flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/20">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[15px] sm:text-[16px] tracking-tight">
                Leave a Review
              </span>
              <div className="w-10 sm:w-11 shrink-0" aria-hidden="true" />
            </a>
          )}

          {/* 6. Instagram */}
          {hasInstagram && (
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-instagram"
              className="w-full h-[52px] sm:h-[58px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-150 flex items-center px-2.5 touch-manipulation group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shrink-0 shadow-sm">
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="flex-1 text-center font-semibold text-slate-800 text-[15px] sm:text-[16px] tracking-tight">
                Instagram
              </span>
              <div className="w-10 sm:w-11 shrink-0" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Subtle Brand Tagline */}
        <div className="mt-8 pb-2 text-center flex items-center justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
          >
            <Wifi className="w-3.5 h-3.5 rotate-90 text-slate-400" />
            <span>Powered by <span className="font-semibold text-slate-600">Acuriqs</span></span>
          </a>
        </div>

      </div>

      {/* Explore Rooms Bottom Sheet / Modal */}
      {hasRooms && isRoomsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="explore-rooms-title"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-end sm:items-center p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setIsRoomsOpen(false)}
        >
          <div
            className="w-full max-w-[480px] max-h-[90vh] bg-white rounded-t-[28px] sm:rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grabber bar for mobile */}
            <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mt-2.5 sm:hidden" />

            {/* Header */}
            <div className="px-5 pt-3.5 pb-3 border-b border-slate-100 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <BedDouble className="w-4 h-4" />
                  </div>
                  <h2 id="explore-rooms-title" className="text-lg font-bold text-slate-900 tracking-tight">
                    Explore Rooms
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-0.5 pl-9">
                  {business.name} • {business.branch || business.city}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsRoomsOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close rooms modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Rooms List */}
            <div className="overflow-y-auto px-4 py-4 space-y-4">
              {business.rooms?.map((room, idx) => {
                const roomInquiryText = `Hi ${business.name}, I would like to inquire about booking the ${room.name}.`;
                const roomWhatsAppUrl = formatWhatsAppUrl(business.whatsapp, roomInquiryText);

                return (
                  <div
                    key={room.id}
                    className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50 hover:border-slate-300 transition-all shadow-sm"
                  >
                    {/* Room Image with click-to-preview */}
                    <div
                      className="relative w-full aspect-[16/10] bg-slate-200 cursor-pointer group"
                      onClick={() => setActivePhoto(room)}
                    >
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 480px"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                        {idx + 1} of {business.rooms?.length}
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white p-1.5 rounded-xl opacity-80 group-hover:opacity-100 transition shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Room Info & Booking CTA */}
                    <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
                      <div>
                        <h3 className="font-bold text-slate-900 text-base tracking-tight">
                          {room.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Spacious • AC • Clean Linens • Premium Stay
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        {hasPhone && (
                          <a
                            href={telHref}
                            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 transition"
                            title={`Call to inquire about ${room.name}`}
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        )}

                        {hasWhatsApp && (
                          <a
                            href={roomWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-500/20 transition"
                          >
                            <WhatsAppIcon className="w-4 h-4 text-white" />
                            <span>Inquire / Book</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Footer Action */}
            <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span>Need special assistance?</span>
              {hasPhone && (
                <a
                  href={telHref}
                  className="font-semibold text-indigo-600 hover:underline inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  Call Front Desk
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Photo Lightbox */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-3 animate-in fade-in duration-150"
          onClick={() => setActivePhoto(null)}
        >
          {/* Top Bar */}
          <div className="w-full max-w-2xl flex items-center justify-between text-white pb-3 px-2">
            <div>
              <h4 className="font-bold text-base">{activePhoto.name}</h4>
              <p className="text-xs text-slate-400">{business.name}</p>
            </div>
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center cursor-pointer transition"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full Image */}
          <div
            className="relative w-full max-w-2xl aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.image}
              alt={activePhoto.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          {/* Action Bar below lightbox */}
          <div
            className="mt-4 flex items-center gap-3 w-full max-w-2xl px-2 justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {hasWhatsApp && (
              <a
                href={formatWhatsAppUrl(
                  business.whatsapp,
                  `Hi ${business.name}, I am viewing the ${activePhoto.name} on your card and would like to check availability.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Book this Room via WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
