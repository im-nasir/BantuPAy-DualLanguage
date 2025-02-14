import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

// Define supported locales
export const routing = defineRouting({
  locales: ['en', 'fr'], // Add your supported languages
  defaultLocale: 'en'    // Default language
});

// Export navigation APIs considering locale routing
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
