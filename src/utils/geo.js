// Geo utilities: country → city mapping and language helpers

export const COUNTRY_TO_CITY = {
  AE: 'dubai', // UAE
  US: 'miami',
  ES: 'palma',
  NL: 'amsterdam',
  IT: 'italy',
}

export const DEFAULT_CITY = 'miami'
export const DEFAULT_LANG = 'en'

export async function detectCityByIP(signal) {
  try {
    const res = await fetch('https://ipapi.co/json/', { signal })
    if (!res.ok) throw new Error('ipapi failed')
    const data = await res.json()
    const cc = (data && (data.country_code || data.country))?.toUpperCase()
    return COUNTRY_TO_CITY[cc] || DEFAULT_CITY
  } catch {
    try {
      const res = await fetch('https://ipinfo.io/json?token=2b6a2dcb9b2b1a', { signal })
      if (!res.ok) throw new Error('ipinfo failed')
      const data = await res.json()
      const cc = (data && data.country)?.toUpperCase()
      return COUNTRY_TO_CITY[cc] || DEFAULT_CITY
    } catch {
      return DEFAULT_CITY
    }
  }
}

export function isSupportedLang(code) {
  return ['en','es','de','ru','zh','ar','fr'].includes(code)
}
