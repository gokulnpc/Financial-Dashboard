import React from 'react';
import type { FinancialMetrics } from '../../types/financial';
import { formatCurrency, formatPercent } from '../../utils/formatters';

interface MarketPositionProps {
  metrics: FinancialMetrics;
}

export function MarketPosition({ metrics }: MarketPositionProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Market Position</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Market Share</span>
          <span className="font-medium">{formatPercent(metrics.market_share) ?? 'N/A'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Addressable Market</span>
          <span className="font-medium">{formatCurrency(metrics.tam) ?? 'N/A'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Competitors</span>
          <span className="font-medium">{metrics.competitor_count ?? 'N/A'}</span>
        </div>
      </div>
    </div>
  );
}