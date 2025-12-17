import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    // Construct canonical URL (handling HashRouter)
    const canonicalUrl = `${window.location.origin}${window.location.pathname}#${location.pathname}`;
    linkCanonical.setAttribute('href', canonicalUrl);

  }, [title, description, keywords, location]);

  return null;
};
