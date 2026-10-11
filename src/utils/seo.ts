export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogType?: string;
  ogImage?: string;
}

const DEFAULT_TITLE = "ClearSound – Browser Speaker Cleaner & Audio Test Utilities";
const DEFAULT_DESCRIPTION = "Free browser-based speaker cleaning sound tool. Safely eject water droplets and dust from iPhone, Samsung, Pixel, and laptop speakers using Web Audio frequencies.";
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://clearsound.app";

export function formatTitle(title?: string): string {
  if (!title) return DEFAULT_TITLE;
  if (title.includes("ClearSound")) return title;
  return `${title} | ClearSound`;
}

export function formatCanonical(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const withTrailingSlash = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
  return `${SITE_URL.replace(/\/$/, '')}${withTrailingSlash}`;
}

export function getSeoMetadata(props: SEOProps = {}, pathname: string = "/") {
  const title = formatTitle(props.title);
  const description = props.description || DEFAULT_DESCRIPTION;
  const canonical = props.canonical || formatCanonical(pathname);
  const ogImage = props.ogImage || `${SITE_URL.replace(/\/$/, '')}/favicon.svg`;

  return {
    title,
    description,
    canonical,
    noindex: !!props.noindex,
    ogType: props.ogType || 'website',
    ogImage,
    siteName: 'ClearSound'
  };
}
