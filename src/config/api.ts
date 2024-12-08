export const API_CONFIG = {
  baseUrl: 'http://localhost:8000',
  endpoints: {
    upload: '/upload',
    generateDashboard: '/generate-dashboard'
  },
  defaultNamespace: 'anthropic'
} as const;