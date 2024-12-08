import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  title: string;
  value: string | number | null;
  icon: LucideIcon;
  subtitle?: string;
  className?: string;
  delay?: number;
}

export function MetricCard({ 
  title, 
  value, 
  icon: Icon, 
  subtitle, 
  className = '',
  delay = 0 
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className={`
        bg-white rounded-xl p-6 shadow-sm border border-gray-100
        hover:shadow-md transition-all duration-200
        hover:border-blue-100 ${className}
      `}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-2">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {value ?? 'N/A'}
        </p>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}