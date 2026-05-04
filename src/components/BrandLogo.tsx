import logoImg from "@/assets/mcsteeze-logo.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "navbar" | "footer" | "hero";
  /** Crest only — use in hero under the main headline to avoid repeating the wordmark */
  markOnly?: boolean;
  className?: string;
};

const sizes = {
  navbar: { frame: "h-11 w-11 sm:h-12 sm:w-12", word: "text-lg sm:text-xl", sub: "text-[0.55rem] sm:text-[0.6rem]" },
  footer: { frame: "h-16 w-16 sm:h-20 sm:w-20", word: "text-3xl sm:text-4xl", sub: "text-[0.65rem] sm:text-xs" },
  hero: { frame: "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28", word: "text-2xl sm:text-3xl", sub: "text-[0.6rem] sm:text-[0.7rem]" },
};

/** Crest frame + wordmark — pairs the venue photo with an ornate gold treatment */
export function BrandLogo({ variant = "navbar", markOnly = false, className }: BrandLogoProps) {
  const s = sizes[variant];
  const stacked = (variant === "footer" || variant === "hero") && !markOnly;

  return (
    <div
      className={cn(
        "group flex items-center gap-3 sm:gap-4",
        stacked && "flex-col items-center text-center",
        className
      )}
    >
      <div className="relative shrink-0">
        {/* Outer glow */}
        <div
          className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-gold/50 via-amber-200/20 to-gold-deep/40 opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-90"
          aria-hidden
        />
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-gold/35 bg-gradient-to-b from-white/[0.08] to-transparent shadow-[0_0_40px_-8px_hsl(42_78%_55%/_0.45)]",
            "ring-1 ring-inset ring-white/10",
            s.frame
          )}
          style={{ clipPath: "polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)" }}
        >
          <img
            src={logoImg}
            alt=""
            role="presentation"
            className="h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-black/50 via-transparent to-white/10" />
        </div>
      </div>

      {markOnly ? null : (
      <div className="min-w-0">
        {variant === "footer" ? (
          <>
            <p
              className={cn(
                "font-display font-bold tracking-[0.28em] text-gradient-gold leading-tight",
                "group-hover:tracking-[0.34em] transition-all duration-500",
                s.word
              )}
            >
              MCSTEEZE
            </p>
            <p className={cn("mt-2 font-elegant font-medium uppercase tracking-[0.5em] text-gold/70", s.sub)}>
              Lounge &amp; Pub
            </p>
            <p className="mt-2 font-elegant text-sm text-white/45 tracking-[0.14em]">
              Kasoa · Opposite KAAF University
            </p>
          </>
        ) : (
          <>
            <p
              className={cn(
                "font-elegant font-medium uppercase tracking-[0.55em] text-gold/75",
                s.sub,
                variant === "navbar" && "hidden sm:block"
              )}
            >
              Lounge &amp; Pub
            </p>
            <p
              className={cn(
                "font-display font-bold tracking-[0.22em] text-gradient-gold leading-tight",
                "group-hover:tracking-[0.28em] transition-all duration-500",
                s.word
              )}
            >
              MCSTEEZE
            </p>
            {variant === "hero" && (
              <p className="mt-1 font-elegant text-xs sm:text-sm text-white/50 tracking-[0.35em] uppercase">
                Est. excellence
              </p>
            )}
          </>
        )}
      </div>
      )}
    </div>
  );
}

export default BrandLogo;
