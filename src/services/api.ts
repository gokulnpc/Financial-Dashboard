import { API_CONFIG } from '../config/api';
import type { FinancialMetrics } from '../types/financial';

interface DashboardResponse {
  metrics: FinancialMetrics;
  insights: string[];
}

export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: unknown
  ) {
    super(message);
    this.name = 'APIError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new APIError(
      error.detail || 'An error occurred',
      response.status,
      error
    );
  }
  return response.json();
}

export const uploadDocuments = async (files: FileList): Promise<void> => {
  const formData = new FormData();
  Array.from(files).forEach(file => {
    formData.append('files', file);
  });

  const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.upload}`, {
    method: 'POST',
    body: formData,
    headers: {
      'namespace': API_CONFIG.defaultNamespace
    }
  });

  return handleResponse(response);
};

export const generateDashboard = async (): Promise<DashboardResponse> => {
  const response = await fetch(
    `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.generateDashboard}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'namespace': API_CONFIG.defaultNamespace
      },
      body: JSON.stringify({
        topics: [
          "Financial Metrics",
          "Performance Indicators",
          "Growth Metrics"
        ]
      })
    }
  );

  return handleResponse(response);
};