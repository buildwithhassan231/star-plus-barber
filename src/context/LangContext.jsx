'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import i18n from '@/lib/i18n'

const LangContext = createContext({ lang: 'EN', toggleLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState('EN') // 'EN' | 'AR'

  /* ── Restore saved language after mount (avoids SSR hydration mismatch) ── */
  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'AR') {
      applyLang('AR')
      setLang('AR')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ── Apply language: i18n + <html> attributes + localStorage ── */
  function applyLang(next) {
    const locale = next === 'AR' ? 'ar' : 'en'
    i18n.changeLanguage(locale)
    const html = document.documentElement
    html.setAttribute('lang', locale)
    html.setAttribute('dir', next === 'AR' ? 'rtl' : 'ltr')
    localStorage.setItem('lang', next)
  }

  const toggleLang = () => {
    const next = lang === 'EN' ? 'AR' : 'EN'
    applyLang(next)
    setLang(next)
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
