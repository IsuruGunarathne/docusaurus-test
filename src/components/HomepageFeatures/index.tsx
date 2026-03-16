import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: string;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'API Proxy Development',
    to: '/docs/create-api-proxy',
    icon: (
      <svg className="feature-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    description: 'Design, document, and test API proxies for REST, GraphQL, and WebSocket.',
  },
  {
    title: 'API Security',
    to: '/docs/develop-api-proxy',
    icon: (
      <svg className="feature-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    description: 'Authenticate access via Asgardeo, API Platform STS, and Azure AD.',
  },
  {
    title: 'Developer Portal',
    to: '/docs/developer-portal',
    icon: (
      <svg className="feature-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    description: 'API discovery hub for developers to subscribe, manage credentials, and consume APIs.',
  },
  {
    title: 'Self-Hosted Gateways',
    to: '/docs/api-gateway',
    icon: (
      <svg className="feature-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    description: 'Deploy gateways in your environment with unified control plane management.',
  },
  {
    title: 'AI Gateway',
    to: '/docs/ai-gateway',
    icon: (
      <svg className="feature-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M22 2L12 12"/>
        <path d="M16 2h6v6"/>
      </svg>
    ),
    description: 'Connect LLM providers with managed proxies featuring rate limiting and semantic caching.',
  },
  {
    title: 'API Governance',
    to: '/docs/api-platform-concepts',
    icon: (
      <svg className="feature-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    description: 'Define and enforce policies for security, compliance, and performance standards.',
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section style={{padding: '3rem 0'}}>
      <div className="container">
        <div className="card-grid">
          {FeatureList.map(({title, icon, description, to}) => (
            <Link key={title} to={to} className="feature-card">
              {icon}
              <h3 className="feature-card__title">{title}</h3>
              <p className="feature-card__description">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
