import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async (context) => {
  const requestLocale = await context.requestLocale; // Ensure locale is awaited
  const locale = requestLocale && ['en', 'fr'].includes(requestLocale) ? requestLocale : 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});


// hfbvhdsbjhbmbvbdvbmjbvjh