/**
 * Canonical origin for the site. Every absolute URL (metadata, sitemap,
 * robots, OG image, JSON-LD) derives from this so they cannot drift apart.
 * Point this at the custom domain once one is attached.
 */
export const SITE_URL = 'https://preet-raval.vercel.app';

/** Same value without the scheme, for display. */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '');
