import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom'
import { STRINGS, CITY_TITLES, SUPPORTED_LANGS } from './i18n/translations'
import { detectCityByIP, COUNTRY_TO_CITY, DEFAULT_CITY, DEFAULT_LANG, isSupportedLang } from './utils/geo'
import LanguageSwitcher from './components/LanguageSwitcher'
import Hero3D from './components/Hero3D'

const CITIES = ['miami','dubai','palma','amsterdam','italy']
const PAGES = ['home','services','about','contact']

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

function Layout({ city, page, lang }) {
  const brand = STRINGS.brand[lang]
  const t = STRINGS
  const cityTitle = CITY_TITLES[city]?.[lang] || city
  const dir = SUPPORTED_LANGS.find(l => l.code === lang)?.dir || 'ltr'

  return (
    <div className="min-h-screen bg-neutral-cloud text-neutral-text" dir={dir}>
      <header className="sticky top-0 z-10 bg-neutral-base/80 backdrop-blur-md border-b border-neutral-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to={`/${city}`} className="font-heading text-xl text-ravinaro-royal">
            {brand} • {cityTitle}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to={`/${city}`} className="hover:text-ravinaro-royal">{t.nav.home[lang]}</Link>
            <Link to={`/${city}/services`} className="hover:text-ravinaro-royal">{t.nav.services[lang]}</Link>
            <Link to={`/${city}/about`} className="hover:text-ravinaro-royal">{t.nav.about[lang]}</Link>
            <Link to={`/${city}/contact`} className="hover:text-ravinaro-royal">{t.nav.contact[lang]}</Link>
          </nav>
          <LanguageSwitcher city={city} page={page} lang={lang} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {page === 'home' && (
          <Home city={city} lang={lang} />
        )}
        {page === 'services' && (
          <Services city={city} lang={lang} />
        )}
        {page === 'about' && (
          <About city={city} lang={lang} />
        )}
        {page === 'contact' && (
          <Contact city={city} lang={lang} />
        )}
      </main>

      <footer className="border-t border-neutral-border py-8 text-center text-sm text-neutral-meta">
        © {new Date().getFullYear()} {brand}. {t.footer.rights[lang]}
      </footer>
    </div>
  )
}

function Home({ city, lang }) {
  return (
    <div className="space-y-10">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="font-heading text-3xl md:text-5xl text-ravinaro-navy leading-tight">{STRINGS.hero.title[lang]}</h1>
          <p className="text-neutral-meta text-lg">{STRINGS.hero.subtitle[lang]}</p>
          <div className="pt-2">
            <a href={`/${city}/contact?lang=${lang}`} className="inline-flex items-center gap-2 bg-ravinaro-royal text-white px-4 py-2 rounded-md hover:bg-ravinaro-deep transition-colors">{STRINGS.hero.cta[lang]}</a>
          </div>
        </div>
        <Hero3D />
      </section>

      <section>
        <h2 className="font-heading text-2xl text-ravinaro-deep mb-4">{STRINGS.sections.servicesTitle[lang]}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Automation', 'AI Agents', 'Data & Analytics'].map((title, i) => (
            <div key={i} className="bg-white border border-neutral-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-heading text-lg text-neutral-text mb-2">{title}</h3>
              <p className="text-neutral-meta text-sm">End-to-end design and implementation specific to {CITY_TITLES[city]?.[lang] || city}.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Services({ city, lang }) {
  return (
    <div>
      <h1 className="font-heading text-3xl md:text-4xl text-ravinaro-navy mb-6">{STRINGS.nav.services[lang]} — {CITY_TITLES[city]?.[lang]}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="bg-white border border-neutral-border rounded-xl p-6">
            <h3 className="font-heading text-lg mb-2 text-ravinaro-deep">Service {i}</h3>
            <p className="text-neutral-meta text-sm">City-tailored capability with SSG-friendly content and minimal client JS.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function About({ city, lang }) {
  return (
    <div className="prose max-w-none">
      <h1 className="font-heading text-3xl md:text-4xl text-ravinaro-navy mb-4">{STRINGS.sections.aboutTitle[lang]}</h1>
      <p>We build AI systems and experiences for organizations in {CITY_TITLES[city]?.[lang]} and globally. Our approach uses proven frameworks, robust engineering, and design that feels inevitable.</p>
    </div>
  )
}

function Contact({ city, lang }) {
  return (
    <div className="max-w-xl">
      <h1 className="font-heading text-3xl md:text-4xl text-ravinaro-navy mb-4">{STRINGS.sections.contactTitle[lang]}</h1>
      <form className="space-y-4">
        <input className="w-full border border-neutral-border rounded-lg px-3 py-2" placeholder="Name" />
        <input className="w-full border border-neutral-border rounded-lg px-3 py-2" placeholder="Email" />
        <textarea className="w-full border border-neutral-border rounded-lg px-3 py-2" rows="4" placeholder={`Tell us about your project in ${CITY_TITLES[city]?.[lang]}`}></textarea>
        <button type="button" className="bg-ravinaro-royal text-white px-4 py-2 rounded-md hover:bg-ravinaro-deep">Submit</button>
      </form>
    </div>
  )
}

function CityPage() {
  const params = useQuery()
  const langQuery = params.get('lang')
  const lang = isSupportedLang(langQuery) ? langQuery : DEFAULT_LANG
  const { pathname } = useLocation()
  const [page, setPage] = useState('home')
  const [city, setCity] = useState(DEFAULT_CITY)

  useEffect(() => {
    // parse /:city(/:page)
    const parts = pathname.split('/').filter(Boolean)
    const [c, maybePage] = parts
    const validCity = CITIES.includes(c) ? c : DEFAULT_CITY
    setCity(validCity)
    setPage(PAGES.includes(maybePage) ? maybePage : 'home')
  }, [pathname])

  return <Layout city={city} page={page} lang={lang} />
}

function GeoRouter() {
  const params = useQuery()
  const prefLang = isSupportedLang(params.get('lang')) ? params.get('lang') : DEFAULT_LANG
  const [target, setTarget] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    detectCityByIP(controller.signal).then((c) => {
      setTarget(c || DEFAULT_CITY)
    })
    return () => controller.abort()
  }, [])

  if (!target) return (
    <div className="min-h-screen grid place-items-center bg-neutral-cloud">
      <div className="text-center">
        <div className="animate-spin-slow mx-auto mb-4 h-10 w-10 rounded-full border-4 border-ravinaro-electric border-t-transparent"></div>
        <p className="text-neutral-meta">Locating the best city site…</p>
      </div>
    </div>
  )

  return <Navigate to={`/${target}?lang=${prefLang}`} replace />
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeoRouter />} />
        <Route path=":city" element={<CityPage />} />
        <Route path=":city/:page" element={<CityPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return <AppRoutes />
}
