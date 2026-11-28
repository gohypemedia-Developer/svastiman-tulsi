"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryItem = {
  title: string;
  subtitle: string;
  hue?: number;
  image?: string;
  price?: string | number;
  badge?: string;
  id?: string;
  onAcquire?: () => void;
};

const defaults: GalleryItem[] = [
  { title: "Dawn", subtitle: "Warm light, long shadows", hue: 40 },
  { title: "Tide", subtitle: "Slow blues and greens", hue: 200 },
  { title: "Ember", subtitle: "Low glow, high contrast", hue: 20 },
  { title: "Moss", subtitle: "Soft, quiet, organic", hue: 140 },
  { title: "Dusk", subtitle: "Rose into charcoal", hue: 350 },
  { title: "Sand", subtitle: "Dry, bright, minimal", hue: 85 },
];

export function PerspectiveGallery({
  title = "Your work, front and centre.",
  description = "Move the pointer across the strip, or use the arrow keys.",
  items = defaults,
  className,
}: {
  title?: string;
  description?: string;
  items?: GalleryItem[];
  className?: string;
}) {
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const stage = useRef<HTMLDivElement>(null);
  const pos = useRef(active);
  const target = useRef(active);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const lastScroll = useRef(0);

  useEffect(() => {
    target.current = active;
  }, [active]);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const loop = () => {
      pos.current += (target.current - pos.current) * (reduce ? 1 : 0.1);
      const w = Math.min(280, (stage.current?.clientWidth ?? 800) * 0.46);
      cards.current.forEach((el, i) => {
        if (!el) return;
        const d = i - pos.current;
        const a = Math.min(Math.abs(d), 3);
        el.style.transform = `translate3d(${d * w * 0.74}px,0,${-a * 110}px) rotateY(${
          Math.max(-1, Math.min(1, -d)) * Math.min(a, 1.4) * 38
        }deg) scale(${1 - a * 0.04})`;
        el.style.opacity = String(1 - Math.min(a / 3.4, 0.85));
        el.style.zIndex = String(100 - Math.round(a * 10));
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [items.length]);

  const clamp = (n: number) => Math.max(0, Math.min(items.length - 1, n));

  return (
    <section
      aria-roledescription="carousel"
      aria-label={title}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") setActive((a) => clamp(a + 1));
        if (e.key === "ArrowLeft") setActive((a) => clamp(a - 1));
      }}
      className={cn(
        "relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-background px-4 sm:px-6 py-16 sm:py-20 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset select-none",
        className
      )}
    >
      <h2
        className="max-w-2xl text-balance text-center text-3xl font-semibold leading-tight tracking-tight sm:text-5xl text-[#122E46]"
        style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h2>
      <p className="mt-3 text-center text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
        {description}
      </p>

      {/* 3D Perspective Stage with pointer scrubbing & cursor scroll support */}
      <div
        ref={stage}
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse") return;
          const r = e.currentTarget.getBoundingClientRect();
          setActive(clamp(Math.round(((e.clientX - r.left) / r.width) * (items.length - 1))));
        }}
        onWheel={(e) => {
          const now = Date.now();
          if (now - lastScroll.current < 280) return;
          const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
          if (Math.abs(delta) > 15) {
            if (delta > 0) setActive((a) => clamp(a + 1));
            else setActive((a) => clamp(a - 1));
            lastScroll.current = now;
          }
        }}
        className="relative mt-10 sm:mt-12 h-[340px] sm:h-96 w-full max-w-5xl [perspective:1400px] [transform-style:preserve-3d] cursor-ew-resize"
      >
        {items.map((it, i) => (
          <div
            key={it.title}
            ref={(el) => {
              cards.current[i] = el;
            }}
            className="absolute left-1/2 top-0 h-full w-[min(16rem,54vw)] -ml-[min(8rem,27vw)] will-change-transform"
          >
            <button
              type="button"
              aria-label={`${it.title}, ${it.subtitle}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              className="group relative block size-full overflow-hidden rounded-3xl border border-stone-200/60 text-left shadow-2xl shadow-black/20 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer bg-[#F5F2EB]"
              style={{
                background: it.image
                  ? undefined
                  : `radial-gradient(120% 90% at 25% 15%, oklch(0.88 0.13 ${it.hue ?? 40}), transparent 55%), radial-gradient(100% 80% at 85% 90%, oklch(0.55 0.17 ${(it.hue ?? 40) + 40}), transparent 60%), oklch(0.28 0.05 ${(it.hue ?? 40) + 20})`,
              }}
            >
              {/* Product Background Image if supplied */}
              {it.image && (
                <div className="absolute inset-0 z-0 bg-[#F9F8F5]">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="(max-width: 768px) 240px, 280px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle directional vignette for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />
                </div>
              )}

              {/* Optional Top Badge */}
              {it.badge && (
                <span className="absolute top-3.5 left-3.5 z-10 text-[9px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 bg-black/60 text-white/95 backdrop-blur-xs rounded-full border border-white/20">
                  {it.badge}
                </span>
              )}

              {/* Texture overlays */}
              <span
                aria-hidden="true"
                className="absolute inset-0 opacity-20 mix-blend-overlay [background-image:repeating-linear-gradient(115deg,transparent_0_14px,rgba(255,255,255,.35)_14px_15px)] pointer-events-none"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none"
              />

              {/* Bottom Card Content */}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 pt-12 text-white z-10 pointer-events-none">
                {it.price && (
                  <span className="block text-xs font-mono font-semibold tracking-wider text-[#E8CFA6] mb-1">
                    {typeof it.price === "number"
                      ? `₹${it.price.toLocaleString("en-IN")}.00 INR`
                      : it.price}
                  </span>
                )}
                <span className="block text-base sm:text-lg font-semibold tracking-tight leading-snug">
                  {it.title}
                </span>
                <span className="block text-[11px] sm:text-xs text-white/80 line-clamp-1 mt-0.5">
                  {it.subtitle}
                </span>
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 sm:mt-10 flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => setActive((a) => clamp(a - 1))}
          disabled={active === 0}
          className="grid size-10 place-items-center rounded-full border border-[#D5CEBF] bg-white text-[#122E46] outline-none transition-[background-color,transform,opacity] hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-ring active:scale-90 disabled:opacity-30 cursor-pointer shadow-2xs"
        >
          <ChevronLeft className="size-4" />
        </button>
        <p className="w-16 text-center text-xs sm:text-sm font-mono tabular-nums text-stone-600" aria-live="polite">
          {active + 1} / {items.length}
        </p>
        <button
          type="button"
          aria-label="Next"
          onClick={() => setActive((a) => clamp(a + 1))}
          disabled={active === items.length - 1}
          className="grid size-10 place-items-center rounded-full border border-[#D5CEBF] bg-white text-[#122E46] outline-none transition-[background-color,transform,opacity] hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-ring active:scale-90 disabled:opacity-30 cursor-pointer shadow-2xs"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </section>
  );
}
