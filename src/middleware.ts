import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales, pathnames } from './i18n-config';

import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    defaultLocale,
    locales,
    localePrefix,
    pathnames
  });

  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  // matcher: ['/', `/(${Object.values(ELocaleCode).join('|')})/:path*`, '/((?!_next|_vercel|.*\\..*).*)'],
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
