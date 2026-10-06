'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LangContext = createContext({ lang: 'EN', toggleLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState('EN') // 'EN' | 'AR'

  const toggleLang = () => setLang((l) => (l === 'EN' ? 'AR' : 'EN'))

  /* ── Sync <html lang="…" dir="…"> whenever lang changes ── */
  useEffect(() => {
    const html = document.documentElement
    if (lang === 'AR') {
      html.setAttribute('lang', 'ar')
      html.setAttribute('dir', 'rtl')
    } else {
      html.setAttribute('lang', 'en')
      html.setAttribute('dir', 'ltr')
    }
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

/* Convenience hook */
export const useLang = () => useContext(LangContext)
