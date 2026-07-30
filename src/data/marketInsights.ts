export interface MarketInsight {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: 'NIFTY' | 'BANKNIFTY' | 'FINNIFTY' | 'MIDCAP' | 'General';
  sentiment: 'bullish' | 'bearish' | 'neutral';
}

export const MARKET_INSIGHTS: MarketInsight[] = [
  {
    id: 'mi1',
    date: '2026-07-30',
    title: 'NIFTY 50 Technical Outlook',
    summary:
      'NIFTY holds above the 24,300 support zone with positive momentum. Key resistance at 24,500. Bullish bias remains intact as long as 24,200 holds on closing basis.',
    category: 'NIFTY',
    sentiment: 'bullish',
  },
  {
    id: 'mi2',
    date: '2026-07-29',
    title: 'Bank Nifty Weekly Analysis',
    summary:
      'Bank Nifty showing consolidation near 52,000. PSU banks leading the rally while private banks remain mixed. Watch for breakout above 52,300.',
    category: 'BANKNIFTY',
    sentiment: 'neutral',
  },
  {
    id: 'mi3',
    date: '2026-07-28',
    title: 'Midcap Index Momentum',
    summary:
      'Midcap Nifty outperforming large caps with broad-based buying. Key sectors: Capital Goods, Auto Ancillaries, and Chemicals showing strength.',
    category: 'MIDCAP',
    sentiment: 'bullish',
  },
  {
    id: 'mi4',
    date: '2026-07-27',
    title: 'Market Breadth & Volatility',
    summary:
      'India VIX cooling off from recent highs. Advance-decline ratio improving. FII flows turning positive after three weeks of selling.',
    category: 'General',
    sentiment: 'bullish',
  },
];
