import React from 'react';
import type { FinancialMetrics } from '../../types/financial';
import { formatCurrency } from '../../utils/formatters';

interface FundingOverviewProps {
  metrics: FinancialMetrics;
}

export function FundingOverview({ metrics }: FundingOverviewProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Funding Overview</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Funding</span>
          <span className="font-medium">{formatCurrency(metrics.total_funding) ?? 'N/A'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Latest Round</span>
          <span className="font-medium">{metrics.latest_round ?? 'N/A'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Key Investors</span>
          <span className="font-medium">{metrics.investors ?? 'N/A'}</span>
        </div>
      </div>
    </div>
  );
}