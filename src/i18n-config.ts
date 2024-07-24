import { LocalePrefix, Pathnames } from 'next-intl/routing';
import { ELocaleCode } from './common/enums';

export const defaultLocale = ELocaleCode.default as const;

export const locales = Object.values(ELocaleCode);

export const pathnames: Pathnames<typeof locales> = {
  '/': '/'
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export type AppPathnames = keyof typeof pathnames;
