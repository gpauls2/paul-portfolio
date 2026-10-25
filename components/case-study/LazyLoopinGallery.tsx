"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = { images: string[] };

export default function LazyLoopinGallery({ images }: Props) {
  return (
    <section className="case-section case-content-gallery">
      <span className="case-eyebrow">02 · AI CONTENT SHOWCASE</span>
      <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mt-5 mb-5">
        STORIES BROUGHT <span className="text-slate-400">TO LIFE.</span>
      </h2>
      <p className="case-gallery-intro mb-10">
        Original AI-assisted short-form entertainment, visual storytelling, and video production.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {images.map((src, index) => (
          <motion.figure
            key={src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={src}
                alt={`Lazy Loopin video cover ${index + 1}`}
                fill
                sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <figcaption className="flex items-center justify-between p-4 text-sm text-white/80">
              <span>Video Cover</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <div
        style={{
          marginTop: "120px",
          paddingTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <a href="https://www.tiktok.com/@lazyloopin" target="_blank" rel="noopener noreferrer" className="case-primary">Explore TikTok ↗</a>
        <a href="https://www.youtube.com/@lazyloopin" target="_blank" rel="noopener noreferrer" className="case-secondary">Watch on YouTube ↗</a>
      </div>
    </section>
  );
}
