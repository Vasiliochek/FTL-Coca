import { useI18n } from 'vue-i18n'

export function useLocale() {
  const { t, locale } = useI18n()

  function switchLocale() {
    locale.value = locale.value === 'en' ? 'ru' : 'en'
  }

  return { t, locale, switchLocale }
}