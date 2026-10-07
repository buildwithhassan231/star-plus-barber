'use client'

import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import GalleryCard from './GalleryCard'
import { featuredGallery } from './galleryData'
import AnimateIn from '@/components/AnimateIn'

export default function GalleryPreview() {
  const { t } = useTranslation()

  return (
    <section className="section w-full bg-surface text-foreground px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-border">

      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <AnimateIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold mb-2 block">
            {t("Visual Craftsmanship")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            {t("Our Work")}{' '}
            <span className="text-gold-gradient">{t("Gallery_gradient")}</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-4" />
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            {t("A glimpse into our latest haircuts, beard grooming, and luxury salon ambiance.")}
          </p>
        </AnimateIn>

        {/* 6 cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredGallery.map((item, i) => (
            <AnimateIn key={item.id} delay={i * 0.08} variant="fadeUp">
              <GalleryCard item={item} />
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn className="mt-12 md:mt-16 text-center" delay={0.2}>
          <Link
            href="/gallery"
            className="btn-outline inline-flex items-center gap-3 text-sm uppercase tracking-wider rounded-full px-8 py-4 group"
          >
            <span>{t("View Full Gallery")}</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimateIn>

      </div>
    </section>
  )
}
