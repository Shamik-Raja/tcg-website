"use client";

import { motion, useReducedMotion } from "motion/react";

import { CinematicBackground, NoiseOverlay, WordsPullUp } from "./primitives";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero({
  videoSrc,
  posterSrc,
}: {
  videoSrc?: string;
  posterSrc?: string;
}) {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? false : { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay, ease: EASE_OUT_EXPO },
  });

  return (
    <section className="relative h-dvh w-full bg-black p-4 md:p-6">
      <div className="relative flex h-[calc(100dvh-2rem)] w-full flex-col overflow-hidden rounded-2xl bg-black md:h-[calc(100dvh-3rem)] md:rounded-[2rem]">
        {videoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <CinematicBackground variant="hero" />
        )}

        <NoiseOverlay className="opacity-[0.7] mix-blend-overlay" />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
        />

        <div className="relative z-10 mt-auto p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-12 items-end gap-6 md:gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-[24vw] font-medium leading-[0.85] tracking-[-0.07em] text-(--cs-cream) sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[17vw] 2xl:text-[18vw]">
                <WordsPullUp text="Trilogy" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-4 md:gap-6 lg:col-span-4">
              <motion.p
                {...fade(0.5)}
                className="max-w-md text-sm text-(--cs-ink)/70 sm:text-base"
                style={{ lineHeight: 1.3 }}
              >
                We invest in companies driven by quantitative science.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
