/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /* Similar Google Fonts as alternatives */
        'manuka': ['Pacifico', 'cursive'], // Similar playful script style
        'feature': ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'], // Modern, clean
        'sohne': ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Very similar to Söhne

        /* Original font names for when you have font files */
        /*
        'manuka': ['Manuka', 'Pacifico', 'cursive'],
        'feature': ['Feature', 'Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        'sohne': ['Söhne', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        */
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],

  // Performance optimizations
  corePlugins: {
    // Disable unused features in production
    // container: process.env.NODE_ENV === 'production' ? false : undefined,
    // accessibility: process.env.NODE_ENV === 'production' ? false : undefined,
  },
};
