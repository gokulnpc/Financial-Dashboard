// export const API_CONFIG = {
//   baseUrl: 'http://localhost:8000',
//   endpoints: {
//     upload: '/upload',
//     generateDashboard: '/generate-dashboard'
//   },
//   defaultNamespace: 'anthropic'
// } as const;

export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || "http://localhost:8000",
  endpoints: {
    upload: "/upload",
    generateDashboard: "/generate-dashboard",
  },
  defaultNamespace: "anthropic",
  headers: {
    Accept: "application/json",
  },
} as const;

// Helper to build full API URLs
export const buildApiUrl = (
  endpoint: keyof typeof API_CONFIG.endpoints
): string => {
  const url = new URL(API_CONFIG.endpoints[endpoint], API_CONFIG.baseUrl);
  return url.toString();
};
