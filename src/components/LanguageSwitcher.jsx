import { useMemo } from 'react'
import { SUPPORTED_LANGS } from '../i18n/translations'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher({ city, page, lang }) {
  const langs = useMemo(() => SUPPORTED_LANGS, [])
  return (
    <div className="relative inline-flex items-center gap-2">
      <Globe className="w-4 h-4 text-neutral-meta" />
      <select
        className="bg-transparent text-neutral-meta hover:text-neutral-text transition-colors border border-neutral-border rounded-md px-2 py-1 text-sm"
        value={lang}
        onChange={(e) => {
          const next = e.target.value
          const url = `/${city}/${page}?lang=${next}`
          window.location.assign(url)
        }}
      >
        {langs.map(l => (
          <option key={l.code} value={l.code} className="bg-white text-neutral-text">
            {l.label}
          </option>
        ))}
      </select>
    </div>
  )
}
