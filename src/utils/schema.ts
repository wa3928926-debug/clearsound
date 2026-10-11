const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://clearsound.app";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateWebApplicationSchema(toolName: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": toolName,
    "url": `${SITE_URL.replace(/\/$/, '')}${path}`,
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any (iOS, Android, Windows, macOS, Linux)",
    "description": description,
    "browserRequirements": "Requires Web Audio API support (HTML5 AudioContext)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
}

export function generateHowToSchema(title: string, description: string, steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "step": steps.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": step.name,
      "text": step.text
    }))
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": b.name,
      "item": b.url.startsWith('http') ? b.url : `${SITE_URL.replace(/\/$/, '')}${b.url}`
    }))
  };
}
