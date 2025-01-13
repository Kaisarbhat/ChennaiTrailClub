'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const routePatterns = {
  static: [
    '/',
    '/aboutus',
    '/privacypolicy',
    '/refundandcancellation',
    '/termsofservice',
    '/events/pastevents',
    '/events/upcomingevents',
  ],
  dynamic: {
    events: {
      pattern: '/events/:eventId',
      getUrls: async () => {
        const events = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/events/allEvents`
        ).then((res) => res.json());
        return events.map((event) => `/events/${event.id}`);
      },
    },
    registration: {
      pattern: '/events/register/:eventId',
      getUrls: async () => {
        const events = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/events/upcomingevents`
        ).then((res) => res.json());
        return events.map((event) => `/events/register/${event.id}`);
      },
    },
  },
};

export function GlobalSpeculationRules({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const setupSpeculation = async () => {
      const urlsToPreload = [...routePatterns.static];

      // Add dynamic URLs
      for (const key of Object.keys(routePatterns.dynamic)) {
        try {
          const urls = await routePatterns.dynamic[key].getUrls();
          urlsToPreload.push(...urls);
        } catch (error) {
          console.error(`Error fetching URLs for ${key}:`, error);
        }
      }

      // Filter out the current page
      const filteredUrls = urlsToPreload.filter((url) => url !== pathname);

      // Create speculation rules
      const script = document.createElement('script');
      script.type = 'speculationrules';
      script.text = JSON.stringify({
        prerender: [
          {
            source: 'list',
            urls: filteredUrls,
            eagerness: 'eager',
          },
        ],
      });
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    setupSpeculation();
  }, [pathname]);

  return children;
}

export default GlobalSpeculationRules;
