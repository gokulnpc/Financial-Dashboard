import React from 'react';
import { TrendingUp, Percent, Wallet2, Scale } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { FundingOverview } from './metrics/FundingOverview';
import { MarketPosition } from './metrics/MarketPosition';
import { OperationalMetrics } from './metrics/OperationalMetrics';
import type { FinancialMetrics } from '../types/financial';
import { formatCurrency, formatPercent } from '../utils/formatters';

interface DashboardProps {
  metrics: FinancialMetrics;
}

export function Dashboard({ metrics }: DashboardProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="LTM Revenue"
          value={formatCurrency(metrics.last_12m_revenue)}
          icon={TrendingUp}
          subtitle={metrics.revenue_growth ? `Growth: ${formatPercent(metrics.revenue_growth)}` : undefined}
        />
        <MetricCard
          title="Gross Margin"
          value={formatPercent(metrics.ltm_gross_margin)}
          icon={Percent}
        />
        <MetricCard
          title="Cash Position"
          value={formatCurrency(metrics.cash)}
          icon={Wallet2}
        />
        <MetricCard
          title="Working Capital"
          value={formatCurrency(metrics.working_capital)}
          icon={Scale}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FundingOverview metrics={metrics} />
        <MarketPosition metrics={metrics} />
      </div>

      <OperationalMetrics metrics={metrics} />
    </div>
  );
}