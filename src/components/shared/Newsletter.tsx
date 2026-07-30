'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, ArrowRight, Check } from 'lucide-react';

interface NewsletterProps {
  className?: string;
  dark?: boolean;
}

export function Newsletter({ className, dark = false }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className={cn(className)}>
      <h4 className={cn('text-sm font-semibold', dark ? 'text-white' : 'text-navy-900')}>
        Stay Updated
      </h4>
      <p className={cn('mt-1 text-sm', dark ? 'text-gray-400' : 'text-gray-500')}>
        Get weekly market insights and course updates.
      </p>
      {submitted ? (
        <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
          <Check className="h-4 w-4" />
          Thanks for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={cn(
                'w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 transition-all',
                dark
                  ? 'bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400'
                  : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500'
              )}
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
