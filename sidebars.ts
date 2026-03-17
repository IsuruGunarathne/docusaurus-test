import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    // ── Section 1: Overview ──────────────────────────────────────
    {
      type: 'doc',
      id: 'home',
      label: 'Home',
      className: 'sidebar-icon--home',
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'sidebar-icon--intro',
      link: {type: 'doc', id: 'introduction/index'},
      items: [
        'introduction/what-is-api-platform',
        'introduction/quick-start-guide',
        {
          type: 'category',
          label: 'API Platform Concepts',
          link: {type: 'doc', id: 'api-platform-concepts/index'},
          items: [
            'api-platform-concepts/organizations',
            'api-platform-concepts/environments',
          ],
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-section-divider"></div>',
    },
    // ── Section 2: Main docs ──────────────────────────────────────
    {
      type: 'category',
      label: 'Create API Proxy',
      className: 'sidebar-icon--create',
      link: {type: 'doc', id: 'create-api-proxy/index'},
      items: [
        'create-api-proxy/overview',
        {
          type: 'category',
          label: 'My APIs (Ingress)',
          link: {type: 'doc', id: 'create-api-proxy/my-apis-ingress'},
          items: [
            'create-api-proxy/rest-apis',
            'create-api-proxy/websocket-apis',
            'create-api-proxy/graphql-apis',
          ],
        },
        'create-api-proxy/third-party-apis-egress',
      ],
    },
    {
      type: 'category',
      label: 'Develop API Proxy',
      className: 'sidebar-icon--develop',
      link: {type: 'doc', id: 'develop-api-proxy/index'},
      items: [
        'develop-api-proxy/policies',
        'develop-api-proxy/mediation',
      ],
    },
    {
      type: 'category',
      label: 'Test API Proxy',
      className: 'sidebar-icon--test',
      link: {type: 'doc', id: 'test-api-proxy/index'},
      items: [
        'test-api-proxy/using-console',
        'test-api-proxy/using-postman',
      ],
    },
    {
      type: 'category',
      label: 'MCP Servers',
      className: 'sidebar-icon--mcp',
      link: {type: 'doc', id: 'mcp-servers/index'},
      items: [
        'mcp-servers/overview',
        'mcp-servers/configuration',
      ],
    },
    {
      type: 'category',
      label: 'API Governance',
      className: 'sidebar-icon--governance',
      link: {type: 'doc', id: 'api-governance/index'},
      items: [
        'api-governance/policies',
      ],
    },
    {
      type: 'category',
      label: 'AI Gateway',
      className: 'sidebar-icon--ai',
      link: {type: 'doc', id: 'ai-gateway/index'},
      items: [
        'ai-gateway/llm-providers',
        'ai-gateway/semantic-caching',
      ],
    },
    {
      type: 'category',
      label: 'API Gateway',
      className: 'sidebar-icon--gateway',
      link: {type: 'doc', id: 'api-gateway/index'},
      items: [
        'api-gateway/self-hosted',
        'api-gateway/cloud-gateways',
      ],
    },
    {
      type: 'category',
      label: 'Monitor and Insights',
      className: 'sidebar-icon--monitor',
      link: {type: 'doc', id: 'monitor-and-insights/index'},
      items: [
        'monitor-and-insights/dashboards',
      ],
    },
    {
      type: 'category',
      label: 'Administer',
      className: 'sidebar-icon--admin',
      link: {type: 'doc', id: 'administer/index'},
      items: [
        'administer/user-management',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      className: 'sidebar-icon--workflows',
      link: {type: 'doc', id: 'workflows/index'},
      items: [
        'workflows/approval-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      className: 'sidebar-icon--tutorials',
      link: {type: 'doc', id: 'tutorials/index'},
      items: [
        'tutorials/quick-start-tutorial',
      ],
    },
    {
      type: 'category',
      label: 'API Platform Samples',
      className: 'sidebar-icon--samples',
      link: {type: 'doc', id: 'api-platform-samples/index'},
      items: [
        'api-platform-samples/sample-apis',
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-section-divider"></div>',
    },
    // ── Section 3: Developer Portal ───────────────────────────────
    {
      type: 'category',
      label: 'Developer Portal',
      className: 'sidebar-icon--portal sidebar-section--highlight',
      link: {type: 'doc', id: 'developer-portal/index'},
      items: [
        'developer-portal/api-discovery',
        'developer-portal/subscriptions',
      ],
    },
  ],
};

export default sidebars;
