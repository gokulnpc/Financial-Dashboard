import { TrendingUp, Percent, Wallet2, Scale } from 'lucide-react';

export const PRIMARY_METRICS = [
  {
    id: 'revenue',
    title: 'LTM Revenue',
    icon: TrendingUp,
    valueKey: 'last_12m_revenue',
    subtitleKey: 'revenue_growth',
    formatSubtitle: (value: number) => `Growth: ${value.toFixed(1)}%`
  },
  {
    id: 'margin',
    title: 'Gross Margin',
    icon: Percent,
    valueKey: 'ltm_gross_margin'
  },
  {
    id: 'cash',
    title: 'Cash Position',
    icon: Wallet2,
    valueKey: 'cash'
  },
  {
    id: 'working_capital',
    title: 'Working Capital',
    icon: Scale,
    valueKey: 'working_capital'
  }
] as const;