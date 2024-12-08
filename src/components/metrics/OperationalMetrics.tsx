import React from 'react';
import type { FinancialMetrics } from '../../types/financial';
import { formatCurrency } from '../../utils/formatters';

interface OperationalMetricsProps {
  metrics: FinancialMetrics;
}

export function OperationalMetrics({ metrics }: OperationalMetricsProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Operational Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Customer Acquisition Cost</h3>
          <p className="text-xl font-semibold">
            {formatCurrency(metrics.customer_acquisition_cost) ?? 'N/A'}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Customer Lifetime Value</h3>
          <p className="text-xl font-semibold">
            {formatCurrency(metrics.lifetime_value) ?? 'N/A'}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Quick Ratio</h3>
          <p className="text-xl font-semibold">{metrics.quick_ratio ?? 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}