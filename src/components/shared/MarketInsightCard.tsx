import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus, Calendar } from 'lucide-react';
import type { MarketInsight } from '@/data/marketInsights';

interface MarketInsightCardProps {
  insight: MarketInsight;
  className?: string;
}

export function MarketInsightCard({ insight, className }: MarketInsightCardProps) {
  const sentimentIcon = {
    bullish: <TrendingUp className="h-4 w-4 text-green-600" />,
    bearish: <TrendingDown className="h-4 w-4 text-red-500" />,
    neutral: <Minus className="h-4 w-4 text-gray-400" />,
  };

  const sentimentBadge = {
    bullish: 'bg-green-50 text-green-700 border-green-200',
    bearish: 'bg-red-50 text-red-700 border-red-200',
    neutral: 'bg-gray-50 text-gray-600 border-gray-200',
  };

  return (
    <article
      className={cn(
        'rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md',
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={cn('inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium', sentimentBadge[insight.sentiment])}>
          {sentimentIcon[insight.sentiment]}
          {insight.sentiment.charAt(0).toUpperCase() + insight.sentiment.slice(1)}
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <Calendar className="h-3 w-3" />
          {insight.date}
        </span>
      </div>
      <h4 className="text-sm font-semibold text-navy-900">{insight.title}</h4>
      <p className="mt-1 text-sm text-gray-600 leading-relaxed line-clamp-3">{insight.summary}</p>
      <span className="mt-3 inline-block rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
        {insight.category}
      </span>
    </article>
  );
}
