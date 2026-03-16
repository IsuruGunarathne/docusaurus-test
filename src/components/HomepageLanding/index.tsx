import {useEffect} from 'react';
import Link from '@docusaurus/Link';
import type {ReactNode} from 'react';

interface CardItem {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

const cards: CardItem[] = [
  {
    title: 'Create API Proxy',
    description: 'Create and deploy REST, GraphQL, and WebSocket API proxies from OpenAPI specs or scratch.',
    href: '/docs/create-api-proxy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Develop API Proxy',
    description: 'Add policies, transformations, and mediation logic to your API proxies.',
    href: '/docs/develop-api-proxy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: 'Test API Proxy',
    description: 'Test your APIs using the built-in console or integrate with Postman.',
    href: '/docs/test-api-proxy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
  },
  {
    title: 'AI Gateway',
    description: 'Manage and govern LLM provider APIs with semantic caching and rate limiting.',
    href: '/docs/ai-gateway',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 6v6l4 2"/>
        <circle cx="18" cy="6" r="3"/>
      </svg>
    ),
  },
  {
    title: 'API Governance',
    description: 'Define and enforce API standards, policies, and compliance across your organization.',
    href: '/docs/api-governance',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Developer Portal',
    description: 'Enable self-service API discovery, subscriptions, and key management for app developers.',
    href: '/docs/developer-portal',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function HomepageLanding(): ReactNode {
  useEffect(() => {
    document.documentElement.classList.add('homepage-active');
    return () => {
      document.documentElement.classList.remove('homepage-active');
    };
  }, []);

  return (
    <div className="homepage-landing">
      <h1 className="homepage-title">API Platform Documentation</h1>

      <form className="home-search-form" action="/search" method="get">
        <div className="home-search-inner">
          <svg className="home-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="search"
            name="q"
            className="home-search-input"
            placeholder="Search documentation..."
            aria-label="Search documentation"
          />
          <button type="submit" className="home-search-btn">Search</button>
        </div>
      </form>

      <p className="homepage-description">
        WSO2 API Platform is a complete platform for designing, developing, deploying, and governing APIs.
        Build powerful integrations, enforce API policies, and deliver great developer experiences.
      </p>

      <div className="home-callout">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff7300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink: 0}}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
        <div>
          <strong>New to API Platform?</strong>{' '}
          <Link to="/docs/introduction/quick-start-guide">Follow our Quick Start Guide</Link> to create and deploy your first API proxy in minutes.
        </div>
      </div>

      <h2 className="homepage-section-title">Design and Manage APIs</h2>
      <p className="homepage-section-subtitle">
        Everything you need to build, deploy, and manage APIs at scale.
      </p>

      <div className="card-grid card-grid--2col">
        {cards.map((card) => (
          <Link key={card.href} to={card.href} className="feature-card">
            <span className="feature-card__icon">{card.icon}</span>
            <strong className="feature-card__title">{card.title}</strong>
            <p className="feature-card__description">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
