// Simple i18n dictionary for Ravinaro marketing website
// Each key maps to translations for supported languages

export const SUPPORTED_LANGS = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'fr', label: 'Français' },
]

export const STRINGS = {
  brand: {
    en: 'Ravinaro', es: 'Ravinaro', de: 'Ravinaro', ru: 'Ravinaro', zh: 'Ravinaro', ar: 'رافينارو', fr: 'Ravinaro'
  },
  nav: {
    home: { en: 'Home', es: 'Inicio', de: 'Start', ru: 'Главная', zh: '首页', ar: 'الرئيسية', fr: 'Accueil' },
    services: { en: 'Services', es: 'Servicios', de: 'Leistungen', ru: 'Услуги', zh: '服务', ar: 'الخدمات', fr: 'Services' },
    about: { en: 'About us', es: 'Sobre nosotros', de: 'Über uns', ru: 'О нас', zh: '关于我们', ar: 'من نحن', fr: 'À propos' },
    contact: { en: 'Contact', es: 'Contacto', de: 'Kontakt', ru: 'Контакты', zh: '联系', ar: 'اتصل بنا', fr: 'Contact' },
  },
  hero: {
    title: {
      en: 'AI that moves your business forward',
      es: 'IA que impulsa tu negocio',
      de: 'KI, die Ihr Unternehmen voranbringt',
      ru: 'Искусственный интеллект для роста бизнеса',
      zh: '推动业务前行的人工智能',
      ar: 'ذكاء اصطناعي يدفع عملك إلى الأمام',
      fr: "L'IA qui fait avancer votre entreprise",
    },
    subtitle: {
      en: 'Strategy, systems, and standout experiences — tailored for your city.',
      es: 'Estrategia, sistemas y experiencias excepcionales — adaptadas a tu ciudad.',
      de: 'Strategie, Systeme und Erlebnisse – maßgeschneidert für Ihre Stadt.',
      ru: 'Стратегия, системы и впечатляющие продукты — под ваш город.',
      zh: '战略、系统和卓越体验——为您的城市量身定制。',
      ar: 'استراتيجية وأنظمة وتجارب مميزة — مصممة لمدينتك.',
      fr: 'Stratégie, systèmes et expériences remarquables — adaptés à votre ville.',
    },
    cta: {
      en: 'Book a discovery call', es: 'Reserva una llamada', de: 'Gespräch buchen', ru: 'Записаться на звонок', zh: '预约咨询', ar: 'احجز مكالمة تعريفية', fr: 'Réserver un appel'
    }
  },
  sections: {
    servicesTitle: { en: 'Core services', es: 'Servicios clave', de: 'Kernleistungen', ru: 'Ключевые услуги', zh: '核心服务', ar: 'الخدمات الأساسية', fr: 'Services clés' },
    aboutTitle: { en: 'About Ravinaro', es: 'Sobre Ravinaro', de: 'Über Ravinaro', ru: 'О Ravinaro', zh: '关于 Ravinaro', ar: 'عن رافينارو', fr: 'À propos de Ravinaro' },
    contactTitle: { en: 'Let’s talk', es: 'Hablemos', de: 'Sprechen wir', ru: 'Поговорим', zh: '聊一聊', ar: 'دعنا نتحدث', fr: 'Discutons' },
  },
  footer: {
    rights: {
      en: 'All rights reserved.', es: 'Todos los derechos reservados.', de: 'Alle Rechte vorbehalten.', ru: 'Все права защищены.', zh: '版权所有。', ar: 'جميع الحقوق محفوظة.', fr: 'Tous droits réservés.'
    }
  }
}

export const CITY_TITLES = {
  miami: {
    en: 'Miami', es: 'Miami', de: 'Miami', ru: 'Майами', zh: '迈阿密', ar: 'ميامي', fr: 'Miami'
  },
  dubai: {
    en: 'Dubai', es: 'Dubái', de: 'Dubai', ru: 'Дубай', zh: '迪拜', ar: 'دبي', fr: 'Dubaï'
  },
  palma: {
    en: 'Palma', es: 'Palma', de: 'Palma', ru: 'Пальма', zh: '帕尔马', ar: 'بالما', fr: 'Palma'
  },
  amsterdam: {
    en: 'Amsterdam', es: 'Ámsterdam', de: 'Amsterdam', ru: 'Амстердам', zh: '阿姆斯特丹', ar: 'أمستردام', fr: 'Amsterdam'
  },
  italy: {
    en: 'Italy', es: 'Italia', de: 'Italien', ru: 'Италия', zh: '意大利', ar: 'إيطاليا', fr: 'Italie'
  },
}
