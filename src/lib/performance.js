// Performance utilities
export const measurePageLoad = () => {
  if (typeof window !== 'undefined') {
    return new Promise((resolve) => {
      if ('performance' in window) {
        // Measure First Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FCP:', entry.startTime, 'ms');
          });
        }).observe({ type: 'paint', buffered: true });

        // Measure Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('LCP:', entry.startTime, 'ms');
          });
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Wait for page load completion
        window.addEventListener('load', () => {
          setTimeout(() => {
            resolve({
              domContentLoaded: performance.getEntriesByType('navigation')[0]?.domContentLoadedEventEnd,
              loadComplete: performance.getEntriesByType('navigation')[0]?.loadEventEnd,
              totalResources: performance.getEntriesByType('resource').length
            });
          }, 0);
        });
      }
    });
  }
};

// Removed dynamic lazy loading helper to avoid Next.js build issues
// Use React.lazy with static imports instead
// Example: const Component = React.lazy(() => import('@/components/Component'));

// Intersection Observer for performance
export const useIntersectionObserver = (callback, options = {}) => {
  if (typeof window !== 'undefined') {
    return new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });
  }
  return null;
};

// Debounced scroll handler for better performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default {
  measurePageLoad,
  useIntersectionObserver,
  debounce
};