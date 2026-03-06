import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: "easeInOut" },
  }),
};

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-[#f4b400]" aria-hidden="true">
      <path d="M12 2.5 14.95 8.48l6.6.96-4.78 4.66 1.13 6.57L12 17.57l-5.9 3.1 1.13-6.57L2.45 9.44l6.6-.96L12 2.5Z" />
    </svg>
  );
}

function BrandDot({ label }: { label: string }) {
  return (
    <span className="grid size-7 place-items-center rounded-full border border-slate-200 bg-white text-[10px] font-semibold text-slate-500">
      {label}
    </span>
  );
}

export default function HeroHealthTech() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover [transform:scaleY(-1)] absolute inset-0 -z-20"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white -z-10" />

      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] items-start px-6 pb-16 pt-[290px] md:px-8">
        <div className="flex w-full flex-col gap-8">
          <motion.h1
            custom={0.05}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-[980px] text-[46px] font-medium leading-[0.98] tracking-[-0.04em] text-slate-900 md:text-[80px]"
            style={{ fontFamily: "Geist, Inter, sans-serif" }}
          >
            Simple <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "1.25em", fontWeight: 400 }}>management</span> for your remote team
          </motion.h1>

          <motion.p
            custom={0.16}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-[554px] text-[18px] leading-relaxed text-[#373a46]/80"
            style={{ fontFamily: "Geist, Inter, sans-serif" }}
          >
            Build clarity across distributed operations with one streamlined workspace for communication,
            workflows, and accountability.
          </motion.p>

          <motion.div
            custom={0.28}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="w-full max-w-[760px]"
          >
            <div className="flex w-full flex-col gap-3 rounded-[40px] border border-slate-200/90 bg-[#fcfcfc] p-2 pl-5 shadow-[0px_10px_40px_5px_rgba(194,194,194,0.25)] sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your work email"
                className="h-12 w-full bg-transparent text-[16px] text-slate-800 outline-none placeholder:text-slate-400"
                style={{ fontFamily: "Geist, Inter, sans-serif" }}
              />
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-[28px] bg-gradient-to-b from-[#111111] to-[#070707] px-7 text-[15px] font-medium text-white shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)]"
                style={{ fontFamily: "Geist, Inter, sans-serif" }}
              >
                Create Free Account
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="inline-flex items-center gap-1 rounded-full bg-white/85 px-3 py-2 shadow-sm ring-1 ring-slate-200">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <span className="ml-2 text-[14px] font-medium text-slate-800" style={{ fontFamily: "Geist, Inter, sans-serif" }}>
                  1,020+ Reviews
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BrandDot label="G" />
                <BrandDot label="A" />
                <BrandDot label="S" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
